export default async function Home() {
  const req = await fetch("http://localhost:3000/api/searchUser", {"cache": "no-store"});
  const data = await req.json();
  return (
      <main>
          {JSON.stringify(data)}
      </main>
  );
}
