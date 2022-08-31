import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { config, IEnvConfig, joiSchemaEnv } from './config';
import { SocketModule } from './socket/socket.module';

export const isDev = process.env.NODE_ENV === 'dev' ? true : false;

@Module({
  imports: [
    MongooseModule.forRootAsync({
      inject: [config.KEY],
      useFactory: async (config: IEnvConfig) => {
        return {
          uri: isDev
            ? `mongodb://${config.MONGO_HOST}:27017/${config.MONGO_DB_NAME}`
            : `mongodb://${config.MONGO_USER}:${config.MONGO_PASSWORD}@${config.MONGO_HOST}/${config.MONGO_DB_NAME}`,
        };
      },
    }),
    ConfigModule.forRoot({
      isGlobal: true,
      load: [config],
      validationSchema: joiSchemaEnv,
    }),
    AuthModule,
    SocketModule,
  ],
  controllers: [],
})
export class AppModule {}
