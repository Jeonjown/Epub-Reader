import FileUploader from "../components/FileUploader";

const MainPage = () => {
  return (
    <>
      <div className="mx-auto max-w-5xl p-10">
        <h1 className="text-center text-5xl font-extrabold">
          Online EPUB Reader
        </h1>

        <FileUploader />

        <div className="mt-96">
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
