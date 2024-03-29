import { Module } from "@nestjs/common"
import { AppController } from "./app.controller"
import { AppService } from "./app.service"
import { ConfigModule, ConfigService } from "@nestjs/config"
import { getMongoDbConfig } from "./config/mongo.config"
import { AuthModule } from "./auth/auth.module"
import { TypegooseModule } from "nestjs-typegoose"
import { PaymentModule } from "./payment/payment.module"
import { TaskModule } from "./task/task.module"

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypegooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: getMongoDbConfig
    }),
    AuthModule,
    PaymentModule,
    TaskModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
