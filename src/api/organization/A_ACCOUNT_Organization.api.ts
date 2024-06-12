import { A_SDK_TYPES__IDefaultPagination, A_SDK_TYPES__IRequestFilter, A_SDK_TYPES__IRequestPagination } from "@adaas/a-sdk-types";
import { AxiosResponse } from "axios";
import { A_ACCOUNT_TYPES__OrganizationProfile_APIEntity, A_ACCOUNT_TYPES__OrganizationSettings_APIEntity, A_ACCOUNT_TYPES__Organization_APIEntity } from "./types/A_ACCOUNT_OrganizationsAPI.types";
import { A_AUTH_APIProvider } from "@adaas/a-auth";

export class A_ACCOUNT_OrganizationsAPIClass extends A_AUTH_APIProvider {

    constructor(baseURL?: string) {
        super(baseURL);
        this.baseURL = baseURL || process.env.ADAAS_ACCOUNT_API_LOCATION || 'https://api.account.adaas.org';
        this.init();
    }


    // ==========================================
    // ================ Organization API ================
    // ==========================================

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


    async getOrganization(
        organizationIdOrIdentity: number | string,
    ): Promise<A_ACCOUNT_TYPES__Organization_APIEntity> {
        const response: AxiosResponse<A_ACCOUNT_TYPES__Organization_APIEntity> = await this.axiosInstance
            .get(`/api/v1/organizations/${organizationIdOrIdentity}`);

        return response.data;
    }


    async createOrganization(
        organization: A_ACCOUNT_TYPES__Organization_APIEntity
    ): Promise<A_ACCOUNT_TYPES__Organization_APIEntity> {
        const response: AxiosResponse<A_ACCOUNT_TYPES__Organization_APIEntity> = await this.axiosInstance
            .post('/api/v1/organizations', organization);

        return response.data;
    }


    // ==========================================
    // ============== Organization Profile ==============
    // ==========================================

    async getOrganizationProfile(
        organizationIdOrIdentity: number | string,
    ): Promise<A_ACCOUNT_TYPES__OrganizationProfile_APIEntity> {

        const response: AxiosResponse<A_ACCOUNT_TYPES__OrganizationProfile_APIEntity> = await this.axiosInstance
            .get(`/api/v1/organizations/${organizationIdOrIdentity}/profile`);

        return response.data;
    }

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
        profile: A_ACCOUNT_TYPES__OrganizationProfile_APIEntity
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
    // ============== Organization Settings =============
    // ==========================================

    /**
     * This function is used to get organization settings
     * 
     * @param organizationIdOrIdentity  numeric organization id or string identity
     * @param settings  object with settings
     * @returns 
     */
    async updateOrganizationSettings(
        organizationIdOrIdentity: number | string,
        settings: A_ACCOUNT_TYPES__OrganizationSettings_APIEntity
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


}
