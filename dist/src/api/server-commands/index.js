"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = exports.OrganizationBalance = exports.Organization = void 0;
const A_ACCOUNT_Context_class_1 = require("../../global/A_ACCOUNT_Context.class");
const A_ACCOUNT_Organization_api_1 = require("./organization/A_ACCOUNT_Organization.api");
const A_ACCOUNT_OrganizationBalance_api_1 = require("./organization/balance/A_ACCOUNT_OrganizationBalance.api");
const A_ACCOUNT_User_api_1 = require("./user/A_ACCOUNT_User.api");
exports.Organization = new A_ACCOUNT_Organization_api_1.A_ACCOUNT_SERVER_COMMANDS__OrganizationAPI(A_ACCOUNT_Context_class_1.A_ACCOUNT_Context);
exports.OrganizationBalance = new A_ACCOUNT_OrganizationBalance_api_1.A_ACCOUNT_SERVER_COMMANDS__OrganizationBalanceAPI(A_ACCOUNT_Context_class_1.A_ACCOUNT_Context);
exports.User = new A_ACCOUNT_User_api_1.A_ACCOUNT_SERVER_COMMANDS__UserAPI(A_ACCOUNT_Context_class_1.A_ACCOUNT_Context);
//# sourceMappingURL=index.js.map