import {
    ChartBarIcon,
    ClockIcon,
    UserGroupIcon,
    CheckCircleIcon,
} from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';
import { fetchCardData } from '@/app/lib/data/datafetching';
import { getSessionUsername } from '@/app/lib/session/sessionactions';

const iconMap = {
    total: ChartBarIcon,
    available: UserGroupIcon,
    assigned: ClockIcon,
    completed: CheckCircleIcon,
};

export default async function CardWrapper() {

    const username = await getSessionUsername();
    var cardData;
    if (username) {
        cardData = await fetchCardData(username);
    }
    
    if (!cardData) {
        cardData = {
            totalCount: 0,
            assignedCount: 0,
            availableCount: 0,
            completedCount: 0
        };
    }

    return (
        <>
            <Card title="Meine gesamten Hospitationen" value={cardData.totalCount} type="total" />
            <Card title="Offene Hospitationen" value={cardData.availableCount} type="available" />
            <Card title="Vergebene Hospitationen" value={cardData.assignedCount} type="assigned" />
            <Card title="Abgeschlossene Hospitationen" value={cardData.completedCount} type="completed" />
        </>
    );
}

export function Card({
    title,
    value,
    type,
}: {
    title: string;
    value: number | string;
    type: 'total' | 'available' | 'assigned' | 'completed';
}) {
    const Icon = iconMap[type];

    return (
        <div className="rounded-xl bg-gray-100 p-2 shadow-sm">
            <div className="flex p-4">
                {Icon ? <Icon className="h-5 w-5 text-gray-700" /> : null}
                <h3 className="ml-2 text-sm font-medium">{title}</h3>
            </div>
            <p
                className={`${lusitana.className}
            truncate rounded-xl bg-white px-4 py-8 text-center text-2xl`}
            >
                {value}
            </p>
        </div>
    );
}
