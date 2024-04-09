const attendee = {
    nome: "Gabriel Victor",
    email: "gabriel@gmail.com",
    dataInscricao: new Date(2024, 3, 8, 17, 17),
    dataCheckIn: new Date(2024, 3, 9, 20, 12),
}

const createNewAttendee = (attendee) => {
    return `
    <tr>
        <td>
            <strong>
                ${attendee.nome}
            </strong>
            <br>
            <small>
                ${attendee.email}
            </small>
            </td>
            <td>${attendee.dataInscricao}</td>
            <td>${attendee.dataCheckIn}</td>
        </tr>
    `

}

const updateList = (attendee) => {
    document.querySelector("tbody").innerHTML = createNewAttendee(attendee)
}

updateList(attendee)