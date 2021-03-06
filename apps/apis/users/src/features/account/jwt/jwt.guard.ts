import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { JWT_STRATEGY_NAME } from './jwt.constants';

@Injectable()
export class JwtGuard extends AuthGuard(JWT_STRATEGY_NAME) {}
