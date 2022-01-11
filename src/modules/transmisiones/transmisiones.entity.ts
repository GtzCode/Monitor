import {BaseEntity,Column,UpdateDateColumn,Entity,PrimaryGeneratedColumn, ManyToOne,} from 'typeorm';
import { Empresas } from '../empresas/empresas.entity';

@Entity('TRANSMISIONES')
export class Transmisiones extends BaseEntity {
    @PrimaryGeneratedColumn('increment')
    ID: number;

    @Column({ type: 'varchar', length:50, nullable:false })
    ID_EMPRESA: string;

    @UpdateDateColumn()
    FECHA: Date;
}
