import React from 'react'

function Crew({film}) {
  return (
    <div className="grid justify-items-center p-8">
      <h3 className="text-center font-sans font-bold text-2xl mb-4 ">CREW</h3>
      <div className="grid crewGrid gap-4 justify-end max-w-[1000px]">
        {film.crewMembers.map((member, i) => {
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
    </div>
  );
}

export default Crew