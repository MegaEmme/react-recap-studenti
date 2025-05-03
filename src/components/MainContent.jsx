import { useEffect, useState } from "react";
import StatusMessage from "./StatusMessage";
import StudentFilter from "./StudentFilter";
import StudentForm from "./StudentForm";
import StudentList from "./StudentList";
import axios from "axios";
import courses from "../courses";
import GetRandomElement from "./CustomFunctions";


const MainContent = () => {

    const endpoint = "https://jsonplaceholder.typicode.com/users"
    const [students, setStudents] = useState([]);

    useEffect(() => {
        axios.get(endpoint).then((response) => {
            setStudents(response.data.map((elem) => ({ id: elem.id, name: elem.name, course: GetRandomElement(courses), status: GetRandomElement(["active", "inactive"]) })))
        })
    }, [])

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