"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const { dirname, join } = require('path');
const staticFilesRouter = express.Router();
exports.staticFilesRouter = staticFilesRouter;
const componentLibraryDistPath = join(dirname(require.resolve('@sinopiainn/components')));
staticFilesRouter.use(`/app.js`, express.static(`${componentLibraryDistPath}/app.js`));
staticFilesRouter.use(`/assets`, express.static(`${componentLibraryDistPath}/assets`));
