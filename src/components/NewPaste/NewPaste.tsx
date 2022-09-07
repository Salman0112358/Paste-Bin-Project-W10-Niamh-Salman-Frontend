import axios from "axios";

//importing BOOTSTRAP COMPONENTS//
import Spinner from "react-bootstrap/Spinner";

import ProgressBar from 'react-bootstrap/ProgressBar'

//importing custom react state hook//
import useStateManager from "../../useStateManager";

const maxCharacterLimit = 900; // set on postgres Database

const NewPaste = (): JSX.Element => {
  const {
    inputTitle,
    setTitle,
    inputBody,
    setBody,
    uploadTrigger,
    setUploadTrigger,
    bodyCharacterCount,
    setBodyCharacterCount
  } = useStateManager();


  async function submitPaste() {
    if (inputBody.length > 0) {
      setUploadTrigger(true);
      await axios.post("https://bluewhale-pastebin.herokuapp.com/pastes", {
        title: inputTitle,
        body: inputBody,
      });

      setTimeout(() => {
        setUploadTrigger(false);
      }, 2000);
    } else {
      window.alert("you must have a paste body before submit!");
    }
  }

  return (
    <>
      <form>
        <div className="form-outline mb-4">
          <label className="form-label" htmlFor="form4Example1">
            Title
          </label>
          <input
            type="text"
            id="form4Example1"
            className="form-control"
            onChange={(e) => setTitle(e.target.value)}
            value={inputTitle}
          />
        </div>

        <div className="form-outline mb-4">
          <label className="form-label" htmlFor="form4Example3">
            Paste Body
          </label>
          <textarea
            className="form-control"
            id="form4Example3"
            onChange={(e) => {
              setBody(e.target.value)
               setBodyCharacterCount(inputBody.length)}}
            value={inputBody}
            rows={15}
            maxLength={5000}
          ></textarea>
        </div>
        {
          (bodyCharacterCount > maxCharacterLimit) ? (
          <>
          <h5> Remove {bodyCharacterCount-maxCharacterLimit} Characters </h5>
          <ProgressBar striped variant="danger" animated now={100} />
          </>) : (
            <>
             <h5>You Have Entered ({bodyCharacterCount} / {maxCharacterLimit}) Characters </h5>
              <ProgressBar striped variant="success" animated now={(bodyCharacterCount / maxCharacterLimit) * 100} />
            </>)
        }

        <br/>


        <div style={{ display: "fex" }}>
          <button
            type="submit"
            className="btn btn-success btn-block mb-4 me-5"
            onClick={submitPaste}
          >
            Submit Your New Paste!
          </button>

          {uploadTrigger && (
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          )}
        </div>
      </form>
    </>
  );
};

export default NewPaste;
