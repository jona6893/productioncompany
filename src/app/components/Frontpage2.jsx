import React from 'react'

function Frontpage2() {
  return (
    <>
      <article>
        <div className="h-[200px] relative group hover:h-[500px] w-full bg-blue-300 duration-300 overflow-hidden ">
          <div className="absolute inset-0 bg-red-400/25 group-hover:opacity-0 duration-300 flex flex-col items-center justify-center">
            <h2 className="text-4xl">HYBENHJERTE</h2>
            <h3>SUCK MY DICK: 2023</h3>
          </div>
          <video
            playsinline
            webkit-playsinline={true}
            muted={true}
            loop={true}
            autoPlay={true}
            poster="/images/pic11.webp"
            className={`block w-full h-full object-cover`}
          >
            <source
              src={"https://meritfilm.dk/Playground/videos/hybenVideo.mp4"}
              type="video/mp4"
            />
          </video>
        </div>
      </article>
      <article>
        <div className="h-[200px] relative group hover:h-[500px] w-full bg-blue-300 duration-300 overflow-hidden ">
          <div className="absolute inset-0 bg-yellow-400/25 group-hover:opacity-0 duration-300 flex flex-col items-center justify-center">
            <h2 className="text-4xl">HOLD KÆFT</h2>
            <h3>SUCK MY DICK: 2023</h3>
          </div>
          <video
            playsinline
            webkit-playsinline={true}
            muted={true}
            loop={true}
            autoPlay={true}
            poster="/images/pic11.webp"
            className={`block w-full h-full object-cover`}
          >
            <source
              src={"https://meritfilm.dk/Playground/videos/webvideo5s.mp4"}
              type="video/mp4"
            />
          </video>
        </div>
      </article>
      <article>
        <div className="h-[200px] relative group hover:h-[500px] w-full bg-blue-300 duration-300 overflow-hidden ">
          <div className="absolute inset-0 bg-red-400/25 group-hover:opacity-0 duration-300 flex flex-col items-center justify-center">
            <h2 className="text-4xl">HYBENHJERTE</h2>
            <h3>SUCK MY DICK: 2023</h3>
          </div>
          <video
            playsinline
            webkit-playsinline={true}
            muted={true}
            loop={true}
            autoPlay={true}
            poster="/images/pic11.webp"
            className={`block w-full h-full object-cover`}
          >
            <source
              src={"https://meritfilm.dk/Playground/videos/hybenVideo.mp4"}
              type="video/mp4"
            />
          </video>
        </div>
      </article>
      <article>
        <div className="h-[200px] relative group hover:h-[500px] w-full bg-blue-300 duration-300 overflow-hidden ">
          <div className="absolute inset-0 bg-yellow-400/25 group-hover:opacity-0 duration-300 flex flex-col items-center justify-center">
            <h2 className="text-4xl">HOLD KÆFT</h2>
            <h3>SUCK MY DICK: 2023</h3>
          </div>
          <video
            playsinline
            webkit-playsinline={true}
            muted={true}
            loop={true}
            autoPlay={true}
            poster="/images/pic11.webp"
            className={`block w-full h-full object-cover`}
          >
            <source
              src={"https://meritfilm.dk/Playground/videos/webvideo5s.mp4"}
              type="video/mp4"
            />
          </video>
        </div>
      </article>
    </>
  );
}

export default Frontpage2