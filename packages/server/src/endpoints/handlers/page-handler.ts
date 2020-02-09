import { matchPath } from "react-router-dom"
import { routes } from "@sinopiainn/components/lib/configs/routes";
import pageBuilder from "../../page-builder";
import { apis } from "../apis";
interface route {
    path?: string;
    exact?: boolean;
    fetchData?: boolean;
}
const pageHandler = async (req: any, res: any, next: any) => {

   
    if(req.method === 'GET'){

        const activeRoute: route = routes.find((route: route) => matchPath(req.url, route)) || {};
        const constructHTML = activeRoute.fetchData ? apis[req.path] : (arg1: any) => new Promise((resolve) => {
            resolve(arg1.url);
        });
        constructHTML(req).then((pageData: any) => pageBuilder(pageData, req).then((html: any) => res.send(html))).catch(next);
    } else {
        apis[req.path](req).then((response:any) => res.json(response)).catch(next)
    }

};

export default pageHandler;
