import Image from "next/image";
import Link from "next/link";
import FAQSection from "./ui/landingpage/faq";

export default function Page() {
  return (
    <main className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
    {/* <Image src="{/public/landing_page_image.webp} width={720} height={600} className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="Landing Page Picture" /> */}
    <Image src="/landing_page_image.webp" alt="something" height={512} width={512} className="rounded"/>
    <div className="text-center lg:w-2/3 w-full">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Willkommen bei Eduinspect!</h1>
      <p className="mb-8 leading-relaxed">Willkommen auf unserer Hospitationswebseite, einer Plattform, die speziell für Lehrer entwickelt wurde, um wertvolle Einblicke in den Unterricht und den Unterrichtsstil ihrer Kollegen/Kolleginnen zu gewinnen. Hier haben Lehrer die Möglichkeit, ihre Kollegen im Unterricht zu beobachten und im Anschluss konstruktives Feedback zu geben.</p>
      <div className="flex justify-center py-10">
        <Link href="/login">
          <button className="inline-flex text-white bg-orange-500 border-0 py-2 px-6 focus:outline-none hover:bg-orange-600 rounded text-lg">
            Login
          </button>
        </Link>
        <Link href="/register">
          <button className="ml-4 inline-flex text-slate-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-slate-200 rounded text-lg">
            Registrieren
          </button>
        </Link>
      </div>
      <FAQSection />
    </div>
  </div>
</main>
  );
}