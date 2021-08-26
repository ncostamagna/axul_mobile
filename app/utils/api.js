  import * as axios from "axios";

  class Contacts {
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
  
    get = (params) => {
      console.log(`GET /contacts`)
      return this.init().get("/contacts", { params: params });
    };

    getByDays = (days) => {
      console.log(`GET /contacts?days=${days}`)
      return this.init().get(`/contacts?days=${days}`);
    };

    create = (body) => {
      console.log(`POST /contacts`)
      return this.init().post("/contacts", body);
    }

  }

  class Events {
    constructor() {
      this.api_token = null;
      this.client = null;
      this.api_url = "http://ec2-52-23-228-226.compute-1.amazonaws.com:8081";
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
  
    get = (params) => {
      console.log(`GET /events`)
      return this.init().get("/events", { params: params });
    };

    getByDays = (days) => {
      console.log(`GET /events?days=${days}`)
      return this.init().get(`/events?days=${days}`);
    };

    create = (body) => {
      console.log(`POST /events`)
      return this.init().post("/events", body);
    }

  }

  export {Contacts, Events}