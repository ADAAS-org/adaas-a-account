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
exports.A_ACCOUNT_APP_INTERACTIONS__OrganizationUnitAPI = void 0;
const a_auth_1 = require("@adaas/a-auth");
class A_ACCOUNT_APP_INTERACTIONS__OrganizationUnitAPI extends a_auth_1.A_AUTH_AppInteractions_APIProvider {
    constructor() {
        super(...arguments);
        this.baseURL = this.context.getConfigurationProperty('API_LOCATION');
    }
    /**
     * Returns list of organization units based on User Access
     *
     * @param request
     * @param meta
     * @returns
     */
    list(request, 
    /**
     * The meta object to pass through API call for error handling or response handling
     */
    meta) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this
                .get(`/organization/${request.orgASEID}/units`, request, {
                meta
            });
        });
    }
    /**
     * API returns organization unit with nested entities such as settings, etc.
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
                .get(`/organizations/${request.orgASEID}/units/${request.unitASEID}`, {}, {
                meta
            });
        });
    }
    /**
     * API creates organization unit with nested entities such as profile, settings, etc.
     *
     * @param request
     * @param meta
     * @returns
     */
    create(request, 
    /**
     * The meta object to pass through API call for error handling or response handling
     */
    meta) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this
                .post(`/organizations/${request.orgASEID}/units`, request, {
                meta
            });
        });
    }
    /**
     * API updates organization unit with nested entities such as profile, settings, etc.
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
                .put(`/organizations/${request.orgASEID}/units/${request.aseid}`, request, {
                meta
            });
        });
    }
    /**
     * API to remove organization unit
     *
     * @param request
     * @param meta
     * @returns
     */
    remove(request, 
    /**
     * The meta object to pass through API call for error handling or response handling
     */
    meta) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this
                .delete(`/organizations/${request.orgASEID}/units/${request.unitASEID}`, {
                meta
            });
        });
    }
}
exports.A_ACCOUNT_APP_INTERACTIONS__OrganizationUnitAPI = A_ACCOUNT_APP_INTERACTIONS__OrganizationUnitAPI;
//# sourceMappingURL=A_ACCOUNT_OrganizationUnit.api.js.map