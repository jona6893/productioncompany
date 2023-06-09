import React from 'react'

function Awards({ film }) {
  return (
    <div>
      <h3 className="text-center text-2xl">AWARDS</h3>
      {film.awards.map((award, i) => {
        return <p key={i + 6}>{award.award}</p>;
      })}
    </div>
  );
}

export default Awards