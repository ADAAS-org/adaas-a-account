import { A_SDK_TYPES__IDefaultPagination, A_SDK_TYPES__IRequestFilter, A_SDK_TYPES__IRequestPagination } from "@adaas/a-sdk-types";
import { A_ACCOUNT_TYPES__BusinessDomain_APIEntity, A_ACCOUNT_TYPES__BusinessType_APIEntity } from "../common/A_ACCOUNT_Common.types";
import { A_ACCOUNT_TYPES__User_APIEntity } from "../users/A_ACCOUNT_User.types";
import { A_ACCOUNT_TYPES__OrganizationBalance_APIEntity } from "./balance/A_ACCOUNT_OrganizationBalance.types";
import { A_ACCOUNT_TYPES__OrganizationProfile_APIEntity } from "./profile/A_ACCOUNT_OrganizationProfile.types";
import { A_ACCOUNT_TYPES__OrganizationSettings_APIEntity } from "./settings/A_ACCOUNT_OrganizationSettings.types";
import { A_SDK_TYPES__DeepPartial, A_SDK_TYPES__ExtractProperties, A_SDK_TYPES__Required } from "@adaas/a-sdk-types/dist/src/types/common.types";
export type A_ACCOUNT_TYPES__Organization_APIEntity = {
    aseid: string;
    Profile: A_ACCOUNT_TYPES__OrganizationProfile_APIEntity;
    Settings: A_ACCOUNT_TYPES__OrganizationSettings_APIEntity;
    BusinessType: A_ACCOUNT_TYPES__BusinessType_APIEntity;
    BusinessDomains: Array<{
        domain_id: number;
        Domain?: A_ACCOUNT_TYPES__BusinessDomain_APIEntity;
    }>;
    Balance: A_ACCOUNT_TYPES__OrganizationBalance_APIEntity;
    /**
    * User who created this organization
    */
    Owner: A_ACCOUNT_TYPES__User_APIEntity;
    a_sso_role_aseid: string;
    a_arc_scope_aseid: string;
    created_at: string;
    updated_at: string;
};
export type A_ACCOUNT_APP_INTERACTIONS_TYPES__OrganizationListRequest = {
    pagination: A_SDK_TYPES__IRequestPagination;
    filter: A_SDK_TYPES__IRequestFilter;
};
export type A_ACCOUNT_APP_INTERACTIONS_TYPES__OrganizationListResponse = A_SDK_TYPES__IDefaultPagination<A_ACCOUNT_TYPES__Organization_APIEntity>;
export type A_ACCOUNT_APP_INTERACTIONS_TYPES__OrganizationGetRequest = {
    /**
     * Organization identifier in ADAAS System
     */
    orgASEID: string;
};
export type A_ACCOUNT_APP_INTERACTIONS_TYPES__OrganizationGetResponse = A_SDK_TYPES__Required<A_SDK_TYPES__DeepPartial<A_ACCOUNT_TYPES__Organization_APIEntity>, [
    'aseid',
    'a_sso_role_aseid',
    'a_arc_scope_aseid',
    'Profile',
    'Settings',
    'BusinessType',
    'created_at',
    'updated_at'
]>;
export type A_ACCOUNT_APP_INTERACTIONS_TYPES__OrganizationCreateRequest = A_SDK_TYPES__ExtractProperties<A_ACCOUNT_TYPES__Organization_APIEntity, [
    'Profile.name',
    'Profile.website',
    'Profile.contact_email'
]> & A_SDK_TYPES__DeepPartial<A_SDK_TYPES__ExtractProperties<A_ACCOUNT_TYPES__Organization_APIEntity, [
    'Profile.address',
    'Profile.postal_code',
    'Profile.linkedin_profile_url',
    'Settings.Timezone',
    'Settings.Country',
    'BusinessType',
    'BusinessDomains'
]>>;
export type A_ACCOUNT_APP_INTERACTIONS_TYPES__OrganizationCreateResponse = A_ACCOUNT_TYPES__Organization_APIEntity;
export type A_ACCOUNT_APP_INTERACTIONS_TYPES__OrganizationUpdateRequest = A_SDK_TYPES__Required<A_SDK_TYPES__DeepPartial<A_ACCOUNT_TYPES__Organization_APIEntity>, [
    'aseid'
]>;
export type A_ACCOUNT_APP_INTERACTIONS_TYPES__OrganizationUpdateResponse = A_SDK_TYPES__IDefaultPagination<A_ACCOUNT_TYPES__Organization_APIEntity>;
