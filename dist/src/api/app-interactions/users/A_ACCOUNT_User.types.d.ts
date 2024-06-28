import { A_SDK_TYPES__IDefaultPagination, A_SDK_TYPES__IRequestFilter, A_SDK_TYPES__IRequestPagination } from "@adaas/a-sdk-types";
import { A_ACCOUNT_TYPES__UserProfile_APIEntity } from "./profile/A_ACCOUNT_UserProfile.types";
import { A_ACCOUNT_TYPES__UserSettings_APIEntity } from "./settings/A_ACCOUNT_UserSettings.types";
export type A_ACCOUNT_TYPES__User_APIEntity = {
    id: string;
    aseid: string;
    profile: A_ACCOUNT_TYPES__UserProfile_APIEntity;
    settings: A_ACCOUNT_TYPES__UserSettings_APIEntity;
    created_at: string;
    updated_at: string;
};
export type A_ACCOUNT_APP_INTERACTIONS_TYPES__UserListRequest = {
    pagination: A_SDK_TYPES__IRequestPagination;
    filter: A_SDK_TYPES__IRequestFilter & {
        /**
         * Organization identifier in ADAAS System
         */
        orgASEID?: string;
    };
};
export type A_ACCOUNT_APP_INTERACTIONS_TYPES__UserListResponse = A_SDK_TYPES__IDefaultPagination<A_ACCOUNT_TYPES__User_APIEntity>;
export type A_ACCOUNT_APP_INTERACTIONS_TYPES__UserInviteRequest = {
    /**
     * Organization identifier in ADAAS System
     */
    orgASEID: string;
    /**
     * Unit identifier in ADAAS System
     */
    unitASEID: string;
    /**
     * User email
     */
    email: string;
};
export type A_ACCOUNT_APP_INTERACTIONS_TYPES__UserInviteResponse = A_ACCOUNT_TYPES__User_APIEntity;
export type A_ACCOUNT_APP_INTERACTIONS_TYPES__UserGetRequest = {
    /**
     * User identifier in ADAAS System
     */
    userASEID: string;
};
export type A_ACCOUNT_APP_INTERACTIONS_TYPES__UserGetResponse = A_ACCOUNT_TYPES__User_APIEntity;
export type A_ACCOUNT_APP_INTERACTIONS_TYPES__UserUpdateRequest = {
    /**
     * User identifier in ADAAS System
     */
    userASEID: string;
    user: A_ACCOUNT_TYPES__User_APIEntity;
};
export type A_ACCOUNT_APP_INTERACTIONS_TYPES__UserUpdateResponse = A_ACCOUNT_TYPES__User_APIEntity;
