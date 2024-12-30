"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserMigrations1735572221649 = void 0;
class UserMigrations1735572221649 {
    constructor() {
        this.name = 'UserMigrations1735572221649';
    }
    async up(queryRunner) {
        await queryRunner.query(`
            CREATE TYPE "public"."role_enum" AS ENUM('MANAGER', 'USER')
        `);
        await queryRunner.query(`
            CREATE TABLE "role" (
                "id" SERIAL NOT NULL,
                "name" "public"."role_enum" NOT NULL,
                CONSTRAINT "PK_b36bcfe02fc8de3c57a8b2391c2" PRIMARY KEY ("id")
            )
        `);
        await queryRunner.query(`
            CREATE TYPE "public"."app_type_enum" AS ENUM('LOCAPAY', 'LOCAPAY_BUSINESS')
        `);
        await queryRunner.query(`
            CREATE TABLE "user" (
                "id" SERIAL NOT NULL,
                "email" character varying NOT NULL,
                "password" character varying NOT NULL,
                "app_type" "public"."app_type_enum" NOT NULL,
                CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id")
            )
        `);
        await queryRunner.query(`
            CREATE TABLE "reservation" (
                "id" SERIAL NOT NULL,
                "timestamp" TIMESTAMP NOT NULL,
                "startDate" TIMESTAMP NOT NULL,
                "endDate" TIMESTAMP NOT NULL,
                "userId" integer NOT NULL,
                "invoiceId" character varying NOT NULL,
                CONSTRAINT "PK_48b1f9922368359ab88e8bfa525" PRIMARY KEY ("id")
            )
        `);
        await queryRunner.query(`
            CREATE TABLE "user_roles_role" (
                "userId" integer NOT NULL,
                "roleId" integer NOT NULL,
                CONSTRAINT "PK_b47cd6c84ee205ac5a713718292" PRIMARY KEY ("userId", "roleId")
            )
        `);
        await queryRunner.query(`
            CREATE INDEX "IDX_5f9286e6c25594c6b88c108db7" ON "user_roles_role" ("userId")
        `);
        await queryRunner.query(`
            CREATE INDEX "IDX_4be2f7adf862634f5f803d246b" ON "user_roles_role" ("roleId")
        `);
        await queryRunner.query(`
            ALTER TABLE "user_roles_role"
            ADD CONSTRAINT "FK_5f9286e6c25594c6b88c108db77" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE
        `);
        await queryRunner.query(`
            ALTER TABLE "user_roles_role"
            ADD CONSTRAINT "FK_4be2f7adf862634f5f803d246b8" FOREIGN KEY ("roleId") REFERENCES "role"("id") ON DELETE CASCADE ON UPDATE CASCADE
        `);
    }
    async down(queryRunner) {
        await queryRunner.query(`
            ALTER TABLE "user_roles_role" DROP CONSTRAINT "FK_4be2f7adf862634f5f803d246b8"
        `);
        await queryRunner.query(`
            ALTER TABLE "user_roles_role" DROP CONSTRAINT "FK_5f9286e6c25594c6b88c108db77"
        `);
        await queryRunner.query(`
            DROP INDEX "public"."IDX_4be2f7adf862634f5f803d246b"
        `);
        await queryRunner.query(`
            DROP INDEX "public"."IDX_5f9286e6c25594c6b88c108db7"
        `);
        await queryRunner.query(`
            DROP TABLE "user_roles_role"
        `);
        await queryRunner.query(`
            DROP TABLE "reservation"
        `);
        await queryRunner.query(`
            DROP TABLE "user"
        `);
        await queryRunner.query(`
            DROP TYPE "public"."app_type_enum"
        `);
        await queryRunner.query(`
            DROP TABLE "role"
        `);
        await queryRunner.query(`
            DROP TYPE "public"."role_enum"
        `);
    }
}
exports.UserMigrations1735572221649 = UserMigrations1735572221649;
//# sourceMappingURL=1735572221649-user_migrations.js.map