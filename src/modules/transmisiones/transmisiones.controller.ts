import { Body, Controller, Get, Param, Put } from '@nestjs/common';
import {TransmisionesService}  from './transmisiones.service';
import {Error as tpError} from '../../shared/error/type/type.error';

@Controller('transmision')
export class TransmisionesController {
    constructor(private readonly TransmisionesService: TransmisionesService) {}


    @Put(':ID')
    async putTransmision(
        @Param('ID') ID:string,
        @Body() Data:any
        ): Promise<string|tpError> {
        return this.TransmisionesService.putTransmision(ID,Data);
    }
}
