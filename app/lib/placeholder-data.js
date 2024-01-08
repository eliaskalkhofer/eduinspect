const users = [
    {
        username: 'WINJ',
        firsname: "Josef",
        lastname: "Winkler",
        password: '123456',
    },
    {
        username: 'KRAM',
        firsname: "Thomas",
        lastname: "Krammer",
        password: '123456',
    },
    {
        username: 'FELT',
        firsname: "Tobias",
        lastname: "Fellner",
        password: '123456',
    },
    {
        username: 'LOEF',
        firsname: "Franz",
        lastname: "Lösch",
        password: '123456',
    },
];

const hospitations = [
{
    teacherUsername: "WINJ",
    teacherFirstname: "Josef",
    teacherLastname: "Winkler",
	date: "01.01.2024",
	starttime: "07:50",
	endtime: "08:40",
	subject: "INSY",
	information: "SAP",
	status: "abgeschlossen"
},
{
    teacherUsername: "WINJ",
    teacherFirstname: "Josef",
    teacherLastname: "Winkler",
	date: "02.01.2024",
	starttime: "07:50",
	endtime: "08:40",
	subject: "INSY",
	information: "MYSQL Server",
	status: "vergeben"
},
{
    teacherUsername: "WINJ",
    teacherFirstname: "Josef",
    teacherLastname: "Winkler",
	date: "01.02.2024",
	starttime: "07:50",
	endtime: "08:40",
	subject: "INSY",
	information: "MYSQL",
	status: "verfügbar"
},
{
    teacherUsername: "KRAM",
    teacherFirstname: "Thomas",
    teacherLastname: "Krammer",
	date: "02.02.2024",
	starttime: "07:50",
	endtime: "08:40",
	subject: "WIR",
	information: "Wahlrecht",
	status: "verfügbar"
},
{
    teacherUsername: "FELT",
    teacherFirstname: "Tobias",
    teacherLastname: "Fellner",
	date: "03.01.2024",
	starttime: "07:50",
	endtime: "08:40",
	subject: "AM",
	information: "Wahrscheinlichkeitsrechnung",
	status: "verfügbar"
}
]

module.exports = {
    users,
    hospitations,
  };