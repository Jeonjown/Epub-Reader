import { useState } from "react";
import { FaRocket } from "react-icons/fa6";
import { MdLightbulb } from "react-icons/md";
import FileUploader from "../hooks/FileUploader";

export default function MainPage() {
  const [file, setFile] = useState<File | null>(null);
  const mobilePadding = file ? "" : "pt-10";

  return (
    <div className={`min-h-screen bg-gray-50 ${mobilePadding} md:pt-5`}>
      <div className="mx-auto max-w-5xl space-y-10">
        <FileUploader onFileChange={setFile} />

        <div className="mx-4 rounded-xl bg-white p-8 shadow-md">
          <div className="mb-4 flex items-center space-x-4 text-3xl font-bold text-gray-700">
            <FaRocket />
            <h2>Getting Started is Easy</h2>
          </div>
          <ol className="list-decimal space-y-3 px-6 text-gray-700">
            <li>
              Click on the upload area or drag your{" "}
              <span className="font-medium text-gray-600">EPUB file</span> into
              it.
            </li>
            <li>Sit back and start reading instantly in your browser.</li>
          </ol>
        </div>

        <div className="mx-4 rounded-xl bg-white p-8 shadow-md">
          <div className="mb-4 flex items-center space-x-4 text-3xl font-bold text-gray-700">
            <MdLightbulb />
            <h2>Why Use This Reader?</h2>
          </div>
          <ol className="list-decimal space-y-3 px-6 text-gray-700">
            <li>
              Just downloaded a new EPUB and don’t have a reader installed? This
              tool lets you preview the content{" "}
              <span className="font-medium text-gray-600">right away</span>.
            </li>
            <li>
              It’s perfect for everyday reading —
              <span className="italic">no downloads, no hassle</span>, just
              books. 📚
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}
