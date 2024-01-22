import Link from 'next/link';
import { FeedbackForm } from '@/app/lib/data/definitions';
import {
    ArrowRightEndOnRectangleIcon,
    HomeIcon,
    CalendarDaysIcon,
    ClockIcon,
    MegaphoneIcon
} from '@heroicons/react/24/outline';
import { Button } from '@/app/ui/button';
import { getSessionUsername } from "@/app/lib/session/sessionactions";
import { completeHospitation } from '@/app/lib/actions/dbActions';


export default async function Form({
    id
  }: {
      id: string;
  }) {

   

    const completeHospitationWithId = completeHospitation.bind(null, id);

    return (
        <form action={completeHospitationWithId}>
            <div className="rounded-md bg-gray-50 p-4 md:p-6">
                {/* Feedback */}
                <div className="mb-4">
                    <label htmlFor="feedback" className="mb-2 block text-sm font-medium">
                        Wähle eine Feedback
                    </label>
                    <div className="relative mt-2 rounded-md">
                        <div className="relative">
                            <input
                                id="feedback"
                                name="feedback"
                                type="string"
                                placeholder="Feedback"
                                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                            />
                            <MegaphoneIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-6 flex justify-end gap-4">
                <Link
                    href="/dashboard/hospitationlist"
                    className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
                >
                    Zurück
                </Link>
                <Button type="submit">Abschließen</Button>
            </div>
        </form>
    );
}
