import { A_AUTH_AppInteractions_APIProvider } from "@adaas/a-auth";
import { A_ACCOUNT_ContextClass } from "../../../../global/A_ACCOUNT_Context.class";
import { A_ACCOUNT_APP_INTERACTIONS_TYPES__OrganizationSettingsGetRequest, A_ACCOUNT_APP_INTERACTIONS_TYPES__OrganizationSettingsUpdateRequest } from "./A_ACCOUNT_OrganizationSettings.types";
export declare class A_ACCOUNT_APP_INTERACTIONS__OrganizationSettingsAPI extends A_AUTH_AppInteractions_APIProvider<A_ACCOUNT_ContextClass> {
    protected get baseURL(): string;
    /**
     *
     * This function is used to get organization settings
     *
     * @param orgASEID
     * @returns
     */
    load<M = any>(request: A_ACCOUNT_APP_INTERACTIONS_TYPES__OrganizationSettingsGetRequest, 
    /**
     * The meta object to pass through API call for error handling or response handling
     */
    meta?: M): Promise<Partial<import("./A_ACCOUNT_OrganizationSettings.types").A_ACCOUNT_TYPES__OrganizationSettings_APIEntity>>;
    /**
     *  This function is used to update organization settings
     *
     * @param request
     * @param meta
     * @returns
     */
    update<M = any>(request: A_ACCOUNT_APP_INTERACTIONS_TYPES__OrganizationSettingsUpdateRequest, 
    /**
     * The meta object to pass through API call for error handling or response handling
     */
    meta?: M): Promise<Partial<import("./A_ACCOUNT_OrganizationSettings.types").A_ACCOUNT_TYPES__OrganizationSettings_APIEntity>>;
}
