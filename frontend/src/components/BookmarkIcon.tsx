import { FaBookmark } from "react-icons/fa6";
import useBookmark from "../hooks/useBookmark";

interface BookmarkIconProps {
  location: string | number;
}

const BookmarkIcon = ({ location }: BookmarkIconProps) => {
  const { handleBookmark, bookmarkLocation } = useBookmark();

  const isActive =
    bookmarkLocation != null && bookmarkLocation === String(location);

  return (
    <div className="group relative flex">
      <FaBookmark
        size={22}
        className={`cursor-pointer transition-transform hover:scale-110 ${isActive ? "opacity-100" : "opacity-20"} `}
        onClick={() => handleBookmark(location)}
      />
      <span className="absolute top-full left-1/2 mt-1 hidden -translate-x-1/2 rounded bg-black px-2 py-1 text-xs whitespace-nowrap text-white group-hover:block">
        {isActive ? "Remove bookmark" : "Bookmark this page"}
      </span>
    </div>
  );
};

export default BookmarkIcon;
