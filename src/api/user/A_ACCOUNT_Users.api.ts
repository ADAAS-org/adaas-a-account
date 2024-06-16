import { A_SDK_TYPES__DeepPartial, A_SDK_TYPES__IDefaultPagination, A_SDK_TYPES__IRequestFilter, A_SDK_TYPES__IRequestPagination } from "@adaas/a-sdk-types";
import { AxiosResponse } from "axios";
import { A_ACCOUNT_TYPES__UserProfile_APIEntity, A_ACCOUNT_TYPES__UserSettings_APIEntity, A_ACCOUNT_TYPES__User_APIEntity } from "./types/A_ACCOUNT_UsersAPI.types";
import { A_AUTH_APIProvider } from "@adaas/a-auth";
import { A_SDK_TYPES__Required } from "@adaas/a-sdk-types/dist/src/types/common.types";

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
        userIdentity: string
    ): Promise<A_ACCOUNT_TYPES__User_APIEntity> {
        const response: AxiosResponse<A_ACCOUNT_TYPES__User_APIEntity> = await this.axiosInstance
            .get(`/api/v1/users/${userIdentity}`);

        return response.data;
    }


    async createUser(
        user: A_SDK_TYPES__Required<
            A_SDK_TYPES__DeepPartial<A_ACCOUNT_TYPES__User_APIEntity>,
            ['id', 'settings.timezone', 'settings.country', 'profile.name', 'profile.work_email']
        >
    ): Promise<A_ACCOUNT_TYPES__User_APIEntity> {
        const response: AxiosResponse<A_ACCOUNT_TYPES__User_APIEntity> = await this.axiosInstance
            .post('/api/v1/users', user);

        return response.data;
    }


    // ==========================================
    // ============== User Profile ==============
    // ==========================================

    async getUserProfile(
        userIdentity: string,
    ): Promise<A_ACCOUNT_TYPES__UserProfile_APIEntity> {

        const response: AxiosResponse<A_ACCOUNT_TYPES__UserProfile_APIEntity> = await this.axiosInstance
            .get(`/api/v1/users/${userIdentity}/profile`);

        return response.data;
    }

    async uploadAvatar(
        userIdentity: string,
        file: File
    ): Promise<A_ACCOUNT_TYPES__User_APIEntity> {
        const formData = new FormData();
        formData.append('file', file);

        const response: AxiosResponse<A_ACCOUNT_TYPES__User_APIEntity> = await this.axiosInstance
            .post(
                `/api/v1/users/${userIdentity}/profile/avatar`,
                formData
            );

        return response.data;
    }


    async updateUserProfile(
        userIdentity: string,
        profile: A_SDK_TYPES__DeepPartial<A_ACCOUNT_TYPES__UserProfile_APIEntity>
    ): Promise<A_ACCOUNT_TYPES__UserProfile_APIEntity> {

        const response: AxiosResponse<
            A_ACCOUNT_TYPES__UserProfile_APIEntity
        > = await this.axiosInstance
            .put(
                `/api/v1/users/${userIdentity}/profile`,
                profile
            );

        return response.data;
    }


    // ==========================================
    // ============== User Settings =============
    // ==========================================

    async getUserSettings(
        userIdentity: string
    ): Promise<A_ACCOUNT_TYPES__UserSettings_APIEntity> {

        const response: AxiosResponse<A_ACCOUNT_TYPES__UserSettings_APIEntity> = await this.axiosInstance
            .get(`/api/v1/users/${userIdentity}/settings`);

        return response.data;
    }

    /**
     * This function is used to get user settings
     * 
     * @param userIdentity  numeric user id or string identity
     * @param settings  object with settings
     * @returns 
     */
    async updateUserSettings(
        userIdentity: string,
        settings: A_SDK_TYPES__DeepPartial<A_ACCOUNT_TYPES__UserSettings_APIEntity>
    ): Promise<any> {

        const response: AxiosResponse<any> = await this.axiosInstance.put(
            `/api/v1/users/${userIdentity}/settings`,
            settings
        );
        return response.data;
    }

}
