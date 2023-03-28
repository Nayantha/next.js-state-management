import SearchInput from "@/components/SearchInput";
import { store } from "@/store"
import { setStartupUser } from "@/store/searchSlice"
export default async function Home() {
  const req = await fetch("http://localhost:3000/api/searchUser", {"cache": "no-store"});
  const data = await req.json();
  store.dispatch(setStartupUser(data))
  return (
      <main>
          <SearchInput/>
      </main>
  );
}
