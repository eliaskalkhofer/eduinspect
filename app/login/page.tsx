import LoginForm from '@/app/ui/login-form';
 
export default function LoginPage() {
  return (
    <main className="flex items-center justify-center md:h-screen">
      <div className="relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4 md:-mt-32">
        <div className="flex h-20 w-full items-end rounded-lg bg-orange-500 p-3 md:h-36">
          <div className="w-32 text-white md:w-36">
          </div>
        </div>
        <LoginForm />
      </div>
    </main>
    // <div className="bg-gray-50 min-h-screen flex items-center justify-center px-16">
    //   <div className="relative w-full max-w-lg">
    //     <div className="absolute top-0 -left-8 w-96 h-96 bg-slate-300 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob"></div>
    //     <div className="absolute top-0 -right-8 w-96 h-96 bg-orange-300 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob animation-delay-2000"></div>
    //     <div className="absolute -bottom-12 left-24 w-96 h-96 bg-green-300 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob animation-delay-4000"></div>
    //     <div className="m-8 relative space-y-4">
    //       <LoginForm />
    //     </div>
    //   </div>
    // </div>
  );
}