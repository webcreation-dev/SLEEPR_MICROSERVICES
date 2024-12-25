import { MigrationInterface, QueryRunner } from "typeorm";
export declare class UserMigrations1734909725098 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
