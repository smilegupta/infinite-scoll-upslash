import { useState } from "react";
import { uploadImage } from "../crud/uploadImage.crud";
import { CopyToClipboard } from "react-copy-to-clipboard";

import { toast } from "react-toastify";
toast.configure();

const Upload = () => {
  // State Variables
  const [file, setFile] = useState("");
  const [S3URL, setS3URL] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Validating Image
  const validateFile = () => {
    setError("");
    if (file === null || file === "") {
      setError("You have not uploaded any image yet.");
      return false;
    }
    return true;
  };

  // Coverting File to Data URL
  const handleUpload = (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setFile(reader.result);
    };
    reader.readAsDataURL(file);
  };

  // Function to copy s3Url
  const onCopyText = () => {
    const message = "Link Copied Successfully";
    toast.success(message, {
      position: "top-right",
      autoClose: 0,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  // API Call
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateFile()) return;
    setLoading(true);
    try {
      const result = await uploadImage(file);
      setS3URL(result.data);
      const message = "Bingo! Your Image has been Uploaded Successfully.";
      toast.success(message, {
        position: "top-right",
        autoClose: 0,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      setLoading(false);
    } catch (err) {
      let error = err.message || "Something went wrong!";
      toast.error(error, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      setLoading(false);
    }
  };

  return (
    <div className="container mt-3">
      <div className="row mb-3">
        <div className="col-12 text-center mb-2">
          <h4 className="text-dark"> Upload Image </h4>
          <span className="text-dark">
            {" "}
            Upload Images and get sharable links
          </span>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mx-auto">
          <form onSubmit={(e) => handleSubmit(e)}>
            <div className="mb-3">
              <div className="form-group">
                <input
                  className="form-control"
                  type="file"
                  id="uploadedFile"
                  aria-describedby="fileHelp"
                  onChange={handleUpload}
                  accept=".png,.jpeg, .jpg"
                />
                {error && <p className="text-danger">{error}</p>}
              </div>
            </div>
            <div className="mb-3 d-flex justify-content-center">
              <button
                className="btn btn-secondary mx-2 my-2 my-sm-0 text-dark"
                style={{ borderRadius: "10px" }}
                type="submit"
                disabled={loading}
              >
                Upload
              </button>
            </div>
          </form>
          {S3URL && (
            <div className="mt-4">
              <div className="form-group">
                <label
                  style={{ display: "block" }}
                  className="text-center text-dark"
                >
                  {" "}
                  Sharable Link{" "}
                  <CopyToClipboard text={S3URL} onCopy={onCopyText}>
                    <i className="las la-copy cursor-pointer"></i>
                  </CopyToClipboard>
                </label>
                <textarea
                  className="form-control"
                  id="exampleTextarea"
                  rows="3"
                  readOnly
                  value={S3URL}
                ></textarea>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Upload;
