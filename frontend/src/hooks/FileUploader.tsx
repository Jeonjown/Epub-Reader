import { useEffect, useState } from "react";
import EpubReader from "../pages/EpubReader";

interface FileUploaderProps {
  onFileChange?: (file: File | null) => void;
}

export default function FileUploader({ onFileChange }: FileUploaderProps) {
  const [file, setFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    onFileChange?.(file);
  }, [file, onFileChange]);

  useEffect(() => {
    const handleDrop = (e: DragEvent) => {
      e.preventDefault();
      const dropped = e.dataTransfer?.files?.[0];
      if (!dropped?.name.toLowerCase().endsWith(".epub")) {
        alert("Please drop a proper .epub file");
        return;
      }
      setFile(dropped);
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
      <div className="mx-4 rounded-xl bg-white p-6 shadow-md">
        <h1 className="mt-10 text-center text-5xl font-extrabold">
          Online EPUB Reader
        </h1>
        <div className="mt-5 px-10">
          <div
            className={`${
              isDragging ? "border-blue-500" : "border-gray-300"
            } mt-10 border-2 border-dashed p-5`}
          >
            <p className="text-center">
              {isDragging
                ? "Drag & drop an .epub file anywhere on the page"
                : "Ready to dive into your next book? Click this box or drag and drop your .epub file right here to get started."}
            </p>
          </div>
          <label
            htmlFor="fileInput"
            className="mx-auto mt-5 block max-w-50 border-2 px-4 py-2 text-center hover:cursor-pointer hover:bg-gray-100"
          >
            Choose an EPUB file
          </label>
          <input
            id="fileInput"
            type="file"
            accept=".epub"
            onChange={(e) => {
              const chosen = e.target.files?.[0];
              if (chosen) setFile(chosen);
            }}
            className="hidden"
          />
          <p className="mt-2 text-sm text-gray-500">{file?.name}</p>
        </div>
      </div>
    </>
  );
}
