import { A_SDK_TYPES__DeepPartial, A_SDK_TYPES__IDefaultPagination, A_SDK_TYPES__IRequestFilter, A_SDK_TYPES__IRequestPagination, A_SDK_TYPES__Required } from "@adaas/a-sdk-types"
import { A_ACCOUNT_TYPES__User_APIEntity } from "../../app-interactions/users/A_ACCOUNT_User.types"


// =========================  USERS LIST REQUEST API TYPES ================================
export type A_ACCOUNT_SERVER_COMMANDS_TYPES__UserListRequest = {
    pagination: A_SDK_TYPES__IRequestPagination,
    filter: A_SDK_TYPES__IRequestFilter & {
        /**
         * Organization identifier in ADAAS System
         */
        orgASEID?: string
    }
}

export type A_ACCOUNT_SERVER_COMMANDS_TYPES__UserListResponse = A_SDK_TYPES__IDefaultPagination<A_ACCOUNT_TYPES__User_APIEntity>


// =========================  USER CREATE REQUEST API TYPES ================================
export type A_ACCOUNT_SERVER_COMMANDS_TYPES__UserCreateRequest = A_SDK_TYPES__Required<
    A_SDK_TYPES__DeepPartial<A_ACCOUNT_TYPES__User_APIEntity>,
    [
        'Profile.name',
        'Profile.title',
        'Profile.work_email',
        'Settings.timezone',
        'Settings.country',
        'Settings.locale'
    ]
>

export type A_ACCOUNT_SERVER_COMMANDS_TYPES__UserCreateResponse = A_ACCOUNT_TYPES__User_APIEntity

// =========================  USER GET REQUEST API TYPES ================================
export type A_ACCOUNT_SERVER_COMMANDS_TYPES__UserGetRequest = {
    /**
     * User identifier in ADAAS System
     */
    userASEID: string,
}

export type A_ACCOUNT_SERVER_COMMANDS_TYPES__UserGetResponse = A_ACCOUNT_TYPES__User_APIEntity



// =========================  USER UPDATE REQUEST API TYPES ================================
export type A_ACCOUNT_SERVER_COMMANDS_TYPES__UserUpdateRequest = {
    /**
     * User identifier in ADAAS System
     */
    userASEID: string,
    user: A_ACCOUNT_TYPES__User_APIEntity
}

export type A_ACCOUNT_SERVER_COMMANDS_TYPES__UserUpdateResponse = A_ACCOUNT_TYPES__User_APIEntity





