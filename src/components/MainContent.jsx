import { useState } from "react";
import StatusMessage from "./StatusMessage";
import StudentFilter from "./StudentFilter";
import StudentForm from "./StudentForm";
import StudentList from "./StudentList";

const MainContent = () => {


    const [students, setStudents] = useState([{
        id: 1,
        name: "Giulia",
        course: "matematica",
        studentStatus: "inactive"
    },
    {
        id: 2,
        name: "Bulia",
        course: "Zannematica",
        studentStatus: "active"
    }]);

    return (
        <main className="container">
            <StatusMessage />
            <StudentForm />
            <StudentFilter />
            <StudentList students={students} />
        </main>
    )
};

export default MainContent;