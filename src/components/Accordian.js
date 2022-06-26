import react, {useState, useRef} from "react"
import chevronicon from "../img/chevron-right-solid.svg"
 
export default function Accordian(props) {


    const [active, setActive] = useState("")
    const [height, setHeight] = useState("0px")
    const [rotate, setRotate] = useState("accordion--icon")


    const content = useRef(null)

    function toogleAccordian() {
        setActive(active === "" ? "active" : "")
        setHeight(active === "active" ? "0px" : `${content.current.scrollHeight}px`)
        setRotate(active === "active" ? "accordion--icon" : "accordion--icon rotate")
    }

    return (
        <>
            <div className="accordian--container">
                <button className ={`accordian ${active}`} onClick={toogleAccordian}>
                    <p className="accordian--title">{props.item.title}  
                      <img className={`${rotate}`} src = {chevronicon} /> </p>
                </button>
                <div ref = {content} style = {{maxHeight:`${height}`}} className="accordian--content" danerouslySetInnerHTML = {{ __html: props.content}}>
                    <p>{props.item.content}</p>
                </div>
            </div>
        </>
    )
} 