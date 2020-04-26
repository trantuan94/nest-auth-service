import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/nest_db', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    createIndexes: true,
  }), AuthModule, UserModule],
})
export class AppModule {}
