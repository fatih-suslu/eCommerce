import SignUpForm from "../components/SignUpForm";

export default function SignUpPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold text-gray-700 mb-8">Sign Up</h1>
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
        <SignUpForm />
      </div>
    </div>
  );
}
