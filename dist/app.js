"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const body_parser_1 = require("body-parser");
// import { router as dataRouter } from './routes';
const app = (0, express_1.default)();
const port = 3000;
app.use(body_parser_1.default.json());
// app.use('/api', dataRouter);
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
//# sourceMappingURL=app.js.map