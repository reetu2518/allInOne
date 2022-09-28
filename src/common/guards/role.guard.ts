import { CanActivate, ExecutionContext, Injectable, Logger } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { Observable } from "rxjs";
import { ROLES_KEYS } from "../decorators/role.decorators";
import { ROLE_ENUM } from "../enum/common.enum";

/**
 * Role Gaurd for check role type
 */
@Injectable()
export class RoleGuard implements CanActivate {
    logger = new Logger(RoleGuard.name);
    /**
     * To read parameter/value which is sending by handler
     * @param reflector reflector
     */
    constructor(private reflector : Reflector){}
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        const requiredRoles = this.reflector.getAllAndOverride<ROLE_ENUM[]>(ROLES_KEYS, [
            context.getHandler(),
            context.getClass()
        ]);
        this.logger.log(requiredRoles);
        if (!requiredRoles) {
            return true;
        }

        const { user } = context.switchToHttp().getRequest();
        return requiredRoles.some((role)=>user.role.includes(role));
    }
   
}
