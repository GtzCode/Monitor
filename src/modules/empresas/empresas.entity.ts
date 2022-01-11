import {BaseEntity,Column,UpdateDateColumn,Entity,PrimaryGeneratedColumn, Index,} from 'typeorm';


@Entity('EMPRESAS')
@Index(["CodigoEmpresa", "Esquema","ServerCode"])
export class Empresas extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    ID: string;

    @Column({ type: 'varchar', length:50, nullable:false, name:'CODIGOEMPRESA'})
    CodigoEmpresa: string;

    @Column({ type: 'varchar',length:50, nullable:false, name:'ESQUEMA' })
    Esquema: string;

    @Column({ type: 'varchar', length:50, nullable:false, name:'SERVERCODE' })
    ServerCode: string;

    @Column({ type: 'boolean', default:true, nullable:false, name:'ACTIVO' })
    Activo: boolean;

    @UpdateDateColumn({name:'FECHA'})
    Fecha: Date;

}
