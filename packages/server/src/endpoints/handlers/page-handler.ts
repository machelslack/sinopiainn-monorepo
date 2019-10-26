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
    const activeRoute: route = routes.find((route: route) => matchPath(req.url, route)) || {};
    const constructHTML = activeRoute.fetchData ? apis[req.path] : Promise.resolve();
    constructHTML(req).then((pageData: any) => pageBuilder(pageData).then((html: any) => res.send(html))).catch(next);
};

export default pageHandler;