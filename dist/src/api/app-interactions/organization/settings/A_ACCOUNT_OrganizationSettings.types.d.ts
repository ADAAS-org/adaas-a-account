import { A_SDK_TYPES__DeepPartial } from "@adaas/a-sdk-types";
import { A_ACCOUNT_TYPES__Country_APIEntity, A_ACCOUNT_TYPES__Timezone_APIEntity } from "../../common/A_ACCOUNT_Common.types";
export type A_ACCOUNT_TYPES__OrganizationSettings_APIEntity = {
    id: number;
    system_background: string;
    Country: A_ACCOUNT_TYPES__Country_APIEntity;
    Timezone: A_ACCOUNT_TYPES__Timezone_APIEntity;
};
export type A_ACCOUNT_APP_INTERACTIONS_TYPES__OrganizationSettingsGetRequest = {
    /**
     * Organization identifier in ADAAS System
     */
    orgASEID: string;
};
export type A_ACCOUNT_APP_INTERACTIONS_TYPES__OrganizationSettingsGetResponse = Partial<A_ACCOUNT_TYPES__OrganizationSettings_APIEntity>;
export type A_ACCOUNT_APP_INTERACTIONS_TYPES__OrganizationSettingsUpdateRequest = {
    /**
     * Organization identifier in ADAAS System
     */
    orgASEID: string;
    settings: A_SDK_TYPES__DeepPartial<A_ACCOUNT_TYPES__OrganizationSettings_APIEntity>;
};
export type A_ACCOUNT_APP_INTERACTIONS_TYPES__OrganizationSettingsUpdateResponse = Partial<A_ACCOUNT_TYPES__OrganizationSettings_APIEntity>;
