import { A_SDK_TYPES__IDefaultPagination, A_SDK_TYPES__IRequestFilter, A_SDK_TYPES__IRequestPagination } from "@adaas/a-sdk-types";
import { A_ACCOUNT_TYPES__UserProfile_APIEntity, A_ACCOUNT_TYPES__UserSettings_APIEntity, A_ACCOUNT_TYPES__User_APIEntity } from "./types/A_ACCOUNT_UsersAPI.types";
import { A_AUTH_APIProvider } from "@adaas/a-auth";
export declare class A_ACCOUNT_UsersAPIClass extends A_AUTH_APIProvider {
    constructor(baseURL?: string);
    getUsers(pagination: A_SDK_TYPES__IRequestPagination, filter: A_SDK_TYPES__IRequestFilter): Promise<A_SDK_TYPES__IDefaultPagination<A_ACCOUNT_TYPES__User_APIEntity>>;
    getUser(userIdOrIdentity: number | string): Promise<A_ACCOUNT_TYPES__User_APIEntity>;
    createUser(user: A_ACCOUNT_TYPES__User_APIEntity): Promise<A_ACCOUNT_TYPES__User_APIEntity>;
    getUserProfile(userIdOrIdentity: number | string): Promise<A_ACCOUNT_TYPES__UserProfile_APIEntity>;
    uploadAvatar(userIdOrIdentity: number | string, file: File): Promise<A_ACCOUNT_TYPES__User_APIEntity>;
    updateUserProfile(userIdOrIdentity: number | string, profile: A_ACCOUNT_TYPES__UserProfile_APIEntity): Promise<A_ACCOUNT_TYPES__UserProfile_APIEntity>;
    /**
     * This function is used to get user settings
     *
     * @param userIdOrIdentity  numeric user id or string identity
     * @param settings  object with settings
     * @returns
     */
    updateUserSettings(userIdOrIdentity: number | string, settings: A_ACCOUNT_TYPES__UserSettings_APIEntity): Promise<any>;
}
