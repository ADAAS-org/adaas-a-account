import { A_ACCOUNT_TYPES__Country_APIEntity, A_ACCOUNT_TYPES__Timezone_APIEntity } from "../../common/types/A_ACCOUNT_CommonAPI.types";
import { A_ACCOUNT_TYPES__User_APIEntity } from "../../user/types/A_ACCOUNT_UsersAPI.types";
import { A_ACCOUNT_TYPES__Organization_APIEntity } from "./A_ACCOUNT_OrganizationsAPI.types";
export type A_ACCOUNT_TYPES__OrganizationUnitType_APIEntity = {
    id: number;
    identity: string;
    name: string;
    icon?: string;
    description?: string;
    settings?: A_ACCOUNT_TYPES__OrganizationUnitTypeSettings_APIEntity;
    organization?: A_ACCOUNT_TYPES__Organization_APIEntity;
    /**
     * User who created this organization unit
     */
    user?: A_ACCOUNT_TYPES__User_APIEntity;
    adaas_sso_role_identity: string;
    created_at: string;
    updated_at: string;
};
export type A_ACCOUNT_TYPES__OrganizationUnitTypeSettings_APIEntity = {
    id: number;
    system_background: string;
    country: A_ACCOUNT_TYPES__Country_APIEntity;
    timezone: A_ACCOUNT_TYPES__Timezone_APIEntity;
};
