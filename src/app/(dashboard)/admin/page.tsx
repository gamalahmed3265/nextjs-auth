import UserInfo from "@/components/UserInfo";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";

const AdminPage = async () => {
  const session = await getServerSession(authOptions);
  if (!session) {
    return <p>not found</p>;
  }
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <UserInfo
        name={session.user?.name}
        email={session.user?.email}
        image={session.user?.image}
      />
    </div>
  );
};

export default AdminPage;
