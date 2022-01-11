import { EntityRepository, Repository} from 'typeorm';
import {Transmisiones} from './transmisiones.entity';

@EntityRepository(Transmisiones)
export class TransmisionesRepository extends Repository<Transmisiones> {}