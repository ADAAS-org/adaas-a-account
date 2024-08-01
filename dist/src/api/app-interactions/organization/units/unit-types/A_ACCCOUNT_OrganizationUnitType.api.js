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
exports.A_ACCOUNT_APP_INTERACTIONS__OrganizationUnitTypeAPI = void 0;
const a_auth_1 = require("@adaas/a-auth");
class A_ACCOUNT_APP_INTERACTIONS__OrganizationUnitTypeAPI extends a_auth_1.A_AUTH_AppInteractions_APIProvider {
    get baseURL() {
        return this.context.getConfigurationProperty('API_LOCATION');
    }
    /**
     * Returns list of organization unit types with applied filters and pagination
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
                .get(`/organization/${request.orgASEID}/unit-types`, request, {
                meta
            });
        });
    }
    /**
     * Loads particular organization unit type
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
                .get(`/organization/${request.orgASEID}/unit-types`, request, {
                meta
            });
        });
    }
    /**
     * API creates organization unit type with nested entities such as profile, settings, etc.
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
                .post(`/organization/${request.orgASEID}/unit-types`, request, {
                meta
            });
        });
    }
    /**
     * API updates organization unit type with nested entities such as profile, settings, etc.
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
                .put(`/organization/${request.orgASEID}/unit-types/${request.aseid}`, request, {
                meta
            });
        });
    }
    /**
     * API deletes organization unit type
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
                .delete(`/organization/${request.orgASEID}/unit-types/${request.unitTypeASEID}`, {
                meta
            });
        });
    }
}
exports.A_ACCOUNT_APP_INTERACTIONS__OrganizationUnitTypeAPI = A_ACCOUNT_APP_INTERACTIONS__OrganizationUnitTypeAPI;
//# sourceMappingURL=A_ACCCOUNT_OrganizationUnitType.api.js.map