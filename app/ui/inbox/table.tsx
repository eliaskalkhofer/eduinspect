import { fetchOwnAssignedHospitations } from '@/app/lib/data/datafetching';
import { getSessionUsername } from "@/app/lib/session/sessionactions";

export default async function HospitationTable() {

    const username = await getSessionUsername();
    var hospitations;

    if (username) {
        hospitations = await fetchOwnAssignedHospitations(username);
        if (hospitations && hospitations.length > 0) {
            console.log("hospitationlist---Hospitationen angekommen");
        }
    }

    return (
        <div className="mt-6 flow-root">
            <div className="inline-block min-w-full align-middle">
                <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
                    <div className="md:hidden">

                        {hospitations?.map((hospitation) => (
                            <div
                                key={String(hospitation._id)}
                                className="mb-2 w-full rounded-md bg-white p-4"
                            >
                                <div className="flex w-full items-center justify-between pt-4">
                                    <div>
                                        <p className="text-xl font-medium">
                                            {hospitation.teacherFirstname}
                                        </p>
                                        <p className="text-xl font-medium">
                                            {hospitation.teacherLastname}
                                        </p>
                                        <p className="text-xl font-medium">
                                            {hospitation.date}
                                        </p>
                                        <p className="text-xl font-medium">
                                            {hospitation.starttime}
                                        </p>
                                        <p className="text-xl font-medium">
                                            {hospitation.endtime}
                                        </p>
                                        <p className="text-xl font-medium">
                                            {hospitation.subject}
                                        </p>
                                        <p className="text-xl font-medium">
                                            {hospitation.information}
                                        </p>
                                    </div>
                                    <div className="">
                                        Button comming soon
                                    </div>
                                </div>
                            </div>
                        ))}

                    </div>
                    <table className="hidden min-w-full text-gray-900 md:table">
                        <thead className="rounded-lg text-left text-sm font-normal">
                            <tr>
                                <th scope="col" className="px-5 py-5 font-medium sm:pl-6">
                                    Datum
                                </th>
                                <th scope="col" className="px-5 py-5 font-medium sm:pl-6">
                                    Anfangszeit
                                </th>
                                <th scope="col" className="px-5 py-5 font-medium">
                                    Raum
                                </th>
                                <th scope="col" className="px-5 py-5 font-medium">
                                    Fach
                                </th>
                                <th scope="col" className="px-5 py-5 font-medium">
                                    Lehrerkürzel
                                </th>
                                <th scope="col" className="px-5 py-5 font-medium hidden lg:block">
                                    Lehrer
                                </th>
                            </tr>
                        </thead>

                        <tbody className="bg-white">
                            {hospitations?.map((hospitation) => (
                                <tr
                                    key={String(hospitation._id)}
                                    className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                                >
                                    <td className="whitespace-nowrap px-5 py-3">{hospitation.date}</td>
                                    <td className="whitespace-nowrap px-5 py-3">{hospitation.starttime}</td>
                                    <td className="whitespace-nowrap px-5 py-3">{hospitation.room}</td>
                                    <td className="whitespace-nowrap px-5 py-3">{hospitation.subject}</td>
                                    <td className="whitespace-nowrap px-5 py-3">{hospitation.impteacherUsername}</td>
                                    <td className="whitespace-nowrap px-5 py-5">{hospitation.impteacherFirstname} {hospitation.impteacherLastname}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}