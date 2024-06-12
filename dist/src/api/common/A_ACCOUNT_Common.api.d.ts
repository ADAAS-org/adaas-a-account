import { A_SDK_TYPES__IDefaultPagination, A_SDK_TYPES__IRequestFilter, A_SDK_TYPES__IRequestPagination } from "@adaas/a-sdk-types";
import { A_ACCOUNT_TYPES__BusinessDomain_APIEntity, A_ACCOUNT_TYPES__BusinessType_APIEntity, A_ACCOUNT_TYPES__Country_APIEntity, A_ACCOUNT_TYPES__Timezone_APIEntity } from "./types/A_ACCOUNT_CommonAPI.types";
import { A_AUTH_APIProvider } from "@adaas/a-auth";
export declare class A_ACCOUNT_CommonAPIClass extends A_AUTH_APIProvider {
    constructor(baseURL?: string);
    getCountries(pagination: A_SDK_TYPES__IRequestPagination, filter: A_SDK_TYPES__IRequestFilter): Promise<A_SDK_TYPES__IDefaultPagination<A_ACCOUNT_TYPES__Country_APIEntity>>;
    getTimezones(pagination: A_SDK_TYPES__IRequestPagination, filter: A_SDK_TYPES__IRequestFilter): Promise<A_SDK_TYPES__IDefaultPagination<A_ACCOUNT_TYPES__Timezone_APIEntity>>;
    getBusinessDomains(pagination: A_SDK_TYPES__IRequestPagination, filter: A_SDK_TYPES__IRequestFilter): Promise<A_SDK_TYPES__IDefaultPagination<A_ACCOUNT_TYPES__BusinessDomain_APIEntity>>;
    getBusinessTypes(pagination: A_SDK_TYPES__IRequestPagination, filter: A_SDK_TYPES__IRequestFilter): Promise<A_SDK_TYPES__IDefaultPagination<A_ACCOUNT_TYPES__BusinessType_APIEntity>>;
}
