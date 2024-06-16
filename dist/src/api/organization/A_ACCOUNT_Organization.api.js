"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.A_ACCOUNT_OrganizationsAPIClass = void 0;
const a_auth_1 = require("@adaas/a-auth");
class A_ACCOUNT_OrganizationsAPIClass extends a_auth_1.A_AUTH_APIProvider {
    constructor(baseURL) {
        super(baseURL);
        this.baseURL = baseURL || process.env.ADAAS_ACCOUNT_API_LOCATION || 'https://api.account.adaas.org';
        this.init();
    }
    // ==========================================
    // ================ Organization API ================
    // ==========================================
    /**
     * Returns list of organizations based on api credentials and user permissions
     *
     * @param pagination
     * @param filter
     * @returns
     */
    getOrganizations(pagination, filter) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.axiosInstance
                .get('/api/v1/organizations', {
                params: Object.assign(Object.assign({}, pagination), filter)
            });
            return response.data;
        });
    }
    /**
     *  This function is used to get organization with nested entities such as profile, settings, etc.
     *
     * @param organizationIdOrIdentity
     * @returns
     */
    getOrganization(organizationIdOrIdentity) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.axiosInstance
                .get(`/api/v1/organizations/${organizationIdOrIdentity}`);
            return response.data;
        });
    }
    /**
     * This function is used to create organization
     *
     * @param organization
     * @returns
     */
    createOrganization(organization) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.axiosInstance
                .post('/api/v1/organizations', organization);
            return response.data;
        });
    }
    // ==========================================
    // ============== Organization Profile ==============
    // ==========================================
    /**
     *
     * This function is used to get organization profile
     *
     * @param organizationIdOrIdentity
     * @returns
     */
    getOrganizationProfile(organizationIdOrIdentity) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.axiosInstance
                .get(`/api/v1/organizations/${organizationIdOrIdentity}/profile`);
            return response.data;
        });
    }
    /**
     * This function is used to upload organization logo
     *
     * @param organizationIdOrIdentity
     * @param file
     * @returns
     */
    uploadLogo(organizationIdOrIdentity, file) {
        return __awaiter(this, void 0, void 0, function* () {
            const formData = new FormData();
            formData.append('file', file);
            const response = yield this.axiosInstance
                .post(`/api/v1/organizations/${organizationIdOrIdentity}/profile/logo`, formData);
            return response.data;
        });
    }
    updateOrganizationProfile(organizationIdOrIdentity, profile) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.axiosInstance
                .put(`/api/v1/organizations/${organizationIdOrIdentity}/profile`, profile);
            return response.data;
        });
    }
    // ==========================================
    // ============== Organization Settings =============
    // ==========================================
    /**
     *
     *  This function is used to get organization settings
     *
     * @param organizationIdOrIdentity
     * @returns
     */
    getOrganizationSettings(organizationIdOrIdentity) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.axiosInstance.get(`/api/v1/organizations/${organizationIdOrIdentity}/settings`);
            return response.data;
        });
    }
    /**
     * This function is used to get organization settings
     *
     * @param organizationIdOrIdentity  numeric organization id or string identity
     * @param settings  object with settings
     * @returns
     */
    updateOrganizationSettings(organizationIdOrIdentity, settings) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.axiosInstance.put(`/api/v1/organizations/${organizationIdOrIdentity}/settings`, settings);
            return response.data;
        });
    }
    // ==========================================
    // ======== Organization Balance ============
    // ==========================================
    getOrganizationBalance(organizationIdOrIdentity) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.axiosInstance.get(`/api/v1/organizations/${organizationIdOrIdentity}/balance`);
            return response.data;
        });
    }
    withdrawOrganizationBalance(organizationIdOrIdentity, amount, payload) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.axiosInstance.post(`/api/v1/organizations/${organizationIdOrIdentity}/balance/withdraw`, { amount, payload });
            return response.data;
        });
    }
    depositOrganizationBalance(organizationIdOrIdentity, amount, payload) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.axiosInstance.post(`/api/v1/organizations/${organizationIdOrIdentity}/balance/deposit`, { amount, payload });
            return response.data;
        });
    }
    // ==========================================
    // ======== Organization Units ==============
    // ==========================================
    getOrganizationUnits(organizationIdOrIdentity, pagination, filter) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.axiosInstance
                .get(`/api/v1/organizations/${organizationIdOrIdentity}/units`, {
                params: Object.assign(Object.assign({}, pagination), filter)
            });
            return response.data;
        });
    }
    getOrganizationUnit(organizationIdOrIdentity, unitIdOrIdentity) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.axiosInstance
                .get(`/api/v1/organizations/${organizationIdOrIdentity}/units/${unitIdOrIdentity}`);
            return response.data;
        });
    }
    /**
     *
     * Allows to create organization unit from template or from scratch
     *
     * @param organizationIdOrIdentity
     * @param unit
     * @returns
     */
    createOrganizationUnit(organizationIdOrIdentity, unit) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.axiosInstance
                .post(`/api/v1/organizations/${organizationIdOrIdentity}/units`, unit);
            return response.data;
        });
    }
}
exports.A_ACCOUNT_OrganizationsAPIClass = A_ACCOUNT_OrganizationsAPIClass;
//# sourceMappingURL=A_ACCOUNT_Organization.api.js.map