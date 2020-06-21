import Request from "./index";

const generation = {
  first: () => {
    const r = new Request();

    return r.send({
      method: "get",
      url: "generation/1",
    });
  },

  second: () => {
    const r = new Request();

    return r.send({
      method: "get",
      url: "generation/2",
    });
  },

  third: () => {
    const r = new Request();

    return r.send({
      method: "get",
      url: "generation/3",
    });
  },

  fourth: () => {
    const r = new Request();

    return r.send({
      method: "get",
      url: "generation/4",
    });
  },

  fifth: () => {
    const r = new Request();

    return r.send({
      method: "get",
      url: "generation/5",
    });
  },

  sixth: () => {
    const r = new Request();

    return r.send({
      method: "get",
      url: "generation/6",
    });
  },

  seventh: () => {
    const r = new Request();

    return r.send({
      method: "get",
      url: "generation/7",
    });
  },
};

export default generation;
