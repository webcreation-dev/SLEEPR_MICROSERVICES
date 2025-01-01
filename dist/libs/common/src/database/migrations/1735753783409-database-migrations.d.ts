import { MigrationInterface, QueryRunner } from "typeorm";
export declare class DatabaseMigrations1735753783409 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
