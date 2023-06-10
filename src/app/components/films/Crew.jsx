import React, { useEffect, useRef, useState } from 'react'

function Crew({ film, parent }) {
  const [crewMember, setCrewMember] = useState(film.crewMembers);
  const [crewExpand, setcrewExpand] = useState(false);
  const [crewIndex, setcrewIndex] = useState(1);
  
  
    
 
  return (
    <div className="grid justify-items-center p-8">
      <div className="relative">
        <h3 className="text-center relative font-sans font-bold text-2xl mb-4 ">
          CREW
        </h3>
        <button
          className="absolute top-[10%] left-[150%] border-2 border-white rounded-full md:hidden"
          onClick={() => {
            setcrewIndex(() => {if(crewIndex === 1){ return 1000} else if (crewIndex === 1000) {
              return 1;
            }})
            setcrewExpand(() => !crewExpand)}}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className={`w-6 h-6 duration-300 ${crewExpand && "rotate-45"}`}
          >
            <path
              strokeLineCap="round"
              strokeLineJoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
        </button>
      </div>
      <div
        ref={parent}
        className="grid crewGrid w-full max-md:hidden gap-4 justify-end"
      >
        {crewMember?.map((member, i) => {
          return (
            <div
              key={i + 5}
              className=" rounded-md mx-w-96 p-4 text-center roundeduppercase uppercase"
            >
              <p className="text-neutral-300 text-sm">{member.function}:</p>
              <p className="font-bold ">{member.name}</p>
            </div>
          );
        })}
      </div>

      <div
        ref={parent}
        className={` grid md:hidden  duration-300 ${
          !crewExpand && "fade"
        }  w-full gap-4 justify-center`}
      >
        {crewMember?.map((member, i) => {
          if (i <= crewIndex)
            return (
              <div
                key={i + 5}
                className={` rounded-md mx-w-96 p-4 text-center roundeduppercase uppercase`}
              >
                <p className="text-neutral-300 text-sm">{member.function}:</p>
                <p className="font-bold ">{member.name}</p>
              </div>
            );
        })}
      </div>
    </div>
  );
}

export default Crew



/* ${i > crewIndex && "hidden"} */