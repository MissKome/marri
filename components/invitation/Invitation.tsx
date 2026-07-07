export default function Invitation() {
  return (
    <section className="flex min-h-screen items-center justify-center bg-[#FAF8F6] px-6">

      <div className="max-w-2xl rounded-[40px] bg-white p-16 text-center shadow-2xl">

        <p className="text-sm uppercase tracking-[0.4em] text-[#F4B6A8]">
          Deployment Successful
        </p>

        <h1 className="mt-8 text-6xl font-bold text-[#071A35]">
          You're Invited
        </h1>

        <p className="mt-8 text-xl leading-9 text-gray-600">
          Together with our families,
          we joyfully invite you
          to celebrate our wedding.
        </p>

        <div className="mt-12 space-y-4">

          <h2 className="text-3xl font-semibold">
            Saturday, 22 August 2026
          </h2>

          <p>
            Lagos, Nigeria
          </p>

          <p>
            11:00 AM
          </p>

        </div>

      </div>

    </section>
  );
}