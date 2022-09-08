import axios from "axios";
import React from "react";

import "./NewPaste.css";

// Importing React Component
import SuccessAlert from "../SuccessAlert/SuccessAlert";
//import CodeEditor from "../CodeEditor";

//importing BOOTSTRAP COMPONENTS//
import ProgressBar from "react-bootstrap/ProgressBar";

//importing custom react state hook//
import useStateManager from "../../useStateManager";

const maxCharacterLimit = 900; // set on postgres Database

const NewPaste = (): JSX.Element => {
  const {
    inputTitle,
    setTitle,
    inputBody,
    setBody,
    bodyCharacterCount,
    setBodyCharacterCount,
  } = useStateManager();

  async function submitPaste() {
    if (inputBody.length > 0) {
      await axios.post("https://bluewhale-pastebin.herokuapp.com/pastes", {
        title: inputTitle,
        body: inputBody,
      });
    } else {
      window.alert("you must have a paste body before submit!");
    }
  }

  return (
    <>
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
            value={inputTitle}
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
              setBodyCharacterCount(inputBody.length);
            }}
            value={inputBody}
            rows={15}
            maxLength={5000}
            placeholder="Place your paste items here or start writing"
          ></textarea>
          {/* <CodeEditor/> */}
          <SuccessAlert />
        </div>
        {bodyCharacterCount > maxCharacterLimit ? (
          <>
            <h5>
              {" "}
              Remove {bodyCharacterCount - maxCharacterLimit} Characters{" "}
            </h5>
            <ProgressBar striped variant="danger" animated now={100} />
          </>
        ) : (
          <>
            <h5>
              You Have Entered ({bodyCharacterCount} / {maxCharacterLimit})
              Characters{" "}
            </h5>
            <ProgressBar
              striped
              variant="success"
              animated
              now={(bodyCharacterCount / maxCharacterLimit) * 100}
            />
          </>
        )}

        <br />
        {}
        <button
          type="submit"
          className="btn btn-success btn-block mb-4 me-5"
          onClick={submitPaste}
        >
          Submit Your New Paste!
        </button>
      </form>
    </>
  );
};

export default NewPaste;
