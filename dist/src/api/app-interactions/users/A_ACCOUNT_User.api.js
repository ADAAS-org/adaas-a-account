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
exports.A_ACCOUNT_APP_INTERACTIONS__UserAPI = void 0;
const a_auth_1 = require("@adaas/a-auth");
class A_ACCOUNT_APP_INTERACTIONS__UserAPI extends a_auth_1.A_AUTH_AppInteractions_APIProvider {
    get baseURL() {
        return this.context.getConfigurationProperty('API_LOCATION');
    }
    list(request, 
    /**
     * The meta object to pass through API call for error handling or response handling
     */
    meta) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this
                .get('/users', request, {
                meta
            });
        });
    }
    /**
     *  This function is used to get user details
     *
     * @param request
     * @param meta
     * @returns
     */
    load(request, 
    /**
     * The meta object to pass through API call for error handling or response handling
     */
    meta) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this
                .get(`/users/${request.userASEID}`, {}, {
                meta
            });
        });
    }
    invite(request, 
    /**
    * The meta object to pass through API call for error handling or response handling
    */
    meta) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this
                .post('/users/invite', request, {
                meta
            });
        });
    }
}
exports.A_ACCOUNT_APP_INTERACTIONS__UserAPI = A_ACCOUNT_APP_INTERACTIONS__UserAPI;
//# sourceMappingURL=A_ACCOUNT_User.api.js.map