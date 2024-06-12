import { A_ACCOUNT_CommonAPIClass } from "./common/A_ACCOUNT_Common.api";
import { A_ACCOUNT_OrganizationsAPIClass } from "./organization/A_ACCOUNT_Organization.api";
import { A_ACCOUNT_UsersAPIClass } from "./user/A_ACCOUNT_Users.api";

export const A_ACCOUNT_CommonAPI = new A_ACCOUNT_CommonAPIClass();
export const A_ACCOUNT_OrganizationsAPI = new A_ACCOUNT_OrganizationsAPIClass();
export const A_ACCOUNT_UsersAPI = new A_ACCOUNT_UsersAPIClass();
