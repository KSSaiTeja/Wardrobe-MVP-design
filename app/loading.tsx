import { Loader2 } from "lucide-react"

export default function Loading() {
  // Fashion facts to display during loading
  const fashionFacts = [
    "The fashion industry is valued at over $3 trillion globally, making it one of the largest industries in the world.",
    "The average Indian consumer spends approximately 7-8% of their income on clothing and fashion accessories.",
    "Fast fashion brands produce up to 52 micro-seasons per year, encouraging constant consumption.",
    "It takes about 2,700 liters of water to produce one cotton t-shirt, equivalent to what one person drinks in 2.5 years.",
    "The Indian textile industry is one of the oldest in the world, dating back several centuries.",
    "Sustainable fashion is growing at a rate of 9.5% annually in India as consumers become more environmentally conscious.",
    "Traditional Indian textiles like Khadi, Banarasi silk, and Chanderi are experiencing a revival in modern fashion.",
    "The average person wears only 20% of the clothes in their wardrobe regularly.",
    "India is the second-largest exporter of textiles and clothing in the world.",
    "The concept of 'capsule wardrobe' was introduced in the 1970s to promote mindful consumption.",
  ]

  // Get a random fashion fact
  const randomFact = fashionFacts[Math.floor(Math.random() * fashionFacts.length)]

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#5f7470] text-white p-4">
      <div className="max-w-md mx-auto text-center space-y-8">
        <h1 className="text-4xl font-light tracking-tighter mb-8">WARDROBE</h1>

        <div className="flex justify-center mb-8">
          <Loader2 className="h-12 w-12 animate-spin" />
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-light">Did you know?</h2>
          <p className="text-white/80 font-extralight text-lg italic">"{randomFact}"</p>
        </div>

        <p className="text-white/60 font-extralight text-sm mt-12">
          Curating your personalized style recommendations...
        </p>
      </div>
    </div>
  )
}
