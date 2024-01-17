import { lusitana } from '@/app/ui/fonts';
import { CreateLesson } from '@/app/ui/offerlesson/buttons'
import HospitationTable from '@/app/ui/offerlesson/table';

export default function Page() {
  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className={`${lusitana.className} text-2xl`}>Meine Einheiten</h1>
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <CreateLesson />
      </div>
      <div>
        <HospitationTable />
      </div>


    </div>
  );
}