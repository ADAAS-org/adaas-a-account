import { A_ACCOUNT_TYPES__User_APIEntity } from "../../../users/A_ACCOUNT_User.types";
import { A_ACCOUNT_TYPES__Organization_APIEntity } from "../../A_ACCOUNT_Organization.types";
import { A_ACCOUNT_TYPES__Country_APIEntity, A_ACCOUNT_TYPES__Timezone_APIEntity } from "../../../common/A_ACCOUNT_Common.types";
import { A_SDK_TYPES__DeepPartial, A_SDK_TYPES__IDefaultPagination, A_SDK_TYPES__IRequestFilter, A_SDK_TYPES__IRequestPagination, A_SDK_TYPES__Required } from "@adaas/a-sdk-types";
import { A_SDK_TYPES__ExtractProperties } from "@adaas/a-sdk-types/dist/src/types/common.types";
export type A_ACCOUNT_TYPES__OrganizationUnitType_APIEntity = {
    id: number;
    aseid: string;
    name: string;
    icon?: string;
    description?: string;
    settings: A_ACCOUNT_TYPES__OrganizationUnitTypeSettings_APIEntity;
    organization: A_ACCOUNT_TYPES__Organization_APIEntity;
    /**
     * User who created this organization unit
     */
    owner: A_ACCOUNT_TYPES__User_APIEntity;
    adaas_sso_role_aseid: string;
    created_at: string;
    updated_at: string;
};
export type A_ACCOUNT_TYPES__OrganizationUnitTypeSettings_APIEntity = {
    id: number;
    system_background: string;
    country: A_ACCOUNT_TYPES__Country_APIEntity;
    timezone: A_ACCOUNT_TYPES__Timezone_APIEntity;
};
export type A_ACCOUNT_APP_INTERACTIONS_TYPES__OrganizationUnitTypeListRequest = {
    /**
     * Organization identifier in ADAAS System
     */
    orgASEID: string;
    pagination: A_SDK_TYPES__IRequestPagination;
    filter: A_SDK_TYPES__IRequestFilter;
};
export type A_ACCOUNT_APP_INTERACTIONS_TYPES__OrganizationUnitTypeListResponse = A_SDK_TYPES__IDefaultPagination<A_ACCOUNT_TYPES__OrganizationUnitType_APIEntity>;
export type A_ACCOUNT_APP_INTERACTIONS_TYPES__OrganizationUnitTypeGetRequest = {
    /**
     * Organization identifier in ADAAS System
     */
    orgASEID: string;
    /**
     * Organization Unit Type identifier in ADAAS System
     */
    unitTypeASEID: string;
};
export type A_ACCOUNT_APP_INTERACTIONS_TYPES__OrganizationUnitTypeGetResponse = A_ACCOUNT_TYPES__OrganizationUnitType_APIEntity;
export type A_ACCOUNT_APP_INTERACTIONS_TYPES__OrganizationUnitTypeCreateRequest = A_SDK_TYPES__ExtractProperties<A_ACCOUNT_TYPES__OrganizationUnitType_APIEntity, [
    'settings.timezone',
    'settings.country',
    'name',
    'description',
    'icon'
]> & {
    /**
     * Organization identifier in ADAAS System
     */
    orgASEID: string;
};
export type A_ACCOUNT_APP_INTERACTIONS_TYPES__OrganizationUnitTypeCreateResponse = A_ACCOUNT_TYPES__OrganizationUnitType_APIEntity;
export type A_ACCOUNT_APP_INTERACTIONS_TYPES__OrganizationUnitTypeUpdateRequest = A_SDK_TYPES__Required<A_SDK_TYPES__DeepPartial<A_ACCOUNT_TYPES__OrganizationUnitType_APIEntity>, [
    'aseid'
]> & {
    /**
     * Organization identifier in ADAAS System
     */
    orgASEID: string;
};
export type A_ACCOUNT_APP_INTERACTIONS_TYPES__OrganizationUnitTypeUpdateResponse = A_ACCOUNT_TYPES__OrganizationUnitType_APIEntity;
export type A_ACCOUNT_APP_INTERACTIONS_TYPES__OrganizationUnitTypeDeleteRequest = {
    /**
     * Organization identifier in ADAAS System
     */
    orgASEID: string;
    /**
     * Organization Unit Type identifier in ADAAS System
     */
    unitTypeASEID: string;
};
export type A_ACCOUNT_APP_INTERACTIONS_TYPES__OrganizationUnitTypeDeleteResponse = {
    status: 'OK' | 'ERROR';
};
