import { Module } from "@nestjs/common";
import { AuthService } from './services/auth/auth.service';
import { AuthController } from './controllers/auth.controller';

@Module({
    imports: [],
    providers: [AuthService],
    controllers: [AuthController],
    exports: [],
  })
  export class AuthModule {}