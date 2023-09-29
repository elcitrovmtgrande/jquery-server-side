"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.$ = exports.server = void 0;
const express_1 = __importDefault(require("express"));
exports.server = (0, express_1.default)();
const $ = function (_) {
    // Si c'est une URL, on stocke l'URL en prop de l'objet et on retourne l'objet pour faire du property chain
    if (isUrl(_)) {
        // @ts-ignore
        exports.$.route = _;
    }
    return exports.$;
};
exports.$ = $;
exports.$.use = function (_) {
    if (typeof _ === 'function') {
        // @ts-ignore
        exports.server.use(exports.$.route, _);
    }
    return exports.$;
};
exports.$.get = function (_) {
    if (typeof _ === 'function') {
        // @ts-ignore
        exports.server.get(exports.$.route, _);
    }
    else if (typeof _ === 'string') {
        // @ts-ignore
        exports.server.get(exports.$.route, (req, res) => {
            console.log(_);
            res.send(_);
        });
    }
    return exports.$;
};
exports.$.post = function (_) {
    if (typeof _ === 'function') {
        // @ts-ignore
        exports.server.post(exports.$.route, _);
    }
    return exports.$;
};
exports.$.put = function (_) {
    if (typeof _ === 'function') {
        // @ts-ignore
        exports.server.put(exports.$.route, _);
    }
    return exports.$;
};
exports.$.delete = function (_) {
    if (typeof _ === 'function') {
        // @ts-ignore
        exports.server.delete(exports.$.route, _);
    }
    return exports.$;
};
exports.$.start = function (p) {
    const port = process.env.PORT
        ? parseInt(process.env.PORT, 10) : (p || 5555);
    exports.server.listen(port, () => {
        console.log(`jQuery server's running on port ::${port}`);
    });
};
function isUrl(str) {
    const regex = /^(?!https?:\/\/).+/;
    return regex.test(str);
}
exports.default = exports.$;
