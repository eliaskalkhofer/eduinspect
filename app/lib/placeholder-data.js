const users = [
    {
        username: 'WINJ',
        password: '123456',
    },
    {
        username: 'KRAM',
        password: '123456',
    },
    {
        username: 'FELT',
        password: '123456',
    },
    {
        username: 'LOEF',
        password: '123456',
    },
];

const hospitations = [
{
	date: "01.01.2024",
	starttime: "07:50",
	endtime: "08:40",
	subject: "MEDT",
	information: "Grundlagen HTML",
	status: "abgeschlossen"
},
{
	date: "02.02.2024",
	starttime: "08:45",
	endtime: "09:35",
	subject: "MEDT",
	information: "Grundlagen CSS",
  	status: "vergeben"
},
{
  	"date": "03.03.2024",
 	starttime: "09:40",
  	endtime: "10:30",
 	subject: "MEDT",
  	information: "Grundlagen JS",
 	status: "verfügbar"
},
{
    "date": "04.04.2024",
   starttime: "09:40",
    endtime: "10:30",
   subject: "MEDT",
    information: "Grundlagen Node Js",
   status: "verfügbar"
}
]

module.exports = {
    users,
    hospitations,
  };