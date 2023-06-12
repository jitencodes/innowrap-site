import React, { useRef, useState } from 'react';

const SwipeableButtonList = ({ buttons }) => {
  const containerRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [active, setActive] = useState(0);

  const handleScrollRight = () => {
    if (containerRef.current) {
      const containerWidth = containerRef.current.offsetWidth;
      const maxScrollPosition = containerRef.current.scrollWidth - containerWidth;
      const newPosition = scrollPosition + containerWidth / 8;
      const shouldResetPosition = newPosition >= maxScrollPosition || scrollPosition === maxScrollPosition;
  
      if (shouldResetPosition) {
        setScrollPosition(0);
        containerRef.current.scrollTo({
          left: 0,
          behavior: 'smooth',
        });
      } else {
        setScrollPosition(newPosition);
        containerRef.current.scrollTo({
          left: newPosition,
          behavior: 'smooth',
        });
      }
    }
  };
  
  

  const hadleClick =(index)=>{
    setActive(index)
  }

  return (
    <div className="flex relative">
      <div className="flex w-full overflow-x-scroll custom-scrollbar" ref={containerRef} >
        {buttons?.map((button, index) => (
          <button key={index} onClick={()=>{hadleClick(index)}} className={`${index==active? 'bg-[#EAF0FF] px-4 md:px-7':'px-2 md:px-4'} rounded-r-100 py-2 whitespace-nowrap text-black font-semibold text-xs md:text-xl`}>
            {button}
          </button>
        ))}
      </div>
        <button className="absolute right-0 scroll-button whitespace-nowrap bg-gradient-transparent rounded-r-100 py-2 h-full pr-3 pl-16" onClick={handleScrollRight}>
          <div className='rounded-full w-5 h-5 grid items-center bg-[#000] text-white text-xs'>🡢</div>
        </button>
    </div>
    
  );
};

export default SwipeableButtonList;
