import { A_SDK_TYPES__DeepPartial, A_SDK_TYPES__Required } from "@adaas/a-sdk-types";

export type A_ACCOUNT_TYPES__UserProfile_APIEntity = {
    id: number,

    avatarURL: String

    name: string;
    title: string;
    work_email: string;

    personal_email: string;
    avatar_a_folder_aseid?: string;

    created_at: string;
    updated_at: string;
};


// =========================  USER PROFILE GET REQUEST API TYPES ================================
export type A_ACCOUNT_APP_INTERACTIONS_TYPES__UserProfileGetRequest = {
    /**
     * User identifier in ADAAS System
     */
    userASEID: string,
}

export type A_ACCOUNT_APP_INTERACTIONS_TYPES__UserProfileGetResponse = Partial<A_ACCOUNT_TYPES__UserProfile_APIEntity>


// =========================  USER PROFILE UPDATE REQUEST API TYPES ================================
export type A_ACCOUNT_APP_INTERACTIONS_TYPES__UserProfileUpdateRequest = {
    /**
     * User identifier in ADAAS System
     */
    userASEID: string,
    profile: A_SDK_TYPES__Required<
        A_SDK_TYPES__DeepPartial<A_ACCOUNT_TYPES__UserProfile_APIEntity>, [
            'id'
        ]>
}

export type A_ACCOUNT_APP_INTERACTIONS_TYPES__UserProfileUpdateResponse = Partial<A_ACCOUNT_TYPES__UserProfile_APIEntity>



// =========================  USER PROFILE AVATAR UPLOAD REQUEST API TYPES ================================
export type A_ACCOUNT_APP_INTERACTIONS_TYPES__UserProfileAvatarUploadRequest = {
    /**
     * User identifier in ADAAS System
     */
    userASEID: string,
    file: File
}

export type A_ACCOUNT_APP_INTERACTIONS_TYPES__UserProfileAvatarUploadResponse = {
    avatar_a_folder_aseid: string
}