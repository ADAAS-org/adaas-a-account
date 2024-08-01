import { A_AUTH_AppInteractions_APIProvider } from "@adaas/a-auth";
import { A_ACCOUNT_ContextClass } from "@adaas/a-sdk/global/A_ACCOUNT_Context.class";
import {
    A_ACCOUNT_APP_INTERACTIONS_TYPES__BusinessDomainsListRequest,
    A_ACCOUNT_APP_INTERACTIONS_TYPES__BusinessDomainsListResponse,
    A_ACCOUNT_APP_INTERACTIONS_TYPES__BusinessTypesListRequest,
    A_ACCOUNT_APP_INTERACTIONS_TYPES__BusinessTypesListResponse,
    A_ACCOUNT_APP_INTERACTIONS_TYPES__CountriesListRequest,
    A_ACCOUNT_APP_INTERACTIONS_TYPES__CountriesListResponse,
    A_ACCOUNT_APP_INTERACTIONS_TYPES__TimezonesListRequest,
    A_ACCOUNT_APP_INTERACTIONS_TYPES__TimezonesListResponse,
} from "./A_ACCOUNT_Common.types";


/**
 * API Provider for Common API 
 * such as Countries, Timezones, Business Domains, Business Types
 */
export class A_ACCOUNT_APP_INTERACTIONS__CommonAPI extends A_AUTH_AppInteractions_APIProvider<A_ACCOUNT_ContextClass> {

    protected get baseURL(): string {
        return this.context.getConfigurationProperty('API_LOCATION');
    }

    /**
     * Returns list of countries with applied filters and pagination
     * 
     * @param request 
     * @param meta 
     * @returns 
     */
    async listCountries<M = any>(
        request: A_ACCOUNT_APP_INTERACTIONS_TYPES__CountriesListRequest,
        /**
         * The meta object to pass through API call for error handling or response handling
         */
        meta?: M
    ): Promise<A_ACCOUNT_APP_INTERACTIONS_TYPES__CountriesListResponse> {
        return await this.get<A_ACCOUNT_APP_INTERACTIONS_TYPES__CountriesListResponse, M>(
            '/common/countries',
            request,
            {
                meta
            }
        );

    }


    /**
     * Returns list of timezones with applied filters and pagination
     * 
     * @param request 
     * @param meta 
     * @returns 
     */
    async listTimezones<M = any>(
        request: A_ACCOUNT_APP_INTERACTIONS_TYPES__TimezonesListRequest,
        /**
         * The meta object to pass through API call for error handling or response handling
         */
        meta?: M
    ): Promise<A_ACCOUNT_APP_INTERACTIONS_TYPES__TimezonesListResponse> {
        return await this.get<A_ACCOUNT_APP_INTERACTIONS_TYPES__TimezonesListResponse, M>(
            '/common/timezones',
            request,
            {
                meta
            }
        );
    }


    /**
     * Returns list of business domains with applied filters and pagination
     * 
     * @param request 
     * @param meta 
     * @returns 
     */
    async listBusinessDomains<M = any>(
        request: A_ACCOUNT_APP_INTERACTIONS_TYPES__BusinessDomainsListRequest,
        /**
         * The meta object to pass through API call for error handling or response handling
         */
        meta?: M
    ): Promise<A_ACCOUNT_APP_INTERACTIONS_TYPES__BusinessDomainsListResponse> {
        return await this.get<A_ACCOUNT_APP_INTERACTIONS_TYPES__BusinessDomainsListResponse, M>(
            '/common/business-domains',
            request,
            {
                meta
            }
        );
    }



    /**
     * Returns list of business types with applied filters and pagination
     * 
     * @param request 
     * @param meta 
     * @returns 
     */
    async listBusinessTypes<M = any>(
        request: A_ACCOUNT_APP_INTERACTIONS_TYPES__BusinessTypesListRequest,
        /**
         * The meta object to pass through API call for error handling or response handling
         */
        meta?: M
    ): Promise<A_ACCOUNT_APP_INTERACTIONS_TYPES__BusinessTypesListResponse> {
        return await this.get<A_ACCOUNT_APP_INTERACTIONS_TYPES__BusinessTypesListResponse, M>(
            '/common/business-types',
            request,
            {
                meta
            }
        );
    }
}
