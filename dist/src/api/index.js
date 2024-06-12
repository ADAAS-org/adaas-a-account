"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.A_ACCOUNT_UsersAPI = exports.A_ACCOUNT_OrganizationsAPI = exports.A_ACCOUNT_CommonAPI = void 0;
const A_ACCOUNT_Common_api_1 = require("./common/A_ACCOUNT_Common.api");
const A_ACCOUNT_Organization_api_1 = require("./organization/A_ACCOUNT_Organization.api");
const A_ACCOUNT_Users_api_1 = require("./user/A_ACCOUNT_Users.api");
exports.A_ACCOUNT_CommonAPI = new A_ACCOUNT_Common_api_1.A_ACCOUNT_CommonAPIClass();
exports.A_ACCOUNT_OrganizationsAPI = new A_ACCOUNT_Organization_api_1.A_ACCOUNT_OrganizationsAPIClass();
exports.A_ACCOUNT_UsersAPI = new A_ACCOUNT_Users_api_1.A_ACCOUNT_UsersAPIClass();
//# sourceMappingURL=index.js.map