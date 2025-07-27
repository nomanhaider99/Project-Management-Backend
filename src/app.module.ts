import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MilestoneModule } from './modules/milestones/milestones.module';
import { TaskModule } from './modules/tasks/tasks.module';
import { ProjectModule } from './modules/projects/projects.module';
import { BusinessModule } from './modules/businesses/business.module';
import { UserModule } from './modules/users/users.module';
import { AppConfigService } from './config/config.service';
import { AppConfigModule } from './config/config.module';
import { DatabaseModule } from './database/database.module';
import { UserUtilsService } from './common/utils/users/user.utils.service';
import { UserUtilsModule } from './common/utils/users/user.utils.module';
import { User, UserSchema } from './modules/users/user.models';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, 
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async(configService: ConfigService) => ({
        uri: configService.get('MONGODB_URI')
      }),  
    }),
    MongooseModule.forFeature(
      [
        {
          name: User.name,
          schema: UserSchema
        }
      ]
    ),
    UserModule,
    MilestoneModule,
    TaskModule,
    ProjectModule,
    BusinessModule,
    AppConfigModule,
    DatabaseModule,
    UserUtilsModule,
    ConfigModule
  ],
  controllers: [],
  providers: [AppConfigService, UserUtilsService],
})
export class AppModule {}
