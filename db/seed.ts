import { db, Event, EventDate } from "astro:db";

let id = 0;
async function buildEvent(
  dates: Date[],
  name: string,
  address: string,
  description: string,
) {
  await db.insert(Event).values({ id: ++id, name, address, description });
  await db
    .insert(EventDate)
    .values(dates.map((date) => ({ eventId: id, date })));
}
// https://astro.build/db/seed
export default async function seed() {
  await buildEvent(
    [
      new Date(2024, 0, 3, 12 + 7),
      new Date(2024, 6, 10, 12 + 7),
      new Date(2024, 6, 17, 12 + 7),
      new Date(2024, 6, 24, 12 + 7),
      new Date(2024, 6, 31, 12 + 7),
    ],
    "Gordon Lockwood at XYZ",
    "1 Place St.",
    "N/A",
  );
}
