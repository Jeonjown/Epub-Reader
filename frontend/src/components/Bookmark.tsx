import { FaBookmark } from "react-icons/fa6";
import useBookmark from "../hooks/useBookmark";

interface BookmarkProps {
  location: string | number;
}

const Bookmark = ({ location }: BookmarkProps) => {
  const { handleBookmark, bookmarkLocation } = useBookmark();
  return (
    <>
      <FaBookmark
        size={22}
        className={`cursor-pointer transition-transform hover:scale-110 ${
          bookmarkLocation === String(location) ? "opacity-100" : "opacity-20"
        } `}
        onClick={() => {
          handleBookmark(location);
        }}
      />
    </>
  );
};

export default Bookmark;
