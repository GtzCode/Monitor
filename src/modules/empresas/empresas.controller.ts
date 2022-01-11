import { Body, Controller, Get, Param, Put } from '@nestjs/common';
import {EmpresasService}  from './empresas.service'
import {Error as tpError} from '../../shared/error/type/type.error';
@Controller('empresa')
export class EmpresasController {
    constructor(private readonly EmpresasService: EmpresasService) {}

    @Get(':CodigoEmpresa/:Esquema/:ServerCode')
    async getID(@Param('CodigoEmpresa') CodigoEmpresa:string,
                @Param('Esquema') Esquema:string,
                @Param('ServerCode') ServerCode:string
                ): Promise<string|tpError> {
        return this.EmpresasService.getID(CodigoEmpresa,Esquema,ServerCode);
    }

}



