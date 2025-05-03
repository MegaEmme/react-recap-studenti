import Button from "./Button";
import { useState, useEffect } from "react";


const StudentCard = ({ student }) => {
    const [statusText, setStatusText] = useState("")

    useEffect(() => {
        if (student.status == "active") {
            setStatusText("attivo")
        } else {
            setStatusText("inattivo")
        }
    }, [student.status])

    return (
        <li className={student.status}>
            <div>
                <strong>{student.name}</strong> - {student.course}
                <span className={student.status}>{statusText}</span>
            </div>
            <div className={student.status}>
                <Button props={{ id: student.id, type: 'edit' }} />
                <Button props={{ id: student.id, type: 'delete' }} />
            </div>
            <form className="edit-form">
                <label>
                    Nome:
                    <input type="text" name="name" value={student.name} />
                </label>
                <label>
                    Corso:
                    <input type="text" name="course" value={student.course} />
                </label>
                <label>
                    Stato:
                    <select name={student.status}>
                        <option value="active" >Attivo</option>
                        <option value="inactive">Inattivo</option>
                    </select>
                </label>
                <Button props={{ id: student.id, type: 'update' }} />
            </form>
        </li>
    )
}

export default StudentCard;