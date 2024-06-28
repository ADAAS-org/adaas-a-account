import { A_AUTH_ContextClass } from "@adaas/a-auth/dist/src/global/A_AUTH_Context.class";
import { A_AUTH_TYPES__IAuthenticator } from "@adaas/a-auth";
export declare class A_ACCOUNT_ContextClass extends A_AUTH_ContextClass {
    /**
     * Global AUTH Context for the SDKs
     */
    auth: A_AUTH_ContextClass;
    protected API_LOCATION: string;
    protected accountContextAllowedProperties: readonly ["CONFIG_SDK_VALIDATION", "CONFIG_VERBOSE", "CONFIG_IGNORE_ERRORS", "SSO_LOCATION", "API_LOCATION"];
    constructor();
    getConfigurationProperty<T = any>(property: typeof this.accountContextAllowedProperties[number]): T;
    getAuthenticator(userASEID?: string | undefined): A_AUTH_TYPES__IAuthenticator;
    protected loadExtendedConfigurationsFromEnvironment(): Promise<void>;
    protected loadExtendedConfigurationsFromFile<T = any>(config: T): Promise<void>;
}
export declare const A_ACCOUNT_Context: A_ACCOUNT_ContextClass;
