export type Hospitation = {

  id?: string;

  teacherUsername: string;
  teacherFirstname: string;
  teacherLastname: string;

  impteacherUsername?: string;
  impteacherFirstname?: string;
  impteacherLastname?: string;

  date: string;
  starttime: string;
  endtime: string;

  room: string;
  subject: string;
  information: string;
  status: string;
  feedback?: string;
}

export type User = {
  id?: string;
  username: string;
  firstname: string;
  lastname: string;
  password: string;
};

export type HospitationForm = {
  id: string,
  date: string;
  starttime: string;
  endtime: string;
  room: string;
  subject: string;
  information: string;
};

export type FeedbackForm = {
  id: string;
  feedback: string;
};