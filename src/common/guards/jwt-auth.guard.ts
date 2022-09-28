import { Injectable } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";

/**
 * Jwt Auth Guard to check before the route handle execute
 */
@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt'){

}