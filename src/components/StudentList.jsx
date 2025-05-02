
import StudentCard from "./StudentCard";

const StudentList = () => {
    return (
        <section className="list-section">
            <div className="list-header">
                <h2>Elenco Studenti</h2>
                <div className="sort-controls">
                    <label>Ordina per:</label>
                    <select id="sort-by">
                        <option value="name">Nome</option>
                        <option value="course">Corso</option>
                    </select>
                </div>
            </div>
            <ul id="student-list">
                <StudentCard student={{ id: 1, name: "giulia", course: "matematica", status: 'active' }} />
            </ul>
        </section>
    )
};

export default StudentList;