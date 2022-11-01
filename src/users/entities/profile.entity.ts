import { Column, CreateDateColumn, Entity, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { User } from "./user.entity";

/**
 * User Profile
 */
@Entity("user_profile")
export class Profile {
    /**
     * Id
     */
    @PrimaryGeneratedColumn()
    id:number;

    /**
     * User Relation
     */
    @OneToOne(()=>User)
    user:User;

    /**
     * Alternate Mobile
     */
    @Column({name:"alternate_mobile", type:"bigint"})
    alternateMobile:number;

    /**
     * Post
     */
    @Column({name:"post", type:"varchar", length:100})
    post:string;

    /**
     * Addhar Card
     */
    @Column({name:"aadhar_card", type:"varchar", length:20, nullable:true})
    aadharCard:string;

    /**
     * Aadhar Card Number
     */
    @Column({nullable: false, name:"aadhar_card_number", type:"bigint"})
    aadharCardNumber:number;
    
    /**
     * Pan Card
     */
    @Column({name:"pan_card", type:"varchar", length:20})
    panCard:string;

    /**
     * Pan Card Number
     */
    @Column({name:"pan_card_number", type:"varchar", default:20})
    panCardNumber:number;
    
    /**
     * Excpereicnce Letter
     */
    @Column({name:"expereicne_letter", type:"varchar", length:20, nullable:true})
    expereicneLetter:string;

    /**
     * Excpereicnce in years
     */
    @Column({nullable: false, name:"expereicne"})
    expereicne:number;
    
    /**
     * Image
     */
    @Column({nullable:true})
    image:string;

    /**
     * Area
     */
    @Column({nullable:true, name:"area"})
    area:string;
    
    /**
     * Pincode
     */
    @Column({nullable: false, name:"pincode", type:"integer"})
    pincode:number;

    /**
     * Address
     */
    @Column({type:"text", name:"address"})
    address:string;

    /**
     * Landmark
     */
    @Column({type:"varchar", name:"landmark", length:100, nullable:true})
    landmark:string;

    /**
     * City
     */
    @Column({type:"varchar", name:"city", length:50, nullable:true})
    city:string;

    /**
     * State
     */
    @Column({default:"U.P."})
    state:string;

    /**
     * Country
     */
    @Column({default:"India"})
    country:string;

    /**
     * Skills
     */
    @Column({type:"text", name:"skills"})
    skills:string;

    /**
     * About
     */
    @Column({type:"text", name:"about"})
    about:string;

    /**
     * Created Date
     */
    @CreateDateColumn({name:"created_at", select:false})
    createdAt : Date;

    /**
     * Updated Date
     */
    @UpdateDateColumn({name:"updated_at", select:false})
    updatedAt : Date;
}