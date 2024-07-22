import { A_SDK_TYPES__DeepPartial, A_SDK_TYPES__Required } from "@adaas/a-sdk-types";
import { A_ACCOUNT_TYPES__Country_APIEntity, A_ACCOUNT_TYPES__Timezone_APIEntity } from "../../common/A_ACCOUNT_Common.types";
export type A_ACCOUNT_TYPES__UserSettings_APIEntity = {
    id: number;
    system_background: string;
    locale: string;
    Country: A_ACCOUNT_TYPES__Country_APIEntity;
    Timezone: A_ACCOUNT_TYPES__Timezone_APIEntity;
};
export type A_ACCOUNT_APP_INTERACTIONS_TYPES__UserSettingsGetRequest = {
    userASEID: string;
};
export type A_ACCOUNT_APP_INTERACTIONS_TYPES__UserSettingsGetResponse = A_ACCOUNT_TYPES__UserSettings_APIEntity;
export type A_ACCOUNT_APP_INTERACTIONS_TYPES__UserSettingsUpdateRequest = {
    userASEID: string;
    settings: A_SDK_TYPES__Required<A_SDK_TYPES__DeepPartial<A_ACCOUNT_TYPES__UserSettings_APIEntity>, [
        'id'
    ]>;
};
export type A_ACCOUNT_APP_INTERACTIONS_TYPES__UserSettingsUpdateResponse = A_ACCOUNT_TYPES__UserSettings_APIEntity;
