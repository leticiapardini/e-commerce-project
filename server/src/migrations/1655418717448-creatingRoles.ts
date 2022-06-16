import { MigrationInterface, QueryRunner } from "typeorm";

export class creatingRoles1655418717448 implements MigrationInterface {
    name = 'creatingRoles1655418717448'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "products" DROP CONSTRAINT "FK_87ec6840b0f86ab86a69f7b147c"`);
        await queryRunner.query(`ALTER TABLE "products" RENAME COLUMN "roleId" TO "img"`);
        await queryRunner.query(`ALTER TABLE "products" DROP COLUMN "img"`);
        await queryRunner.query(`ALTER TABLE "products" ADD "img" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "products" DROP COLUMN "img"`);
        await queryRunner.query(`ALTER TABLE "products" ADD "img" uuid`);
        await queryRunner.query(`ALTER TABLE "products" RENAME COLUMN "img" TO "roleId"`);
        await queryRunner.query(`ALTER TABLE "products" ADD CONSTRAINT "FK_87ec6840b0f86ab86a69f7b147c" FOREIGN KEY ("roleId") REFERENCES "roles"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
