import { lusitana } from '@/app/ui/fonts';
import HospitationTable from '@/app/ui/hospitation/table';
import Search from '@/app/ui/hospitation/search';
import Pagination from '@/app/ui/hospitation/pagination';
import { Suspense } from 'react';
import { HospitationTableSkeleton } from '@/app/ui/skeletons';
import { fetchAvailableHospitationsPages } from '@/app/lib/data/datafetching';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hospitation',
}

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {

  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;

  var totalPages = await fetchAvailableHospitationsPages(query);
  if(!totalPages) {
    totalPages = 5;
  }


  console.log("***************************************Hospitation***************************************");
  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className={`${lusitana.className} text-2xl`}>Hospitation tätigen</h1>
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search placeholder="Hospitationen durchsuchen ..." />
      </div>
      <Suspense fallback={<HospitationTableSkeleton />}>
        <HospitationTable query={query} currentPage={currentPage} />
      </Suspense>
      <div className="mt-5 flex w-full justify-center">
        {<Pagination totalPages={totalPages} />}
      </div>
    </div>
  )
}