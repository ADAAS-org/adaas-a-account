import { A_ACCOUNT_TYPES__Country_APIEntity, A_ACCOUNT_TYPES__Timezone_APIEntity } from "../../common/types/A_ACCOUNT_CommonAPI.types";

export type A_ACCOUNT_TYPES__User_APIEntity = {
    /**
     * User identity from ADAAS SSO - the same as user identity in ADAAS SSO
     */
    id: string,
    identity: string,

    profile: A_ACCOUNT_TYPES__UserProfile_APIEntity
    settings?: A_ACCOUNT_TYPES__UserSettings_APIEntity,


    created_at: string;
    updated_at: string;
};



export type A_ACCOUNT_TYPES__UserProfile_APIEntity = {
    id: number,

    avatarURL: String

    name: string;
    work_email: string;

    personal_email: string;
    avatar_a_folder_identity?: number;

    created_at: string;
    updated_at: string;
};


export type A_ACCOUNT_TYPES__UserSettings_APIEntity = {
    id: number
    system_background: string
    country: A_ACCOUNT_TYPES__Country_APIEntity
    timezone: A_ACCOUNT_TYPES__Timezone_APIEntity
}