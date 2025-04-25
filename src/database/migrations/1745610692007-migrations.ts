import { MigrationInterface, QueryRunner } from 'typeorm';

export class Migrations1745610692007 implements MigrationInterface {
  name = 'Migrations1745610692007';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE \`points_of_interest\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` text NOT NULL, \`x\` int NOT NULL, \`y\` int NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE \`points_of_interest\``);
  }
}
