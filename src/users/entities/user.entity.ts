import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import {
  APPROVE_ENUM,
  DELETE_ENUM,
  GENDER,
  ROLE_ENUM,
  STATUS_ENUM,
} from '../../common/enum/common.enum';
import { Profile } from './profile.entity';

/**
 * User Schema
 */
@Entity('users')
export class User {
  /**
   * id
   */
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * Name of User
   */
  @Column({ name: 'full_name', type: 'varchar', length: 30 })
  fullName: string;

  /**
   * Email of User
   */
  @Column({ name: 'email_id', type: 'varchar', length: 30, unique: true })
  emailId: string;

  /**
   * Password
   */
  @Column({ name: 'password', type: 'varchar', length: 100 })
  password: string;

  /**
   * Phone Number
   */
  @Column({ name: 'phone_number', type: 'bigint' })
  phoneNumber: number;

  /**
   * Gender
   */
  @Column({
    name: 'gender',
    type: 'enum',
    enum: [GENDER.MALE, GENDER.FEMALE],
    default: GENDER.MALE,
  })
  gender: GENDER;

  /**
   * Role
   */
  @Column({
    name: 'role',
    type: 'enum',
    enum: [ROLE_ENUM.TECHNICIAN, ROLE_ENUM.ADMIN, ROLE_ENUM.USER],
    default: ROLE_ENUM.USER,
  })
  role?: ROLE_ENUM;

  /**
   * Status
   */
  @Column({ name: 'status', default: 1, enum: [0, 1] })
  status: STATUS_ENUM;

  /**
   * Is Delete
   */
  @Column({
    type: 'enum',
    name: 'is_delete',
    enum: [DELETE_ENUM.NO, DELETE_ENUM.YES],
    default: DELETE_ENUM.NO,
  })
  isDelete: DELETE_ENUM;

  /**
   * Approved
   */
  @Column({
    type: 'enum',
    name: 'is_approved',
    enum: [APPROVE_ENUM.APPROVED, APPROVE_ENUM.PENDING, APPROVE_ENUM.REJECTED],
    default: APPROVE_ENUM.PENDING,
  })
  isApproved: APPROVE_ENUM;

  /**
   * Relation with Profile Table
   */
  @OneToOne(() => Profile, (profile)=>profile.user, {
    cascade:true,
    eager:true,
    onUpdate:"CASCADE",
    onDelete:"CASCADE"
  })
  @JoinColumn({name:"profile_id"})
  profile: Profile;

  /**
   * Created date
   */
  @CreateDateColumn({ name: 'created_on', select: false })
  createdOn: Date;

  /**
   * Updated date
   */
  @UpdateDateColumn({ name: 'updated_on', select: false })
  updatedOn: Date;
}
