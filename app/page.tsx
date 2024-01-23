// import Image from "next/image";
// import Link from "next/link";
// import FAQSection from "./ui/landingpage/faq";

// export default function Page() {
//   return (
//     <main className="text-gray-600 body-font">
//   <div className="container mx-auto flex px-5 py-8 items-center justify-center flex-col">
//     {/* <Image src="{/public/landing_page_image.webp} width={720} height={600} className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="Landing Page Picture" /> */}
//     <Image src="/landing_page_image.webp" alt="something" priority={true} height={512} width={512} className="rounded"/>
//     <div className="text-center lg:w-2/3 w-full">
//       <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 pt-10">Willkommen bei Eduinspect!</h1>
//       <p className="mb-8 leading-relaxed">Willkommen auf unserer Hospitationswebseite, einer Plattform, die speziell für Lehrer entwickelt wurde, um wertvolle Einblicke in den Unterricht und den Unterrichtsstil ihrer Kollegen/Kolleginnen zu gewinnen. Hier haben Lehrer die Möglichkeit, ihre Kollegen im Unterricht zu beobachten und im Anschluss konstruktives Feedback zu geben.</p>
//       <div className="flex justify-center pt-5 pb-15">
//         <Link href="/login">
//           <button className="inline-flex text-white bg-orange-500 border-0 py-2 px-6 focus:outline-none hover:bg-orange-600 rounded text-lg">
//             Login
//           </button>
//         </Link>
//         <Link href="/register">
//           <button className="ml-4 inline-flex text-slate-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-slate-200 rounded text-lg">
//             Registrieren
//           </button>
//         </Link>
//       </div>
//       <FAQSection />
//     </div>
//   </div>
// </main>
//   );
// }

// Importe für Next.js und React
// import Head from 'next/head';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import FAQSection from './ui/landingpage/faq';

export const metadata: Metadata = {
  title: 'Eduinspect'
}

// React-Komponente für die Landing Page
const LandingPage: React.FC = () => {
  return (
    <div className="flex flex-wrap">
      {/* Hauptinhalt der Landing Page */}
      <div className="w-full sm:w-8/12 mb-10 mt-5">
        <div className="container mx-auto h-full sm:p-10">
          {/* Navigationsleiste */}
          <nav className="flex px-4 justify-between items-center">
            <div className="text-4xl font-bold">
              Eduinspect<span className="text-slate-500">.</span>
            </div>
            <div>
              {/* <img src="https://image.flaticon.com/icons/svg/497/497348.svg" alt="" className="w-8" /> */}
              {/* <Image src="/landing_image_right.jpg" alt="something" priority={true} height={3334} width={1562} className="rounded"/> */}
            </div>
          </nav>

          {/* Header-Sektion */}
          <header className="container px-4 lg:flex mt-16 items-center h-full lg:mt-0">
            <div className="w-full">
              {/* <h1 className="text-4xl lg:text-6xl font-bold">Empower Teaching, Elevate Learning: <span className="text-slate-500">Unlocking Potential</span>  with Eduinspect. </h1> */}
              <h1 className="text-4xl lg:text-6xl font-bold"><span className="text-slate-500">Empowering Educators</span>, <br />Elevating Excellence.</h1>
              <div className="w-20 h-2 bg-slate-700 my-4"></div>
              <p className="text-xl mb-10">Willkommen auf unserer Hospitationswebseite, einer Plattform, die speziell für Lehrer entwickelt wurde, um wertvolle Einblicke in den Unterricht und den Unterrichtsstil ihrer Kollegen/Kolleginnen zu gewinnen. Hier haben Lehrer die Möglichkeit, ihre Kollegen im Unterricht zu beobachten und im Anschluss konstruktives Feedback zu geben.</p>
              <div className="flex pt-5 pb-15">
                <Link href="/login">
                  <button className="inline-flex bg-orange-500 hover:bg-orange-600 text-white text-2xl font-medium px-4 py-2 rounded shadow">
                    Login
                  </button>
                </Link>
                <Link href="/register">
                  <button className="ml-4 inline-flex bg-slate-400 hover:bg-slate-500 text-white text-2xl font-medium px-4 py-2 rounded shadow">
                    Registrieren
                  </button>
                </Link>
              </div>
            </div>
          </header>
        </div>
      </div>

      {/* Bild-Sektion */}
      <div className="hidden sm:block sm:w-4/12">
        <Image
          src="/landing_image_right.jpg"
          alt="Leafs"
          width={634}
          height={634}
          objectFit="cover"
          priority={true}
          // blurDataURL="data:..."
          // placeholder="blur"
          // style= {{
          //   width: "100%",
          // }}
          className="w-full h-48 object-cover sm:h-screen"
        />
      </div>
    </div>
  );
};

// Exportiere die Komponente
export default LandingPage;
