import { ValidationOptions } from 'class-validator';
export declare function IsExist(entityClass: new () => any, property: string, validationOptions?: ValidationOptions): (object: object, propertyName: string) => void;
