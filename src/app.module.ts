import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [TypeOrmModule.forRoot({ autoLoadEntities: true }), AuthModule, UserModule],
})
export class AppModule {
  constructor(private connection: Connection) {}
}
