import React from "react";

interface BioCardProps {
  name: string;
  email: string;
  github: string;
  linkedin: string;
  location: string;
}

const BioCard: React.FC<BioCardProps> = ({ name, email, github, linkedin, location }) => {
  return (
    <div className="p-5 border border-[#27272a] rounded-lg mb-5 text-white font-sans">
      <div className="flex flex-col gap-2">
        <div className="flex flex-row w-full justify-between gap-4">
          <h1 className="text-4xl m-0 font-bold">{name}</h1>
          <div className="flex gap-2 justify-end">
            <a href={`mailto:${email}`} target="_blank" aria-label="Email" className="border border-[#27272a] rounded-lg p-2 hover:bg-buttonhover">
              <div className="w-[20px] h-[20px]">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#fff">
                  <path d="M64 112c-8.8.0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1.0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16h384c8.8.0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64h384c35.3.0 64 28.7 64 64v256c0 35.3-28.7 64-64 64H64c-35.3.0-64-28.7-64-64V128z" />
                </svg>
              </div>
            </a>
            <a href={github} target="_blank" aria-label="GitHub profile" className="border border-[#27272a] rounded-lg p-2 hover:bg-buttonhover">
              <div className="w-[20px] h-[20px]">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6.0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6.0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3.0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1.0-6.2-.3-40.4-.3-61.4.0.0-70 15-84.7-29.8.0.0-11.4-29.1-27.8-36.6.0.0-22.9-15.7 1.6-15.4.0.0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5.0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9.0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4.0 33.7-.3 75.4-.3 83.6.0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6.0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9.0-6.2-1.4-2.3-4-3.3-5.6-2z" fill="#fff"></path></svg>
              </div>
            </a>
            <a href={linkedin} target="_blank" aria-label="Instagram profile" className=" border border-[#27272a] rounded-lg p-2 hover:bg-buttonhover">
              <div className="w-[20px] h-[20px]">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" viewBox="0 0 16 16">
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
              </svg>
              </div>
            </a>
          </div>
        </div>
        <h1 className="text-2xl m-0 font-medium">Full-Stack Web Developer | Software Engineer</h1>
        <div className="flex justify-start items-center text-gray-400">
          <div className="h-[20px] w-[20px] custom">
            <svg viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M6 3.5C6 2.67157 6.67157 2 7.5 2S9 2.67157 9 3.5 8.32843 5 7.5 5C6.67157 5 6 4.32843 6 3.5zM8 5.94999C9.14112 5.71836 10 4.70948 10 3.5 10 2.11929 8.88071 1 7.5 1 6.11929 1 5 2.11929 5 3.5c0 1.20948.85888 2.21836 2 2.44999V13.5c0 .2761.22386.5.5.5s.5-.2239.5-.5V5.94999z"
                fill="currentcolor"
              />
            </svg>
          </div>
          <span>{location}</span>
        </div>
      </div>
      <div className="mb-0 mt-4">
      I'm a 23 year old Full-Stack Web Developer and Software Engineer. I graduated from the University of California, Santa Cruz with a B.S in Computer Engineering. I have been programming for 5+ years. I create professional websites and software solutions.
      </div>
    </div>
  );
};

export default BioCard;
