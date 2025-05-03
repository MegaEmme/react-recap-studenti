import StudentCard from "./StudentCard";

const StudentList = ({ students }) => {

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
                {students && students.map((elem) => (<StudentCard student={elem} key={elem.id} />))}
            </ul>
        </section>
    )
};

export default StudentList;