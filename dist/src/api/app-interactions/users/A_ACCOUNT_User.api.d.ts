import { A_AUTH_AppInteractions_APIProvider } from "@adaas/a-auth";
import { A_ACCOUNT_ContextClass } from "../../../global/A_ACCOUNT_Context.class";
import { A_ACCOUNT_APP_INTERACTIONS_TYPES__UserGetRequest, A_ACCOUNT_APP_INTERACTIONS_TYPES__UserInviteRequest, A_ACCOUNT_APP_INTERACTIONS_TYPES__UserListRequest, A_ACCOUNT_APP_INTERACTIONS_TYPES__UserListResponse } from "./A_ACCOUNT_User.types";
export declare class A_ACCOUNT_APP_INTERACTIONS__UserAPI extends A_AUTH_AppInteractions_APIProvider<A_ACCOUNT_ContextClass> {
    protected get baseURL(): string;
    list<M = any>(request: A_ACCOUNT_APP_INTERACTIONS_TYPES__UserListRequest, 
    /**
     * The meta object to pass through API call for error handling or response handling
     */
    meta?: M): Promise<A_ACCOUNT_APP_INTERACTIONS_TYPES__UserListResponse>;
    /**
     *  This function is used to get user details
     *
     * @param request
     * @param meta
     * @returns
     */
    load<M>(request: A_ACCOUNT_APP_INTERACTIONS_TYPES__UserGetRequest, 
    /**
     * The meta object to pass through API call for error handling or response handling
     */
    meta?: M): Promise<unknown>;
    invite<M = any>(request: A_ACCOUNT_APP_INTERACTIONS_TYPES__UserInviteRequest, 
    /**
    * The meta object to pass through API call for error handling or response handling
    */
    meta?: M): Promise<import("./A_ACCOUNT_User.types").A_ACCOUNT_TYPES__User_APIEntity>;
}
