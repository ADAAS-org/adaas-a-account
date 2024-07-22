import { A_SDK_TYPES__IDefaultPagination, A_SDK_TYPES__IRequestFilter, A_SDK_TYPES__IRequestPagination } from "@adaas/a-sdk-types";
export type A_ACCOUNT_TYPES__Country_APIEntity = {
    aseid: string;
    name: string;
    iso2: string;
    iso3: string;
    numeric: string;
    phone_code?: number;
    created_at: string;
    updated_at: string;
};
export type A_ACCOUNT_TYPES__Timezone_APIEntity = {
    aseid: string;
    name: string;
    code: string;
    utc_offset: number;
    created_at: string;
    updated_at: string;
};
export type A_ACCOUNT_TYPES__BusinessDomain_APIEntity = {
    aseid: string;
    name: string;
    description: string;
    icon?: string;
    created_at: string;
    updated_at: string;
};
export type A_ACCOUNT_TYPES__BusinessType_APIEntity = {
    aseid: string;
    name: string;
    description: string;
    created_at: string;
    updated_at: string;
};
export type A_ACCOUNT_APP_INTERACTIONS_TYPES__CountriesListRequest = {
    pagination: A_SDK_TYPES__IRequestPagination;
    filter: A_SDK_TYPES__IRequestFilter;
};
export type A_ACCOUNT_APP_INTERACTIONS_TYPES__CountriesListResponse = A_SDK_TYPES__IDefaultPagination<A_ACCOUNT_TYPES__Country_APIEntity>;
export type A_ACCOUNT_APP_INTERACTIONS_TYPES__TimezonesListRequest = {
    pagination: A_SDK_TYPES__IRequestPagination;
    filter: A_SDK_TYPES__IRequestFilter;
};
export type A_ACCOUNT_APP_INTERACTIONS_TYPES__TimezonesListResponse = A_SDK_TYPES__IDefaultPagination<A_ACCOUNT_TYPES__Timezone_APIEntity>;
export type A_ACCOUNT_APP_INTERACTIONS_TYPES__BusinessDomainsListRequest = {
    pagination: A_SDK_TYPES__IRequestPagination;
    filter: A_SDK_TYPES__IRequestFilter;
};
export type A_ACCOUNT_APP_INTERACTIONS_TYPES__BusinessDomainsListResponse = A_SDK_TYPES__IDefaultPagination<A_ACCOUNT_TYPES__BusinessDomain_APIEntity>;
export type A_ACCOUNT_APP_INTERACTIONS_TYPES__BusinessTypesListRequest = {
    pagination: A_SDK_TYPES__IRequestPagination;
    filter: A_SDK_TYPES__IRequestFilter;
};
export type A_ACCOUNT_APP_INTERACTIONS_TYPES__BusinessTypesListResponse = A_SDK_TYPES__IDefaultPagination<A_ACCOUNT_TYPES__BusinessType_APIEntity>;
