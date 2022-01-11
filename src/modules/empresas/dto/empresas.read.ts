import {OmitType,PartialType} from '@nestjs/swagger';
import { Empresas as InputEmpresas } from '../empresas.entity';

export class ReadEmpresaDto extends PartialType(InputEmpresas) {}
