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

  export type HospitationsTable = {
    id: string;
    teacherFirstname: string;
    teacherLastname: string;
    date: string;
    starttime: string;
    endtime: string;
    subject: string;
    information: number;
    status: 'verfügbar' | 'vergeben' | 'abgeschlossen';
  };

  export type User = {
    id:string;
    username: string;
    firstname: string;
    lastname: string;
    password: string;
  };

  export type MongodbUser = {
    _id:string;
    username: string;
    firstname: string;
    lastname: string;
    password: string;
  };

/*********************************Delete all under this *********************************/
export type Customer = {
  id: string;
  name: string;
  email: string;
  image_url: string;
};

export type Invoice = {
  id: string;
  customer_id: string;
  amount: number;
  date: string;
  // In TypeScript, this is called a string union type.
  // It means that the "status" property can only be one of the two strings: 'pending' or 'paid'.
  status: 'pending' | 'paid';
};

export type Revenue = {
  month: string;
  revenue: number;
};

export type LatestInvoice = {
  id: string;
  name: string;
  image_url: string;
  email: string;
  amount: string;
};

// The database returns a number for amount, but we later format it to a string with the formatCurrency function
export type LatestInvoiceRaw = Omit<LatestInvoice, 'amount'> & {
  amount: number;
};

export type InvoicesTable = {
  id: string;
  customer_id: string;
  name: string;
  email: string;
  image_url: string;
  date: string;
  amount: number;
  status: 'pending' | 'paid';
};

export type CustomersTableType = {
  id: string;
  name: string;
  email: string;
  image_url: string;
  total_invoices: number;
  total_pending: number;
  total_paid: number;
};

export type FormattedCustomersTable = {
  id: string;
  name: string;
  email: string;
  image_url: string;
  total_invoices: number;
  total_pending: string;
  total_paid: string;
};

export type CustomerField = {
  id: string;
  name: string;
};

export type InvoiceForm = {
  id: string;
  customer_id: string;
  amount: number;
  status: 'pending' | 'paid';
};