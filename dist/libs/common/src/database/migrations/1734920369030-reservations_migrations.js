"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReservationsMigrations1734920369030 = void 0;
class ReservationsMigrations1734920369030 {
    constructor() {
        this.name = 'ReservationsMigrations1734920369030';
    }
    async up(queryRunner) {
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
    }
    async down(queryRunner) {
        await queryRunner.query(`
            DROP TABLE "reservation"
        `);
    }
}
exports.ReservationsMigrations1734920369030 = ReservationsMigrations1734920369030;
//# sourceMappingURL=1734920369030-reservations_migrations.js.map