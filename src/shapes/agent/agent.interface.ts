interface Iagent {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  role: string;
  LGA: string;
  phone: number | string;
  disciples: {}[];
  requests: [];
  feedbacks: {}[];
}

export default Iagent;
