"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSettings = exports.UserProfile = exports.User = exports.OrganizationUnitType = exports.OrganizationUnit = exports.OrganizationBalance = exports.OrganizationProfile = exports.OrganizationSettings = exports.Organization = exports.Common = void 0;
const A_ACCOUNT_Context_class_1 = require("../../global/A_ACCOUNT_Context.class");
const A_ACCOUNT_Common_api_1 = require("./common/A_ACCOUNT_Common.api");
const A_ACCOUNT_Organization_api_1 = require("./organization/A_ACCOUNT_Organization.api");
const A_ACCOUNT_User_api_1 = require("./users/A_ACCOUNT_User.api");
const A_ACCOUNT_OrganizationUnit_api_1 = require("./organization/units/A_ACCOUNT_OrganizationUnit.api");
const A_ACCOUNT_OrganizationSettings_api_1 = require("./organization/settings/A_ACCOUNT_OrganizationSettings.api");
const A_ACCOUNT_OrganizationProfile_api_1 = require("./organization/profile/A_ACCOUNT_OrganizationProfile.api");
const A_ACCOUNT_OrganizationBalance_api_1 = require("./organization/balance/A_ACCOUNT_OrganizationBalance.api");
const A_ACCCOUNT_OrganizationUnitType_api_1 = require("./organization/units/unit-types/A_ACCCOUNT_OrganizationUnitType.api");
const A_ACCOUNT_UserProfile_api_1 = require("./users/profile/A_ACCOUNT_UserProfile.api");
const A_ACCOUNT_UserSettings_api_1 = require("./users/settings/A_ACCOUNT_UserSettings.api");
exports.Common = new A_ACCOUNT_Common_api_1.A_ACCOUNT_APP_INTERACTIONS__CommonAPI(A_ACCOUNT_Context_class_1.A_ACCOUNT_Context);
exports.Organization = new A_ACCOUNT_Organization_api_1.A_ACCOUNT_APP_INTERACTIONS__OrganizationAPI(A_ACCOUNT_Context_class_1.A_ACCOUNT_Context);
exports.OrganizationSettings = new A_ACCOUNT_OrganizationSettings_api_1.A_ACCOUNT_APP_INTERACTIONS__OrganizationSettingsAPI(A_ACCOUNT_Context_class_1.A_ACCOUNT_Context);
exports.OrganizationProfile = new A_ACCOUNT_OrganizationProfile_api_1.A_ACCOUNT_APP_INTERACTIONS__OrganizationProfileAPI(A_ACCOUNT_Context_class_1.A_ACCOUNT_Context);
exports.OrganizationBalance = new A_ACCOUNT_OrganizationBalance_api_1.A_ACCOUNT_APP_INTERACTIONS__OrganizationBalanceAPI(A_ACCOUNT_Context_class_1.A_ACCOUNT_Context);
exports.OrganizationUnit = new A_ACCOUNT_OrganizationUnit_api_1.A_ACCOUNT_APP_INTERACTIONS__OrganizationUnitAPI(A_ACCOUNT_Context_class_1.A_ACCOUNT_Context);
exports.OrganizationUnitType = new A_ACCCOUNT_OrganizationUnitType_api_1.A_ACCOUNT_APP_INTERACTIONS__OrganizationUnitTypeAPI(A_ACCOUNT_Context_class_1.A_ACCOUNT_Context);
exports.User = new A_ACCOUNT_User_api_1.A_ACCOUNT_APP_INTERACTIONS__UserAPI(A_ACCOUNT_Context_class_1.A_ACCOUNT_Context);
exports.UserProfile = new A_ACCOUNT_UserProfile_api_1.A_ACCOUNT_APP_INTERACTIONS__UserProfileAPI(A_ACCOUNT_Context_class_1.A_ACCOUNT_Context);
exports.UserSettings = new A_ACCOUNT_UserSettings_api_1.A_ACCOUNT_APP_INTERACTIONS__UserSettingsAPI(A_ACCOUNT_Context_class_1.A_ACCOUNT_Context);
//# sourceMappingURL=index.js.map