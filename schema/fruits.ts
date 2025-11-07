import {
  pgTable,
  serial,
  varchar,
  text,
  integer,
  timestamp,
} from "drizzle-orm/pg-core";
import { users } from "./users";

export const fruits = pgTable("fruits", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 256 }).notNull(),
  colour: text("colour").notNull(),
  addedBy: integer("added_by").references(() => users.id),
  createdAt: timestamp("created_at").defaultNow(),
});
