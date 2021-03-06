import { MigrationInterface, QueryRunner, Table } from 'typeorm';
import { dateColumns } from '../../../shared/migrations/dates';

export class CreatePersonsTable1610493939987 implements MigrationInterface {
  public static TABLE_NAME = 'persons';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: CreatePersonsTable1610493939987.TABLE_NAME,
        indices: [
          {
            columnNames: ['name'],
          },
        ],
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
          },
          {
            name: 'name',
            type: 'varchar',
            length: '256',
            isNullable: true,
          },
          ...dateColumns,
        ],
      }),
      false,
      false,
      true
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(
      CreatePersonsTable1610493939987.TABLE_NAME,
      false,
      false,
      true
    );
  }
}
