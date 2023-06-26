import Image from 'next/image';
import React, { useState } from 'react'
import Lightbox from "react-spring-lightbox";

function ImageGallery({film}) {
    const [currentImageIndex, setCurrentIndex] = useState(0);
    const [open, setOpen] = useState(false);
    
    const images = []; 
  film.setPhotos?.forEach((e) => {
    let newimage = {
      src: e.url,
      loading: "lazy",
      alt: "Set Photo"
    }

    images.push(newimage);
  });
    

        const gotoPrevious = () =>
          currentImageIndex > 0 && setCurrentIndex(currentImageIndex - 1);

        const gotoNext = () =>
          currentImageIndex + 1 < images.length &&
          setCurrentIndex(currentImageIndex + 1);

const CustomRightArrowButton = () => {
  return (
    <svg
      onClick={() => gotoNext()}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="w-10 h-10 stroke-white mr-4 z-[100] cursor-pointer"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8.25 4.5l7.5 7.5-7.5 7.5"
      />
    </svg>
  );
};
const CustomLeftArrowButton =() => {
    return (
      <svg
        onClick={() => gotoPrevious()}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-10 h-10 stroke-white ml-4 z-[100] cursor-pointer"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 19.5L8.25 12l7.5-7.5"
        />
      </svg>
    );
}

function handleClose(){
    setOpen(false)
}

  return (
    <div>
      <div className="grid grid-cols-3 gap-4  min-w-[24rem] h-full relative mx-auto p-4">
        {film.setPhotos.map((photo, index) => (
          <Image
            onClick={() => {
              setCurrentIndex(index);
              setOpen(true);
            }}
            src={photo?.url}
            width={photo?.width}
            height={photo?.width}
            className="object-cover aspect-square hover:scale-[1.05] duration-300 cursor-pointer"
          />
        ))}
      </div>
      <Lightbox
        isOpen={open}
        onPrev={gotoPrevious}
        onNext={gotoNext}
        images={images}
        currentIndex={currentImageIndex}
        /* Add your own UI */
        // renderHeader={() => (<CustomHeader />)}
        // renderFooter={() => (<CustomFooter />)}
        renderPrevButton={() => <CustomLeftArrowButton />}
        renderNextButton={() => <CustomRightArrowButton />}
        // renderImageOverlay={() => (<ImageOverlayComponent >)}

        /* Add styling */
        // className="cool-class"
        style={{ background: "rgba(0, 0, 0, 0.250)" }}
        /* Handle closing */
        onClose={handleClose}

        /* Use single or double click to zoom */
        // singleClickToZoom

        /* react-spring config for open/close animation */
        // pageTransitionConfig={{
        //   from: { transform: "scale(0.75)", opacity: 0 },
        //   enter: { transform: "scale(1)", opacity: 1 },
        //   leave: { transform: "scale(0.75)", opacity: 0 },
        //   config: { mass: 1, tension: 320, friction: 32 }
        // }}
      />
    </div>
  );
}

export default ImageGallery