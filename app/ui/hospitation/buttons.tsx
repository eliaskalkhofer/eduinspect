'use client';
import { useState } from 'react';
import Link from 'next/link';
import { assginHospitation } from '@/app/lib/actions/dbActions';

export function AcceptHospitation({ id }: { id: string }) {
  const setStatusAssgined = assginHospitation.bind(null, id);
  const [isHovered, setIsHovered] = useState(false);
  //console.log("buttons---id: " + id);

  return (
    <form action={setStatusAssgined}>
      <button className=" relative flex h-10 items-center justify-center border rounded-lg bg-green-600 hover:bg-green-500 px-4 text-sm font-medium text-white transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 overflow-hidden">
      <span className="hidden md:block">Hospitation akzeptieren</span>
      </button>
    </form>
  );
}
