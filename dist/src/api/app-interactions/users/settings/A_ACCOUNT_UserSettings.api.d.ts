import { A_AUTH_AppInteractions_APIProvider } from "@adaas/a-auth";
import { A_ACCOUNT_ContextClass } from "../../../../global/A_ACCOUNT_Context.class";
import { A_ACCOUNT_APP_INTERACTIONS_TYPES__UserSettingsGetRequest, A_ACCOUNT_APP_INTERACTIONS_TYPES__UserSettingsUpdateRequest } from "./A_ACCOUNT_UserSettings.types";
export declare class A_ACCOUNT_APP_INTERACTIONS__UserSettingsAPI extends A_AUTH_AppInteractions_APIProvider<A_ACCOUNT_ContextClass> {
    protected baseURL: string;
    load<M = any>(request: A_ACCOUNT_APP_INTERACTIONS_TYPES__UserSettingsGetRequest, 
    /**
     * The meta object to pass through API call for error handling or response handling
     */
    meta?: M): Promise<import("./A_ACCOUNT_UserSettings.types").A_ACCOUNT_TYPES__UserSettings_APIEntity>;
    update<M = any>(request: A_ACCOUNT_APP_INTERACTIONS_TYPES__UserSettingsUpdateRequest, 
    /**
     * The meta object to pass through API call for error handling or response handling
     */
    meta?: M): Promise<any>;
}
