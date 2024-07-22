import {
    A_SDK_TYPES__IDefaultPagination,
    A_SDK_TYPES__IRequestFilter,
    A_SDK_TYPES__IRequestPagination,
    A_SDK_TYPES__DeepPartial,
    A_SDK_TYPES__ExtractProperties,
    A_SDK_TYPES__Required
} from "@adaas/a-sdk-types"
import { A_ACCOUNT_TYPES__Organization_APIEntity } from "../../app-interactions/organization/A_ACCOUNT_Organization.types"


// =========================  ORGANIZATION LIST REQUEST API TYPES ================================
export type A_ACCOUNT_SERVER_COMMANDS_TYPES__OrganizationListRequest = {
    pagination: A_SDK_TYPES__IRequestPagination,
    filter: A_SDK_TYPES__IRequestFilter
}

export type A_ACCOUNT_SERVER_COMMANDS_TYPES__OrganizationListResponse = A_SDK_TYPES__IDefaultPagination<A_ACCOUNT_TYPES__Organization_APIEntity>


// =========================  ORGANIZATION GET REQUEST API TYPES ================================
export type A_ACCOUNT_SERVER_COMMANDS_TYPES__OrganizationGetRequest = {
    /**
     * Organization identifier in ADAAS System
     */
    orgASEID: string,
}

export type A_ACCOUNT_SERVER_COMMANDS_TYPES__OrganizationGetResponse = A_SDK_TYPES__IDefaultPagination<A_ACCOUNT_TYPES__Organization_APIEntity>


// =========================  ORGANIZATION CREATE REQUEST API TYPES ================================
export type A_ACCOUNT_SERVER_COMMANDS_TYPES__OrganizationCreateRequest = A_SDK_TYPES__ExtractProperties<A_ACCOUNT_TYPES__Organization_APIEntity, [
    'a_sso_role_aseid',
    'Settings.Timezone',
    'Settings.Country',
    'Profile.name',
    'Profile.website',
    'Owner.aseid',
    'BusinessType',
    'BusinessDomains'
]> & {
    default?: boolean
}


export type A_ACCOUNT_SERVER_COMMANDS_TYPES__OrganizationCreateResponse = A_ACCOUNT_TYPES__Organization_APIEntity



// =========================  ORGANIZATION UPDATE REQUEST API TYPES ================================
export type A_ACCOUNT_SERVER_COMMANDS_TYPES__OrganizationUpdateRequest = A_SDK_TYPES__Required<
    A_SDK_TYPES__DeepPartial<A_ACCOUNT_TYPES__Organization_APIEntity>, [
        'aseid'
    ]>

export type A_ACCOUNT_SERVER_COMMANDS_TYPES__OrganizationUpdateResponse = A_SDK_TYPES__IDefaultPagination<A_ACCOUNT_TYPES__Organization_APIEntity>




