import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LogRepository } from './log.repository';


@Module({
    imports:[TypeOrmModule.forFeature([LogRepository])]
})
export class LogModule {}
