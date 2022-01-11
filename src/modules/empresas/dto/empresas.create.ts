import {OmitType} from '@nestjs/swagger';
import { Empresas as InputEmpresas } from '../empresas.entity';


export class CreateEmpresaDto extends
    OmitType(InputEmpresas, [
        'ID',
        'Fecha',
        'Activo',
    ] as const) {}