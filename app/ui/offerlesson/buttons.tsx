'use client';
import { PencilIcon, PlusIcon, TrashIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { deleteHospitation } from '@/app/lib/actions/dbActions';

export function CreateLesson() {
    return (
      <Link
        href="/dashboard/offerlesson/create"
        className="flex h-10 items-center rounded-lg bg-orange-600 px-4 text-sm font-medium text-white transition-colors hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
      >
        <span className="hidden md:block">Hospitation anbieten</span>{' '}
        <PlusIcon className="h-5 md:ml-4" />
      </Link>
    );
  }

export function UpdateHospitation({ id }: { id: string }) {
  return (
    <Link
      href={`/dashboard/offerlesson/${id}/edit`}
      className="rounded-md border p-2 hover:bg-gray-100"
    >
      <PencilIcon className="w-5" />
    </Link>
  );
}


export function DeleteHospitation({ id }: { id: string }) {
  const deleteHospitationWithId = deleteHospitation.bind(null, id);

  return (
    <form action={deleteHospitationWithId}>
      <button className="rounded-md border p-2 hover:bg-gray-100">
        <span className="sr-only">Delete</span>
        <TrashIcon className="w-4" />
      </button>
    </form>
  );
}
