function formatDate(jsonDate) {
    const date = new Date(jsonDate);
    const maanden = [
        "januari", "februari", "maart", "april", "mei", "juni",
        "juli", "augustus", "september", "oktober", "november", "december"
    ];
    const dag = date.getDate();
    const maand = maanden[date.getMonth()];
    const jaar = date.getFullYear();

    return `${dag} ${maand} ${jaar}`;
}

export default formatDate;