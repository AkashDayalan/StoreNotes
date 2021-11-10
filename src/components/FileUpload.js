import React, { useState } from "react";

const FileUpload = () => {
  const [files, setFiles] = useState("");
  const [filenames, setFilenames] = useState(["Choose File"]);

  const handleChange = (e) => {
    const fileList = e.target.files;
    setFiles(fileList);

    const names = [];
    console.log(fileList);
    for (let i=0; i < fileList.length ; ++i) 
      names.push(fileList[i].name);
    
    if(names.length === 0) 
      setFilenames(["Choose File"]);
    else
      setFilenames(names);
  };

  return (
    <>
      <form
        action="/uploads"
        encType="multipart/form-data"
        method="POST"
        className="container mt-4 p-2 flex flex-col justify-center"
      >
        <label
          htmlFor="notes-files"
          className="p-4 border-2 border-black text-center cursor-pointer transition duration-200 hover:bg-blue-200"
        >
          {filenames.map((filename) => (
            <div key={filename.id} className="uppercase text-lg font-bold my-4">{filename}</div>
          ))}
        </label>
        <input
          type="file"
          name="notes-files"
          id="notes-files"
          className="hidden"
          onChange={handleChange}
          multiple
        />
        <input
          type="submit"
          value="Upload"
          className="mt-2 p-4 text-xl bg-blue-400 border-2 border-black font-bold cursor-pointer transition duration-200 hover:bg-blue-500 hover:text-white"
        />
      </form>
    </>
  );
};

export default FileUpload;
