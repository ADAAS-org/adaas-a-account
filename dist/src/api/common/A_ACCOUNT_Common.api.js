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
exports.A_ACCOUNT_CommonAPIClass = void 0;
const a_auth_1 = require("@adaas/a-auth");
class A_ACCOUNT_CommonAPIClass extends a_auth_1.A_AUTH_APIProvider {
    constructor(baseURL) {
        super(baseURL);
        this.baseURL = baseURL || process.env.ADAAS_ACCOUNT_API_LOCATION || 'https://api.account.adaas.org';
        this.init();
    }
    getCountries(pagination, filter) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.axiosInstance.get('/api/v1/common/countries', {
                params: Object.assign(Object.assign({}, pagination), filter)
            });
            return response.data;
        });
    }
    getTimezones(pagination, filter) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.axiosInstance.get('/api/v1/common/timezones', {
                params: Object.assign(Object.assign({}, pagination), filter)
            });
            return response.data;
        });
    }
    getBusinessDomains(pagination, filter) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.axiosInstance.get('/api/v1/common/business-domains', {
                params: Object.assign(Object.assign({}, pagination), filter)
            });
            return response.data;
        });
    }
    getBusinessTypes(pagination, filter) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.axiosInstance.get('/api/v1/common/business-types', {
                params: Object.assign(Object.assign({}, pagination), filter)
            });
            return response.data;
        });
    }
}
exports.A_ACCOUNT_CommonAPIClass = A_ACCOUNT_CommonAPIClass;
//# sourceMappingURL=A_ACCOUNT_Common.api.js.map