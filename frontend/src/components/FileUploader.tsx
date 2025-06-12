import { useEffect, useState } from "react";
import EpubReader from "../pages/EpubReader";

const FileUploader = () => {
  const [file, setFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    const handleDrop = (e: DragEvent) => {
      e.preventDefault();

      const file = e.dataTransfer?.files?.[0];
      if (!file || !file.name.toLowerCase().endsWith(".epub")) {
        alert("Please drop a proper .epub file");
        return;
      }

      setFile(file);
      setIsDragging(false);
    };

    const onDragOver = (e: DragEvent) => {
      e.preventDefault();
      setIsDragging(true);
    };
    const onDragLeave = (e: DragEvent) => {
      e.preventDefault();
      setIsDragging(false);
    };

    window.addEventListener("dragover", onDragOver);
    window.addEventListener("dragleave", onDragLeave);
    window.addEventListener("drop", handleDrop);

    return () => {
      window.removeEventListener("dragover", onDragOver);
      window.removeEventListener("dragleave", onDragLeave);
      window.removeEventListener("drop", handleDrop);
    };
  }, []);

  return (
    <>
      {file && <EpubReader file={file} />}
      <h1 className="mt-10 text-center text-5xl font-extrabold">
        Online EPUB Reader
      </h1>

      <div className="mt-5 px-10">
        <div
          className={`${isDragging ? "border-blue-500" : "border-gray-300"} mt-10 border-2 border-dashed p-5`}
        >
          <p className="text-center">
            {isDragging
              ? "Drag & drop an .epub file anywhere on the page"
              : "Ready to dive into your next book? Click this box or drag and drop your .epub file right here to get started."}
          </p>
        </div>
        <label
          htmlFor="fileInput"
          className="hover:bg-background mx-auto mt-5 block max-w-50 border-2 px-4 py-2 text-center hover:cursor-pointer"
        >
          Choose an EPUB file
        </label>
        <input
          type="file"
          accept=".epub"
          onChange={(e) => {
            const file = e.target.files?.[0];

            if (file) {
              setFile(file);
            }
          }}
          className="hidden"
          id="fileInput"
        />
        <p className="mt-2 text-sm text-gray-500">{file?.name}</p>
      </div>
    </>
  );
};

export default FileUploader;
