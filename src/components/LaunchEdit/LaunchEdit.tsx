import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { IPaste } from "../../Interfaces/Interfaces";
import useStateManager from "../../useStateManager";

function LaunchEdit({ title, body, paste_id }: IPaste): JSX.Element {
  // const pasteData = getSinglePaste(paste_id)

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const {
    // inputTitle
    setTitle,
    inputBody,
    setBody,
  } = useStateManager();

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Edit
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="form-outline mb-4">
              <label className="form-label" htmlFor="form4Example1">
                <h4>Title</h4>
              </label>
              <input
                type="text"
                id="form4Example1"
                className="form-control text-white bg-dark"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                placeholder="Enter Your Optional Title"
              />
            </div>

            <div className="form-outline mb-4">
              <label className="form-label" htmlFor="form4Example3">
                <h4>Paste Body</h4>
              </label>
              <textarea
                className="form-control text-white bg-dark"
                id="form4Example3"
                onChange={(e) => {
                  setBody(e.target.value);
                }}
                value={body}
                rows={15}
                maxLength={5000}
                placeholder="Place your paste items here or start writing"
              >
                {console.log(inputBody)}
              </textarea>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <button
            type="submit"
            className="btn btn-primary btn-block mb-4 me-5"
            onClick={handleClose}
          >
            Close
          </button>
          <button type="submit" className="btn btn-primary btn-block mb-4 me-5">
            Save Changes
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default LaunchEdit;
