
// ============ TYPES Export ============

// ============ API TYPES Export ============
export {
    A_ACCOUNT_TYPES__BusinessDomain_APIEntity,
    A_ACCOUNT_TYPES__BusinessType_APIEntity,
    A_ACCOUNT_TYPES__Country_APIEntity,
    A_ACCOUNT_TYPES__Timezone_APIEntity
} from './src/api/common/types/A_ACCOUNT_CommonAPI.types';


// ================== API ==================
// Mainly for BE purposes it uses API paths from ENV Variables
export {
    A_ACCOUNT_CommonAPI,
    A_ACCOUNT_OrganizationsAPI,
    A_ACCOUNT_UsersAPI
} from './src/api';


// ============ API CLASSES Export ============
// Mainly for FE purposes it uses API directly from class constructor
export { A_ACCOUNT_CommonAPIClass } from './src/api/common/A_ACCOUNT_Common.api';
export { A_ACCOUNT_OrganizationsAPIClass } from './src/api/organization/A_ACCOUNT_Organization.api';
export { A_ACCOUNT_UsersAPIClass } from './src/api/user/A_ACCOUNT_Users.api';
