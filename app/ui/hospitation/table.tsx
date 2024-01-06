export default async function HospitationTable({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  //const invoices = await fetchFilteredInvoices(query, currentPage);

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
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
