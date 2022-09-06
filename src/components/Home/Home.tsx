import React from 'react'

//IMPORT REACT COMPONEN|TS
import NewPaste from '../NewPaste/NewPaste'
import PasteList from '../PasteList/PasteList'

const Home = () : JSX.Element => {
  return (
    <>
    <NewPaste/> 
    <PasteList/>
    </>
  )
}

export default Home