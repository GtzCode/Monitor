import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {TransmisionesRepository} from './transmisiones.repository';
import {Transmisiones as ettTransmisiones} from '../transmisiones/transmisiones.entity';
import {Log as ettLog} from '../log/log.entity';
import {CreateLogDto as tpLogC} from '../log/dto/log.create'
import {Error as tpError} from '../../shared/error/type/type.error'

@Injectable()
export class TransmisionesService {
    constructor(
        @InjectRepository(TransmisionesRepository)
        private readonly _TransmisionesRepository:TransmisionesRepository,
    ){}

    async putTransmision(vpEmpresaID:string,Data:any): Promise<string|tpError> {

        var vlTransmisionID: number;
        var vlDataLog:tpLogC[] = Data;
        var vlError:tpError = {
            TYPE: 'ERROR',
            MSG: '',
            RES: false
        }

        try {
            const newTransmision = ettTransmisiones.create({
                ID_EMPRESA: vpEmpresaID,
            });
            await newTransmision.save();
            vlTransmisionID = newTransmision.ID;
        } catch (error) {
            vlError.MSG = 'Error: No se pudo registrar la transmision.';
            return vlError;
        }

        vlDataLog.map(function (element: tpLogC) {
                try {
                    const newFactura = ettLog.create({...element, ID_TRASMISION: vlTransmisionID,});
                    newFactura.save();
                } catch (error) {
                    vlError.TYPE = 'WARNING';
                    vlError.MSG = 'Error: No se pudo registrar el log. La transmision se registro.';
                    vlError.RES = true;
                    return vlError;
                }
            });

        return vlTransmisionID.toString();
    }







}


