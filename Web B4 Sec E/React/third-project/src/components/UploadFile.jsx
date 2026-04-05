import React, { useRef } from "react";
import { IoIosCloudUpload } from "react-icons/io";

const UploadFile = () => {
  const [file, setFile] = React.useState(null);
  const fileRef = useRef();
  const handleClick = () => {
    fileRef.current.click();
  };
  return (
    <div className="flex flex-col items-center justify-center mt-10 cursor-pointer">
      <input
        type="file"
        onChange={(e) => setFile(e.target.files[0])}
        ref={fileRef}
        className="border hidden"
      />
      <div
        onClick={handleClick}
        className="flex flex-col items-center justify-center p-5 border boerd-dashed border-gray-300 rounded-lg"
      >
        <IoIosCloudUpload className="text-5xl text-blue-500" />
        <p className="text-lg font-semibold mt-4">Upload File</p>
        {file && <p className="text-green-500 mt-2">{file.name}</p>}
        <p className="text-gray-500 mt-2">Drag and drop your file here</p>
      </div>
      <div className="">
        <img
          className="w-64 h-40"
          src={file ? URL.createObjectURL(file) : ""}
          alt={file ? file.name : ""}
        />
      </div>
    </div>
  );
};

export default UploadFile;
