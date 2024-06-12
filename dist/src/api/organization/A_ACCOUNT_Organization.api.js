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
    getOrganizations(pagination, filter) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.axiosInstance
                .get('/api/v1/organizations', {
                params: Object.assign(Object.assign({}, pagination), filter)
            });
            return response.data;
        });
    }
    getOrganization(organizationIdOrIdentity) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.axiosInstance
                .get(`/api/v1/organizations/${organizationIdOrIdentity}`);
            return response.data;
        });
    }
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
    getOrganizationProfile(organizationIdOrIdentity) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.axiosInstance
                .get(`/api/v1/organizations/${organizationIdOrIdentity}/profile`);
            return response.data;
        });
    }
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
}
exports.A_ACCOUNT_OrganizationsAPIClass = A_ACCOUNT_OrganizationsAPIClass;
//# sourceMappingURL=A_ACCOUNT_Organization.api.js.map