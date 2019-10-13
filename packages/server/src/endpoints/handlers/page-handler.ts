import pageBuilder from "../../page-builder";

const pageHandler = async (req: any, res: any) => { 
    const page = pageBuilder(req);
    res.send(page) 
};

export default pageHandler;