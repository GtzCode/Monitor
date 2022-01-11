import { Injectable, NestMiddleware } from '@nestjs/common';
import { Empresas as ettEmpresas } from '../empresas.entity';
import { Error as tpError } from '../../../shared/error/type/type.error';
import { CreateEmpresaDto as tpEmpresaC } from '../dto/empresas.create';
import { ReadEmpresaDto as tpEmpresaR } from '../dto/empresas.read';

@Injectable()
export class EmpresaChackIdMiddleware implements NestMiddleware {
    async use(req: any, res: any, next: any) {
        const reqParams: tpEmpresaC = req.params;
        const vlError: tpError = {
            TYPE: 'ERROR',
            MSG: '',
            RES: false,
        };

        try {
            const GetEmpresa: tpEmpresaR = (
                await ettEmpresas.find(reqParams)
            )[0];
            if (GetEmpresa.Activo === true) {
                res.send(GetEmpresa.ID);
            } else {
                vlError.MSG =
                    'Error: Al validar el ID. El servicio esta inactivo';
                res.send(vlError);
            }
        } catch (error) {
            next();
        }
    }
}
