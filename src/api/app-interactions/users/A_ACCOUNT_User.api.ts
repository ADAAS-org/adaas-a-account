
import { A_AUTH_AppInteractions_APIProvider } from "@adaas/a-auth";
import { A_ACCOUNT_ContextClass } from "@adaas/a-sdk/global/A_ACCOUNT_Context.class";
import {
    A_ACCOUNT_APP_INTERACTIONS_TYPES__UserGetRequest,
    A_ACCOUNT_APP_INTERACTIONS_TYPES__UserInviteRequest,
    A_ACCOUNT_APP_INTERACTIONS_TYPES__UserInviteResponse,
    A_ACCOUNT_APP_INTERACTIONS_TYPES__UserListRequest,
    A_ACCOUNT_APP_INTERACTIONS_TYPES__UserListResponse
} from "./A_ACCOUNT_User.types";


export class A_ACCOUNT_APP_INTERACTIONS__UserAPI extends A_AUTH_AppInteractions_APIProvider<A_ACCOUNT_ContextClass> {


    async list<M = any>(
        request: A_ACCOUNT_APP_INTERACTIONS_TYPES__UserListRequest,
        /**
         * The meta object to pass through API call for error handling or response handling
         */
        meta?: M
    ) {
        return await this
            .get<A_ACCOUNT_APP_INTERACTIONS_TYPES__UserListResponse, M>(
                '/users',
                request,
                {
                    meta
                }
            );
    }


    /**
     *  This function is used to get user details
     * 
     * @param request 
     * @param meta 
     * @returns 
     */
    async load<M>(
        request: A_ACCOUNT_APP_INTERACTIONS_TYPES__UserGetRequest,
        /**
         * The meta object to pass through API call for error handling or response handling
         */
        meta?: M
    ) {
        return await this
            .get(
                `/users/${request.userASEID}`,
                {},
                {
                    meta
                }
            );
    }


    async invite<M = any>(
        request: A_ACCOUNT_APP_INTERACTIONS_TYPES__UserInviteRequest,
        /**
        * The meta object to pass through API call for error handling or response handling
        */
        meta?: M

    ) {
        return await this
            .post<A_ACCOUNT_APP_INTERACTIONS_TYPES__UserInviteResponse, M>(
                '/users/invite',
                request,
                {
                    meta
                }
            );
    }
}
