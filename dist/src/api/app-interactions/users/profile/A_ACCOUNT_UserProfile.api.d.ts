import { A_AUTH_AppInteractions_APIProvider } from "@adaas/a-auth";
import { A_ACCOUNT_ContextClass } from "../../../../global/A_ACCOUNT_Context.class";
import { A_ACCOUNT_APP_INTERACTIONS_TYPES__UserProfileAvatarUploadRequest, A_ACCOUNT_APP_INTERACTIONS_TYPES__UserProfileAvatarUploadResponse, A_ACCOUNT_APP_INTERACTIONS_TYPES__UserProfileGetRequest, A_ACCOUNT_APP_INTERACTIONS_TYPES__UserProfileUpdateRequest } from "./A_ACCOUNT_UserProfile.types";
export declare class A_ACCOUNT_APP_INTERACTIONS__UserProfileAPI extends A_AUTH_AppInteractions_APIProvider<A_ACCOUNT_ContextClass> {
    protected baseURL: string;
    load<M = any>(request: A_ACCOUNT_APP_INTERACTIONS_TYPES__UserProfileGetRequest, 
    /**
     * The meta object to pass through API call for error handling or response handling
     */
    meta?: M): Promise<Partial<import("./A_ACCOUNT_UserProfile.types").A_ACCOUNT_TYPES__UserProfile_APIEntity>>;
    uploadAvatar<M = any>(request: A_ACCOUNT_APP_INTERACTIONS_TYPES__UserProfileAvatarUploadRequest, 
    /**
     * The meta object to pass through API call for error handling or response handling
     */
    meta?: M): Promise<A_ACCOUNT_APP_INTERACTIONS_TYPES__UserProfileAvatarUploadResponse>;
    update<M = any>(request: A_ACCOUNT_APP_INTERACTIONS_TYPES__UserProfileUpdateRequest, 
    /**
     * The meta object to pass through API call for error handling or response handling
     */
    meta?: M): Promise<Partial<import("./A_ACCOUNT_UserProfile.types").A_ACCOUNT_TYPES__UserProfile_APIEntity>>;
}
