import { ValidatorConstraintInterface, ValidationArguments } from 'class-validator';
export declare class GenericValidatorConstraint implements ValidatorConstraintInterface {
    validate(value: any, args: ValidationArguments): Promise<boolean>;
    defaultMessage(args: ValidationArguments): string;
}
