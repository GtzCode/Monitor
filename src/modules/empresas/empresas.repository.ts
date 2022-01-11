import { EntityRepository, Repository} from 'typeorm';
import {Empresas} from './empresas.entity';

@EntityRepository(Empresas)
export class EmpresasRepository extends Repository<Empresas> {}