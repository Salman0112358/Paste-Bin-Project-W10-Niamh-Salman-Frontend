import React from 'react'

const NewPaste = () : JSX.Element => {
  return (
    <>
    <form>

  <div className="form-outline mb-4">
    <label className="form-label" htmlFor="form4Example1">Title</label>
    <input type="text" id="form4Example1" className="form-control" />
  </div>

    
  <div className="form-outline mb-4">
  <label className="form-label" htmlFor="form4Example3">Paste Body</label>
    <textarea className="form-control" id="form4Example3" ></textarea>
  </div>

 
 

 
  <button type="submit" className="btn btn-primary btn-block mb-4">Send</button>
</form>
    </>
  )
}

export default NewPaste