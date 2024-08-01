import { A_ACCOUNT_Context } from "@adaas/a-sdk/global/A_ACCOUNT_Context.class";
import { A_ACCOUNT_SERVER_COMMANDS__OrganizationAPI } from "./organization/A_ACCOUNT_Organization.api";
import { A_ACCOUNT_SERVER_COMMANDS__OrganizationBalanceAPI } from "./organization/balance/A_ACCOUNT_OrganizationBalance.api";
import { A_ACCOUNT_SERVER_COMMANDS__UserAPI } from "./user/A_ACCOUNT_User.api";



export const Organization = new A_ACCOUNT_SERVER_COMMANDS__OrganizationAPI(A_ACCOUNT_Context);
export const OrganizationBalance = new A_ACCOUNT_SERVER_COMMANDS__OrganizationBalanceAPI(A_ACCOUNT_Context);
export const User = new A_ACCOUNT_SERVER_COMMANDS__UserAPI(A_ACCOUNT_Context);
