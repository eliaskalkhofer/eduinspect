import { lusitana } from '@/app/ui/fonts';
import HospitationTable from "@/app/ui/hospitationlist/table"

export default function Page() {

  console.log("***************************************Hospitationlist***************************************");
  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className={`${lusitana.className} text-2xl`}>Hospitationsliste</h1>
      </div>
      <HospitationTable />
    </div>
  )
}