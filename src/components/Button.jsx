import { useState, useEffect } from "react";

const Button = ({ props }) => {

    const [className, setClassName] = useState("");
    const [text, setText] = useState("");
    const [type, setType] = useState("");

    useEffect(() => {
        if (props.type === "submit") {
            setType("submit");
            setText("Aggiungi")
        } else if (props.type === "edit") {
            setClassName("edit-btn");
            setText("Modifica")
        } else if (props.type === "delete") {
            setClassName("delete-btn")
            setText("Elimina")
        } else if (props.type === "update") {
            setType("submit")
            setText("Salva Modifiche")
        }
    }, [props])

    return (
        <button className={className} type={type} >{text}</button>

    )
};

export default Button;