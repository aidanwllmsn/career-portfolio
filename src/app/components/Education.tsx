const Education = () => {
  return (
    <div className="my-12">
      <ol className="relative mt-8 border-s border-gray-200">
        <li className="mb-10 ms-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white"></div>
          <h2 className="text-2xl font-bold text-primary">
            University of California, Santa Cruz
          </h2>
          <h3 className="text-lg font-semibold text-white">
            B.S. in Computer Engineering
          </h3>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400">
            October 2020 - December 2024
          </time>
          <p className="mb-4 text-base font-normal text-gray-400"></p>
        </li>
      </ol>
    </div>
  );
};

export default Education;
