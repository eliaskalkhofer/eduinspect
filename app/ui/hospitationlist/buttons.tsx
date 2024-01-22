import { ArrowRightIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';

export function CompleteHospitation({ id }: { id: string }) {
    return (
      <Link
        href={`/dashboard/hospitationlist/${id}/complete`}
        className="relative flex flex-row lg:h-10 md:h-10 sm:h-40 h-40 items-center justify-center border rounded-lg bg-orange-600 hover:bg-orange-500 px-4 text-sm font-medium text-white transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600 overflow-hidden"
      >
        <span className="mr-3 hidden lg:inline">
          Hospitation abschließen
        </span>
        <ArrowRightIcon className="w-5" />
      </Link>
    );
  }