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
exports.A_ACCOUNT_APP_INTERACTIONS__UserProfileAPI = void 0;
const a_auth_1 = require("@adaas/a-auth");
class A_ACCOUNT_APP_INTERACTIONS__UserProfileAPI extends a_auth_1.A_AUTH_AppInteractions_APIProvider {
    get baseURL() {
        return this.context.getConfigurationProperty('API_LOCATION');
    }
    load(request, 
    /**
     * The meta object to pass through API call for error handling or response handling
     */
    meta) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this
                .get(`/users/${request.userASEID}/profile`, {}, {
                meta
            });
        });
    }
    uploadAvatar(request, 
    /**
     * The meta object to pass through API call for error handling or response handling
     */
    meta) {
        return __awaiter(this, void 0, void 0, function* () {
            const formData = new FormData();
            formData.append('userAvatar', request.file);
            return yield this
                .post(`/users/${request.userASEID}/profile/avatar`, formData, {
                meta,
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
        });
    }
    update(request, 
    /**
     * The meta object to pass through API call for error handling or response handling
     */
    meta) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this
                .put(`/users/${request.userASEID}/profile`, request.profile, {
                meta
            });
        });
    }
}
exports.A_ACCOUNT_APP_INTERACTIONS__UserProfileAPI = A_ACCOUNT_APP_INTERACTIONS__UserProfileAPI;
//# sourceMappingURL=A_ACCOUNT_UserProfile.api.js.map