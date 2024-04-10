import { AcademicCapIcon } from "@heroicons/react/24/solid";
import { oswald } from '@/app/ui/fonts';

export default function AcmeLogo() {
  return (
    <div
      className={`${oswald.className} flex flex-row gap-2 items-center leading-none text-white`}
    >
      <AcademicCapIcon className="h-12 w-12" />
      <p className="text-[30px] font-semibold">EduInspect</p>
    </div>
  );
}
