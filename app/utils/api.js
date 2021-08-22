  import * as axios from "axios";

  export default class Api {
    constructor() {
      this.api_token = null;
      this.client = null;
      this.api_url = "http://ec2-52-23-228-226.compute-1.amazonaws.com:8080";
    }
  
    init = () => {
      this.api_token = "MI TOKEN"
  
      let headers = {
        Accept: "application/json",
      };
  
      if (this.api_token) {
        headers.Authorization = `Bearer ${this.api_token}`;
      }
  
      this.client = axios.create({
        baseURL: this.api_url,
        timeout: 31000,
        headers: headers,
      });
  
      return this.client;
    };
  
    getContacts = (params) => {
      return this.init().get("/contacts", { params: params });
    };

  }