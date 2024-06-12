export type A_ACCOUNT_TYPES__Country_APIEntity = {
    id: number;
    identity: '';
    name: string;
    iso2: string;
    iso3: string;
    numeric: string;
    phone_code?: number;
    created_at: string;
    updated_at: string;
};
export type A_ACCOUNT_TYPES__Timezone_APIEntity = {
    id: number;
    identity: '';
    name: string;
    code: string;
    utc_offset: number;
    created_at: string;
    updated_at: string;
};
export type A_ACCOUNT_TYPES__BusinessDomain_APIEntity = {
    id: number;
    identity: '';
    name: string;
    description: string;
    icon?: string;
    created_at: string;
    updated_at: string;
};
export type A_ACCOUNT_TYPES__BusinessType_APIEntity = {
    id: number;
    identity: '';
    name: string;
    description: string;
    created_at: string;
    updated_at: string;
};
