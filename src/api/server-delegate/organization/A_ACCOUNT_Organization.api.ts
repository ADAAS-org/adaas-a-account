import { A_AUTH_ServerCommands_APIProvider } from "@adaas/a-auth";
import { A_ACCOUNT_ContextClass } from "@adaas/a-sdk/global/A_ACCOUNT_Context.class";
import {
    A_ACCOUNT_SERVER_COMMANDS_TYPES__OrganizationCreateRequest,
    A_ACCOUNT_SERVER_COMMANDS_TYPES__OrganizationCreateResponse,
    A_ACCOUNT_SERVER_COMMANDS_TYPES__OrganizationGetRequest,
    A_ACCOUNT_SERVER_COMMANDS_TYPES__OrganizationGetResponse,
    A_ACCOUNT_SERVER_COMMANDS_TYPES__OrganizationListRequest,
    A_ACCOUNT_SERVER_COMMANDS_TYPES__OrganizationListResponse,
    A_ACCOUNT_SERVER_COMMANDS_TYPES__OrganizationUpdateRequest,
    A_ACCOUNT_SERVER_COMMANDS_TYPES__OrganizationUpdateResponse
} from "./A_ACCOUNT_Organization.types";



export class A_ACCOUNT_SERVER_COMMANDS__OrganizationAPI extends A_AUTH_ServerCommands_APIProvider<A_ACCOUNT_ContextClass> {

    protected get baseURL(): string {
        return this.context.getConfigurationProperty('API_LOCATION');
    }

    /**
     * Returns a list of organizations to which the Application has access
     * 
     * @param request 
     * @param meta 
     * @returns 
     */
    async list<M = any>(
        request: A_ACCOUNT_SERVER_COMMANDS_TYPES__OrganizationListRequest,
        /**
         * The meta object to pass through API call for error handling or response handling
         */
        meta?: M
    ) {
        return await this
            .get<A_ACCOUNT_SERVER_COMMANDS_TYPES__OrganizationListResponse, M>(
                '/organizations',
                request,
                {
                    meta
                }
            );
    }

    /**
     * API returns organization with nested entities such as profile, settings, etc.
     * 
     * @param request 
     * @param meta 
     * @returns 
     */
    async load<M = any>(
        request: A_ACCOUNT_SERVER_COMMANDS_TYPES__OrganizationGetRequest,
        /**
         * The meta object to pass through API call for error handling or response handling
         */
        meta?: M
    ) {
        return await this
            .get<A_ACCOUNT_SERVER_COMMANDS_TYPES__OrganizationGetResponse, M>(
                `/organizations/${request.orgASEID}`,
                {},
                {
                    meta
                }
            );
    }


    /**
     * API to create a new organization
     * 
     * @param request 
     * @param meta 
     * @returns 
     */
    async create<M = any>(
        request: A_ACCOUNT_SERVER_COMMANDS_TYPES__OrganizationCreateRequest,
        /**
         * The meta object to pass through API call for error handling or response handling
         */
        meta?: M
    ) {
        return await this
            .post<A_ACCOUNT_SERVER_COMMANDS_TYPES__OrganizationCreateResponse, M>(
                '/organizations',
                request,
                {
                    meta
                }
            );
    }


    async update<M = any>(
        request: A_ACCOUNT_SERVER_COMMANDS_TYPES__OrganizationUpdateRequest,
        /**
         * The meta object to pass through API call for error handling or response handling
         */
        meta?: M
    ) {
        return await this
            .put<A_ACCOUNT_SERVER_COMMANDS_TYPES__OrganizationUpdateResponse, M>(
                `/organizations/${request.aseid}`,
                request,
                {
                    meta
                }
            );
    }
}