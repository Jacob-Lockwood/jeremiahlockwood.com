import { column, defineDb, defineTable } from "astro:db";

const Event = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    name: column.text(),
    address: column.text(),
    description: column.text(),
  },
});

const EventDate = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    eventId: column.number({ references: () => Event.columns.id }),
    date: column.date(),
  },
});

// https://astro.build/db/config
export default defineDb({
  tables: { Event, EventDate },
});
