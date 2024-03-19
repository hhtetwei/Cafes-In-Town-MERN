import { Pagination, Rating, TextField } from '@mui/material';
import HeaderTabs from '../components/HeaderTabs';
import { useGetAllCafes, useGetCafesDetailsById } from '../services/cafe';
import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';
import { Overall } from '../constants/constants';
import { useRouter } from 'next/router';
import { usePathname } from 'next/navigation';
// import download from '../../public/download.jpeg';
const pageSize = 5;

const AllCafes = () => {
  const [currentPage, setCurrentPage] = useState(1);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [searchTerm, setSearchTerm] = useState('');

  const indexOfLastItem = currentPage * pageSize;
  const indexOfFirstItem = indexOfLastItem - pageSize;
  const filteredData = Overall?.filter((item) =>
    item.name?.toLowerCase().includes(searchTerm.toLowerCase())
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
    <div className="w-full h-full ">
      <div>
        <HeaderTabs />
        <div className="flex justify-end m-10">
          <TextField
            label="Search Cafes"
            value={searchTerm}
            onChange={handleSearchChange}
            variant="outlined"
            className="mb-4 w-[30%]"
          />
        </div>
      </div>

      <div>
        {currentItems.map((i, index) => {
          return (
            <div className="w-full flex mt-10 mb-10" key={index}>
              <div className="w-1/2 flex justify-center">
                <Image
                  src={i.image}
                  alt=""
                  width={700}
                  height={700}
                  className="flex justify-center mt-10 rounded-xl transition-transform duration-300 transform hover:scale-110"
                />
              </div>

              <div className="w-1/2 justify-center flex flex-col text-black">
                <div className="text-5xl 2xl:text-3xl 2xl:mt-5">{i.name}</div>
                <div className="mt-5 text-3xl 2xl:text-xl">{i.title}</div>
                <div className="flex">
                  <div className="mt-5 text-3xl 2xl:text-xl">Branches: </div>
                  <div>
                    {i.branches && (
                      <div className="mt-5 text-3xl mx-5 2xl:text-xl">
                        {Object.values(i.branches).map((branch, idx) => (
                          <div key={idx}>{branch}</div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
                <div className="flex mt-5">
                  <div className="text-3xl 2xl:text-xl">Rating: </div>
                  <div className="mt-1 mx-2">
                    <Rating
                      name="read-only"
                      value={i.value}
                      precision={0.5}
                      readOnly
                    />
                  </div>
                </div>
                <div className="flex">
                  <div className="text-3xl mt-5 2xl:text-xl">Dress Code:</div>
                  <div className="text-3xl mx-3 mt-5 2xl:text-xl">
                    {i.dress_code}
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        <div className="flex justify-end mb-5 m-5">
          <Pagination
            count={Math.ceil(filteredData?.length / pageSize)}
            page={currentPage}
            onChange={handlePageChange}
            variant="outlined"
            shape="rounded"
            className="mt-4"
          />
        </div>
      </div>

      {/* {cafes && //will use this later for image gallery
        cafes?.data?.map((item) => (
          <div key={item.id} className="grid grid-cols-3 gap-4">
            {item?.images?.map((image, index) => (
              <div>
                <Image
                  src={image.url}
                  alt=""
                  key={index}
                  width={100}
                  height={100}
                />
              </div>
            ))}
          </div>
        ))}
    </div>
  );
}; */}
    </div>
  );
};
export default AllCafes;
