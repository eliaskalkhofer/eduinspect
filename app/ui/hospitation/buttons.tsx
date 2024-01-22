'use client';
import { assginHospitation } from '@/app/lib/actions/dbActions';
import { ArrowRightIcon } from '@heroicons/react/24/solid';

export function AcceptHospitation({ id, username }: { id: string, username: string }) {
  const setStatusAssigned = assginHospitation.bind(null, id, username);

  return (
    <form action={setStatusAssigned}>
      <button className="relative flex flex-row lg:h-10 md:h-10 sm:h-40 h-40 items-center justify-center border rounded-lg bg-green-600 hover:bg-green-500 px-4 text-sm font-medium text-white transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 overflow-hidden">
        <span className="mr-3 hidden lg:inline">
          Hospitation akzeptieren
        </span>
        <ArrowRightIcon className="w-6 h-6 text-white" />
      </button>
    </form>
  );
}

