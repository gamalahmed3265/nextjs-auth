import { db } from "@/lib/prisma";
export default async function Home() {
  const users = await db.user.findMany();

  return (
    <div>
      {users &&
        users.map((e) => (
          <div key={e.id} className="">
            <h4>{e.email}</h4>
            <p>{e.username}</p>
          </div>
        ))}
    </div>
  );
}
