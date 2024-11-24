
import { DataSource } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'postgres',
        host: String(process.env.DBhost),
        port: Number(process.env.DBport),
        username: String(process.env.DBusername),
        password: String(process.env.DBpassword),
        database: String(process.env.DBname),
        entities: [
            __dirname + '/../**/*.entity{.ts,.js}',
        ],
        synchronize: true,
      });
      return dataSource.initialize();
    },
  },
];


// TypeOrmModule.forRoot({
//     type: 'postgres',
//     host: 'localhost',
//     port: 5432,
//     username: 'app',
//     password: 'Thundera@190',
//     database: 'app',
//     entities: [],
//     synchronize: true,
//   })