import SearchInput from "@/components/SearchInput";
import { store } from "@/store"
import { setStartupUser } from "@/store/searchSlice"
import Providers from "@/components/Provider";
import Preloader from "@/components/Preloader";
export default async function Home() {
  const req = await fetch("http://localhost:3000/api/searchUser", {"cache": "no-store"});
  const data = await req.json();
  store.dispatch(setStartupUser(data))
  return (
      <main>
          <Preloader users={data}/>
              <Providers>
                  <SearchInput/>
              </Providers>
      </main>
  );
}
