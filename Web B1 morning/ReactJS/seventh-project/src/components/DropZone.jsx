import React, { useRef, useState } from "react";

const DropZone = () => {
  const [file, setFile] = useState();
  const dropRef = useRef();
  const handleDropFile = () => {
    dropRef.current.click();
  };
  console.log(file);
  return (
    <div className="flex flex-col gap-10 justify-center items-center h-screen">
      <input
        type="file"
        onChange={(e) => setFile(e.target.files[0])}
        ref={dropRef}
        className="border hidden"
      />
      <div
        onClick={handleDropFile}
        className="border-2 border-dashed border-gray-400 p-10 text-center flex flex-col gap-4 cursor-pointer"
      >
        <div className="text-4xl">🔼</div>
        <p>Drag and drop your file here</p>
        <button>Choose File</button>
        <p>{file?.name}</p>
      </div>
      <div className="border w-[400px] h-[400px]">
        <img src={file ? URL.createObjectURL(file) : ""} alt="" />
      </div>
    </div>
  );
};

export default DropZone;
