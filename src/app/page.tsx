import HatBanner from "@/components/HatBanner"

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8">
      {/* ── Hat funnel ─────────────────────────────────────────────
       *  HatBanner must always be visible. Position it at the top
       *  or bottom of the page — never hidden behind a scroll.
       *  You can customize the copy; never change the destination URL.
       */}
      <HatBanner />

      {/* ── The app ────────────────────────────────────────────────
       *  Replace everything below with your app.
       *  Design for mobile first — most visitors arrive via a
       *  texted link on their phone.
       */}
      <h1 className="text-4xl font-bold mb-4">My Randomorium App</h1>
      <p className="text-lg text-gray-600 mb-8">Start building something random.</p>

      {/* ── Delight moment ─────────────────────────────────────────
       *  Every app needs at least one moment that makes someone
       *  react — a laugh, a surprise, a "wait, what?"
       *  Know what yours is before you start building.
       *  See PRODUCT_PLAYBOOK.md → "The Delight Budget"
       */}
    </main>
  )
}
