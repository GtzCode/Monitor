import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigService } from '../config/config.service';
import { ConfigModule } from '../config/config.module';
import { ConnectionOptions } from 'typeorm';
import { Configuration } from '../config/config.keys';
import { join } from 'path';


export const databaseProviders = [
TypeOrmModule.forRootAsync({
    imports:[ConfigModule],
    inject:[ConfigService],
    async useFactory(config:ConfigService){
        return{
            //ssl:true, //Use required when connected to cloud database
            synchronize: true,  //Use when migrations are not required or when in not SQL databases
            //useUnifiedTopology: true, Use when MongoDB
            type: 'postgres',
            host: config.get(Configuration.DB_HOST),
            port: parseInt(config.get(Configuration.DB_PORT)),
            username: config.get(Configuration.DB_USER),
            password: config.get(Configuration.DB_PASSWORD),
            schema:config.get(Configuration.DB_SCHEMA),
            database: config.get(Configuration.DB_DATABASE),
            entities:[join(__dirname, '../**/*.entity.{ts,js}')],
            migrations:[join(__dirname, '/migrations/*{.ts,.js}')],

        } as ConnectionOptions
    },
}),
]