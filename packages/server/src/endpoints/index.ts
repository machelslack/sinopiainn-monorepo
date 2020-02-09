import { routes } from "@sinopiainn/components/lib/configs/routes";
import { pageHandler } from "./handlers";

const wrapper = (handler: any) =>
  function handlerWrapper(req: any, res: any, next: any) {
    Promise.resolve()
      .then(() => handler(req, res))
      .catch(next);
  };

module.exports = (app: any) => {
  routes.forEach(route => {
    app.get(route.path, wrapper(pageHandler));
  });
  app.post("/enquiry", wrapper(pageHandler));
};
