
import { A_AUTH_AppInteractions_APIProvider } from "@adaas/a-auth";
import { A_ACCOUNT_ContextClass } from "@adaas/a-sdk/global/A_ACCOUNT_Context.class";
import {
    A_ACCOUNT_SERVER_COMMANDS_TYPES__UserGetRequest,
    A_ACCOUNT_SERVER_COMMANDS_TYPES__UserCreateRequest,
    A_ACCOUNT_SERVER_COMMANDS_TYPES__UserCreateResponse,
    A_ACCOUNT_SERVER_COMMANDS_TYPES__UserListRequest,
    A_ACCOUNT_SERVER_COMMANDS_TYPES__UserListResponse,
    A_ACCOUNT_SERVER_COMMANDS_TYPES__UserGetResponse,
    A_ACCOUNT_SERVER_COMMANDS_TYPES__UserUpdateRequest,
    A_ACCOUNT_SERVER_COMMANDS_TYPES__UserUpdateResponse
} from "./A_ACCOUNT_User.types";


export class A_ACCOUNT_SERVER_COMMANDS__UserAPI extends A_AUTH_AppInteractions_APIProvider<A_ACCOUNT_ContextClass> {


    async list<M = any>(
        request: A_ACCOUNT_SERVER_COMMANDS_TYPES__UserListRequest,
        /**
         * The meta object to pass through API call for error handling or response handling
         */
        meta?: M
    ) {
        return await this
            .get<A_ACCOUNT_SERVER_COMMANDS_TYPES__UserListResponse, M>(
                '/-s-cmd-/users',
                request,
                {
                    meta
                }
            );
    }


    /**
     *  This function is used to get user details with nested entities such as profile, settings, etc.
     * 
     * @param request 
     * @param meta 
     * @returns 
     */
    async load<M = any>(
        request: A_ACCOUNT_SERVER_COMMANDS_TYPES__UserGetRequest,
        /**
         * The meta object to pass through API call for error handling or response handling
         */
        meta?: M
    ) {
        return await this
            .get<A_ACCOUNT_SERVER_COMMANDS_TYPES__UserGetResponse, M>(
                `/-s-cmd-/users/${request.userASEID}`,
                {},
                {
                    meta
                }
            );
    }


    /**
     * This function is used to create a new user
     * 
     * @param request 
     * @param meta 
     * @returns 
     */
    async create<M = any>(
        request: A_ACCOUNT_SERVER_COMMANDS_TYPES__UserCreateRequest,
        /**
        * The meta object to pass through API call for error handling or response handling
        */
        meta?: M

    ) {
        return await this
            .post<A_ACCOUNT_SERVER_COMMANDS_TYPES__UserCreateResponse, M>(
                '/-s-cmd-/users',
                request,
                {
                    meta
                }
            );
    }


    /**
     *  This function is used to update user details
     * 
     * @param request 
     * @param meta 
     * @returns 
     */
    async update<M = any>(
        request: A_ACCOUNT_SERVER_COMMANDS_TYPES__UserUpdateRequest,
        /**
         * The meta object to pass through API call for error handling or response handling
         */
        meta?: M
    ) {
        return await this
            .put<A_ACCOUNT_SERVER_COMMANDS_TYPES__UserUpdateResponse, M>(
                `/-s-cmd-/users/${request.userASEID}`,
                request,
                {
                    meta
                }
            );
    }
}
