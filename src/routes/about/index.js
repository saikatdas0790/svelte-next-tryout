export const get = (req, session) => {
  console.log(req);
  return {
    status: 200,
    body: {
      message: `hello, ${
        req.query.has("sayHiTo") ? req.query.get("sayHiTo") : "world"
      }`,
    },
  };
};
