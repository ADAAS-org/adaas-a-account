import { A_ACCOUNT_Context } from "@adaas/a-sdk/global/A_ACCOUNT_Context.class";
import { A_ACCOUNT_APP_INTERACTIONS__CommonAPI } from "./common/A_ACCOUNT_Common.api";
import { A_ACCOUNT_APP_INTERACTIONS__OrganizationAPI } from "./organization/A_ACCOUNT_Organization.api";
import { A_ACCOUNT_APP_INTERACTIONS__UserAPI } from "./users/A_ACCOUNT_User.api";
import { A_ACCOUNT_APP_INTERACTIONS__OrganizationUnitAPI } from "./organization/units/A_ACCOUNT_OrganizationUnit.api";
import { A_ACCOUNT_APP_INTERACTIONS__OrganizationSettingsAPI } from "./organization/settings/A_ACCOUNT_OrganizationSettings.api";
import { A_ACCOUNT_APP_INTERACTIONS__OrganizationProfileAPI } from "./organization/profile/A_ACCOUNT_OrganizationProfile.api";
import { A_ACCOUNT_APP_INTERACTIONS__OrganizationBalanceAPI } from "./organization/balance/A_ACCOUNT_OrganizationBalance.api";
import { A_ACCOUNT_APP_INTERACTIONS__OrganizationUnitTypeAPI } from "./organization/units/unit-types/A_ACCCOUNT_OrganizationUnitType.api";
import { A_ACCOUNT_APP_INTERACTIONS__UserProfileAPI } from "./users/profile/A_ACCOUNT_UserProfile.api";
import { A_ACCOUNT_APP_INTERACTIONS__UserSettingsAPI } from "./users/settings/A_ACCOUNT_UserSettings.api";



export const Common = new A_ACCOUNT_APP_INTERACTIONS__CommonAPI(A_ACCOUNT_Context);

export const Organization = new A_ACCOUNT_APP_INTERACTIONS__OrganizationAPI(A_ACCOUNT_Context);
export const OrganizationSettings = new A_ACCOUNT_APP_INTERACTIONS__OrganizationSettingsAPI(A_ACCOUNT_Context);
export const OrganizationProfile = new A_ACCOUNT_APP_INTERACTIONS__OrganizationProfileAPI(A_ACCOUNT_Context);
export const OrganizationBalance = new A_ACCOUNT_APP_INTERACTIONS__OrganizationBalanceAPI(A_ACCOUNT_Context);
export const OrganizationUnit = new A_ACCOUNT_APP_INTERACTIONS__OrganizationUnitAPI(A_ACCOUNT_Context);
export const OrganizationUnitType = new A_ACCOUNT_APP_INTERACTIONS__OrganizationUnitTypeAPI(A_ACCOUNT_Context);

export const User = new A_ACCOUNT_APP_INTERACTIONS__UserAPI(A_ACCOUNT_Context);
export const UserProfile = new A_ACCOUNT_APP_INTERACTIONS__UserProfileAPI(A_ACCOUNT_Context);
export const UserSettings = new A_ACCOUNT_APP_INTERACTIONS__UserSettingsAPI(A_ACCOUNT_Context);