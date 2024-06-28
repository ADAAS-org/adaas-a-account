import {
    A_SDK_TYPES__IDefaultPagination,
    A_SDK_TYPES__IRequestFilter,
    A_SDK_TYPES__IRequestPagination
} from "@adaas/a-sdk-types";
import {
    A_ACCOUNT_TYPES__Country_APIEntity,
    A_ACCOUNT_TYPES__Timezone_APIEntity
} from "../../common/A_ACCOUNT_Common.types";
import { A_ACCOUNT_TYPES__User_APIEntity } from "../../users/A_ACCOUNT_User.types";
import { A_ACCOUNT_TYPES__Organization_APIEntity } from "../A_ACCOUNT_Organization.types";
import { A_ACCOUNT_TYPES__OrganizationUnitType_APIEntity } from "./unit-types/A_ACCOUNT_OrganizationsUnitType.types";
import { A_SDK_TYPES__DeepPartial, A_SDK_TYPES__ExtractProperties } from "@adaas/a-sdk-types/dist/src/types/common.types";

export type A_ACCOUNT_TYPES__OrganizationUnit_APIEntity = {
    id: number,
    aseid: string,

    name: string;
    icon?: string;
    description?: string;

    type: A_ACCOUNT_TYPES__OrganizationUnitType_APIEntity
    settings: A_ACCOUNT_TYPES__OrganizationUnitSettings_APIEntity
    organization: A_ACCOUNT_TYPES__Organization_APIEntity

    /**
     * User who created this organization unit
     */
    owner: A_ACCOUNT_TYPES__User_APIEntity

    adaas_sso_role_aseid: string;

    created_at: string;
    updated_at: string;
};



export type A_ACCOUNT_TYPES__OrganizationUnitSettings_APIEntity = {
    id: number
    system_background: string
    country: A_ACCOUNT_TYPES__Country_APIEntity
    timezone: A_ACCOUNT_TYPES__Timezone_APIEntity
}


// =========================  ORGANIZATION UNIT LIST REQUEST API TYPES ================================

export type A_ACCOUNT_APP_INTERACTIONS_TYPES__OrganizationUnitListRequest = {
    /**
     * Organization identifier in ADAAS System
     */
    orgASEID: string,
    pagination: A_SDK_TYPES__IRequestPagination,
    filter: A_SDK_TYPES__IRequestFilter
}

export type A_ACCOUNT_APP_INTERACTIONS_TYPES__OrganizationUnitListResponse = A_SDK_TYPES__IDefaultPagination<A_ACCOUNT_TYPES__OrganizationUnit_APIEntity>


// =========================  ORGANIZATION UNIT GET REQUEST API TYPES ================================
export type A_ACCOUNT_APP_INTERACTIONS_TYPES__OrganizationUnitGetRequest = {
    /**
    * Organization identifier in ADAAS System
    */
    orgASEID: string,
    /**
     * Organization Unit identifier in ADAAS System
     */
    unitASEID: string,
}

export type A_ACCOUNT_APP_INTERACTIONS_TYPES__OrganizationUnitGetResponse = A_ACCOUNT_TYPES__OrganizationUnit_APIEntity

// =========================  ORGANIZATION UNIT CREATE REQUEST API TYPES ================================
export type A_ACCOUNT_APP_INTERACTIONS_TYPES__OrganizationUnitCreateRequest = A_SDK_TYPES__ExtractProperties<A_ACCOUNT_TYPES__OrganizationUnitType_APIEntity, [
    'settings.timezone',
    'settings.country',
    'name',
    'description',
    'icon',
]> & {
    orgASEID: string,
    type?: A_ACCOUNT_TYPES__OrganizationUnitType_APIEntity
}

export type A_ACCOUNT_APP_INTERACTIONS_TYPES__OrganizationUnitCreateResponse = A_ACCOUNT_TYPES__OrganizationUnit_APIEntity

// =========================  ORGANIZATION UNIT UPDATE REQUEST API TYPES ================================
export type A_ACCOUNT_APP_INTERACTIONS_TYPES__OrganizationUnitUpdateRequest = A_SDK_TYPES__DeepPartial<A_ACCOUNT_TYPES__OrganizationUnitType_APIEntity> & {
    orgASEID: string,
}

export type A_ACCOUNT_APP_INTERACTIONS_TYPES__OrganizationUnitUpdateResponse = A_ACCOUNT_TYPES__OrganizationUnit_APIEntity


// =========================  ORGANIZATION UNIT DELETE REQUEST API TYPES ================================

export type A_ACCOUNT_APP_INTERACTIONS_TYPES__OrganizationUnitDeleteRequest = {
    /**
     * Organization identifier in ADAAS System
     */
    orgASEID: string,
    /**
     * Organization Unit identifier in ADAAS System
     */
    unitASEID: string,
}

export type A_ACCOUNT_APP_INTERACTIONS_TYPES__OrganizationUnitDeleteResponse = {
    status: 'OK' | 'ERROR',
}