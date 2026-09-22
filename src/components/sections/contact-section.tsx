import Image from "next/image";

export function ContactSection() {
  return (
    <section id="contact" className="mt-20">
      <h2 className="mb-5 text-center text-2xl font-bold">İletişim</h2>
      
      <div className="my-5 flex justify-center">
        <a
          href="#" 
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center space-x-3 rounded-xl border border-gray-300 bg-white px-5 py-2 text-zinc-900 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
        >
          <Image 
            src="/images/Whatsapp.png" 
            alt="Whatsapp İletişim" 
            width={36} 
            height={36} 
          />
          <span className="text-xl font-light">Whatsapp</span>
        </a>
      </div>
    </section>
  );
}