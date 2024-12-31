"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsExist = IsExist;
const class_validator_1 = require("class-validator");
const generic_validator_1 = require("./generic-validation/generic.validator");
function IsExist(entityClass, property, validationOptions) {
    return function (object, propertyName) {
        (0, class_validator_1.registerDecorator)({
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions,
            constraints: [entityClass, property, 'exists'],
            validator: generic_validator_1.GenericValidatorConstraint,
        });
    };
}
//# sourceMappingURL=is-exist.decorator.js.map