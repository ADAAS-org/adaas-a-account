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
exports.A_ACCOUNT_UsersAPIClass = void 0;
const a_auth_1 = require("@adaas/a-auth");
class A_ACCOUNT_UsersAPIClass extends a_auth_1.A_AUTH_APIProvider {
    constructor(baseURL) {
        super(baseURL);
        this.baseURL = baseURL || process.env.ADAAS_ACCOUNT_API_LOCATION || 'https://api.account.adaas.org';
        this.init();
    }
    // ==========================================
    // ================ User API ================
    // ==========================================
    getUsers(pagination, filter) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.axiosInstance
                .get('/api/v1/users', {
                params: Object.assign(Object.assign({}, pagination), filter)
            });
            return response.data;
        });
    }
    getUser(userIdentity) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.axiosInstance
                .get(`/api/v1/users/${userIdentity}`);
            return response.data;
        });
    }
    createUser(user) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.axiosInstance
                .post('/api/v1/users', user);
            return response.data;
        });
    }
    // ==========================================
    // ============== User Profile ==============
    // ==========================================
    getUserProfile(userIdentity) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.axiosInstance
                .get(`/api/v1/users/${userIdentity}/profile`);
            return response.data;
        });
    }
    uploadAvatar(userIdentity, file) {
        return __awaiter(this, void 0, void 0, function* () {
            const formData = new FormData();
            formData.append('file', file);
            const response = yield this.axiosInstance
                .post(`/api/v1/users/${userIdentity}/profile/avatar`, formData);
            return response.data;
        });
    }
    updateUserProfile(userIdentity, profile) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.axiosInstance
                .put(`/api/v1/users/${userIdentity}/profile`, profile);
            return response.data;
        });
    }
    // ==========================================
    // ============== User Settings =============
    // ==========================================
    getUserSettings(userIdentity) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.axiosInstance
                .get(`/api/v1/users/${userIdentity}/settings`);
            return response.data;
        });
    }
    /**
     * This function is used to get user settings
     *
     * @param userIdentity  numeric user id or string identity
     * @param settings  object with settings
     * @returns
     */
    updateUserSettings(userIdentity, settings) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.axiosInstance.put(`/api/v1/users/${userIdentity}/settings`, settings);
            return response.data;
        });
    }
}
exports.A_ACCOUNT_UsersAPIClass = A_ACCOUNT_UsersAPIClass;
//# sourceMappingURL=A_ACCOUNT_Users.api.js.map