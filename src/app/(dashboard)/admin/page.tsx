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
      <p>{JSON.stringify(session.user)}</p>
    </div>
  );
};

export default AdminPage;
