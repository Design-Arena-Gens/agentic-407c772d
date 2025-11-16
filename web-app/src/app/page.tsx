"use client";

import { useMemo, useState } from "react";

export default function Home() {
  const [name, setName] = useState("");
  const [mood, setMood] = useState<"joyful" | "calm" | "energetic">("joyful");

  const greeting = useMemo(() => {
    const base = name.trim().length > 0 ? `${name.trim()}` : "toi";

    const vibes: Record<typeof mood, string> = {
      joyful: "✨ Que ta journée rayonne !",
      calm: "🌿 Prends une grande inspiration, tout va bien se passer.",
      energetic: "⚡ Attrape cette énergie et fonce !",
    };

    return `Salut ${base} ! ${vibes[mood]}`;
  }, [name, mood]);

  return (
    <div className="flex min-h-screen w-full flex-col bg-gradient-to-br from-rose-200 via-white to-sky-200 font-sans text-zinc-900">
      <header className="flex w-full items-center justify-between px-8 py-6">
        <span className="text-lg font-semibold tracking-tight text-rose-500">
          Salut Studio
        </span>
        <div className="flex items-center gap-4 text-sm text-zinc-600">
          <a
            href="https://fr.wikipedia.org/wiki/Salut"
            className="transition-colors hover:text-rose-500"
            target="_blank"
            rel="noreferrer noopener"
          >
            Origines
          </a>
          <a
            href="https://dict.leo.org/franz%C3%B6sisch-allemand/salut"
            className="transition-colors hover:text-rose-500"
            target="_blank"
            rel="noreferrer noopener"
          >
            Traductions
          </a>
        </div>
      </header>

      <main className="mx-auto flex w-full max-w-4xl grow flex-col gap-12 px-8 pb-16">
        <section className="grid gap-8 rounded-3xl bg-white/60 p-10 backdrop-blur-md shadow-lg shadow-rose-200/50 sm:grid-cols-[1.2fr,0.8fr]">
          <div className="space-y-6">
            <h1 className="text-4xl font-bold leading-tight text-zinc-950 sm:text-5xl">
              Salut, c&apos;est bien plus qu&apos;un simple bonjour.
            </h1>
            <p className="max-w-xl text-lg leading-relaxed text-zinc-600">
              Explore l&apos;esprit du mot le plus chaleureux de la langue
              française. Personnalise ton message pour un ami, un collègue ou un
              inconnu que tu veux illuminer.
            </p>
            <form
              className="flex flex-col gap-5 rounded-2xl border border-white/70 bg-white/70 p-6"
              onSubmit={(event) => event.preventDefault()}
            >
              <label className="text-sm font-medium uppercase tracking-wide text-rose-400">
                Ton destinataire
                <input
                  className="mt-2 w-full rounded-xl border border-rose-200/80 bg-white/80 px-4 py-2 text-base font-semibold text-rose-500 outline-none transition focus:border-rose-400"
                  placeholder="ex. mon amie Inès"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                />
              </label>

              <fieldset className="flex flex-col gap-3">
                <legend className="text-sm font-medium uppercase tracking-wide text-rose-400">
                  Ambiance
                </legend>
                <div className="flex flex-wrap gap-3">
                  {(["joyful", "calm", "energetic"] as const).map((option) => (
                    <button
                      key={option}
                      type="button"
                      className={`rounded-full px-5 py-2 text-sm font-semibold capitalize transition ${
                        mood === option
                          ? "bg-rose-500 text-white shadow-lg shadow-rose-300/80"
                          : "bg-white/80 text-rose-500 ring-1 ring-rose-200/80 hover:bg-rose-100"
                      }`}
                      onClick={() => setMood(option)}
                    >
                      {option === "joyful"
                        ? "Joyeux"
                        : option === "calm"
                          ? "Apaisé"
                          : "Énergique"}
                    </button>
                  ))}
                </div>
              </fieldset>
            </form>
          </div>

          <aside className="flex flex-col justify-between gap-6 rounded-2xl bg-gradient-to-br from-rose-500 via-rose-400 to-orange-300 p-8 text-white shadow-xl shadow-rose-300/70">
            <div className="space-y-3">
              <p className="text-sm uppercase tracking-[0.4em] text-white/70">
                Ton message
              </p>
              <p className="text-2xl font-semibold leading-snug">{greeting}</p>
            </div>
            <div className="flex flex-col gap-2 text-sm text-white/80">
              <p>📬 Copie &amp; partage ce souffle de bonne humeur.</p>
              <p>💡 Astuce: combine-le avec un sourire, ça marche à tous les coups.</p>
            </div>
          </aside>
        </section>

        <section className="grid gap-8 sm:grid-cols-3">
          {[
            {
              emoji: "🥐",
              title: "Matin parisien",
              text: "Commence une réunion avec un « Salut » et une viennoiserie virtuelle.",
            },
            {
              emoji: "🌇",
              title: "Coucher de soleil",
              text: "Dis « Salut » quand tu rejoins un appel tardif avec la team.",
            },
            {
              emoji: "🎉",
              title: "Fête improvisée",
              text: "Transforme un simple message Slack en invitation spontanée.",
            },
          ].map((card) => (
            <article
              key={card.title}
              className="rounded-2xl border border-white/60 bg-white/80 p-6 text-zinc-700 shadow-lg shadow-rose-200/40 transition hover:-translate-y-1 hover:shadow-rose-200"
            >
              <div className="text-3xl">{card.emoji}</div>
              <h2 className="mt-3 text-xl font-semibold text-zinc-900">
                {card.title}
              </h2>
              <p className="mt-2 text-sm leading-relaxed">{card.text}</p>
            </article>
          ))}
        </section>
      </main>

      <footer className="flex flex-col items-center gap-2 px-8 pb-8 text-xs text-zinc-500 sm:flex-row sm:justify-between">
        <p>Fabriqué avec une bonne dose de bonne humeur.</p>
        <p>
          Tu veux répondre ? Dis juste <span className="font-semibold">Salut</span>.
        </p>
      </footer>
    </div>
  );
}
