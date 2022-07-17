import { parentPort } from "worker_threads"

interface PictureBoxProps {

    imageLink : string
    imageTitle : string
    country: string
    locale: string
    mapLink : string
    imageCaption: string

}

function PictureBox(props : PictureBoxProps ):JSX.Element{

    return (

        <div>
            <img src={props.imageLink}></img>
            <h2>{props.imageTitle}</h2>
            <h3>{props.country} , {props.locale} <a href={props.mapLink} target= {'_blank'}  >(Map Link)</a> </h3>
            <p>{props.imageCaption}</p>
        </div>

    )
}

export default PictureBox