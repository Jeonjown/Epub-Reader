import type { Dispatch, SetStateAction } from "react";
import { FaBookBookmark } from "react-icons/fa6";

interface BookmarkListIconProps {
  setLocation: Dispatch<SetStateAction<string | number>>;
}

const BookmarkListIcon = ({ setLocation }: BookmarkListIconProps) => {
  const handleClick = () => {
    const bookmark = localStorage.getItem("bookmark-location");
    if (bookmark) {
      setLocation(bookmark);
    } else {
      alert("There is no saved bookmark");
    }
  };

  return (
    <div className="group relative flex">
      <FaBookBookmark
        size={22}
        className="cursor-pointer opacity-20 transition-transform hover:scale-110 hover:opacity-100"
        onClick={handleClick}
      />
      <span className="absolute top-full left-1/2 mt-1 hidden -translate-x-1/2 rounded bg-black px-2 py-1 text-xs text-white group-hover:block">
        Go to last bookmark
      </span>
    </div>
  );
};

export default BookmarkListIcon;
