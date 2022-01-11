import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EmpresasRepository } from './empresas.repository';
import { Empresas as ettEmpresas } from './empresas.entity';
import { ReadEmpresaDto as tpEmpresaR } from './dto/empresas.read';
import { Error as tpError } from '../../shared/error/type/type.error';

@Injectable()
export class EmpresasService {
    constructor(
        @InjectRepository(EmpresasRepository)
        private readonly _EmpresasRepository: EmpresasRepository,
    ) {}

    async getID(
        CodigoEmpresa: string,
        Esquema: string,
        ServerCode: string,
    ): Promise<string | tpError> {
        var vlID: string;
        const vlParamEmpresa: tpEmpresaR = {
            CodigoEmpresa: CodigoEmpresa,
            Esquema: Esquema,
            ServerCode: ServerCode,
        };
        var vlError: tpError = {
            TYPE: 'ERROR',
            MSG: 'Error: La empresa no se registro',
            RES: false,
        };

        try {
            const newItem = ettEmpresas.create(vlParamEmpresa);
            await newItem.save();
            return newItem.ID;
        } catch (error) {
            return vlError;
        }
    }
}
