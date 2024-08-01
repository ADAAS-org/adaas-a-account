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
exports.A_ACCOUNT_APP_INTERACTIONS__CommonAPI = void 0;
const a_auth_1 = require("@adaas/a-auth");
/**
 * API Provider for Common API
 * such as Countries, Timezones, Business Domains, Business Types
 */
class A_ACCOUNT_APP_INTERACTIONS__CommonAPI extends a_auth_1.A_AUTH_AppInteractions_APIProvider {
    get baseURL() {
        return this.context.getConfigurationProperty('API_LOCATION');
    }
    /**
     * Returns list of countries with applied filters and pagination
     *
     * @param request
     * @param meta
     * @returns
     */
    listCountries(request, 
    /**
     * The meta object to pass through API call for error handling or response handling
     */
    meta) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.get('/common/countries', request, {
                meta
            });
        });
    }
    /**
     * Returns list of timezones with applied filters and pagination
     *
     * @param request
     * @param meta
     * @returns
     */
    listTimezones(request, 
    /**
     * The meta object to pass through API call for error handling or response handling
     */
    meta) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.get('/common/timezones', request, {
                meta
            });
        });
    }
    /**
     * Returns list of business domains with applied filters and pagination
     *
     * @param request
     * @param meta
     * @returns
     */
    listBusinessDomains(request, 
    /**
     * The meta object to pass through API call for error handling or response handling
     */
    meta) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.get('/common/business-domains', request, {
                meta
            });
        });
    }
    /**
     * Returns list of business types with applied filters and pagination
     *
     * @param request
     * @param meta
     * @returns
     */
    listBusinessTypes(request, 
    /**
     * The meta object to pass through API call for error handling or response handling
     */
    meta) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.get('/common/business-types', request, {
                meta
            });
        });
    }
}
exports.A_ACCOUNT_APP_INTERACTIONS__CommonAPI = A_ACCOUNT_APP_INTERACTIONS__CommonAPI;
//# sourceMappingURL=A_ACCOUNT_Common.api.js.map