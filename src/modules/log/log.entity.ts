import {BaseEntity,Column,UpdateDateColumn,Entity,PrimaryGeneratedColumn} from 'typeorm';


@Entity('LOG')
export class Log extends BaseEntity {
    @PrimaryGeneratedColumn('increment')
    ID: number;

    @Column({ type: 'numeric', nullable:false })
    ID_TRASMISION: number;

    @Column({ type: 'varchar',length:50, nullable:false })
    DESC1: string;

    @Column({ type: 'varchar',length:50, nullable:false })
    DESC2: string;

    @UpdateDateColumn()
    FECHA: Date;
}
