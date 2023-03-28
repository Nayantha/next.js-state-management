import {NextResponse} from "next/server";
import users from "@/users.json"
export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const name = searchParams.get("name")
  const userData = users.filter((user) =>
    user.name.toLowerCase().includes(name?.toLocaleLowerCase() ?? "")
  )
  return NextResponse.json(userData.slice(0, 10))
}
