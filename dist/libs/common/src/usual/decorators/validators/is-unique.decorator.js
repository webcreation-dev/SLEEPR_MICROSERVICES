"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsUnique = IsUnique;
const class_validator_1 = require("class-validator");
const generic_validator_1 = require("./generic-validation/generic.validator");
function IsUnique(entityClass, property, validationOptions) {
    return function (object, propertyName) {
        (0, class_validator_1.registerDecorator)({
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions,
            constraints: [entityClass, property, 'unique'],
            validator: generic_validator_1.GenericValidatorConstraint,
        });
    };
}
//# sourceMappingURL=is-unique.decorator.js.map