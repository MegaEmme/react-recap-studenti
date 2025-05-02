import Button from "./Button";

const StudentCard = ({ student }) => {
    return (
        <li>
            <div>
                <strong>{student.name}</strong> - {student.course}
                <span className={student.status}>(attivo)</span>
            </div>
            <div className="actions">
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
                        <option value="active" selected>Attivo</option>
                        <option value="inactive">Inattivo</option>
                    </select>
                </label>
                <Button props={{ id: student.id, type: 'update' }} />
            </form>
        </li>

        // <li className="inactive">
        //     <div>
        //         <strong>Marco</strong> - Storia
        //         <span className={student.status}>(inattivo)</span>
        //     </div>
        //     <div className="actions">
        //         <Button props={{ id: 1, type: 'edit' }} />
        //         <Button props={{ id: 1, type: 'delete' }} />
        //     </div>
        //     <form className="edit-form">
        //         <label>
        //             Nome:
        //             <input type="text" name="name" value="Marco" />
        //         </label>
        //         <label>
        //             Corso:
        //             <input type="text" name="course" value="Storia" />
        //         </label>
        //         <label>
        //             Stato:
        //             <select name={student.status}>
        //                 <option value="active">Attivo</option>
        //                 <option value="inactive" selected>Inattivo</option>
        //             </select>
        //         </label>
        //         <Button props={{ id: 1, type: 'update' }} />
        //     </form>
        // </li>
    )
}

export default StudentCard;