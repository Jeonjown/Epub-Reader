import { FaGithub, FaGlasses } from "react-icons/fa6";

const Header = () => {
  return (
    <>
      <header className="border-b-1 border-gray-300 bg-white px-5 py-2">
        <div className="flex justify-between">
          <div className="text-center">
            <FaGlasses size={35} className="mx-auto" />
            <p className="text-sm font-bold">EPUB READER</p>
          </div>

          <div className="flex items-center space-x-3">
            <a
              href="https://github.com/Jeonjown/Epub-Reader"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={40} />
            </a>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
