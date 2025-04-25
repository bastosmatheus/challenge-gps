import { PointOfInterest } from 'src/modules/point-of-interest/entities/point-of-interest.entity';
import { DataSource } from 'typeorm';

const dataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'root',
  database: 'challenge_gps',
  entities: [PointOfInterest],
  migrations: ['src/database/migrations/**.ts'],
  synchronize: false,
});

export default dataSource;
