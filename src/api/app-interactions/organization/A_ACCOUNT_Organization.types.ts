import { A_SDK_TYPES__IDefaultPagination, A_SDK_TYPES__IRequestFilter, A_SDK_TYPES__IRequestPagination } from "@adaas/a-sdk-types";
import {
    A_ACCOUNT_TYPES__BusinessDomain_APIEntity,
    A_ACCOUNT_TYPES__BusinessType_APIEntity,
} from "../common/A_ACCOUNT_Common.types";
import { A_ACCOUNT_TYPES__User_APIEntity } from "../users/A_ACCOUNT_User.types";
import { A_ACCOUNT_TYPES__OrganizationBalance_APIEntity } from "./balance/A_ACCOUNT_OrganizationBalance.types";
import { A_ACCOUNT_TYPES__OrganizationProfile_APIEntity } from "./profile/A_ACCOUNT_OrganizationProfile.types";
import { A_ACCOUNT_TYPES__OrganizationSettings_APIEntity } from "./settings/A_ACCOUNT_OrganizationSettings.types";
import { A_SDK_TYPES__DeepPartial, A_SDK_TYPES__ExtractProperties, A_SDK_TYPES__Required } from "@adaas/a-sdk-types/dist/src/types/common.types";

export type A_ACCOUNT_TYPES__Organization_APIEntity = {
    id: number,
    aseid: string,

    profile: A_ACCOUNT_TYPES__OrganizationProfile_APIEntity
    settings: A_ACCOUNT_TYPES__OrganizationSettings_APIEntity
    businessType: A_ACCOUNT_TYPES__BusinessType_APIEntity

    businessDomains: Array<{
        domain_id: number,
        domain?: A_ACCOUNT_TYPES__BusinessDomain_APIEntity
    }>

    balance: A_ACCOUNT_TYPES__OrganizationBalance_APIEntity

    /**
    * User who created this organization
    */
    owner: A_ACCOUNT_TYPES__User_APIEntity

    adaas_sso_role_aseid: string;
    adaas_arc_scope_aseid: string;

    created_at: string;
    updated_at: string;
};






// =========================  ORGANIZATION LIST REQUEST API TYPES ================================
export type A_ACCOUNT_APP_INTERACTIONS_TYPES__OrganizationListRequest = {
    pagination: A_SDK_TYPES__IRequestPagination,
    filter: A_SDK_TYPES__IRequestFilter
}

export type A_ACCOUNT_APP_INTERACTIONS_TYPES__OrganizationListResponse = A_SDK_TYPES__IDefaultPagination<A_ACCOUNT_TYPES__Organization_APIEntity>


// =========================  ORGANIZATION GET REQUEST API TYPES ================================
export type A_ACCOUNT_APP_INTERACTIONS_TYPES__OrganizationGetRequest = {
    /**
     * Organization identifier in ADAAS System
     */
    orgASEID: string,
}

export type A_ACCOUNT_APP_INTERACTIONS_TYPES__OrganizationGetResponse = A_SDK_TYPES__IDefaultPagination<A_ACCOUNT_TYPES__Organization_APIEntity>


// =========================  ORGANIZATION CREATE REQUEST API TYPES ================================
export type A_ACCOUNT_APP_INTERACTIONS_TYPES__OrganizationCreateRequest = A_SDK_TYPES__ExtractProperties<A_ACCOUNT_TYPES__Organization_APIEntity, [
    'settings.timezone',
    'settings.country',
    'profile.name',
    'profile.website',
]>

export type A_ACCOUNT_APP_INTERACTIONS_TYPES__OrganizationCreateResponse = A_ACCOUNT_TYPES__Organization_APIEntity



// =========================  ORGANIZATION UPDATE REQUEST API TYPES ================================
export type A_ACCOUNT_APP_INTERACTIONS_TYPES__OrganizationUpdateRequest = A_SDK_TYPES__Required<
    A_SDK_TYPES__DeepPartial<A_ACCOUNT_TYPES__Organization_APIEntity>, [
        'aseid'
    ]>

export type A_ACCOUNT_APP_INTERACTIONS_TYPES__OrganizationUpdateResponse = A_SDK_TYPES__IDefaultPagination<A_ACCOUNT_TYPES__Organization_APIEntity>




