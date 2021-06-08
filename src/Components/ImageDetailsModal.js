import Modal from "react-modal";
import moment from "moment";

const ImageDetailsModal = ({
  modalStatus,
  setModalStatus,
  imageUrl,
  name,
  createdAt,
}) => {
  return (
    <Modal
      isOpen={modalStatus}
      onRequestClose={() => setModalStatus(false)}
      className="react-modal"
      ariaHideApp={false}
    >
      <div className="modal-content">
      <i className="las la-times cursor-pointer cross-modal" onClick={() => setModalStatus(false)}/>
        <img src={imageUrl} className="w-100" />
        <div
          className="modal-header"
          style={{ padding: "1.5rem", flexDirection: "column" }}
        >
          <h6 className="modal-title text-start w-100">Credits: {name}</h6>
          <h6 className="modal-title text-start w-100">
            {" "}
            Clicked At: {moment(createdAt).format("MMMM Do YYYY, h:mm:ss a")}
          </h6>
        </div>
      </div>
    </Modal>
  );
};

export default ImageDetailsModal;
