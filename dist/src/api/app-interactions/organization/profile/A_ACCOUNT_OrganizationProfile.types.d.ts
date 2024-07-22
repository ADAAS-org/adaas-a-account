import { A_SDK_TYPES__DeepPartial } from "@adaas/a-sdk-types";
export type A_ACCOUNT_TYPES__OrganizationProfile_APIEntity = {
    id: number;
    name: string;
    address: string;
    postal_code: string;
    contact_email: string;
    linkedin_profile_url: string;
    website: string;
    a_folder_logo_aseid: string;
    created_at: string;
    updated_at: string;
};
export type A_ACCOUNT_APP_INTERACTIONS_TYPES__OrganizationProfileGetRequest = {
    /**
     * Organization identifier in ADAAS System
     */
    orgASEID: string;
};
export type A_ACCOUNT_APP_INTERACTIONS_TYPES__OrganizationProfileGetResponse = Partial<A_ACCOUNT_TYPES__OrganizationProfile_APIEntity>;
export type A_ACCOUNT_APP_INTERACTIONS_TYPES__OrganizationProfileUpdateRequest = {
    /**
     * Organization identifier in ADAAS System
     */
    orgASEID: string;
    profile: A_SDK_TYPES__DeepPartial<A_ACCOUNT_TYPES__OrganizationProfile_APIEntity>;
};
export type A_ACCOUNT_APP_INTERACTIONS_TYPES__OrganizationProfileUpdateResponse = Partial<A_ACCOUNT_TYPES__OrganizationProfile_APIEntity>;
export type A_ACCOUNT_APP_INTERACTIONS_TYPES__OrganizationProfileLogoUploadRequest = {
    /**
     * Organization identifier in ADAAS System
     */
    orgASEID: string;
    file: File;
};
export type A_ACCOUNT_APP_INTERACTIONS_TYPES__OrganizationProfileLogoUploadResponse = {
    logo_a_folder_aseid: string;
};
