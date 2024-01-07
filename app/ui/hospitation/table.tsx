import { fetchFilteredInvoices, fetchAvailableHospitations } from '@/app/lib/data';

export default async function HospitationTable() {

  //const invoices = await fetchFilteredInvoices("", 1);
  const hospitations = await fetchAvailableHospitations();


  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <div className="md:hidden">



          </div>
          <table className="hidden min-w-full text-gray-900 md:table">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  Datum
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Anfang
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Ende
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Fach
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Information
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  hospitieren
                </th>
                <th scope="col" className="relative py-3 pl-6 pr-3">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">

              {hospitations?.map((hospitation) => (
                <tr
                  key={hospitation.id}
                  className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                >
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex items-center gap-3">
                      <p>{hospitation.date}</p>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {hospitation.starttime}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {hospitation.endtime}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {hospitation.subject}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {hospitation.information}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    Button comming soon;
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
