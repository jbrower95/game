"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
app.use('/js', express_1.default.static(__dirname + '/dist'));
app.use('/', express_1.default.static(__dirname + '/static'));
app.listen(3000, () => console.log('Visit http://127.0.0.1:3000'));
//# sourceMappingURL=app.js.map