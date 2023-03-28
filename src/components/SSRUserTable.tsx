import { store } from "@/store"
import UserTable from "@/components/UserTable";
function SSRUserTable() {
  return (
    <main>
      <UserTable users={store.getState().search.startupUser} />
    </main>
  );
}
export default SSRUserTable;