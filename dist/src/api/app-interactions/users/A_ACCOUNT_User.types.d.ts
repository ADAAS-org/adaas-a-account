import { A_SDK_TYPES__DeepPartial, A_SDK_TYPES__IDefaultPagination, A_SDK_TYPES__IRequestFilter, A_SDK_TYPES__IRequestPagination, A_SDK_TYPES__Required } from "@adaas/a-sdk-types";
import { A_ACCOUNT_TYPES__UserProfile_APIEntity } from "./profile/A_ACCOUNT_UserProfile.types";
import { A_ACCOUNT_TYPES__UserSettings_APIEntity } from "./settings/A_ACCOUNT_UserSettings.types";
export type A_ACCOUNT_TYPES__User_APIEntity = {
    aseid: string;
    Profile: A_ACCOUNT_TYPES__UserProfile_APIEntity;
    Settings: A_ACCOUNT_TYPES__UserSettings_APIEntity;
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
export type A_ACCOUNT_APP_INTERACTIONS_TYPES__UserGetResponse = A_SDK_TYPES__Required<A_SDK_TYPES__DeepPartial<A_ACCOUNT_TYPES__User_APIEntity>, [
    'aseid',
    'created_at',
    'updated_at'
]>;
export type A_ACCOUNT_APP_INTERACTIONS_TYPES__UserUpdateRequest = {
    /**
     * User identifier in ADAAS System
     */
    userASEID: string;
    user: A_ACCOUNT_TYPES__User_APIEntity;
};
export type A_ACCOUNT_APP_INTERACTIONS_TYPES__UserUpdateResponse = A_SDK_TYPES__Required<A_SDK_TYPES__DeepPartial<A_ACCOUNT_TYPES__User_APIEntity>, [
    'aseid'
]>;
