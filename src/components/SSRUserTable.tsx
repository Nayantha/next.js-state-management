import UserTable from "@/components/UserTable";
function SSRUserTable() {
  return (
    <main>
      <UserTable users={[]} />
    </main>
  );
}
export default SSRUserTable;