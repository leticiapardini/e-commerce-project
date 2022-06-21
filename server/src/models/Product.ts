import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('products')
export default class Product {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 100, nullable: false })
  title: string;

  @Column({ length: 100, nullable: false })
  author: string;

  @Column({ length: 60, nullable: false })
  publisher: string;

  @Column("decimal", { precision: 5, scale: 2, nullable: false })
  price: number;

  @Column({ nullable: false  })
  year: number;

  @Column({nullable: true})
  img: string;

  @Column({nullable: true})
  qty: number;
}

