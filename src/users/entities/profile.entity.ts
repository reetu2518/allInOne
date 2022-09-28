import { Column, CreateDateColumn, Entity, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { User } from "./user.entity";

@Entity("user_profile")
export class Profile {
    @PrimaryGeneratedColumn()
    id:number;

    @OneToOne(()=>User)
    user:User;

    @Column({name:"alternate_mobile", type:"bigint"})
    alternateMobile:number;

    
    @Column({name:"post", type:"varchar", length:100})
    post:string;

    @Column({name:"aadhar_card", type:"varchar", length:20, nullable:true})
    aadharCard:string;

    @Column({nullable: false, name:"aadhar_card_number", type:"bigint"})
    aadharCardNumber:number;
    
    @Column({name:"pan_card", type:"varchar", length:20})
    panCard:string;

    @Column({name:"pan_card_number", type:"varchar", default:20})
    panCardNumber:number;
    
    @Column({name:"expereicne_letter", type:"varchar", length:20, nullable:true})
    expereicneLetter:string;

    @Column({nullable: false, name:"expereicne"})
    expereicne:number;
    
    @Column({nullable:true})
    image:string;

    @Column({nullable:true, name:"area"})
    area:string;
    
    @Column({nullable: false, name:"pincode", type:"integer"})
    pincode:number;

    @Column({type:"text", name:"address"})
    address:string;

    @Column({type:"varchar", name:"landmark", length:100, nullable:true})
    landmark:string;

    @Column({type:"varchar", name:"city", length:50, nullable:true})
    city:string;

    @Column({default:"U.P."})
    state:string;

    @Column({default:"India"})
    country:string;

    @Column({type:"text", name:"skills"})
    skills:string;

    @Column({type:"text", name:"about"})
    about:string;

    @CreateDateColumn({name:"created_at", select:false})
    createdAt : Date;

    @UpdateDateColumn({name:"updated_at", select:false})
    updatedAt : Date;
}