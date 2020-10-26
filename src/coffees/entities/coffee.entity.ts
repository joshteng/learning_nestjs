import { Column, Entity, Index, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Flavor } from "./flavor.entity";

// @Index(['name', 'type']) //composite index
@Entity()
export class Coffee {
  @PrimaryGeneratedColumn()
  id: number;

  @Index()
  @Column()
  title: string;

  @Column()
  brand: string;

  @Column({ default: 0 })
  recommendations: number;

  @JoinTable()
  @ManyToMany(
    type => Flavor,
    flavor => flavor.coffees,
    {
      cascade: true
    }
  )
  flavors: Flavor[];
}
