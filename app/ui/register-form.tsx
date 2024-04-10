'use client';

import { lusitana } from '@/app/ui/fonts';
import {
    KeyIcon,
    ExclamationCircleIcon,
    HashtagIcon,
    ArrowLeftIcon
} from '@heroicons/react/24/outline';
import { ArrowRightIcon } from '@heroicons/react/20/solid';
import { Button } from './button';
import { useFormState, useFormStatus } from 'react-dom';
import { register } from '@/app/lib/actions/dbActions';
import Link from 'next/link';

export default function RegisterForm() {
    const [errorMessage, dispatch] = useFormState(register, undefined);

    return (
        <div>
            <div className="absolute hidden md:block lg:block left-2 top-2 m-2 md:left-4 md:top-4 md:m-4 lg:left-4 lg:top-4 lg:m-4">          
                <Link href={'/'}>
                    <div className="inline-flex items-center justify-center whitespace-nowrap text-center hover:bg-orange-600 rounded-full transition-all duration-300 w-10 h-10 circle-container">
                    <ArrowLeftIcon className='w-6 text-white' />
                </div>
                </Link>
            </div>
            <form action={dispatch} className="space-y-3">
                <div className="flex-1 rounded-lg bg-gray-50 px-6 pb-4 pt-8">
                    <h1 className={`${lusitana.className} mb-3 text-2xl`}>
                        Registrieren um fortzufahren
                    </h1>
                    <div className="w-full">
                        <div>
                            <label
                                className="mb-3 mt-5 block text-xs font-medium text-gray-900"
                                htmlFor="firstname"
                            >
                                Vorname
                            </label>
                            <div className="relative">
                                <input
                                    className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                                    id="firstname"
                                    type="text"
                                    name="firstname"
                                    placeholder="Vorname eingeben"
                                    required
                                />
                                <HashtagIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
                            </div>
                        </div>
                        <div>
                            <label
                                className="mb-3 mt-5 block text-xs font-medium text-gray-900"
                                htmlFor="lastname"
                            >
                                Nachname
                            </label>
                            <div className="relative">
                                <input
                                    className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                                    id="lastname"
                                    type="text"
                                    name="lastname"
                                    placeholder="Nachname eingeben"
                                    required
                                />
                                <HashtagIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
                            </div>
                        </div>
                        <div className="mt-4">
                            <label
                                className="mb-3 mt-5 block text-xs font-medium text-gray-900"
                                htmlFor="password1"
                            >
                                Passwort
                            </label>
                            <div className="relative">
                                <input
                                    className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                                    id="password1"
                                    type="password"
                                    name="password1"
                                    placeholder="Passwort eingeben"
                                    required
                                    minLength={6}
                                />
                                <KeyIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
                            </div>
                        </div>
                        <div className="mt-4">
                            <label
                                className="mb-3 mt-5 block text-xs font-medium text-gray-900"
                                htmlFor="password2"
                            >
                                Passwort wiederholen
                            </label>
                            <div className="relative">
                                <input
                                    className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                                    id="password2"
                                    type="password"
                                    name="password2"
                                    placeholder="Passwort eingeben"
                                    required
                                    minLength={6}
                                />
                                <KeyIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
                            </div>
                        </div>
                        <div className="relative hidden md:block lg:block mt-2 mb-6">          
                            <Link href={'/login'}>
                                <span className='text-orange-800'>Haben Sie schon ein Konto?</span>
                            </Link>
                        </div>
                    </div>
                    <RegisterButton />
                    <div
                        className="flex h-8 items-end space-x-1"
                        aria-live="polite"
                        aria-atomic="true"
                    >
                        {errorMessage && (
                            <>
                                <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
                                <p className="text-sm text-red-500">{errorMessage}</p>
                            </>
                        )}
                    </div>
                </div>
            </form>
        </div>
    );
}

function RegisterButton() {
    const { pending } = useFormStatus();

    return (
        <Button className="mt-4 w-full" aria-disabled={pending}>
            Registrieren <ArrowRightIcon className="ml-auto h-5 w-5 text-gray-50" />
        </Button>
    );
}

