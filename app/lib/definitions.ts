
export type Teacher = {
    _id: string;
    t_id: number;
    acronym: string;
    firstname: string;
    lastname: string;
    password: string;
    email: string;
  };

  export type Hospitation = {
    _id: string;
    h_id: number;
    t_id: number;
    date: string;
    starttimer: string;
    endtime: string;
    subject: string;
    information: string;
    status: string;
    ht_id: number;
    feedback: string;
  }

  export type User = {
    username : string
    password: number
  }