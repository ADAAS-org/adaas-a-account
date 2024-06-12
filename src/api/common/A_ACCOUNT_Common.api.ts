import { A_SDK_TYPES__IDefaultPagination, A_SDK_TYPES__IRequestFilter, A_SDK_TYPES__IRequestPagination } from "@adaas/a-sdk-types";
import { AxiosResponse } from "axios";
import { A_ACCOUNT_TYPES__BusinessDomain_APIEntity, A_ACCOUNT_TYPES__BusinessType_APIEntity, A_ACCOUNT_TYPES__Country_APIEntity, A_ACCOUNT_TYPES__Timezone_APIEntity } from "./types/A_ACCOUNT_CommonAPI.types";
import { A_AUTH_APIProvider } from "@adaas/a-auth";

export class A_ACCOUNT_CommonAPIClass extends A_AUTH_APIProvider {

    constructor(baseURL?: string) {
        super(baseURL);
        this.baseURL = baseURL || process.env.ADAAS_ACCOUNT_API_LOCATION || 'https://api.account.adaas.org';
        this.init();
    }


    async getCountries(
        pagination: A_SDK_TYPES__IRequestPagination,
        filter: A_SDK_TYPES__IRequestFilter
    ): Promise<A_SDK_TYPES__IDefaultPagination<A_ACCOUNT_TYPES__Country_APIEntity>> {
        const response: AxiosResponse<
            A_SDK_TYPES__IDefaultPagination<A_ACCOUNT_TYPES__Country_APIEntity>
        > = await this.axiosInstance.get('/api/v1/common/countries', {
            params: {
                ...pagination,
                ...filter
            }
        });

        return response.data;
    }


    async getTimezones(
        pagination: A_SDK_TYPES__IRequestPagination,
        filter: A_SDK_TYPES__IRequestFilter
    ): Promise<A_SDK_TYPES__IDefaultPagination<A_ACCOUNT_TYPES__Timezone_APIEntity>> {
        const response: AxiosResponse<
            A_SDK_TYPES__IDefaultPagination<A_ACCOUNT_TYPES__Timezone_APIEntity>
        > = await this.axiosInstance.get('/api/v1/common/timezones', {
            params: {
                ...pagination,
                ...filter
            }
        });

        return response.data;
    }


    async getBusinessDomains(
        pagination: A_SDK_TYPES__IRequestPagination,
        filter: A_SDK_TYPES__IRequestFilter
    ): Promise<A_SDK_TYPES__IDefaultPagination<A_ACCOUNT_TYPES__BusinessDomain_APIEntity>> {
        const response: AxiosResponse<
            A_SDK_TYPES__IDefaultPagination<A_ACCOUNT_TYPES__BusinessDomain_APIEntity>
        > = await this.axiosInstance.get('/api/v1/common/business-domains', {
            params: {
                ...pagination,
                ...filter
            }
        });

        return response.data;
    }


    async getBusinessTypes(
        pagination: A_SDK_TYPES__IRequestPagination,
        filter: A_SDK_TYPES__IRequestFilter
    ): Promise<A_SDK_TYPES__IDefaultPagination<A_ACCOUNT_TYPES__BusinessType_APIEntity>> {
        const response: AxiosResponse<
            A_SDK_TYPES__IDefaultPagination<A_ACCOUNT_TYPES__BusinessType_APIEntity>
        > = await this.axiosInstance.get('/api/v1/common/business-types', {
            params: {
                ...pagination,
                ...filter
            }
        });

        return response.data;
    }
}
