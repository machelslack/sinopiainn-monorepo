const express = require('express');
const { dirname, join } = require('path');

const staticFilesRouter = express.Router();

const componentLibraryDistPath = join(
  dirname(require.resolve('@sinopiainn/components')));

staticFilesRouter.use(`/app.js`, express.static(`${componentLibraryDistPath}/app.js`));
staticFilesRouter.use(`/assets`, express.static(`${componentLibraryDistPath}/assets`));


export { staticFilesRouter }