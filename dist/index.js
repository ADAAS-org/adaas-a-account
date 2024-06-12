"use strict";
// ============ TYPES Export ============
Object.defineProperty(exports, "__esModule", { value: true });
exports.A_ACCOUNT_UsersAPIClass = exports.A_ACCOUNT_OrganizationsAPIClass = exports.A_ACCOUNT_CommonAPIClass = exports.A_ACCOUNT_UsersAPI = exports.A_ACCOUNT_OrganizationsAPI = exports.A_ACCOUNT_CommonAPI = void 0;
// ================== API ==================
// Mainly for BE purposes it uses API paths from ENV Variables
var api_1 = require("./src/api");
Object.defineProperty(exports, "A_ACCOUNT_CommonAPI", { enumerable: true, get: function () { return api_1.A_ACCOUNT_CommonAPI; } });
Object.defineProperty(exports, "A_ACCOUNT_OrganizationsAPI", { enumerable: true, get: function () { return api_1.A_ACCOUNT_OrganizationsAPI; } });
Object.defineProperty(exports, "A_ACCOUNT_UsersAPI", { enumerable: true, get: function () { return api_1.A_ACCOUNT_UsersAPI; } });
// ============ API CLASSES Export ============
// Mainly for FE purposes it uses API directly from class constructor
var A_ACCOUNT_Common_api_1 = require("./src/api/common/A_ACCOUNT_Common.api");
Object.defineProperty(exports, "A_ACCOUNT_CommonAPIClass", { enumerable: true, get: function () { return A_ACCOUNT_Common_api_1.A_ACCOUNT_CommonAPIClass; } });
var A_ACCOUNT_Organization_api_1 = require("./src/api/organization/A_ACCOUNT_Organization.api");
Object.defineProperty(exports, "A_ACCOUNT_OrganizationsAPIClass", { enumerable: true, get: function () { return A_ACCOUNT_Organization_api_1.A_ACCOUNT_OrganizationsAPIClass; } });
var A_ACCOUNT_Users_api_1 = require("./src/api/user/A_ACCOUNT_Users.api");
Object.defineProperty(exports, "A_ACCOUNT_UsersAPIClass", { enumerable: true, get: function () { return A_ACCOUNT_Users_api_1.A_ACCOUNT_UsersAPIClass; } });
//# sourceMappingURL=index.js.map