import { useRef, useState, useEffect, ReactNode } from "react";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { MdOutlineArrowForwardIos } from "react-icons/md";

const VerticalScrollWrapper = ({ children }: { children: ReactNode }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        setCanScrollLeft(scrollLeft > 0);
        setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 1);
      }
    };

    handleScroll(); // Check scroll position on mount
    scrollRef.current?.addEventListener("scroll", handleScroll);
    return () => scrollRef.current?.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <div className="relative rounded-2xl p-2">
      {canScrollLeft && (
        <div
          className="absolute left-0 top-0 bottom-0 h-full flex items-center justify-center"
          style={{ width: "120px" }} // Wider shadow container
        >
          <div className="absolute inset-0 bg-gradient-to-r from-gray-200 to-transparent rounded-2xl" />
          <button
            onClick={scrollLeft}
            className="relative z-10 text-white flex items-center justify-center"
            style={{ width: "40px", height: "40px" }}
          >
            <MdOutlineArrowBackIosNew className="text-4xl text-black/30" />
          </button>
        </div>
      )}
      <div
        ref={scrollRef}
        className="overflow-x-scroll whitespace-nowrap scrollbar-hide relative"
        style={{ WebkitOverflowScrolling: "touch" }}
      >
        {children}
      </div>
      {canScrollRight && (
        <div
          className="absolute right-0 top-0 bottom-0 h-full flex items-center justify-center"
          style={{ width: "120px" }} // Wider shadow container
        >
          <div className="absolute inset-0 bg-gradient-to-l from-gray-200 to-transparent rounded-2xl" />
          <button
            onClick={scrollRight}
            className="relative z-10 text-white flex items-center justify-center"
            style={{ width: "40px", height: "40px" }}
          >
            <MdOutlineArrowForwardIos className="text-4xl text-black/30" />
          </button>
        </div>
      )}
    </div>
  );
};

export default VerticalScrollWrapper;
