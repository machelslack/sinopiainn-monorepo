import { matchPath } from "react-router-dom"
import { routes } from "@sinopiainn/components/lib/configs/routes";
import pageBuilder from "../../page-builder";
import { apis } from "../apis";
interface route {
    path?: string;
    exact?: boolean;
    api?: string;
}
const pageHandler = async (req: any, res: any, next: any) => {

    const activeRoute: route = routes.find((route: route) => matchPath(req.url, route)) || {};
    const promise = activeRoute.api ? apis[req.path] : Promise.resolve();
    promise(req).then((req: any) => pageBuilder(req).then((page: any) => res.send(page))).catch(next);

};

export default pageHandler;