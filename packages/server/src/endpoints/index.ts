import {pageHandler} from './handlers';

const wrapper = (handler:any) =>
  function handlerWrapper(req:any, res:any, next:any) {
    Promise.resolve()
      .then(() => handler(req, res))
      .catch(next);
  };

module.exports = (app:any) => {
  [
    ['/', wrapper(pageHandler)],
    ['/blog', wrapper(pageHandler)],
    ['/contact', wrapper(pageHandler)],
    ['/shop', wrapper(pageHandler)],
  ].forEach(([route, handler]) => {
    app.get(route,handler);
  });

}