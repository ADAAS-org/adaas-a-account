import { A_AUTH_AppInteractions_APIProvider } from "@adaas/a-auth";
import { A_ACCOUNT_ContextClass } from "../../../../global/A_ACCOUNT_Context.class";
import { A_ACCOUNT_APP_INTERACTIONS_TYPES__OrganizationProfileGetRequest, A_ACCOUNT_APP_INTERACTIONS_TYPES__OrganizationProfileLogoUploadRequest, A_ACCOUNT_APP_INTERACTIONS_TYPES__OrganizationProfileLogoUploadResponse, A_ACCOUNT_APP_INTERACTIONS_TYPES__OrganizationProfileUpdateRequest } from "./A_ACCOUNT_OrganizationProfile.types";
export declare class A_ACCOUNT_APP_INTERACTIONS__OrganizationProfileAPI extends A_AUTH_AppInteractions_APIProvider<A_ACCOUNT_ContextClass> {
    protected baseURL: string;
    /**
     *
     * This function is used to get organization profile
     *
     * @param orgASEID
     * @returns
     */
    load<M = any>(request: A_ACCOUNT_APP_INTERACTIONS_TYPES__OrganizationProfileGetRequest, 
    /**
     * The meta object to pass through API call for error handling or response handling
     */
    meta?: M): Promise<Partial<import("./A_ACCOUNT_OrganizationProfile.types").A_ACCOUNT_TYPES__OrganizationProfile_APIEntity>>;
    /**
     *  This function is used to upload organization logo
     *
     * @param request
     * @param meta
     * @returns
     */
    uploadLogo<M = any>(request: A_ACCOUNT_APP_INTERACTIONS_TYPES__OrganizationProfileLogoUploadRequest, 
    /**
     * The meta object to pass through API call for error handling or response handling
     */
    meta?: M): Promise<A_ACCOUNT_APP_INTERACTIONS_TYPES__OrganizationProfileLogoUploadResponse>;
    /**
     *  This function is used to update organization profile
     *
     * @param request
     * @param meta
     * @returns
     */
    update<M = any>(request: A_ACCOUNT_APP_INTERACTIONS_TYPES__OrganizationProfileUpdateRequest, 
    /**
     * The meta object to pass through API call for error handling or response handling
     */
    meta?: M): Promise<Partial<import("./A_ACCOUNT_OrganizationProfile.types").A_ACCOUNT_TYPES__OrganizationProfile_APIEntity>>;
}
