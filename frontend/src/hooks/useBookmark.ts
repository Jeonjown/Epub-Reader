import { useState } from "react";

const useBookmark = () => {
  const [bookmarkLocation, setBookmarkLocation] = useState<string>(
    () => localStorage.getItem("bookmark-location") || "",
  );
  const handleBookmark = (location: string | number) => {
    if (location === bookmarkLocation) {
      localStorage.removeItem("bookmark-location");
      setBookmarkLocation("");
    } else if (location) {
      const loc = String(location);
      localStorage.setItem("bookmark-location", loc);
      setBookmarkLocation(loc);
    }
  };

  return { bookmarkLocation, setBookmarkLocation, handleBookmark };
};

export default useBookmark;
