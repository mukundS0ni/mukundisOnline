import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Mukund | Portfolio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="min-h-screen bg-[#ececec] text-black p-6">
        <div className="max-w-6xl mx-auto">
          <header className="flex items-center justify-between">
            <h1 className="font-mono text-2xl font-bold">Mukund</h1>
            <nav className="hidden md:flex gap-6">
              <a href="/certifications" className="font-mono font-bold">Certifications</a>
              <a href="/resume/Resume_Mukund.pdf" target="_blank" rel="noreferrer" download className="rounded-lg bg-black text-white px-3 py-2">Download CV</a>
            </nav>
          </header>

          <section className="mt-10 rounded-lg bg-[#dcebf2] p-8 shadow-lg">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1">
                <h2 className="text-4xl font-bold">Hi, I'm Mukund</h2>
                <p className="mt-4 text-lg">A Passionate Freelance Developer crafting elegant solutions for complex problems.</p>
              </div>

              <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-black">
                <img src="/assets/avatar.jpg" alt="avatar" className="w-full h-full object-cover" />
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  )
}
