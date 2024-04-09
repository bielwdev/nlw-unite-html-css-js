const createNewAttendee = () => {
    return `
    <tr>
        <td>
            <strong>
                Gabriel Victor
            </strong>
            <br>
            <small>
                gabrielvictor@gmail.com
            </small>
            </td>
            <td>há 3 dias</td>
            <td>há 3 minutos</td>
        </tr>
    `

}

const updateList = () => {
    document.querySelector("tbody").innerHTML = createNewAttendee()
}

updateList()