import {OmitType} from '@nestjs/swagger';
import { Log as InputLog } from '../log.entity';


export class CreateLogDto extends
    OmitType(InputLog, [
        'ID',
        'FECHA',
    ] as const) {}