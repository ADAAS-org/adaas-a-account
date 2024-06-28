import { A_AUTH_AppInteractions_APIProvider } from "@adaas/a-auth";
import { A_ACCOUNT_ContextClass } from "@adaas/a-sdk/global/A_ACCOUNT_Context.class";
import { A_ACCOUNT_APP_INTERACTIONS_TYPES__UserProfileAvatarUploadRequest, A_ACCOUNT_APP_INTERACTIONS_TYPES__UserProfileAvatarUploadResponse, A_ACCOUNT_APP_INTERACTIONS_TYPES__UserProfileGetRequest, A_ACCOUNT_APP_INTERACTIONS_TYPES__UserProfileGetResponse, A_ACCOUNT_APP_INTERACTIONS_TYPES__UserProfileUpdateRequest, A_ACCOUNT_APP_INTERACTIONS_TYPES__UserProfileUpdateResponse } from "./A_ACCOUNT_UserProfile.types";


export class A_ACCOUNT_APP_INTERACTIONS__UserProfileAPI extends A_AUTH_AppInteractions_APIProvider<A_ACCOUNT_ContextClass> {

    protected baseURL: string = this.context.getConfigurationProperty<string>('API_LOCATION');


    async load<M = any>(
        request: A_ACCOUNT_APP_INTERACTIONS_TYPES__UserProfileGetRequest,
        /**
         * The meta object to pass through API call for error handling or response handling
         */
        meta?: M
    ) {
        return await this
            .get<A_ACCOUNT_APP_INTERACTIONS_TYPES__UserProfileGetResponse, M>(
                `/users/${request.userASEID}/profile`,
                {},
                {
                    meta
                }

            );
    }

    async uploadAvatar<M = any>(
        request: A_ACCOUNT_APP_INTERACTIONS_TYPES__UserProfileAvatarUploadRequest,
        /**
         * The meta object to pass through API call for error handling or response handling
         */
        meta?: M
    ) {
        const formData = new FormData();
        formData.append('userAvatar', request.file);

        return await this
            .post<A_ACCOUNT_APP_INTERACTIONS_TYPES__UserProfileAvatarUploadResponse, M>(
                `/users/${request.userASEID}/profile/avatar`,
                formData,
                {
                    meta,
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                }
            );

    }


    async update<M = any>(
        request: A_ACCOUNT_APP_INTERACTIONS_TYPES__UserProfileUpdateRequest,
        /**
         * The meta object to pass through API call for error handling or response handling
         */
        meta?: M
    ) {
        return await this
            .put<A_ACCOUNT_APP_INTERACTIONS_TYPES__UserProfileUpdateResponse, M>(
                `/users/${request.userASEID}/profile`,
                request.profile,
                {
                    meta
                }
            );
    }
}