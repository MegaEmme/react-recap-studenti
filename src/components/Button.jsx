const Button = ({ props }) => {

    let className = null;
    let type = null;
    let text = null;

    if (props.type === "submit") {
        type = "submit"
        text = "Aggiungi"
    } else if (props.type === "edit") {
        className = "edit-btn"
        text = "Modifica"
    } else if (props.type === "delete") {
        className = "delete-btn"
        text = "Elimina"
    };

    return (
        <button className={className} type={type}>{text}</button>
    )
};

export default Button;