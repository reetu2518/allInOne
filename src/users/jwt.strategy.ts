import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from 'passport-jwt';
import { JwtPayload } from "./jwt-payload";
import { UserRepository } from "./user.repositry";

/**
 * Passport Strategy for authenticate user
 */
@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    /**
     * Define userRepo
     * @param userRepo - User details
     */
    constructor(private userRepo : UserRepository){
        super({
            secretOrKey : process.env.SECRET_KEY,
            jwtFromRequest : ExtractJwt.fromAuthHeaderAsBearerToken()
        })
    }

    /**
     * Validate the user is authorized or not
     * @param payload - emailId
     * @returns user details
     */
    async validate(payload:JwtPayload) {
        try {
            let { emailId } = payload;
            let res = await this.userRepo.findOneByOrFail({emailId:emailId});
            return res;
        } catch (error) {
            throw new UnauthorizedException(error.message);
        }
    }
}
