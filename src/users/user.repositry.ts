import { Injectable } from "@nestjs/common";
import { DataSource, Repository } from "typeorm";
import { User } from "./entities/user.entity";

/**
 * User Custom Repository
 */
@Injectable()
export class UserRepository extends Repository<User> {
    /**
     * constructor
     * @param dataSource Data source
     */
    constructor(private dataSource:DataSource) {
        super(User, dataSource.createEntityManager());
    }
}
