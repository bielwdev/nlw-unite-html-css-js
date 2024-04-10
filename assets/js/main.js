let attendees = [
    {
        nome: "Gabriel Victor",
        email: "gabriel@gmail.com",
        dataInscricao: new Date(2024, 3, 8, 17, 17),
        dataCheckIn: new Date(2024, 3, 9, 20, 12),
    },
    {
        nome: "Mayk Brito",
        email: "maykbrito@gmail.com",
        dataInscricao: new Date(2024, 1, 2, 10, 23),
        dataCheckIn: new Date(2024, 1, 5, 20, 20),
    },
    {
        nome: "Ana Silva",
        email: "ana.silva@example.com",
        dataInscricao: new Date(2024, 2, 15, 14, 30),
        dataCheckIn: new Date(2024, 2, 18, 11, 45),
    },
    {
        nome: "Lucas Oliveira",
        email: "lucas.oliveira@example.com",
        dataInscricao: new Date(2024, 2, 20, 9, 45),
        dataCheckIn: new Date(2024, 2, 21, 16, 20),
    },
    {
        nome: "Maria Santos",
        email: "maria.santos@example.com",
        dataInscricao: new Date(2024, 2, 25, 13, 10),
        dataCheckIn: new Date(2024, 2, 28, 10, 35),
    },
    {
        nome: "Pedro Souza",
        email: "pedro.souza@example.com",
        dataInscricao: new Date(2024, 2, 28, 16, 55),
        dataCheckIn: new Date(2024, 3, 2, 8, 40),
    },
    {
        nome: "Carla Mendes",
        email: "carla.mendes@example.com",
        dataInscricao: new Date(2024, 3, 2, 10, 20),
        dataCheckIn: new Date(2024, 3, 4, 15, 15),
    },
    {
        nome: "João Pereira",
        email: "joao.pereira@example.com",
        dataInscricao: new Date(2024, 3, 5, 12, 40),
        dataCheckIn: new Date(2024, 3, 8, 18, 55),
    },
    {
        nome: "Fernanda Costa",
        email: "fernanda.costa@example.com",
        dataInscricao: new Date(2024, 3, 10, 9, 15),
        dataCheckIn: new Date(2024, 3, 12, 12, 30),
    },
    {
        nome: "Rafaela Almeida",
        email: "rafaela.almeida@example.com",
        dataInscricao: new Date(2024, 3, 15, 15, 30),
        dataCheckIn: new Date(2024, 3, 18, 10, 20),
    },
    {
        nome: "Anderson Santos",
        email: "anderson.santos@example.com",
        dataInscricao: new Date(2024, 3, 20, 11, 10),
        dataCheckIn: new Date(2024, 3, 22, 14, 45),
    }
]

const createNewAttendee = (attendee) => {
    const dataInscricao = dayjs(Date.now()).to(attendee.dataInscricao)
    let dataCheckIn = dayjs(Date.now()).to(attendee.dataCheckIn)
    if(attendee.dataCheckIn == null){
        dataCheckIn = `
        <button data-email="${attendee.email}" onclick="updateCheckIn(event)">Confirmar check-in</button>
        `
    }
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
            <td>${dataInscricao}</td>
            <td>${dataCheckIn}</td>
        </tr>
    `

}

const updateList = (attendees) => {
    let output = "teste"
    for(let attendee of attendees){
        output = output + createNewAttendee(attendee)
    }
    document.querySelector("tbody").innerHTML = output
}

updateList(attendees)

const addAttendee = (event) => {
    event.preventDefault()

    const formData = new FormData(event.target)
    
    const attendee = {
        nome: formData.get("nome"),
        email: formData.get("email"),
        dataInscricao: new Date(),
        dataCheckIn: null
    }

    attendees = [attendee, ...attendees]
    updateList(attendees)

}

const updateCheckIn = (event) => {
    const attendee = attendees.find((a) => {
        return a.email == event.target.dataset.email
    })
    attendee.dataCheckIn = new Date()
    updateList(attendees)
}