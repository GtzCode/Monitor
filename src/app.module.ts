import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from './config/config.module';
import { ConfigService } from './config/config.service';
import { Configuration } from './config/config.keys';
import { DatabaseModule } from './database/database.module';
import { EmpresasModule } from './modules/empresas/empresas.module';
import { TransmisionesModule } from './modules/transmisiones/transmisiones.module';
import { LogModule } from './modules/log/log.module';


@Module({
  imports: [ConfigModule, DatabaseModule, EmpresasModule, TransmisionesModule, LogModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  static port: number | string;
  constructor(private readonly _configService: ConfigService) {
      AppModule.port = this._configService.get(Configuration.PORT);
  }
}