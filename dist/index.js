"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.A_ACCOUNT_CONSTANTS__ERROR_CODES = exports.A_ACCOUNT_CONSTANTS__DEFAULT_ERRORS = exports.A_ACCOUNT_ServerCommands = exports.A_ACCOUNT_AppInteractions = exports.A_ACCOUNT_ContextClass = exports.A_ACCOUNT_Context = void 0;
var A_ACCOUNT_Context_class_1 = require("./src/global/A_ACCOUNT_Context.class");
Object.defineProperty(exports, "A_ACCOUNT_Context", { enumerable: true, get: function () { return A_ACCOUNT_Context_class_1.A_ACCOUNT_Context; } });
Object.defineProperty(exports, "A_ACCOUNT_ContextClass", { enumerable: true, get: function () { return A_ACCOUNT_Context_class_1.A_ACCOUNT_ContextClass; } });
// ============ Export Global & Service Entities ============
// ================== API ==================
exports.A_ACCOUNT_AppInteractions = __importStar(require("./src/api/app-interactions"));
exports.A_ACCOUNT_ServerCommands = __importStar(require("./src/api/server-commands"));
// export * as A_AUTH_ServerDelegate from './src/api/server-delegate';
// ============ CONSTANTS Export ============
var errors_constants_1 = require("./src/constants/errors.constants");
Object.defineProperty(exports, "A_ACCOUNT_CONSTANTS__DEFAULT_ERRORS", { enumerable: true, get: function () { return errors_constants_1.A_ACCOUNT_CONSTANTS__DEFAULT_ERRORS; } });
Object.defineProperty(exports, "A_ACCOUNT_CONSTANTS__ERROR_CODES", { enumerable: true, get: function () { return errors_constants_1.A_ACCOUNT_CONSTANTS__ERROR_CODES; } });
// ============ TYPES Export ============
// ============ API TYPES Export ============
__exportStar(require("./src/api/app-interactions/index.types"), exports);
__exportStar(require("./src/api/server-commands/index.types"), exports);
//# sourceMappingURL=index.js.map