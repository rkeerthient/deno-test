import { MongoClient } from "https://deno.land/x/mongo@v0.33.0/mod.ts";
const connectToDB = async () => {
  console.log(`1enerterd`);

  const client = new MongoClient();

  await client.connect(YEXT_PUBLIC_MONGO_API);

  const db = await client.database("appointments-db");
  const users = await db.collection("doctors-list");
  console.log(JSON.stringify(await users));

  return {
    body: JSON.stringify(users),
    headers: {},
    statusCode: 200,
  };
};
export default connectToDB;
