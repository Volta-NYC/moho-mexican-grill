import { PageShell } from "@/components/page-shell"
import { Photo } from "@/components/photo"
import { SectionHeading } from "@/components/section-heading"
import { catering, images, site } from "@/lib/content"

const eventTypes = ["Office Lunches", "Birthdays", "Meetings", "Game Days", "Family Parties"]
const cateringCards = [
  {
    eyebrow: "Group Orders",
    href: site.cateringExternalUrl,
    image: images.cateringParty,
    title: catering.onSiteLabel
  },
  {
    eyebrow: "Fresh spreads",
    href: "/catering-menu",
    image: images.pasta,
    title: "Tray Menu"
  },
  {
    eyebrow: "Off-site catering",
    href: site.cateringExternalUrl,
    image: images.plate,
    title: catering.offSiteLabel
  }
]

export default function CateringPage() {
  return (
    <PageShell>
      <main className="bg-paper">
        <section className="relative overflow-hidden bg-ink px-4 pb-20 pt-36 text-cream sm:px-6 lg:px-8">
          <div className="moho-green-orb" />
          <div className="absolute inset-0 opacity-28">
            <Photo alt="Moho catering spread" src={images.cateringHero} />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/90 to-ink/35" />
          <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_0.82fr] lg:items-end">
            <div>
              <span className="moho-green-tag mb-7">Fresh group spreads</span>
              <SectionHeading eyebrow="Catering" light title={catering.title} text={catering.paragraphs.slice(0, 2).join(" ")} />
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a className="button button-gold" href={site.cateringExternalUrl}>Order Catering</a>
                <a className="button button-outline-light" href={site.orderUrl}>Start an Order</a>
              </div>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {eventTypes.map((event, index) => (
                <div className={`reveal-on-scroll ${index % 2 === 0 ? "reveal-left" : "reveal-right"} ${index > 1 ? "reveal-delay-1" : ""} border border-cream/14 bg-cream/[0.06] p-5`} key={event}>
                  <p className="font-heading text-3xl font-black">{event}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="reveal-on-scroll reveal-soft px-4 py-24 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1fr] lg:items-center">
            <div className="reveal-on-scroll reveal-left relative">
              <div className="overflow-hidden rounded-[1.5rem] shadow-2xl shadow-ink/18">
                <Photo alt="Moho event table" className="aspect-[4/5]" src={images.cateringParty} />
              </div>
              <div className="absolute -bottom-8 left-6 right-6 bg-olive p-6 text-cream shadow-xl shadow-ink/20">
                <p className="eyebrow text-gold">Group Meals</p>
                <p className="mt-2 font-heading text-3xl font-black leading-tight">Fresh Mexican grill catering for groups of all sizes.</p>
              </div>
            </div>

            <div className="reveal-on-scroll reveal-right pt-10 lg:pt-0">
              <SectionHeading title="Packages, parties, and group orders." text={catering.paragraphs.slice(2).join(" ")} />
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <Feature className="reveal-left" title="Flexible" text="Build catering around tacos, bowls, proteins, sides, toppings, and sauces." />
                <Feature className="reveal-right reveal-delay-1" title="Customizable" text="Scale the spread for office lunches, parties, meetings, or family events." />
                <Feature className="reveal-left reveal-delay-1" title="Planning" text={catering.managerText} />
                <Feature className="reveal-right reveal-delay-2" title="At home" text="Order ahead for pickup or delivery from Moho's online ordering flow." />
              </div>
            </div>
          </div>
        </section>

        <section className="reveal-on-scroll reveal-soft bg-cream px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">
            {cateringCards.map((card, index) => (
              <a className={`catering-card reveal-on-scroll ${index === 0 ? "reveal-left" : index === 1 ? "reveal-soft reveal-delay-1" : "reveal-right reveal-delay-2"}`} href={card.href} key={card.title}>
                <Photo alt={card.title} className="absolute inset-0 transition duration-700" src={card.image} />
                <span>{card.eyebrow}</span>
                <strong>{card.title}</strong>
              </a>
            ))}
          </div>
        </section>
      </main>
    </PageShell>
  )
}

function Feature({ className = "", text, title }: { className?: string; text: string; title: string }) {
  return (
    <article className={`reveal-on-scroll border-l-4 border-tomato bg-cream p-5 shadow-lg shadow-ink/5 ${className}`}>
      <h2 className="font-heading text-2xl font-black">{title}</h2>
      <p className="mt-2 text-sm font-semibold leading-6 text-ink/68">{text}</p>
    </article>
  )
}
