import Link from "next/link"

import { PageShell } from "@/components/page-shell"
import { Photo } from "@/components/photo"
import { images, site } from "@/lib/content"

const menuCategories = [
  {
    href: "/menu",
    image: images.buildNachos,
    title: "Build Your Own"
  },
  {
    href: "/tacos",
    image: images.birriaTacos,
    title: "birria"
  },
  {
    href: "/menu",
    image: images.chipsBag,
    title: "side orders"
  },
  {
    href: "/menu",
    image: images.dessertChurros,
    title: "desserts"
  }
]

const faqs = [
  {
    answer:
      "Yes. Choose your base, protein, toppings, sauces, and extras to build a bowl, burrito, tacos, or another favorite exactly your way.",
    question: "Can I build my meal exactly how I like it?"
  },
  {
    answer:
      "Moho has locations in Astoria and Bayside, Queens. Both serve fresh Mexican favorites daily from 10:30 AM to 11:30 PM.",
    question: "Where are you located & what are your hours?"
  },
  {
    answer:
      "Build Your Own Bowls and Birria Tacos are guest favorites: one for customization, the other for rich slow-cooked flavor.",
    question: "What are your most popular menu items?"
  },
  {
    answer:
      "Yes. Moho is fully Halal and Zabiha certified.",
    question: "Is your food halal?"
  },
  {
    answer:
      "Yes. Moho offers catering for parties, events, offices, and special occasions through the catering order flow.",
    question: "Do you cater for parties and events?"
  }
]

export default function HomePage() {
  return (
    <PageShell>
      <main className="bg-paper text-ink">
        <section className="moho-hero relative flex min-h-screen items-center justify-center overflow-hidden px-4 pt-24 text-center">
          <Photo alt="A tray of Mexican food with tacos, salads, corn, sauces, and cilantro." className="moho-hero-image absolute inset-0" src={images.hero} />
          <div className="absolute inset-0 bg-black/18" />
          <div className="moho-fade-up relative z-10 mx-auto max-w-6xl py-28">
            <h1 className="text-[clamp(4.2rem,13vw,12rem)] font-black leading-[0.83] tracking-normal text-gold">
              authentic mexican flavors
            </h1>
            <p className="mx-auto mt-8 max-w-3xl text-xl font-semibold leading-8 text-cream sm:text-2xl">
              Your Way, All Day at Moho Mexican Grill
            </p>
            <a className="button button-gold mt-9" href={site.orderUrl}>Order Now</a>
          </div>
        </section>

        <section className="bg-paper px-4 py-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="moho-fade-up text-center">
              <p className="text-sm font-extrabold uppercase tracking-[0.28em] text-tomato">The Menu</p>
              <h2 className="mx-auto mt-5 max-w-4xl text-4xl font-black leading-[1.02] sm:text-6xl">
                MOHO has something to satisfy every palate and dietary need.
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-lg font-medium leading-8 text-ink/68">
                Enjoy our wide selection of customizable bowls, burritos, tacos, birria, sides, and sweets.
              </p>
            </div>

            <div className="mt-14 grid gap-5 md:grid-cols-4">
              {menuCategories.map((item, index) => (
                <Link className="moho-menu-card moho-fade-up" href={item.href} key={item.title}>
                  <Photo alt={item.title} className="absolute inset-0 transition duration-700" src={item.image} />
                  <span>{item.title}</span>
                </Link>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Link className="button button-dark" href="/menu">See Our Full Menu</Link>
            </div>
          </div>
        </section>

        <section className="bg-cream px-4 py-24 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div className="reveal-on-scroll reveal-left lg:sticky lg:top-28">
              <p className="text-sm font-extrabold uppercase tracking-[0.28em] text-tomato">Questions</p>
              <h2 className="mt-5 text-5xl font-black leading-[0.95] sm:text-7xl">
                Frequently Asked Questions
              </h2>
            </div>
            <div className="grid gap-4">
              {faqs.map((faq, index) => (
                <details className="moho-faq moho-fade-up" key={faq.question} open={index === 0}>
                  <summary>{faq.question}</summary>
                  <p>{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-ink px-4 py-28 text-cream sm:px-6 lg:px-8">
          <div className="absolute inset-0 opacity-32">
            <Photo alt="Moho catering spread" src={images.cateringHero} />
          </div>
          <div className="absolute inset-0 bg-ink/62" />
          <div className="moho-fade-up relative z-10 mx-auto max-w-5xl text-center">
            <p className="text-sm font-extrabold uppercase tracking-[0.28em] text-gold">Hosting a Party or Event?</p>
            <h2 className="mt-6 text-5xl font-black leading-[0.95] sm:text-7xl">
              Contact us for all your Catering needs!
            </h2>
            <a className="button button-gold mt-9" href={site.cateringExternalUrl}>Order Catering</a>
          </div>
        </section>
      </main>
    </PageShell>
  )
}
