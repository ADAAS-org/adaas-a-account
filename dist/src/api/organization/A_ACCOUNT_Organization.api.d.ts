import { A_SDK_TYPES__IDefaultPagination, A_SDK_TYPES__IRequestFilter, A_SDK_TYPES__IRequestPagination } from "@adaas/a-sdk-types";
import { A_ACCOUNT_TYPES__OrganizationProfile_APIEntity, A_ACCOUNT_TYPES__OrganizationSettings_APIEntity, A_ACCOUNT_TYPES__Organization_APIEntity } from "./types/A_ACCOUNT_OrganizationsAPI.types";
import { A_AUTH_APIProvider } from "@adaas/a-auth";
export declare class A_ACCOUNT_OrganizationsAPIClass extends A_AUTH_APIProvider {
    constructor(baseURL?: string);
    getOrganizations(pagination: A_SDK_TYPES__IRequestPagination, filter: A_SDK_TYPES__IRequestFilter): Promise<A_SDK_TYPES__IDefaultPagination<A_ACCOUNT_TYPES__Organization_APIEntity>>;
    getOrganization(organizationIdOrIdentity: number | string): Promise<A_ACCOUNT_TYPES__Organization_APIEntity>;
    createOrganization(organization: A_ACCOUNT_TYPES__Organization_APIEntity): Promise<A_ACCOUNT_TYPES__Organization_APIEntity>;
    getOrganizationProfile(organizationIdOrIdentity: number | string): Promise<A_ACCOUNT_TYPES__OrganizationProfile_APIEntity>;
    uploadLogo(organizationIdOrIdentity: number | string, file: File): Promise<A_ACCOUNT_TYPES__Organization_APIEntity>;
    updateOrganizationProfile(organizationIdOrIdentity: number | string, profile: A_ACCOUNT_TYPES__OrganizationProfile_APIEntity): Promise<A_ACCOUNT_TYPES__OrganizationProfile_APIEntity>;
    /**
     * This function is used to get organization settings
     *
     * @param organizationIdOrIdentity  numeric organization id or string identity
     * @param settings  object with settings
     * @returns
     */
    updateOrganizationSettings(organizationIdOrIdentity: number | string, settings: A_ACCOUNT_TYPES__OrganizationSettings_APIEntity): Promise<any>;
    getOrganizationBalance(organizationIdOrIdentity: number | string): Promise<any>;
    withdrawOrganizationBalance(organizationIdOrIdentity: number | string, amount: number, payload: any): Promise<any>;
    depositOrganizationBalance(organizationIdOrIdentity: number | string, amount: number, payload: any): Promise<any>;
}
