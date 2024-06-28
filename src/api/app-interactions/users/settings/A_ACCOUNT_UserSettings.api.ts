import { A_AUTH_AppInteractions_APIProvider } from "@adaas/a-auth";
import { A_ACCOUNT_ContextClass } from "@adaas/a-sdk/global/A_ACCOUNT_Context.class";
import { A_ACCOUNT_APP_INTERACTIONS_TYPES__UserSettingsGetRequest, A_ACCOUNT_APP_INTERACTIONS_TYPES__UserSettingsGetResponse, A_ACCOUNT_APP_INTERACTIONS_TYPES__UserSettingsUpdateRequest, A_ACCOUNT_APP_INTERACTIONS_TYPES__UserSettingsUpdateResponse } from "./A_ACCOUNT_UserSettings.types";


export class A_ACCOUNT_APP_INTERACTIONS__UserSettingsAPI extends A_AUTH_AppInteractions_APIProvider<A_ACCOUNT_ContextClass> {

    protected baseURL: string = this.context.getConfigurationProperty<string>('API_LOCATION');


    async load<M = any>(
        request: A_ACCOUNT_APP_INTERACTIONS_TYPES__UserSettingsGetRequest,
        /**
         * The meta object to pass through API call for error handling or response handling
         */
        meta?: M
    ) {
        return await this
            .get<A_ACCOUNT_APP_INTERACTIONS_TYPES__UserSettingsGetResponse, M>(
                `/api/v1/users/${request.userASEID}/settings`,
                {},
                {
                    meta
                }
            );
    }


    async update<M = any>(
        request: A_ACCOUNT_APP_INTERACTIONS_TYPES__UserSettingsUpdateRequest,
        /**
         * The meta object to pass through API call for error handling or response handling
         */
        meta?: M
    ): Promise<any> {

        return await this
            .put<A_ACCOUNT_APP_INTERACTIONS_TYPES__UserSettingsUpdateResponse, M>(
                `/api/v1/users/${request.userASEID}/settings`,
                request,
                {
                    meta
                }
            );
    }
}