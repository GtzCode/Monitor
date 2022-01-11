import { Injectable, NestMiddleware } from '@nestjs/common';
import {Error as tpError} from '../../../shared/error/type/type.error';
import {CreateLogDto as tpLogC} from '../../log/dto/log.create';

@Injectable()
export class TransmisionChackBodyMiddleware implements NestMiddleware {
    use(req: any, res: any, next: any) {
        const vlError: tpError = {
            TYPE: 'ERROR',
            MSG: '',
            RES: false,
        };

        var vpBody: tpLogC[] = req.body;

        if (vpBody.length > 0) {
            next();
        } else {
            vlError.MSG = 'Error: No se envio informacion en el body en la peticion.';
            res.send(vlError);
        }
    }
}
