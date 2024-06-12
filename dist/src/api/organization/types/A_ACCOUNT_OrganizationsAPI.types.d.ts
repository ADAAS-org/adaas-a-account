import { A_ACCOUNT_TYPES__BusinessDomain_APIEntity, A_ACCOUNT_TYPES__BusinessType_APIEntity, A_ACCOUNT_TYPES__Country_APIEntity, A_ACCOUNT_TYPES__Timezone_APIEntity } from "../../common/types/A_ACCOUNT_CommonAPI.types";
export type A_ACCOUNT_TYPES__Organization_APIEntity = {
    id: number;
    identity: string;
    profile: A_ACCOUNT_TYPES__OrganizationProfile_APIEntity;
    settings?: A_ACCOUNT_TYPES__OrganizationSettings_APIEntity;
    businessType?: A_ACCOUNT_TYPES__BusinessType_APIEntity;
    businessDomains?: Array<{
        domain_id: number;
        domain?: A_ACCOUNT_TYPES__BusinessDomain_APIEntity;
    }>;
    balance?: A_ACCOUNT_TYPES__OrganizationBalance_APIEntity;
    adaas_sso_role_identity: string;
    created_at: string;
    updated_at: string;
};
export type A_ACCOUNT_TYPES__OrganizationProfile_APIEntity = {
    id: number;
    name: string;
    address: string;
    postal_code: string;
    contact_email: string;
    linkedin_profile_url: string;
    website: string;
    logo_a_folder_identity: string;
    created_at: string;
    updated_at: string;
};
export type A_ACCOUNT_TYPES__OrganizationSettings_APIEntity = {
    id: number;
    system_background: string;
    country: A_ACCOUNT_TYPES__Country_APIEntity;
    timezone: A_ACCOUNT_TYPES__Timezone_APIEntity;
};
export type A_ACCOUNT_TYPES__OrganizationBalance_APIEntity = {
    id: number;
    /**
     * this is actual amount in 10 x cents
     * so $10 = 10 (dollars) * 100 (cents) * 10000 = 10,000,000 => 10 * 1,000,000
     */
    amount: number;
};
