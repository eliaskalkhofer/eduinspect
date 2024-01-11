import { lusitana } from '@/app/ui/fonts';
import { getSessionUsername } from "@/app/lib/session/sessionactions";

export default Page;
export async function Page() {

  const username = await getSessionUsername();
  console.log("hospitationlist---username: " + username);

  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className={`${lusitana.className} text-2xl`}>User: {username}</h1>
      </div>
    </div>
  )
}