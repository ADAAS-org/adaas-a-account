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
exports.A_ACCOUNT_APP_INTERACTIONS__OrganizationBalanceAPI = void 0;
const a_auth_1 = require("@adaas/a-auth");
/**
 * API Provider for Organization Balance
 */
class A_ACCOUNT_APP_INTERACTIONS__OrganizationBalanceAPI extends a_auth_1.A_AUTH_AppInteractions_APIProvider {
    get baseURL() {
        return this.context.getConfigurationProperty('API_LOCATION');
    }
    load(request, 
    /**
     * The meta object to pass through API
     */
    meta) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.get(`/organizations/${request.orgASEID}/balance`, {}, {
                meta
            });
        });
    }
}
exports.A_ACCOUNT_APP_INTERACTIONS__OrganizationBalanceAPI = A_ACCOUNT_APP_INTERACTIONS__OrganizationBalanceAPI;
//# sourceMappingURL=A_ACCOUNT_OrganizationBalance.api.js.map