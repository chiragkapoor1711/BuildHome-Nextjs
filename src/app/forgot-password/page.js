export const metadata = {
  title: "Forgot Password",
};

export default function ForgotPassword() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-100 px-6">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">

        <h1 className="text-3xl font-bold text-center mb-4">
          Forgot Password
        </h1>

        <p className="text-gray-600 text-center mb-6">
          Enter your email address and we all send you a password reset link.
        </p>

        <form className="space-y-5">

          <input
            type="email"
            placeholder="Enter your email"
            className="w-full border rounded-lg p-3"
          />

          <button
            className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition"
          >
            Send Reset Link
          </button>

        </form>

      </div>
    </section>
  );
}