import { SetMetadata } from "@nestjs/common";
import { ROLE_ENUM } from "../enum/common.enum";

/**
 * Const Value for roles
 */
export const ROLES_KEYS = 'roles'

/**
 * Role values
 * @param roles roles of user
 * @returns roles
 */
export const Roles = (...roles : ROLE_ENUM[])=> SetMetadata(ROLES_KEYS, roles);
