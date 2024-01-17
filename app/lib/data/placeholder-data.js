const users = [
	{
		username: 'WINJ',
		firsname: 'Josef',
		lastname: 'Winkler',
		password: '123456'
	},
	{
		username: 'KRAM',
		firsname: 'Thomas',
		lastname: 'Krammer',
		password: '123456'
	},
	{
		username: 'FELT',
		firsname: 'Tobias',
		lastname: 'Fellner',
		password: '123456'
	},
	{
		username: 'LOEF',
		firsname: 'Franz',
		lastname: 'Lösch',
		password: '123456'
	},
	{
		username: 'WIDM',
		firsname: 'Manfred',
		lastname: 'Widmann',
		password: '123456'
	}
];

const hospitations = [
	{
		teacherUsername: "FELT",
		teacherFirstname: "Tobias",
		teacherLastname: "Fellner",

		impteacherUsername: null,
		impteacherFirstname: null,
		impteacherLastname: null,

		date: "01.01.2024",
		starttime: "07:50",
		endtime: "08:40",

		room: "T127",
		subject: "AM",
		information: "Normalverteilung",
		status: "verfügbar",
		feedback: null
	},
	{
		teacherUsername: "FELT",
		teacherFirstname: "Tobias",
		teacherLastname: "Fellner",

		impteacherUsername: null,
		impteacherFirstname: null,
		impteacherLastname: null,

		date: "02.01.2024",
		starttime: "07:50",
		endtime: "08:40",

		room: "T127",
		subject: "AM",
		information: "Binomialverteilung",
		status: "verfügbar",
		feedback: null
	},
	{
		teacherUsername: "FELT",
		teacherFirstname: "Tobias",
		teacherLastname: "Fellner",

		impteacherUsername: null,
		impteacherFirstname: null,
		impteacherLastname: null,

		date: "03.01.2024",
		starttime: "07:50",
		endtime: "08:40",

		room: "T127",
		subject: "AM",
		information: "Kombinatorik",
		status: "verfügbar",
		feedback: null
	},
	{
		teacherUsername: "WIR",
		teacherFirstname: "Thomas",
		teacherLastname: "Krammer",

		impteacherUsername: null,
		impteacherFirstname: null,
		impteacherLastname: null,

		date: "01.02.2024",
		starttime: "07:50",
		endtime: "08:40",

		room: "T127",
		subject: "WIR",
		information: "Wahlrecht",
		status: "verfügbar",
		feedback: null
	},
	{
		teacherUsername: "WIR",
		teacherFirstname: "Thomas",
		teacherLastname: "Krammer",

		impteacherUsername: null,
		impteacherFirstname: null,
		impteacherLastname: null,

		date: "02.02.2024",
		starttime: "07:50",
		endtime: "08:40",

		room: "T127",
		subject: "WIR",
		information: "Arbeitsrecht",
		status: "verfügbar",
		feedback: null
	},
	{
		teacherUsername: "WIR",
		teacherFirstname: "Thomas",
		teacherLastname: "Krammer",

		impteacherUsername: null,
		impteacherFirstname: null,
		impteacherLastname: null,

		date: "03.02.2024",
		starttime: "07:50",
		endtime: "08:40",

		room: "T127",
		subject: "WIR",
		information: "Vertragsrecht",
		status: "verfügbar",
		feedback: null
	},
	{
		teacherUsername: "LOEF",
		teacherFirstname: "Franz",
		teacherLastname: "Lösch",

		impteacherUsername: null,
		impteacherFirstname: null,
		impteacherLastname: null,

		date: "01.03.2024",
		starttime: "07:50",
		endtime: "08:40",

		room: "T127",
		subject: "D",
		information: "Literaturgeschichte",
		status: "verfügbar",
		feedback: null
	},
	{
		teacherUsername: "LOEF",
		teacherFirstname: "Franz",
		teacherLastname: "Lösch",

		impteacherUsername: null,
		impteacherFirstname: null,
		impteacherLastname: null,

		date: "02.03.2024",
		starttime: "07:50",
		endtime: "08:40",

		room: "T127",
		subject: "D",
		information: "Textanalyse",
		status: "verfügbar",
		feedback: null
	},
	{
		teacherUsername: "LOEF",
		teacherFirstname: "Franz",
		teacherLastname: "Lösch",

		impteacherUsername: null,
		impteacherFirstname: null,
		impteacherLastname: null,

		date: "03.03.2024",
		starttime: "07:50",
		endtime: "08:40",

		room: "T127",
		subject: "D",
		information: "Textinterpretation",
		status: "verfügbar",
		feedback: null
	},
	{
		teacherUsername: "WIDM",
		teacherFirstname: "Manfred",
		teacherLastname: "Widmann",

		impteacherUsername: null,
		impteacherFirstname: null,
		impteacherLastname: null,

		date: "01.04.2024",
		starttime: "07:50",
		endtime: "08:40",

		room: "T127",
		subject: "ITP",
		information: "SCRUM",
		status: "verfügbar",
		feedback: null
	},
	{
		teacherUsername: "WIDM",
		teacherFirstname: "Manfred",
		teacherLastname: "Widmann",

		impteacherUsername: null,
		impteacherFirstname: null,
		impteacherLastname: null,

		date: "02.04.2024",
		starttime: "07:50",
		endtime: "08:40",

		room: "T127",
		subject: "ITP",
		information: "UML",
		status: "verfügbar",
		feedback: null
	},
	{
		teacherUsername: "WIDM",
		teacherFirstname: "Manfred",
		teacherLastname: "Widmann",

		impteacherUsername: null,
		impteacherFirstname: null,
		impteacherLastname: null,

		date: "03.04.2024",
		starttime: "07:50",
		endtime: "08:40",

		room: "T127",
		subject: "ITP",
		information: "Qualitätsmanagement",
		status: "verfügbar",
		feedback: null
	},
	{
		teacherUsername: "WINJ",
		teacherFirstname: "Josef",
		teacherLastname: "Winkler",

		impteacherUsername: null,
		impteacherFirstname: null,
		impteacherLastname: null,

		date: "01.05.2024",
		starttime: "07:50",
		endtime: "08:40",

		room: "T127",
		subject: "INSY",
		information: "Joomla",
		status: "verfügbar",
		feedback: null
	},
	{
		teacherUsername: "WINJ",
		teacherFirstname: "Josef",
		teacherLastname: "Winkler",

		impteacherUsername: null,
		impteacherFirstname: null,
		impteacherLastname: null,

		date: "02.05.2024",
		starttime: "07:50",
		endtime: "08:40",

		room: "T127",
		subject: "INSY",
		information: "Wordpress",
		status: "verfügbar",
		feedback: null
	},
	{
		teacherUsername: "WINJ",
		teacherFirstname: "Josef",
		teacherLastname: "Winkler",

		impteacherUsername: null,
		impteacherFirstname: null,
		impteacherLastname: null,

		date: "03.05.2024",
		starttime: "07:50",
		endtime: "08:40",

		room: "T127",
		subject: "INSY",
		information: "Wix",
		status: "verfügbar",
		feedback: null
	}
]

module.exports = {
	users,
	hospitations,
};