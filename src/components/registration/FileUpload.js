import React, { Fragment, useState } from "react";
import Message from './Message';
import Progress from './Progress';
import axios from "axios";
import { Link } from "react-router-dom";

function FileUpload() {
  const [file, setFile] = useState("");
  const [filename, setFilename] = useState("Choose File");
  const [uploadedFile, setUploadedFile] = useState({});
  const [message, setMessage] = useState("");
  const [uploadPercentage, setUploadPercentage] = useState(0);

  const onChange = (e) => {
    setFile(e.target.files[0]);
    setFilename(e.target.files[0].name);
    
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await axios.post("/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        onUploadProgress: (progressEvent) => {
          setUploadPercentage(
            parseInt(
              Math.round((progressEvent.loaded * 100) / progressEvent.total)
            )
          );
        },
      });

      // Clear percentage
      setTimeout(() => setUploadPercentage(0), 10000);

      const { fileName, filePath } = res.data;

  

      setUploadedFile({ fileName, filePath });

      setMessage("File Uploaded");
    } catch (err) {
      if (err.response.status === 500) {
        setMessage("There was a problem with the server");
      } else {
        setMessage(err.response.data.msg);
      }
      setUploadPercentage(0);
    }
  };

  return (
    <Fragment>
      {message ? <Message msg={message} /> : null}
      <form onSubmit={onSubmit}>
        <div >
          <input
            type='file'
           
            id='customFile'
            onChange={onChange}
          />
          <label  htmlFor='customFile'>
            {filename}
          </label>
        </div>

        <Progress percentage={uploadPercentage} />

        <input
          type='submit'
          value='Upload'
         
        />
      </form>
      {uploadedFile ? (
        <div >
          <div >
            <h3 >{uploadedFile.fileName}</h3>
            <img style={{ width: '100px', height: '100px' }} src={  uploadedFile.filePath} alt='' />
            {console.log(uploadedFile.filePath)}
          </div>
          <div>
          <Link to='/showcase'>Create Profile</Link>
        </div>
        </div>
        
      ) : null}
    </Fragment>
  );
}

export default FileUpload;
