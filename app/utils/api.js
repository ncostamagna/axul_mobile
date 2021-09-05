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
  
    get = (data) => {
      let url = '/events'
      if (data.expired == 1) {
        url = `${url}?expired=1`
      } 

      console.log(`GET ${url}`)
      return this.init().get(url);
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

  class Users {
    constructor() {
      this.api_token = null;
      this.client = null;
      this.api_url = "http://ec2-52-23-228-226.compute-1.amazonaws.com:8082";
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
      console.log(`GET /users`)
      return this.init().get("/users", { params: params });
    };

    login = (body) => {
      console.log(`POST /users/login`)
      return this.init().post("/users/login", body);
    };

    token = (userID, token) => {
      let url = `/users/${userID}/token/${token}`
      console.log(`POST ${url}`)
      return this.init().get(url);
    };

    create = (body) => {
      console.log(`POST /users`)
      return this.init().post("/users", body);
    }

  }

  export {Contacts, Events, Users}