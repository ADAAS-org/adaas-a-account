import { A_AUTH_AppInteractions_APIProvider } from "@adaas/a-auth";
import { A_ACCOUNT_ContextClass } from "@adaas/a-sdk/global/A_ACCOUNT_Context.class";
import {
    A_ACCOUNT_APP_INTERACTIONS_TYPES__OrganizationProfileGetRequest,
    A_ACCOUNT_APP_INTERACTIONS_TYPES__OrganizationProfileGetResponse,
    A_ACCOUNT_APP_INTERACTIONS_TYPES__OrganizationProfileLogoUploadRequest,
    A_ACCOUNT_APP_INTERACTIONS_TYPES__OrganizationProfileLogoUploadResponse,
    A_ACCOUNT_APP_INTERACTIONS_TYPES__OrganizationProfileUpdateRequest,
    A_ACCOUNT_APP_INTERACTIONS_TYPES__OrganizationProfileUpdateResponse
} from "./A_ACCOUNT_OrganizationProfile.types";

export class A_ACCOUNT_APP_INTERACTIONS__OrganizationProfileAPI extends A_AUTH_AppInteractions_APIProvider<A_ACCOUNT_ContextClass> {

    protected baseURL: string = this.context.getConfigurationProperty<string>('API_LOCATION');

    /**
     * 
     * This function is used to get organization profile
     * 
     * @param orgASEID 
     * @returns 
     */
    async load<M = any>(
        request: A_ACCOUNT_APP_INTERACTIONS_TYPES__OrganizationProfileGetRequest,
        /**
         * The meta object to pass through API call for error handling or response handling
         */
        meta?: M
    ) {
        return await this
            .get<A_ACCOUNT_APP_INTERACTIONS_TYPES__OrganizationProfileGetResponse, M>(
                `/organizations/${request.orgASEID}/profile`,
                {},
                {
                    meta
                }
            );
    }

    /**
     *  This function is used to upload organization logo
     * 
     * @param request 
     * @param meta 
     * @returns 
     */
    async uploadLogo<M = any>(
        request: A_ACCOUNT_APP_INTERACTIONS_TYPES__OrganizationProfileLogoUploadRequest,
        /**
         * The meta object to pass through API call for error handling or response handling
         */
        meta?: M
    ) {
        const formData = new FormData();
        formData.append('organizationLogo', request.file);

        return await this
            .post<A_ACCOUNT_APP_INTERACTIONS_TYPES__OrganizationProfileLogoUploadResponse, M>(
                `/organizations/${request.orgASEID}/profile/logo`,
                formData,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                }
            );
    }


    /**
     *  This function is used to update organization profile
     * 
     * @param request 
     * @param meta 
     * @returns 
     */
    async update<M = any>(
        request: A_ACCOUNT_APP_INTERACTIONS_TYPES__OrganizationProfileUpdateRequest,
        /**
         * The meta object to pass through API call for error handling or response handling
         */
        meta?: M
    ) {
        return await this
            .put<A_ACCOUNT_APP_INTERACTIONS_TYPES__OrganizationProfileUpdateResponse, M>(
                `/organizations/${request.orgASEID}/profile`,
                request.profile,
                {
                    meta
                }
            );
    }
}

