import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function AboutSection() {
  return (
    <section id="journey" className="mt-20 px-4 md:px-0">
      <h2 className="mb-12 text-center text-3xl font-extrabold tracking-tight text-zinc-100 sm:text-4xl">
        <span className="bg-gradient-to-r from-emerald-400 to-teal-600 bg-clip-text text-transparent">
          My Journey
        </span>
      </h2>

      <div className="relative mx-auto mt-5 max-w-4xl rounded-lg bg-zinc-900/50 p-6 sm:p-10 text-zinc-200 border border-zinc-800">
        <div className="absolute left-4 sm:left-1/2 top-0 h-full w-1 sm:w-2 sm:-ml-[4px] rounded-full bg-gradient-to-b from-emerald-900 to-teal-900">
          <div className="sticky top-1/2 -ml-1.5 sm:-ml-1">
            <div className="relative size-4 sm:size-4">
              <div className="absolute size-4 sm:size-4 animate-ping rounded-full bg-emerald-500"></div>
              <div className="size-4 sm:size-4 rounded-full bg-teal-500"></div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 relative z-10 pl-8 sm:pl-0">
          <div className="sm:col-start-2 sm:pl-8">
            <Card className="bg-zinc-950/50 border-zinc-800 hover:border-emerald-500/50 transition-colors">
              <CardHeader className="p-4 sm:p-6 pb-2">
                <CardTitle className="text-xl text-zinc-100">Yazılım Geliştirme Uzman Yardımcısı</CardTitle>
                <CardDescription className="text-emerald-400 font-medium">EAE Group</CardDescription>
              </CardHeader>
              <CardContent className="p-4 sm:p-6 pt-0 text-sm text-zinc-400">
                <p>Ağu 2025 - Devam ediyor</p>
                <p className="mt-2 text-xs opacity-70">ASP.NET MVC, C#</p>
              </CardContent>
            </Card>
          </div>
          <div className="sm:text-right sm:pr-8">
            <Card className="bg-zinc-950/50 border-zinc-800 hover:border-emerald-500/50 transition-colors sm:text-right">
              <CardHeader className="p-4 sm:p-6 pb-2">
                <CardTitle className="text-xl text-zinc-100">Aday Mühendis</CardTitle>
                <CardDescription className="text-emerald-400 font-medium">EAE Group</CardDescription>
              </CardHeader>
              <CardContent className="p-4 sm:p-6 pt-0 text-sm text-zinc-400">
                <p>Ağu 2024 - Ağu 2025</p>
                <p className="mt-2 line-clamp-2">Ekip arkadaşlarımla birlikte geliştirmekte olduğumuz projeler üzerine çalışmaya devam ediyoruz.</p>
                 <p className="mt-2 text-xs opacity-70">ASP.NET MVC, C#</p>
              </CardContent>
            </Card>
          </div>
           
           <div className="sm:col-start-2 sm:hidden"></div>

          <div className="sm:col-start-2 sm:pl-8">
             <Card className="bg-zinc-950/50 border-zinc-800 hover:border-emerald-500/50 transition-colors">
              <CardHeader className="p-4 sm:p-6 pb-2">
                <CardTitle className="text-xl text-zinc-100">Kocaeli Üniversitesi</CardTitle>
                <CardDescription className="text-emerald-400 font-medium">Bachelor&apos;s degree, Industrial Engineering</CardDescription>
              </CardHeader>
              <CardContent className="p-4 sm:p-6 pt-0 text-sm text-zinc-400">
                <p>Eyl 2022 - Tem 2025</p>
                <p className="mt-2 text-xs opacity-70">AutoCAD, Microsoft Excel</p>
              </CardContent>
            </Card>
          </div>
          <div className="sm:text-right sm:pr-8">
             <Card className="bg-zinc-950/50 border-zinc-800 hover:border-emerald-500/50 transition-colors sm:text-right">
              <CardHeader className="p-4 sm:p-6 pb-2">
                <CardTitle className="text-xl text-zinc-100">Stajyer</CardTitle>
                <CardDescription className="text-emerald-400 font-medium">Muay Bilişim</CardDescription>
              </CardHeader>
              <CardContent className="p-4 sm:p-6 pt-0 text-sm text-zinc-400">
                <p>Eyl 2021 - Oca 2022</p>
                 <p className="mt-2 text-xs opacity-70">WordPress</p>
              </CardContent>
            </Card>
          </div>
          
           <div className="sm:col-start-2 sm:hidden"></div>
          <div className="sm:col-start-2 sm:pl-8">
            <Card className="bg-zinc-950/50 border-zinc-800 hover:border-emerald-500/50 transition-colors">
              <CardHeader className="p-4 sm:p-6 pb-2">
                <CardTitle className="text-xl text-zinc-100">Pamukkale Üniversitesi</CardTitle>
                <CardDescription className="text-emerald-400 font-medium">Associate&apos;s degree, Computer Programming</CardDescription>
              </CardHeader>
              <CardContent className="p-4 sm:p-6 pt-0 text-sm text-zinc-400">
                <p>Haz 2020 - Haz 2022</p>
                <p className="mt-2 text-xs opacity-70">Python, C#</p>
              </CardContent>
            </Card>
          </div>

        </div>
      </div>
    </section>
  );
}