import { A_SDK_TYPES__IDefaultPagination, A_SDK_TYPES__IRequestFilter, A_SDK_TYPES__IRequestPagination } from "@adaas/a-sdk-types";
import { A_ACCOUNT_TYPES__OrganizationProfile_APIEntity, A_ACCOUNT_TYPES__OrganizationSettings_APIEntity, A_ACCOUNT_TYPES__Organization_APIEntity } from "./types/A_ACCOUNT_OrganizationsAPI.types";
import { A_AUTH_APIProvider } from "@adaas/a-auth";
import { A_ACCOUNT_TYPES__OrganizationUnit_APIEntity } from "./types/A_ACCOUNT_OrganizationUnitsAPI.types";
import { A_SDK_TYPES__DeepPartial, A_SDK_TYPES__Required } from "@adaas/a-sdk-types/dist/src/types/common.types";
export declare class A_ACCOUNT_OrganizationsAPIClass extends A_AUTH_APIProvider {
    constructor(baseURL?: string);
    /**
     * Returns list of organizations based on api credentials and user permissions
     *
     * @param pagination
     * @param filter
     * @returns
     */
    getOrganizations(pagination: A_SDK_TYPES__IRequestPagination, filter: A_SDK_TYPES__IRequestFilter): Promise<A_SDK_TYPES__IDefaultPagination<A_ACCOUNT_TYPES__Organization_APIEntity>>;
    /**
     *  This function is used to get organization with nested entities such as profile, settings, etc.
     *
     * @param organizationIdOrIdentity
     * @returns
     */
    getOrganization(organizationIdOrIdentity: number | string): Promise<A_ACCOUNT_TYPES__Organization_APIEntity>;
    /**
     * This function is used to create organization
     *
     * @param organization
     * @returns
     */
    createOrganization(organization: A_SDK_TYPES__Required<A_SDK_TYPES__DeepPartial<A_ACCOUNT_TYPES__Organization_APIEntity>, [
        'adaas_sso_role_identity',
        'settings.timezone',
        'settings.country',
        'profile.name',
        'profile.website',
        'user'
    ]>): Promise<A_ACCOUNT_TYPES__Organization_APIEntity>;
    /**
     *
     * This function is used to get organization profile
     *
     * @param organizationIdOrIdentity
     * @returns
     */
    getOrganizationProfile(organizationIdOrIdentity: number | string): Promise<A_ACCOUNT_TYPES__OrganizationProfile_APIEntity>;
    /**
     * This function is used to upload organization logo
     *
     * @param organizationIdOrIdentity
     * @param file
     * @returns
     */
    uploadLogo(organizationIdOrIdentity: number | string, file: File): Promise<A_ACCOUNT_TYPES__Organization_APIEntity>;
    updateOrganizationProfile(organizationIdOrIdentity: number | string, profile: A_SDK_TYPES__DeepPartial<A_ACCOUNT_TYPES__OrganizationProfile_APIEntity>): Promise<A_ACCOUNT_TYPES__OrganizationProfile_APIEntity>;
    /**
     *
     *  This function is used to get organization settings
     *
     * @param organizationIdOrIdentity
     * @returns
     */
    getOrganizationSettings(organizationIdOrIdentity: number | string): Promise<A_ACCOUNT_TYPES__OrganizationSettings_APIEntity>;
    /**
     * This function is used to get organization settings
     *
     * @param organizationIdOrIdentity  numeric organization id or string identity
     * @param settings  object with settings
     * @returns
     */
    updateOrganizationSettings(organizationIdOrIdentity: number | string, settings: A_SDK_TYPES__DeepPartial<A_ACCOUNT_TYPES__OrganizationSettings_APIEntity>): Promise<any>;
    getOrganizationBalance(organizationIdOrIdentity: number | string): Promise<any>;
    withdrawOrganizationBalance(organizationIdOrIdentity: number | string, amount: number, payload: any): Promise<any>;
    depositOrganizationBalance(organizationIdOrIdentity: number | string, amount: number, payload: any): Promise<any>;
    getOrganizationUnits(organizationIdOrIdentity: number | string, pagination: A_SDK_TYPES__IRequestPagination, filter: A_SDK_TYPES__IRequestFilter): Promise<A_SDK_TYPES__IDefaultPagination<A_ACCOUNT_TYPES__OrganizationUnit_APIEntity>>;
    getOrganizationUnit(organizationIdOrIdentity: number | string, unitIdOrIdentity: number | string): Promise<A_ACCOUNT_TYPES__OrganizationUnit_APIEntity>;
    /**
     *
     * Allows to create organization unit from template or from scratch
     *
     * @param organizationIdOrIdentity
     * @param unit
     * @returns
     */
    createOrganizationUnit(organizationIdOrIdentity: number | string, unit: A_SDK_TYPES__DeepPartial<A_ACCOUNT_TYPES__OrganizationUnit_APIEntity>): Promise<A_ACCOUNT_TYPES__OrganizationUnit_APIEntity>;
}
