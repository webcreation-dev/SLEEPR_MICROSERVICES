import { MigrationInterface, QueryRunner } from "typeorm";

export class New1737107550543 implements MigrationInterface {
    name = 'New1737107550543'

    public async up(queryRunner: QueryRunner): Promise<void> {
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
                "created_at" TIMESTAMP NOT NULL DEFAULT now(),
                "updated_at" TIMESTAMP NOT NULL DEFAULT now(),
                "deletedAt" TIMESTAMP,
                CONSTRAINT "PK_d80743e6191258a5003d5843b4f" PRIMARY KEY ("id")
            )
        `);
        await queryRunner.query(`
            ALTER TABLE "gallery"
            ADD CONSTRAINT "FK_96c88a83bf3357b98162620293e" FOREIGN KEY ("propertyId") REFERENCES "property"("id") ON DELETE CASCADE ON UPDATE NO ACTION
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "gallery" DROP CONSTRAINT "FK_96c88a83bf3357b98162620293e"
        `);
        await queryRunner.query(`
            DROP TABLE "property"
        `);
        await queryRunner.query(`
            DROP TABLE "gallery"
        `);
    }

}
