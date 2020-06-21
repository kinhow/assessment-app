import axios from "axios";

class Request {
  constructor() {
    this.instance = axios.create();
    this.instance.defaults.baseURL = "https://demo7376147.mockable.io/";
  }

  send(opts) {
    const options = {
      ...opts,
      method: "GET",
    };

    const req = this.instance(options);

    return req.then(
      (res) => {
        if (res.data.code < 0) {
          return Promise.reject(res.data);
        }
        return res.data;
      },
      (error) => {
        return Promise.reject(error.res);
      }
    );
  }
}

export default Request;
