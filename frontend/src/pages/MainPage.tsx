const MainPage = () => {
  return (
    <>
      <div className="mx-auto max-w-5xl p-10">
        <h1 className="text-center text-5xl font-extrabold">
          Online EPUB Reader
        </h1>

        <div className="mt-10 border-2 border-dashed p-5">
          <p className="text-center">
            Ready to dive into your next book? Click this box or drag and drop
            your .epub file right here to get started.
          </p>
          <button className="hover:bg-background mx-auto mt-5 block border-2 px-4 py-2 hover:cursor-pointer">
            Choose an EPUB file
          </button>
        </div>

        <div className="mt-10">
          <h2 className="text-3xl font-extrabold">Getting Started is Easy</h2>
          <ol className="list-decimal space-y-2 p-5 text-lg">
            <li>Click on the upload area or drag your EPUB file into it.</li>
            <li>Sit back and start reading instantly in your browser.</li>
          </ol>

          <h2 className="text-3xl font-extrabold">Why Use This Reader?</h2>
          <ol className="list-decimal space-y-2 p-5 text-lg">
            <li>
              Just downloaded a new EPUB and don’t have a reader installed? This
              tool lets you preview the content right away.
            </li>
            <li>
              It’s perfect for everyday reading — no downloads, no hassle, just
              books.
            </li>
          </ol>
        </div>
      </div>
    </>
  );
};

export default MainPage;
