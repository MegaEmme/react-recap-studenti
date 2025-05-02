const StudentFilter = () => {
    return (
        <section className="filter-section">
            <h2>Filtra</h2>
            <input type="text" id="filter-name" placeholder="Filtra per nome" />
            <input type="text" id="filter-course" placeholder="Filtra per corso" />
        </section>
    )
};

export default StudentFilter;