import { A_SDK_TYPES__IDefaultPagination, A_SDK_TYPES__IRequestFilter, A_SDK_TYPES__IRequestPagination } from "@adaas/a-sdk-types";
import { AxiosResponse } from "axios";
import { A_ACCOUNT_TYPES__OrganizationProfile_APIEntity, A_ACCOUNT_TYPES__OrganizationSettings_APIEntity, A_ACCOUNT_TYPES__Organization_APIEntity } from "./types/A_ACCOUNT_OrganizationsAPI.types";
import { A_AUTH_APIProvider } from "@adaas/a-auth";
import { A_ACCOUNT_TYPES__OrganizationUnit_APIEntity } from "./types/A_ACCOUNT_OrganizationUnitsAPI.types";
import { A_SDK_TYPES__DeepPartial, A_SDK_TYPES__Required } from "@adaas/a-sdk-types/dist/src/types/common.types";

export class A_ACCOUNT_OrganizationsAPIClass extends A_AUTH_APIProvider {

    constructor(baseURL?: string) {
        super(baseURL);
        this.baseURL = baseURL || process.env.ADAAS_ACCOUNT_API_LOCATION || 'https://api.account.adaas.org';
        this.init();
    }


    // ==========================================
    // =========== Organization API =============
    // ==========================================

    /**
     * Returns list of organizations based on api credentials and user permissions
     * 
     * @param pagination 
     * @param filter 
     * @returns 
     */
    async getOrganizations(
        pagination: A_SDK_TYPES__IRequestPagination,
        filter: A_SDK_TYPES__IRequestFilter
    ): Promise<A_SDK_TYPES__IDefaultPagination<A_ACCOUNT_TYPES__Organization_APIEntity>> {
        const response: AxiosResponse<
            A_SDK_TYPES__IDefaultPagination<A_ACCOUNT_TYPES__Organization_APIEntity>
        > = await this.axiosInstance
            .get('/api/v1/organizations', {
                params: {
                    ...pagination,
                    ...filter
                }
            });

        return response.data;
    }

    /**
     *  This function is used to get organization with nested entities such as profile, settings, etc.
     * 
     * @param organizationIdOrIdentity 
     * @returns 
     */
    async getOrganization(
        organizationIdOrIdentity: number | string,
    ): Promise<A_ACCOUNT_TYPES__Organization_APIEntity> {
        const response: AxiosResponse<A_ACCOUNT_TYPES__Organization_APIEntity> = await this.axiosInstance
            .get(`/api/v1/organizations/${organizationIdOrIdentity}`);

        return response.data;
    }


    /**
     * This function is used to create organization
     * 
     * @param organization 
     * @returns 
     */
    async createOrganization(
        organization: A_SDK_TYPES__Required<
            A_SDK_TYPES__DeepPartial<A_ACCOUNT_TYPES__Organization_APIEntity>,
            ['adaas_sso_role_identity', 'settings.timezone', 'settings.country', 'profile.name', 'profile.website', 'user', 'user.id']
        >
    ): Promise<
        A_ACCOUNT_TYPES__Organization_APIEntity
    > {

        const response: AxiosResponse<A_ACCOUNT_TYPES__Organization_APIEntity> = await this.axiosInstance
            .post('/api/v1/organizations', organization);

        return response.data;
    }


    // ==========================================
    // ========= Organization Profile ===========
    // ==========================================

    /**
     * 
     * This function is used to get organization profile
     * 
     * @param organizationIdOrIdentity 
     * @returns 
     */
    async getOrganizationProfile(
        organizationIdOrIdentity: number | string,
    ): Promise<
        A_ACCOUNT_TYPES__OrganizationProfile_APIEntity
    > {
        const response: AxiosResponse<A_ACCOUNT_TYPES__OrganizationProfile_APIEntity> = await this.axiosInstance
            .get(`/api/v1/organizations/${organizationIdOrIdentity}/profile`);

        return response.data;
    }

    /**
     * This function is used to upload organization logo
     * 
     * @param organizationIdOrIdentity 
     * @param file 
     * @returns 
     */
    async uploadLogo(
        organizationIdOrIdentity: number | string,
        file: File
    ): Promise<A_ACCOUNT_TYPES__Organization_APIEntity> {
        const formData = new FormData();
        formData.append('file', file);

        const response: AxiosResponse<A_ACCOUNT_TYPES__Organization_APIEntity> = await this.axiosInstance
            .post(
                `/api/v1/organizations/${organizationIdOrIdentity}/profile/logo`,
                formData
            );

        return response.data;
    }


    async updateOrganizationProfile(
        organizationIdOrIdentity: number | string,
        profile: A_SDK_TYPES__DeepPartial<A_ACCOUNT_TYPES__OrganizationProfile_APIEntity>
    ): Promise<A_ACCOUNT_TYPES__OrganizationProfile_APIEntity> {

        const response: AxiosResponse<
            A_ACCOUNT_TYPES__OrganizationProfile_APIEntity
        > = await this.axiosInstance
            .put(
                `/api/v1/organizations/${organizationIdOrIdentity}/profile`,
                profile
            );

        return response.data;
    }


    // ==========================================
    // ========= Organization Settings ==========
    // ==========================================

    /**
     * 
     *  This function is used to get organization settings
     * 
     * @param organizationIdOrIdentity 
     * @returns 
     */
    async getOrganizationSettings(
        organizationIdOrIdentity: number | string
    ): Promise<A_ACCOUNT_TYPES__OrganizationSettings_APIEntity> {
        const response: AxiosResponse<A_ACCOUNT_TYPES__OrganizationSettings_APIEntity> = await this.axiosInstance.get(
            `/api/v1/organizations/${organizationIdOrIdentity}/settings`
        );
        return response.data;
    }

    /**
     * This function is used to get organization settings
     * 
     * @param organizationIdOrIdentity  numeric organization id or string identity
     * @param settings  object with settings
     * @returns 
     */
    async updateOrganizationSettings(
        organizationIdOrIdentity: number | string,
        settings: A_SDK_TYPES__DeepPartial<A_ACCOUNT_TYPES__OrganizationSettings_APIEntity>
    ): Promise<any> {

        const response: AxiosResponse<any> = await this.axiosInstance.put(
            `/api/v1/organizations/${organizationIdOrIdentity}/settings`,
            settings
        );
        return response.data;
    }




    // ==========================================
    // ======== Organization Balance ============
    // ==========================================

    async getOrganizationBalance(
        organizationIdOrIdentity: number | string
    ): Promise<any> {
        const response: AxiosResponse<any> = await this.axiosInstance.get(
            `/api/v1/organizations/${organizationIdOrIdentity}/balance`
        );
        return response.data;
    }

    async withdrawOrganizationBalance(
        organizationIdOrIdentity: number | string,
        amount: number,
        payload: any
    ): Promise<any> {
        const response: AxiosResponse<any> = await this.axiosInstance.post(
            `/api/v1/organizations/${organizationIdOrIdentity}/balance/withdraw`,
            { amount, payload }
        );
        return response.data;
    }

    async depositOrganizationBalance(
        organizationIdOrIdentity: number | string,
        amount: number,
        payload: any
    ): Promise<any> {
        const response: AxiosResponse<any> = await this.axiosInstance.post(
            `/api/v1/organizations/${organizationIdOrIdentity}/balance/deposit`,
            { amount, payload }
        );
        return response.data;
    }



    // ==========================================
    // ======== Organization Units ==============
    // ==========================================
    async getOrganizationUnits(
        organizationIdOrIdentity: number | string,
        pagination: A_SDK_TYPES__IRequestPagination,
        filter: A_SDK_TYPES__IRequestFilter
    ): Promise<A_SDK_TYPES__IDefaultPagination<A_ACCOUNT_TYPES__OrganizationUnit_APIEntity>> {
        const response: AxiosResponse<
            A_SDK_TYPES__IDefaultPagination<A_ACCOUNT_TYPES__OrganizationUnit_APIEntity>
        > = await this.axiosInstance
            .get(`/api/v1/organizations/${organizationIdOrIdentity}/units`, {
                params: {
                    ...pagination,
                    ...filter
                }
            });

        return response.data;
    }

    async getOrganizationUnit(
        organizationIdOrIdentity: number | string,
        unitIdOrIdentity: number | string
    ): Promise<A_ACCOUNT_TYPES__OrganizationUnit_APIEntity> {
        const response: AxiosResponse<A_ACCOUNT_TYPES__OrganizationUnit_APIEntity> = await this.axiosInstance
            .get(`/api/v1/organizations/${organizationIdOrIdentity}/units/${unitIdOrIdentity}`);

        return response.data;
    }


    /**
     * 
     * Allows to create organization unit from template or from scratch
     * 
     * @param organizationIdOrIdentity 
     * @param unit 
     * @returns 
     */
    async createOrganizationUnit(
        organizationIdOrIdentity: number | string,
        unit: A_SDK_TYPES__DeepPartial<A_ACCOUNT_TYPES__OrganizationUnit_APIEntity>
    ): Promise<A_ACCOUNT_TYPES__OrganizationUnit_APIEntity> {
        const response: AxiosResponse<A_ACCOUNT_TYPES__OrganizationUnit_APIEntity> = await this.axiosInstance
            .post(`/api/v1/organizations/${organizationIdOrIdentity}/units`, unit);

        return response.data;
    }
}

