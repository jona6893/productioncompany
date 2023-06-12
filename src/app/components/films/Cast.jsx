import React, { useEffect, useRef, useState } from 'react'

function Cast({ film, parent }) {
  const [castMember, setCastMember] = useState(film.castMembers);
  const [castExpand, setCastExpand] = useState(false);
  const [castIndex, setCastIndex] = useState(1);
  
  
    
 
  return (
    <div className="grid justify-items-center p-8">
      <div className="relative">
        <h3 className="text-center relative font-sans font-bold text-2xl mb-4 ">
          CAST
        </h3>
        <button
          className="absolute top-[10%] left-[150%] border-2 border-white rounded-full md:hidden"
          onClick={() => {
            setcastIndex(() => {if(castIndex === 1){ return 1000} else if (castIndex === 1000) {
              return 1;
            }})
            setcastExpand(() => !castExpand)}}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className={`w-6 h-6 duration-300 ${castExpand && "rotate-45"}`}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
        </button>
      </div>
      <div
        ref={parent}
        className="grid crewGrid w-full max-md:hidden gap-4 justify-end"
      >
        {castMember?.map((member, i) => {
          return (
            <div
              key={i + 5}
              className=" rounded-md mx-w-96 p-4 text-center roundeduppercase uppercase"
            >
              <p className="text-neutral-300 text-sm">{member.castRole}:</p>
              <p className="font-bold ">{member.castName}</p>
            </div>
          );
        })}
      </div>

      <div
        ref={parent}
        className={` grid md:hidden  duration-300 ${
          !castExpand && "fade"
        }  w-full gap-4 justify-center`}
      >
        {castMember?.map((member, i) => {
          if (i <= castIndex)
            return (
              <div
                key={i + 5}
                className={` rounded-md mx-w-96 p-4 text-center roundeduppercase uppercase`}
              >
                <p className="text-neutral-300 text-sm">{member.castRole}:</p>
                <p className="font-bold ">{member.castName}</p>
              </div>
            );
        })}
      </div>
    </div>
  );
}

export default Cast



/* ${i > castIndex && "hidden"} */