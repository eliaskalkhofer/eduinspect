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
    implementingTeacher: "KRAM",
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
    implementingTeacher: "FELT",
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
	implementingTeacher: "",
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
	implementingTeacher: "",
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
	implementingTeacher: "",
	date: "03.01.2024",
	starttime: "07:50",
	endtime: "08:40",
	subject: "AM",
	information: "Wahrscheinlichkeitsrechnung",
	status: "verfügbar"
}
,
{
    teacherUsername: "FELT",
    teacherFirstname: "Tobias",
    teacherLastname: "Fellner",
	implementingTeacher: "",
	date: "04.01.2024",
	starttime: "07:50",
	endtime: "08:40",
	subject: "AM",
	information: "Differentialgleichung",
	status: "verfügbar"
},
{
    teacherUsername: "FELT",
    teacherFirstname: "Tobias",
    teacherLastname: "Fellner",
	implementingTeacher: "",
	date: "05.01.2024",
	starttime: "07:50",
	endtime: "08:40",
	subject: "AM",
	information: "Kombinatorik",
	status: "verfügbar"
},
{
    teacherUsername: "WINJ",
    teacherFirstname: "Josef",
    teacherLastname: "Winkler",
	implementingTeacher: "",
	date: "06.01.2024",
	starttime: "07:50",
	endtime: "08:40",
	subject: "INSY",
	information: "Produktionsabläufe",
	status: "verfügbar"
},
{
    teacherUsername: "KRAM",
    teacherFirstname: "Thomas",
    teacherLastname: "Krammer",
	implementingTeacher: "",
	date: "07.01.2024",
	starttime: "07:50",
	endtime: "08:40",
	subject: "WIR",
	information: "Arbeitsrecht",
	status: "verfügbar"
},
{
    teacherUsername: "FELT",
    teacherFirstname: "Tobias",
    teacherLastname: "Fellner",
	implementingTeacher: "",
	date: "08.01.2024",
	starttime: "07:50",
	endtime: "08:40",
	subject: "AM",
	information: "Statistik",
	status: "verfügbar"
}
]

module.exports = {
    users,
    hospitations,
  };