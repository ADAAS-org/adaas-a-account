import { A_SDK_TYPES__IDefaultPagination, A_SDK_TYPES__IRequestFilter, A_SDK_TYPES__IRequestPagination } from "@adaas/a-sdk-types";
import { AxiosResponse } from "axios";
import { A_ACCOUNT_TYPES__UserProfile_APIEntity, A_ACCOUNT_TYPES__UserSettings_APIEntity, A_ACCOUNT_TYPES__User_APIEntity } from "./types/A_ACCOUNT_UsersAPI.types";
import { A_AUTH_APIProvider } from "@adaas/a-auth";

export class A_ACCOUNT_UsersAPIClass extends A_AUTH_APIProvider {


    constructor(baseURL?: string) {
        super(baseURL);
        this.baseURL = baseURL || process.env.ADAAS_ACCOUNT_API_LOCATION || 'https://api.account.adaas.org';
        this.init();
    }


    // ==========================================
    // ================ User API ================
    // ==========================================

    async getUsers(
        pagination: A_SDK_TYPES__IRequestPagination,
        filter: A_SDK_TYPES__IRequestFilter
    ): Promise<A_SDK_TYPES__IDefaultPagination<A_ACCOUNT_TYPES__User_APIEntity>> {
        const response: AxiosResponse<
            A_SDK_TYPES__IDefaultPagination<A_ACCOUNT_TYPES__User_APIEntity>
        > = await this.axiosInstance
            .get('/api/v1/users', {
                params: {
                    ...pagination,
                    ...filter
                }
            });

        return response.data;
    }


    async getUser(
        userIdOrIdentity: number | string,
    ): Promise<A_ACCOUNT_TYPES__User_APIEntity> {
        const response: AxiosResponse<A_ACCOUNT_TYPES__User_APIEntity> = await this.axiosInstance
            .get(`/api/v1/users/${userIdOrIdentity}`);

        return response.data;
    }


    async createUser(
        user: A_ACCOUNT_TYPES__User_APIEntity
    ): Promise<A_ACCOUNT_TYPES__User_APIEntity> {
        const response: AxiosResponse<A_ACCOUNT_TYPES__User_APIEntity> = await this.axiosInstance
            .post('/api/v1/users', user);

        return response.data;
    }


    // ==========================================
    // ============== User Profile ==============
    // ==========================================

    async getUserProfile(
        userIdOrIdentity: number | string,
    ): Promise<A_ACCOUNT_TYPES__UserProfile_APIEntity> {

        const response: AxiosResponse<A_ACCOUNT_TYPES__UserProfile_APIEntity> = await this.axiosInstance
            .get(`/api/v1/users/${userIdOrIdentity}/profile`);

        return response.data;
    }

    async uploadAvatar(
        userIdOrIdentity: number | string,
        file: File
    ): Promise<A_ACCOUNT_TYPES__User_APIEntity> {
        const formData = new FormData();
        formData.append('file', file);

        const response: AxiosResponse<A_ACCOUNT_TYPES__User_APIEntity> = await this.axiosInstance
            .post(
                `/api/v1/users/${userIdOrIdentity}/profile/avatar`,
                formData
            );

        return response.data;
    }


    async updateUserProfile(
        userIdOrIdentity: number | string,
        profile: A_ACCOUNT_TYPES__UserProfile_APIEntity
    ): Promise<A_ACCOUNT_TYPES__UserProfile_APIEntity> {

        const response: AxiosResponse<
            A_ACCOUNT_TYPES__UserProfile_APIEntity
        > = await this.axiosInstance
            .put(
                `/api/v1/users/${userIdOrIdentity}/profile`,
                profile
            );

        return response.data;
    }


    // ==========================================
    // ============== User Settings =============
    // ==========================================

    /**
     * This function is used to get user settings
     * 
     * @param userIdOrIdentity  numeric user id or string identity
     * @param settings  object with settings
     * @returns 
     */
    async updateUserSettings(
        userIdOrIdentity: number | string,
        settings: A_ACCOUNT_TYPES__UserSettings_APIEntity
    ): Promise<any> {

        const response: AxiosResponse<any> = await this.axiosInstance.put(
            `/api/v1/users/${userIdOrIdentity}/settings`,
            settings
        );
        return response.data;
    }

}
