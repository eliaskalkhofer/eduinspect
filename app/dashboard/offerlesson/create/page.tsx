import Breadcrumbs from '@/app/ui/offerlesson/breadcrumbs';
import Form from '@/app/ui/offerlesson/create-form';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Anbieten',
}

export default async function Page() {
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Meine Einheiten', href: '/dashboard/offerlesson' },
          {
            label: 'Einheit anbieten',
            href: '/dashboard/offerlesson/create',
            active: true,
          },
        ]}
      />
      <Form/>
    </main>
  );
}