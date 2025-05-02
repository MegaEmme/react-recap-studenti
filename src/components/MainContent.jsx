import StatusMessage from "./StatusMessage";
import StudentFilter from "./StudentFilter";
import StudentForm from "./StudentForm";
import StudentList from "./StudentList";

const MainContent = () => {
    return (
        <main className="container">
            <StatusMessage />
            <StudentForm />
            <StudentFilter />
            <StudentList />
        </main>
    )
};

export default MainContent;