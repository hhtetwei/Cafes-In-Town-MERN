import Link from 'next/link';

const FeedbackTabs = () => {
  return (
    <div className="w-[80%] h-full flex mt-5 mx-5 gap-5">
      <div className="bg-tabsColor shadow-2xl shadow-tabsColor text-white h-20 rounded-xl w-[20%]">
        <Link href="/cafes/feedbacks">
          <div className="">
            <span className="flex justify-center mt-5 text-xl h-20 font-bold">
              Feedbacks
            </span>
          </div>
        </Link>
      </div>
      <div className="bg-tabsColor shadow-2xl shadow-tabsColor text-white h-20 rounded-xl w-[20%]">
        <Link href="/cafes/all-cafes">
          <div className="">
            <span className="flex justify-center mt-5 text-xl h-20 font-bold">
              Cafes
            </span>
          </div>
        </Link>
      </div>
      <div className="bg-tabsColor shadow-2xl shadow-tabsColor text-white h-20 rounded-xl w-[20%]">
        <Link href="/cafes/feedback">
          <div className="">
            <span className="flex justify-center mt-5 text-xl h-20 font-bold">
              Give Feedbacks
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default FeedbackTabs;
