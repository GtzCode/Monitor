import { MiddlewareConsumer, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TransmisionesRepository } from './transmisiones.repository';
import { TransmisionesService } from './transmisiones.service';
import { TransmisionesController } from './transmisiones.controller';
import { ChackIdEmpresaMiddleware } from './middleware/chack-id-empresa.middleware';
import { TransmisionChackBodyMiddleware } from '../transmisiones/middleware/transmision-chack-body.middleware';


@Module({
    imports:[TypeOrmModule.forFeature([TransmisionesRepository])],
    providers: [TransmisionesService],
    controllers: [TransmisionesController]
})
export class TransmisionesModule {
    configure(consumer: MiddlewareConsumer) {
        consumer
        .apply(ChackIdEmpresaMiddleware,TransmisionChackBodyMiddleware)
        .forRoutes('transmision/:ID',);
    }
}






