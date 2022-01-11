import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmpresasRepository } from './empresas.repository';
import { EmpresasController } from './empresas.controller';
import { EmpresasService } from './empresas.service';
import { EmpresaParamsMiddleware } from './middleware/empresa-params.middleware';
import { EmpresaChackIdMiddleware } from './middleware/empresa-chack-id.middleware';

@Module({
    imports:[TypeOrmModule.forFeature([EmpresasRepository])],
    controllers: [EmpresasController],
    providers: [EmpresasService]
})
export class EmpresasModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer
        .apply(EmpresaParamsMiddleware,EmpresaChackIdMiddleware)
        .forRoutes('empresa/:CodigoEmpresa/:Esquema/:ServerCode',);
    }
}
