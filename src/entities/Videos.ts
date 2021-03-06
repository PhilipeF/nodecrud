import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
} from "typeorm";
import { Category } from "./Category";
import { v4 as uuid } from "uuid";

@Entity("videos")
export class Video {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  duration: number;

  @Column()
  category_id: string;

  @Column()
  description: string;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }

  @ManyToOne(() => Category)
  @JoinColumn({ name: "category_id" })
  category: Category;
}
