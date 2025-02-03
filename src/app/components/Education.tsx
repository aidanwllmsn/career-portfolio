import Image from "next/image";

const Education = () => {
  return (
    <div className="p-5 border border-[#27272a] rounded-lg my-8 flex items-start space-x-4">
      <Image src="/schoolicon.jpg" alt="UCSC Logo" width={80} height={80} />
      <div>
        <h2 className="text-2xl font-bold text-white">
          University of California, Santa Cruz
        </h2>
        <h3 className="text-lg font-semibold text-gray-300">
          Bachelor of Science in Computer Engineering
        </h3>
        <time className="mb-1 text-sm font-normal leading-none text-gray-400">
          October 2020 - December 2024
        </time>
      </div>
    </div>
  );
};

export default Education;
