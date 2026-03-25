import HatBanner from "@/components/HatBanner"

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold mb-4">My Randomorium App</h1>
      <p className="text-lg text-gray-600 mb-8">Start building something random.</p>
      <HatBanner />
    </main>
  )
}
