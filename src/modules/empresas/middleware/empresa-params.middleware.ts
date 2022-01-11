import { Injectable, NestMiddleware } from '@nestjs/common';
import {Error as tpError} from '../../../shared/error/type/type.error';
import { CreateEmpresaDto as tpEmpresaC } from '../dto/empresas.create'



@Injectable()
export class EmpresaParamsMiddleware implements NestMiddleware {
  use(req: any, res: any, next:any) {

    const vlError:tpError = {
      TYPE: 'ERROR',
      MSG: 'No se enviaron el numero de parametros correctos',
      RES: false
    }

    const reqParams:tpEmpresaC = req.params;
    next();

  }
}
