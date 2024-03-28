import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GqlModule } from './gql/gql.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: [process.env.NODE_ENV == 'production' ? 'env' : '.env.dev'],
    }),
    GqlModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
