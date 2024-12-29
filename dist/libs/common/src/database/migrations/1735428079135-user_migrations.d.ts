import { MigrationInterface, QueryRunner } from "typeorm";
export declare class UserMigrations1735428079135 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
