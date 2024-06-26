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
exports.A_ACCOUNT_Context = exports.A_ACCOUNT_ContextClass = void 0;
const a_sdk_types_1 = require("@adaas/a-sdk-types");
const errors_constants_1 = require("../constants/errors.constants");
const a_auth_1 = require("@adaas/a-auth");
/**
 * Global AUTH Context for the A-Account SDKs
 */
class A_ACCOUNT_ContextClass extends a_auth_1.A_AUTH_ContextClass {
    constructor() {
        super({
            namespace: 'a-account',
            errors: errors_constants_1.A_ACCOUNT_CONSTANTS__DEFAULT_ERRORS
        });
        /**
         * Global AUTH Context for the SDKs
         */
        this.auth = a_auth_1.A_AUTH_Context;
        this.API_LOCATION = 'https://account.adaas.org';
        this.accountContextAllowedProperties = [
            ...this.authContextAllowedProperties,
            "API_LOCATION"
        ];
    }
    getConfigurationProperty(property) {
        if (this.accountContextAllowedProperties.includes(property))
            return this[property];
        else
            this.Errors.throw(a_sdk_types_1.A_SDK_CONSTANTS__ERROR_CODES.CONFIGURATION_PROPERTY_NOT_EXISTS_OR_NOT_ALLOWED_TO_READ);
    }
    getAuthenticator(userASEID) {
        /**
         * In case when the CLIENT_ID and CLIENT_SECRET provided
         * And their ENV NAMES comes from the ENV CORRESPONDING to the Context NAMESPACE
         *
         */
        if (this.CLIENT_ID && this.CLIENT_SECRET)
            return super.getAuthenticator(userASEID);
        /**
         * Otherwise Use the fallback to the A_AUTH Context
         */
        else
            return this.auth.getAuthenticator(userASEID);
    }
    loadExtendedConfigurationsFromEnvironment() {
        return __awaiter(this, void 0, void 0, function* () {
            this.API_LOCATION = process.env[this.getConfigurationProperty_ENV_Alias('API_LOCATION')] || this.API_LOCATION;
        });
    }
    loadExtendedConfigurationsFromFile(config) {
        return __awaiter(this, void 0, void 0, function* () {
            this.API_LOCATION = config[this.getConfigurationProperty_File_Alias('API_LOCATION')] || this.API_LOCATION;
        });
    }
}
exports.A_ACCOUNT_ContextClass = A_ACCOUNT_ContextClass;
exports.A_ACCOUNT_Context = new A_ACCOUNT_ContextClass();
//# sourceMappingURL=A_ACCOUNT_Context.class.js.map