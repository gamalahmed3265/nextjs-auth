import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

const AdminPage = async () => {
  const session = await getServerSession(authOptions);
  if (!session) {
    return <p>not found</p>;
  }
  return (
    <div>
      <p>{session?.user.username}</p>
    </div>
  );
};

export default AdminPage;
