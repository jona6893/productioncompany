import React, { useState } from 'react'
import axios from "axios";

function Sharing() {
    
   const [selectedFile, setSelectedFile] = useState();
   const [uploadProgress, setUploadProgress] = useState(0);

   const submitForm = async (event) => {
     event.preventDefault();

     const formData = new FormData();
     formData.append("file", selectedFile);

     try {
       const res = await axios.post("http://localhost:3001/upload", formData, {
         onUploadProgress: function (progressEvent) {
           let percentCompleted = Math.round(
             (progressEvent.loaded * 100) / progressEvent.total
           );
           setUploadProgress(percentCompleted);
         },
       });
       console.log("File upload response: ", res.data);
     } catch (error) {
       console.error("Error uploading file: ", error);
     }
   };

   const handleFileChange = (event) => {
     setSelectedFile(event.target.files[0]);
   };

  return (
    <div className="text-white">
      <form onSubmit={submitForm}>
        <input type="file" onChange={handleFileChange} />
        <button type="submit">Upload File</button>
        <p>Upload progress: {uploadProgress}%</p>
      </form>
    </div>
  );
}

export default Sharing

