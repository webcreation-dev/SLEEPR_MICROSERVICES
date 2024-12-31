import { ValidationOptions } from 'class-validator';
export declare function IsUnique(entityClass: {
    new (...args: any[]): any;
}, property: string, validationOptions?: ValidationOptions): (object: object, propertyName: string) => void;
