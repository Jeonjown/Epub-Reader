import { FaGithub } from "react-icons/fa6";

const Header = () => {
  return (
    <>
      <header className="border-b-2 p-5">
        <div className="flex justify-between">
          <h2 className="text-text">BATS</h2>
          <div className="flex space-x-3">
            <a
              href="https://github.com/Jeonjown"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={30} />
            </a>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
