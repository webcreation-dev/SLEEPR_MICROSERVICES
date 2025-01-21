import { MigrationInterface, QueryRunner } from "typeorm";

export class New1737471331559 implements MigrationInterface {
    name = 'New1737471331559'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TYPE "public"."role_enum" AS ENUM('MANAGER', 'USER')
        `);
        await queryRunner.query(`
            CREATE TABLE "role" (
                "id" SERIAL NOT NULL,
                "name" "public"."role_enum" NOT NULL,
                "created_at" TIMESTAMP NOT NULL DEFAULT now(),
                "updated_at" TIMESTAMP NOT NULL DEFAULT now(),
                "deletedAt" TIMESTAMP,
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
                "phone" character varying NOT NULL,
                "password" character varying NOT NULL,
                "app_type" "public"."app_type_enum" NOT NULL,
                "wishlistedProperties" integer array NOT NULL DEFAULT '{}',
                "created_at" TIMESTAMP NOT NULL DEFAULT now(),
                "updated_at" TIMESTAMP NOT NULL DEFAULT now(),
                "deletedAt" TIMESTAMP,
                CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE ("email"),
                CONSTRAINT "UQ_8e1f623798118e629b46a9e6299" UNIQUE ("phone"),
                CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id")
            )
        `);
        await queryRunner.query(`
            CREATE TABLE "gallery" (
                "id" SERIAL NOT NULL,
                "url" character varying NOT NULL,
                "propertyId" integer,
                "created_at" TIMESTAMP NOT NULL DEFAULT now(),
                "updated_at" TIMESTAMP NOT NULL DEFAULT now(),
                "deletedAt" TIMESTAMP,
                CONSTRAINT "PK_65d7a1ef91ddafb3e7071b188a0" PRIMARY KEY ("id")
            )
        `);
        await queryRunner.query(`
            CREATE TABLE "property" (
                "id" SERIAL NOT NULL,
                "startDate" TIMESTAMP NOT NULL,
                "userId" integer NOT NULL,
                "created_at" TIMESTAMP NOT NULL DEFAULT now(),
                "updated_at" TIMESTAMP NOT NULL DEFAULT now(),
                "deletedAt" TIMESTAMP,
                CONSTRAINT "PK_d80743e6191258a5003d5843b4f" PRIMARY KEY ("id")
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
            ALTER TABLE "gallery"
            ADD CONSTRAINT "FK_96c88a83bf3357b98162620293e" FOREIGN KEY ("propertyId") REFERENCES "property"("id") ON DELETE CASCADE ON UPDATE NO ACTION
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

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "user_roles_role" DROP CONSTRAINT "FK_4be2f7adf862634f5f803d246b8"
        `);
        await queryRunner.query(`
            ALTER TABLE "user_roles_role" DROP CONSTRAINT "FK_5f9286e6c25594c6b88c108db77"
        `);
        await queryRunner.query(`
            ALTER TABLE "gallery" DROP CONSTRAINT "FK_96c88a83bf3357b98162620293e"
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
            DROP TABLE "property"
        `);
        await queryRunner.query(`
            DROP TABLE "gallery"
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
