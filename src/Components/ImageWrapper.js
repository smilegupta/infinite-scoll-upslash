import { useState, Fragment } from "react";
import ImageDetailsModal from "./ImageDetailsModal";

const ImageWrapper = ({ url, name, createdAt, styles }) => {
  // State Variables
  const [modalStatus, setModalStatus] = useState(false);
  return (
    <Fragment>
      <img
        className={`${styles} cursor-pointer`}
        src={url}
        alt=""
        onClick={() => setModalStatus(true)}
      />

      <ImageDetailsModal
        modalStatus={modalStatus}
        setModalStatus={setModalStatus}
        imageUrl={url}
        name={name}
        createdAt={createdAt}
      />
    </Fragment>
  );
};

export default ImageWrapper;
