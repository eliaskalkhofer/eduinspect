import { lusitana } from '@/app/ui/fonts';
import HospitationTable from '@/app/ui/hospitation/table';
import Search from '@/app/ui/hospitation/search';

export default function Page() {

  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className={`${lusitana.className} text-2xl`}>Hospitation tätigen</h1>
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search placeholder="Search teacher..." />
      </div>
      <HospitationTable/>
    </div>
  )
}