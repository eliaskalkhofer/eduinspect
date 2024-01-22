import Form from '@/app/ui/hospitationlist/complete-form';
import Breadcrumbs from '@/app/ui/offerlesson/breadcrumbs';
import { fetchHospitationById } from '@/app/lib/data/datafetching';
import { notFound } from 'next/navigation';
import { ObjectId } from 'mongodb';

export default async function Page({ params }: { params: { id: string } }) {

    const id = params.id;

    const oid = new ObjectId(id);

    const hospitation = await fetchHospitationById(oid);

    if (!hospitation) {
        notFound();
    }

    const feedbackForm = {
        id: id
    }

    return (
        <main>
            <Breadcrumbs
                breadcrumbs={[
                    { label: 'Hospitationsliste', href: '/dashboard/hospitationlist' },
                    {
                        label: 'Abschließen',
                        href: `/dashboard/hospitationlist/${id}/complete`,
                        active: true,
                    },
                ]}
            />
            <Form id={id}/>
        </main>
    );
}