import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";


@Entity()
export class Job{
    @PrimaryGeneratedColumn()
    id: number; 

    @Column()
    role: string; 

    @Column()
    company: string; 

    @Column({nullable:true})
    url?: string; 

    @Column({nullable:true})
    description?: string; 

    @Column({nullable:true})
    salary?: number; 

    @Column()
    applicationDate: string; 

    @Column()
    jobType: string; 

    @Column()
    applicationStatus: string; 

    @Column()
    userId:string

}