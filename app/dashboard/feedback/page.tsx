import { lusitana } from '@/app/ui/fonts';
import HospitationTable from '@/app/ui/feedback/table'
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Feedback',
}

export default function Page() {
  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className={`${lusitana.className} text-2xl`}>Feedback</h1>
      </div>
      <HospitationTable />
    </div>
  )
}
