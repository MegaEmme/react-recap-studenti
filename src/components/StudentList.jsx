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
                <li>
                    <div>
                        <strong>Giulia</strong> - Matematica
                        <span className="status">(attivo)</span>
                    </div>
                    <div className="actions">
                        <button className="edit-btn">Modifica</button>
                        <button className="delete-btn">Elimina</button>
                    </div>
                    <form className="edit-form">
                        <label>
                            Nome:
                            <input type="text" name="name" value="Giulia" />
                        </label>
                        <label>
                            Corso:
                            <input type="text" name="course" value="Matematica" />
                        </label>
                        <label>
                            Stato:
                            <select name="status">
                                <option value="active" selected>Attivo</option>
                                <option value="inactive">Inattivo</option>
                            </select>
                        </label>
                        <button type="submit">Salva modifiche</button>
                    </form>
                </li>

                <li className="inactive">
                    <div>
                        <strong>Marco</strong> - Storia
                        <span className="status">(inattivo)</span>
                    </div>
                    <div className="actions">
                        <button className="edit-btn">Modifica</button>
                        <button className="delete-btn">Elimina</button>
                    </div>
                    <form className="edit-form">
                        <label>
                            Nome:
                            <input type="text" name="name" value="Marco" />
                        </label>
                        <label>
                            Corso:
                            <input type="text" name="course" value="Storia" />
                        </label>
                        <label>
                            Stato:
                            <select name="status">
                                <option value="active">Attivo</option>
                                <option value="inactive" selected>Inattivo</option>
                            </select>
                        </label>
                        <button type="submit">Salva modifiche</button>
                    </form>
                </li>
            </ul>
        </section>
    )
};

export default StudentList;