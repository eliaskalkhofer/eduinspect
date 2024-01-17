import Link from 'next/link';
import {
    ArrowRightEndOnRectangleIcon,
    HomeIcon,
    CalendarDaysIcon,
    ClockIcon,
    MegaphoneIcon
} from '@heroicons/react/24/outline';
import { Button } from '@/app/ui/button';
//import { createInvoice } from '@/app/lib/actions';

//<form action={createInvoice}> einfügen

export default function Form() {

    return (
        <form>
            <div className="rounded-md bg-gray-50 p-4 md:p-6">
                {/* Datum */}
                <div className="mb-4">
                    <label htmlFor="date" className="mb-2 block text-sm font-medium">
                        Wähle ein Datum
                    </label>
                    <div className="relative mt-2 rounded-md">
                        <div className="relative">
                            <input
                                id="date"
                                name="date"
                                type="string"
                                placeholder="tt.mm.jjjj"
                                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                            />
                            <CalendarDaysIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
                        </div>
                    </div>
                </div>
                {/* Anfangszeit */}
                <div className="mb-4">
                    <label htmlFor="starttime" className="mb-2 block text-sm font-medium">
                        Wähle eine Anfangszeit
                    </label>
                    <div className="relative mt-2 rounded-md">
                        <div className="relative">
                            <input
                                id="starttime"
                                name="starttime"
                                type="string"
                                placeholder="hh:mm"
                                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                            />
                            <ClockIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
                        </div>
                    </div>
                </div>
                {/* Endzeit */}
                <div className="mb-4">
                    <label htmlFor="duration" className="mb-2 block text-sm font-medium">
                        Wähle eine Endzeit
                    </label>
                    <div className="relative mt-2 rounded-md">
                        <div className="relative">
                            <input
                                id="duration"
                                name="duration"
                                type="string"
                                placeholder="hh:mm"
                                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                            />
                            <ClockIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
                        </div>
                    </div>
                </div>
                {/* Raum */}
                <div className="mb-4">
                    <label htmlFor="room" className="mb-2 block text-sm font-medium">
                        Wähle einen Raum
                    </label>
                    <div className="relative mt-2 rounded-md">
                        <div className="relative">
                            <input
                                id="room"
                                name="room"
                                type="string"
                                placeholder="T###"
                                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                            />
                            <HomeIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
                        </div>
                    </div>
                </div>
                {/* Fach */}
                <div className="mb-4">
                    <label htmlFor="subject" className="mb-2 block text-sm font-medium">
                        Wähle ein Fach
                    </label>
                    <div className="relative mt-2 rounded-md">
                        <div className="relative">
                            <input
                                id="subject"
                                name="subject"
                                type="string"
                                placeholder="Fach"
                                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                            />
                            <ArrowRightEndOnRectangleIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
                        </div>
                    </div>
                </div>
                {/* Informatiom */}
                <div className="mb-4">
                    <label htmlFor="information" className="mb-2 block text-sm font-medium">
                        Wähle eine Information
                    </label>
                    <div className="relative mt-2 rounded-md">
                        <div className="relative">
                            <input
                                id="information"
                                name="information"
                                type="string"
                                placeholder="Information"
                                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                            />
                            <MegaphoneIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-6 flex justify-end gap-4">
                <Link
                    href="/dashboard/offerlesson"
                    className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
                >
                    Zurück
                </Link>
                <Button type="submit">Einheit erstellen</Button>
            </div>
        </form>
    );
}
