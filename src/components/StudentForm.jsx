import Button from "./Button";
import { useState, useEffect } from "react";

const StudentForm = (props) => {
    const [studentID, setStudentID] = useState(0);
    const [studentName, setStudentName] = useState("");
    const [studentCourse, setStudentCourse] = useState("");
    const [studentStatus, setStudentStatus] = useState("active");
    const [formData, setFormData] = useState({});
    useEffect(() => {
        console.log(props)
        setStudentID(props.students.length + 1)
        setFormData({
            id: props.students.length + 1,
            name: studentName,
            course: studentCourse,
            status: studentStatus
        })
    }, [props])

    useEffect(() => {
        setFormData({
            id: studentID,
            name: studentName,
            course: studentCourse,
            status: studentStatus
        })
    }
        , [studentName, studentCourse, studentStatus])

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formData)
        if (props.onFormSubmit) {
            props.onFormSubmit(formData);
        } else {
            console.error("onFormSubmit non è definito!");
        }

    }

    return (

        <section className="form-section">
            <h2>Aggiungi Studente</h2>
            <form id="student-form" onSubmit={handleSubmit}>
                <label>
                    Nome:
                    <input type="text" name="name" required value={studentName} onChange={e => { setStudentName(e.target.value) }} />
                </label>
                <label>
                    Corso:
                    <input type="text" name="course" required value={studentCourse} onChange={e => { setStudentCourse(e.target.value) }} />
                </label>
                <label>
                    Stato:
                    <select name="status" onChange={e => { setStudentStatus(e.target.value) }} required>
                        <option value="active">Attivo</option>
                        <option value="inactive">Inattivo</option>
                    </select>
                </label>
                <Button props={{ id: studentID, type: 'submit' }} />
            </form>
        </section>
    )
};

export default StudentForm;