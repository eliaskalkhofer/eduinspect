// Loading animation
const shimmer =
  'before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent';

// export function CardSkeleton() {
//   return (
//     <div
//       className={`${shimmer} relative overflow-hidden rounded-xl bg-gray-100 p-2 shadow-sm`}
//     >
//       <div className="flex p-4">
//         <div className="h-5 w-5 rounded-md bg-gray-200" />
//         <div className="ml-2 h-6 w-16 rounded-md bg-gray-200 text-sm font-medium" />
//       </div>
//       <div className="flex items-center justify-center truncate rounded-xl bg-white px-4 py-8">
//         <div className="h-7 w-20 rounded-md bg-gray-200" />
//       </div>
//     </div>
//   );
// }

// export function CardsSkeleton() {
//   return (
//     <>
//       <CardSkeleton />
//       <CardSkeleton />
//       <CardSkeleton />
//       <CardSkeleton />
//     </>
//   );
// }

// export function RevenueChartSkeleton() {
//   return (
//     <div className={`${shimmer} relative w-full overflow-hidden md:col-span-4`}>
//       <div className="mb-4 h-8 w-36 rounded-md bg-gray-100" />
//       <div className="rounded-xl bg-gray-100 p-4">
//         <div className="sm:grid-cols-13 mt-0 grid h-[410px] grid-cols-12 items-end gap-2 rounded-md  bg-white p-4 md:gap-4" />
//         <div className="flex items-center pb-2 pt-6">
//           <div className="h-5 w-5 rounded-full bg-gray-200" />
//           <div className="ml-2 h-4 w-20 rounded-md bg-gray-200" />
//         </div>
//       </div>
//     </div>
//   );
// }

// export function InvoiceSkeleton() {
//   return (
//     <div className="flex flex-row items-center justify-between border-b border-gray-100 py-4">
//       <div className="flex items-center">
//         <div className="mr-2 h-8 w-8 rounded-full bg-gray-200" />
//         <div className="min-w-0">
//           <div className="h-5 w-40 rounded-md bg-gray-200" />
//           <div className="mt-2 h-4 w-12 rounded-md bg-gray-200" />
//         </div>
//       </div>
//       <div className="mt-2 h-4 w-12 rounded-md bg-gray-200" />
//     </div>
//   );
// }

// export function LatestInvoicesSkeleton() {
//   return (
//     <div
//       className={`${shimmer} relative flex w-full flex-col overflow-hidden md:col-span-4 lg:col-span-4`}
//     >
//       <div className="mb-4 h-8 w-36 rounded-md bg-gray-100" />
//       <div className="flex grow flex-col justify-between rounded-xl bg-gray-100 p-4">
//         <div className="bg-white px-6">
//           <InvoiceSkeleton />
//           <InvoiceSkeleton />
//           <InvoiceSkeleton />
//           <InvoiceSkeleton />
//           <InvoiceSkeleton />
//           <div className="flex items-center pb-2 pt-6">
//             <div className="h-5 w-5 rounded-full bg-gray-200" />
//             <div className="ml-2 h-4 w-20 rounded-md bg-gray-200" />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default function DashboardSkeleton() {
//   return (
//     <>
//       <div
//         className={`${shimmer} relative mb-4 h-8 w-36 overflow-hidden rounded-md bg-gray-100`}
//       />
//       <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
//         <CardSkeleton />
//         <CardSkeleton />
//         <CardSkeleton />
//         <CardSkeleton />
//       </div>
//       <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
//         <RevenueChartSkeleton />
//         <LatestInvoicesSkeleton />
//       </div>
//     </>
//   );
// }





// export function InvoicesTableSkeleton() {
//   return (
//     <div className="mt-6 flow-root">
//       <div className="inline-block min-w-full align-middle">
//         <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
//           <div className="md:hidden">
//             <InvoicesMobileSkeleton />
//             <InvoicesMobileSkeleton />
//             <InvoicesMobileSkeleton />
//             <InvoicesMobileSkeleton />
//             <InvoicesMobileSkeleton />
//             <InvoicesMobileSkeleton />
//           </div>
//           <table className="hidden min-w-full text-gray-900 md:table">
//             <thead className="rounded-lg text-left text-sm font-normal">
//               <tr>
//                 <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
//                   Customer
//                 </th>
//                 <th scope="col" className="px-3 py-5 font-medium">
//                   Email
//                 </th>
//                 <th scope="col" className="px-3 py-5 font-medium">
//                   Amount
//                 </th>
//                 <th scope="col" className="px-3 py-5 font-medium">
//                   Date
//                 </th>
//                 <th scope="col" className="px-3 py-5 font-medium">
//                   Status
//                 </th>
//                 <th
//                   scope="col"
//                   className="relative pb-4 pl-3 pr-6 pt-2 sm:pr-6"
//                 >
//                   <span className="sr-only">Edit</span>
//                 </th>
//               </tr>
//             </thead>
//             <tbody className="bg-white">
//               <TableRowSkeleton />
//               <TableRowSkeleton />
//               <TableRowSkeleton />
//               <TableRowSkeleton />
//               <TableRowSkeleton />
//               <TableRowSkeleton />
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// }


/*----------------------------------------------------------------*/
/*------------------------ Alte Skeletons ------------------------*/
/*----------------------------------------------------------------*/


export function TableRowSkeleton() {
  return (
    <tr className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg">
      {/* Lehrer */}
      <td className="whitespace-nowrap px-5 py-3">
        <div className="h-6 w-28 rounded bg-gray-100"></div>
      </td>
      {/* Datum */}
      <td className="whitespace-nowrap px-5 py-3">
        <div className="h-6 w-24 rounded bg-gray-100"></div>
      </td>
      {/* Anfang */}
      <td className="whitespace-nowrap px-5 py-3">
        <div className="h-6 w-12 rounded bg-gray-100"></div>
      </td>
      {/* Leerzelle */}
      <td className="whitespace-nowrap px-5 py-3"></td>
      {/* Ende */}
      <td className="whitespace-nowrap px-5 py-3">
        <div className="h-6 w-12 rounded bg-gray-100"></div>
      </td>
      {/* Fach */}
      <td className="whitespace-nowrap px-5 py-3">
        <div className="h-6 w-28 rounded bg-gray-100"></div>
      </td>
      {/* Information */}
      <td className="whitespace-nowrap px-5 py-5 hidden lg:block">
        <div className="h-10 w-52 rounded bg-green-100"></div>
      </td>
    </tr>
  );
}

export function HospitationsMobileSkeleton() {
  return (
    <div className="mb-2 flex flex-row items-center w-full rounded-mb bg-white p-4">
      <div className="w-full items-center justify-between">
        <div className="flex flex-col justify-end gap-2">
          <div className="h-7 w-28 rounded bg-gray-100"></div>
          <div className="h-7 w-24 rounded bg-gray-100"></div>
          <div className="h-7 w-12 rounded bg-gray-100"></div>
          <div className="h-7 w-28 rounded bg-gray-100"></div>
          <div className="h-10 w-52 rounded bg-gray-100"></div>
        </div>
      </div>
      <button className="relative flex flex-row lg:h-10 md:h-10 sm:h-40 h-40 items-center justify-center border rounded-lg bg-green-600 bg-opacity-50 hover:bg-green-500 hover:bg-opacity-50 px-4 text-sm font-medium text-white transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 overflow-hidden">
        <span className="mr-3 hidden lg:inline">
        </span>
        <div className="w-6 h-6 text-white"></div>
      </button>
    </div>
  );
}

export function HospitationTableSkeleton() {
  return (
    <div className={`${shimmer} mt-6 flow-root`}>
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <div className="md:hidden sm:inline">
            <HospitationsMobileSkeleton />
            <HospitationsMobileSkeleton />
            <HospitationsMobileSkeleton />
            <HospitationsMobileSkeleton />
            <HospitationsMobileSkeleton />
            <HospitationsMobileSkeleton />
          </div>
          <table className="hidden min-w-full text-gray-900 md:table">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  Lehrer
                </th>
                <th scope="col" className="px-3 py-5 font-medium sm:pl-6">
                  Datum
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Anfang
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Fach
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Information
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  {/* Empty field for button */}
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              <TableRowSkeleton />
              <TableRowSkeleton />
              <TableRowSkeleton />
              <TableRowSkeleton />
              <TableRowSkeleton />
              <TableRowSkeleton />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
