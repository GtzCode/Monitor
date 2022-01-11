import {PartialType} from '@nestjs/swagger';
import { Log as InputLog } from '../log.entity';

export class ReadLogDto extends PartialType(InputLog) {}
