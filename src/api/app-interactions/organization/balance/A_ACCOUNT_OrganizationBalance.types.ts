export type A_ACCOUNT_TYPES__OrganizationBalance_APIEntity = {
    id: number
    /**
     * this is actual amount in 10 x cents
     * so $10 = 10 (dollars) * 100 (cents) * 10000 = 10,000,000 => 10 * 1,000,000
     */
    amount: number
}


// =========================  ORGANIZATION BALANCE GET REQUEST API TYPES ================================
export type A_ACCOUNT_APP_INTERACTIONS_TYPES__OrganizationBalanceGetRequest = {
    /**
     * Organization identifier in ADAAS System
     */
    orgASEID: string,
}

export type A_ACCOUNT_APP_INTERACTIONS_TYPES__OrganizationBalanceGetResponse = Partial<A_ACCOUNT_TYPES__OrganizationBalance_APIEntity>
