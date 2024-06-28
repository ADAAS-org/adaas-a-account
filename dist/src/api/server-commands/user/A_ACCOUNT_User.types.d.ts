import { A_SDK_TYPES__IDefaultPagination, A_SDK_TYPES__IRequestFilter, A_SDK_TYPES__IRequestPagination } from "@adaas/a-sdk-types";
import { A_ACCOUNT_TYPES__User_APIEntity } from "../../app-interactions/users/A_ACCOUNT_User.types";
export type A_ACCOUNT_SERVER_COMMANDS_TYPES__UserListRequest = {
    pagination: A_SDK_TYPES__IRequestPagination;
    filter: A_SDK_TYPES__IRequestFilter & {
        /**
         * Organization identifier in ADAAS System
         */
        orgASEID?: string;
    };
};
export type A_ACCOUNT_SERVER_COMMANDS_TYPES__UserListResponse = A_SDK_TYPES__IDefaultPagination<A_ACCOUNT_TYPES__User_APIEntity>;
export type A_ACCOUNT_SERVER_COMMANDS_TYPES__UserCreateRequest = {
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
export type A_ACCOUNT_SERVER_COMMANDS_TYPES__UserCreateResponse = A_ACCOUNT_TYPES__User_APIEntity;
export type A_ACCOUNT_SERVER_COMMANDS_TYPES__UserGetRequest = {
    /**
     * User identifier in ADAAS System
     */
    userASEID: string;
};
export type A_ACCOUNT_SERVER_COMMANDS_TYPES__UserGetResponse = A_ACCOUNT_TYPES__User_APIEntity;
export type A_ACCOUNT_SERVER_COMMANDS_TYPES__UserUpdateRequest = {
    /**
     * User identifier in ADAAS System
     */
    userASEID: string;
    user: A_ACCOUNT_TYPES__User_APIEntity;
};
export type A_ACCOUNT_SERVER_COMMANDS_TYPES__UserUpdateResponse = A_ACCOUNT_TYPES__User_APIEntity;
