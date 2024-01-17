'use client';

import React from 'react';

interface FAQProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="py-5">
      <details className="group" open={isOpen}>
        <summary
          className="flex cursor-pointer list-none items-center justify-between font-medium select-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span>{question}</span>
          <span className="transition group-open:rotate-180">
            <svg
              fill="none"
              height="24"
              shapeRendering="geometricPrecision"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              width="24"
            >
              <path d="M6 9l6 6 6-6"></path>
            </svg>
          </span>
        </summary>
        <p className={`group-open:animate-fadeIn mt-3 text-neutral-600 text-justify select-none`}>{answer}</p>
      </details>
    </div>
  );
};

const FAQSection: React.FC = () => {
  const faqs: FAQProps[] = [
    {
      question: 'Was ist die Hauptfunktion von Eduinspect?',
      answer:
        'Die Hospitationswebseite bietet Lehrern die Möglichkeit, ihre Kollegen im Unterricht zu beobachten und anschließend konstruktives Feedback zu geben. Dies fördert einen offenen Austausch von Lehrmethoden und trägt zur kontinuierlichen Verbesserung der Unterrichtsqualität bei.',
    },
    {
      question: 'Wie funktioniert der Hospitationsprozess auf der Webseite?',
      answer:
        'Als Lehrer:in kann man eine Hospitation anbieten, die andere Lehrer:innen annehmen können bzw. kann man auch die bereits angebotenen Hospitationsangebote der Kollegen/Kolleginnen akzeptieren. Nach Abschluss der Stunde kann zu der eigenen Stunde das Feedback des Kollegen/der Kollegin unter Eingang eingesehen werden oder ein optionales Feedback zu der Unterrichtsstunde des besuchten Kollegen/der besuchten Kollegin unter Feedback angegeben werden.',
    },
    {
      question: 'Welche Vorteile bietet die Nutzung von Eduinspect?',
      answer:
        'Durch das Hospitieren können Lehrer ihre pädagogischen Fähigkeiten erweitern, von unterschiedlichen Unterrichtsstilen lernen und die Zusammenarbeit in der Lehrergemeinschaft stärken. Der Austausch von Feedback fördert die berufliche Weiterentwicklung und schafft eine unterstützende Lehrer-Community.',
    },
    {
      question: 'Ist die Teilnahme am Hospitationsprozess verpflichtend?',
      answer:
        'Nein, die Teilnahme am Hospitationsprozess ist freiwillig. Lehrer können selbst entscheiden, ob sie hospitieren möchten oder nicht. Die Webseite bietet eine flexible Plattform, die darauf abzielt, professionelle Weiterbildung im Kollegium zu fördern, ohne Verpflichtungen einzugehen.',
    },
    {
      question: 'Wie wird die Vertraulichkeit der Hospitationsdaten gewährleistet?',
      answer:
        'Datenschutz hat höchste Priorität. Alle Hospitationsdaten und Feedback-Gespräche werden in einer geschützten Umgebung gehandhabt, um sicherzustellen, dass der Austausch vertraulich und förderlich für die berufliche Entwicklung ist.',
    },
  ];

  return (
    <div className="relative w-full bg-white px-6 pt-10 pb-8 mt-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-2xl sm:rounded-lg sm:px-10">
      <div className="mx-auto px-5">
        <div className="flex flex-col items-center">
          <h2 className="mt-5 text-center text-3xl font-bold tracking-tight md:text-5xl">FAQ</h2>
          <p className="mt-3 text-lg text-neutral-500 md:text-xl">Frequently asked questions</p>
        </div>
        <div className="mx-auto mt-8 grid max-w-xl divide-y divide-neutral-200">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
