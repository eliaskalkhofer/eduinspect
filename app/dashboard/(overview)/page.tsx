import { lusitana } from '@/app/ui/fonts';
import CardWrapper from '@/app/ui/dashboard/cards';

export default function Page() {
  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between mb-4">
        {/* Added margin-bottom class 'mb-4' */}
        <h1 className={`${lusitana.className} text-2xl mb-4`}>Home</h1>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
        <CardWrapper />
      </div>
    </div>
  );
}