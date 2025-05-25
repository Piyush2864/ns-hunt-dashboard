import { LoginForm } from "../components/login-form";

export default function LoginPage() {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-background">
      <div className="w-full max-w-xl rounded-2xl border bg-white p-6 sm:p-8 md:p-10 shadow-xl dark:bg-background">
        <div className="mb-8 flex justify-center">
        </div>
        <LoginForm />
      </div>
    </div>
  );
}
