const Footer = () => {
  return (
    <footer className="bg-gray-200 pt-10 pb-10 md:pt-5 md:pb-4">
      <div className="mx-auto max-w-4xl px-4 text-center text-sm text-gray-600">
        Dictionary definitions provided by{" "}
        <a
          href="https://dictionaryapi.dev/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-indigo-600 hover:underline"
        >
          dictionaryapi.dev
        </a>
        .
      </div>
    </footer>
  );
};

export default Footer;
