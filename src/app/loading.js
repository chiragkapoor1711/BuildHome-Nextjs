export default function Loading() {
  return (
    <div className="flex h-screen flex-col items-center justify-center bg-gray-100">

      <div className="h-16 w-16 animate-spin rounded-full border-4 border-gray-300 border-t-black"></div>

      <p className="mt-6 text-xl font-semibold text-gray-700">
        Loading...
      </p>

    </div>
  );
}