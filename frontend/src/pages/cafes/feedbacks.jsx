import { Card, Pagination, TextField } from '@mui/material';
import { useGetAllFeedbacks } from '../../services/cafe';
import FeedbackTabs from '../../components/FeedbackTabs';
import { useState } from 'react';

const pageSize = 5;
const Feedbacks = () => {
  const { data: feedbacks, count, isLoading } = useGetAllFeedbacks();
  const [currentPage, setCurrentPage] = useState(1);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [searchTerm, setSearchTerm] = useState('');

  const indexOfLastItem = currentPage * pageSize;
  const indexOfFirstItem = indexOfLastItem - pageSize;
  const filteredData = feedbacks?.data?.filter((item) =>
    item.for?.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const currentItems = filteredData?.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (event, page) => {
    setCurrentPage(page);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1); // Reset current page when search term changes
  };

  return (
    <div>
      <div className="flex flex-col">
        <div className="text-textClr flex justify-center mt-5 text-3xl">
          Feedbacks
        </div>
        <div className="text-textClr flex justify-center mt-5 text-3xl">
          View other customers thought
        </div>
      </div>
      <div className="mt-5">
        <FeedbackTabs />
      </div>

      <div className="flex justify-center m-10">
        <input
          placeholder="Search By Cafe Name"
          className="mb-4 w-[30%] text-textClr border border-tabsColor p-5 rounded-lg"
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>

      <div className="flex justify-center w-full">
       
        <Card className="w-[50%] flex flex-wrap justify-center shadow-lg rounded-xl border border-cardBorder mb-10">
          {isLoading && <div className='mt-5 text-xl'>Loading....</div>}
          {currentItems
            ? currentItems?.map((feedback, index) => {
                console.log(currentItems);
                return (
                  <Card
                    key={index}
                    className="text-textClr w-[60%] flex flex-col justify-center m-2 mt-5 mb-5 rounded-xl  bg-cardBorder shadow-md transition-transform duration-300 transform hover:scale-110"
                  >
                    <div className="p-5 text-xl flex flex-col">
                      <div className="w-full">{feedback.for}</div>
                      <div className="w-full mt-5"> - {feedback.feedback}</div>
                    </div>
                  </Card>
                );
              })
            : ''}

          <div className="flex justify-center w-full mb-5 m-5">
            <Pagination
              count={Math.ceil(filteredData?.length / pageSize)}
              page={currentPage}
              onChange={handlePageChange}
              variant="outlined"
              shape="rounded"
              className="mt-4"
            />
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Feedbacks;
