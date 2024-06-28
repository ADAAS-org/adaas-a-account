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
exports.A_ACCOUNT_APP_INTERACTIONS__OrganizationSettingsAPI = void 0;
const a_auth_1 = require("@adaas/a-auth");
class A_ACCOUNT_APP_INTERACTIONS__OrganizationSettingsAPI extends a_auth_1.A_AUTH_AppInteractions_APIProvider {
    constructor() {
        super(...arguments);
        this.baseURL = this.context.getConfigurationProperty('API_LOCATION');
    }
    /**
     *
     * This function is used to get organization settings
     *
     * @param orgASEID
     * @returns
     */
    load(request, 
    /**
     * The meta object to pass through API call for error handling or response handling
     */
    meta) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this
                .get(`/organizations/${request.orgASEID}/settings`, {}, {
                meta
            });
        });
    }
    /**
     *  This function is used to update organization settings
     *
     * @param request
     * @param meta
     * @returns
     */
    update(request, 
    /**
     * The meta object to pass through API call for error handling or response handling
     */
    meta) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this
                .put(`/organizations/${request.orgASEID}/settings`, request.settings, {
                meta
            });
        });
    }
}
exports.A_ACCOUNT_APP_INTERACTIONS__OrganizationSettingsAPI = A_ACCOUNT_APP_INTERACTIONS__OrganizationSettingsAPI;
//# sourceMappingURL=A_ACCOUNT_OrganizationSettings.api.js.map