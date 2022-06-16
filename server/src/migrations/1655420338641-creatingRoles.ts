import { MigrationInterface, QueryRunner } from "typeorm";

export class creatingRoles1655420338641 implements MigrationInterface {
    name = 'creatingRoles1655420338641'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "products" DROP COLUMN "price"`);
        await queryRunner.query(`ALTER TABLE "products" ADD "price" numeric(5,2) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "products" ALTER COLUMN "img" DROP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "products" ALTER COLUMN "img" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "products" DROP COLUMN "price"`);
        await queryRunner.query(`ALTER TABLE "products" ADD "price" integer NOT NULL`);
    }

}
