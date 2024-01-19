import Form from '@/app/ui/offerlesson/edit-form';
import Breadcrumbs from '@/app/ui/offerlesson/breadcrumbs';
import { fetchHospitationById } from '@/app/lib/data/datafetching';
import { notFound } from 'next/navigation';
import { ObjectId } from 'mongodb';
import { HospitationForm } from '@/app/lib/data/definitions';

export default async function Page({ params }: { params: { id: string } }) {
    const id = params.id;

    const oid = new ObjectId(id);

    const hospitation = await fetchHospitationById(oid);

    if (!hospitation) {
        notFound();
    }

    const hospitationForm = {
        id: id,
        date: hospitation.date,
        starttime: hospitation.starttime,
        endtime: hospitation.endtime,
        room: hospitation.room,
        subject: hospitation.subject,
        information: hospitation.information,
    }

    return (
        <main>
            <Breadcrumbs
                breadcrumbs={[
                    { label: 'Einheit anbieten', href: '/dashboard/offerlesson' },
                    {
                        label: 'Bearbeiten',
                        href: `/dashboard/offerlesson/${id}/edit`,
                        active: true,
                    },
                ]}
            />
            <Form hospitation={hospitationForm} />
        </main>
    );
}