import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

/**
 * Contact Schema
 */
@Entity('contact')
export class Contact {
  /**
   * id
   */
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * Name 
   */
  @Column({ name: 'full_name', type: 'varchar', length: 30 })
  fullName: string;

  /**
   * Email 
   */
  @Column({ name: 'email_id', type: 'varchar', length: 30})
  emailId: string;

  /**
   * Phone Number
   */
  @Column({ name: 'phone_number', type: 'bigint' })
  phoneNumber: number;

  /**
   * Description
   */
  @Column({ name: 'description', type: 'text', nullable:true })
  description: string;

  /**
   * Created date
   */
  @CreateDateColumn({ name: 'created_on', select: false })
  createdOn: Date;
}
