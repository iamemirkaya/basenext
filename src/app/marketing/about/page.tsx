export default function HomePage() {
  return (
    <>
      <div
        style={{ backgroundImage: "url('/images/banner.png')" }}
        className="flex h-[calc(100vh-200px)] flex-col items-center justify-center bg-cover bg-center"
      >
        <div className="text-lg font-bold text-zinc-200">
          Eğitimlerle ilgili haberleri takip edin!
        </div>
      </div>

      <div className="mx-auto max-w-screen-lg pb-5 text-zinc-900 dark:text-zinc-200">
        <section id="courses" className="mt-20">
          <h2 className="text-center">Eğitimlerim (yakında)</h2>
        </section>
        <section id="aboutme" className="mt-20">
          <h2>Hakkımda (yakında)</h2>
        </section>
        <section id="membership" className="mt-20">
          <h2>Abonelikler (yakında)</h2>
        </section>
        <section id="contact" className="mt-20">
          <h2>İletişim (yakında)</h2>
        </section>
      </div>
    </>
  );
}