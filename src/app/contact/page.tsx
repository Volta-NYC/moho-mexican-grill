import { PageShell } from "@/components/page-shell"
import { Photo } from "@/components/photo"
import { images, site } from "@/lib/content"

const locations = [
  {
    address: ["38-05 Bell Blvd", "Bayside, NY 11361"],
    image: images.locationBayside,
    imageAlt: "Moho Mexican Grill Bayside entrance at night.",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=38-05+Bell+Blvd+Bayside+NY+11361",
    name: "Bayside",
    phone: "(718) 709-9695",
    phoneHref: "tel:7187099695"
  },
  {
    address: ["35-06 Ditmars Blvd", "Astoria, NY 11105"],
    image: images.locationAstoria,
    imageAlt: "Moho Mexican Grill Astoria storefront at night.",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=35-06+Ditmars+Blvd+Astoria+NY+11105",
    name: "Astoria",
    phone: "(718) 744-0123",
    phoneHref: "tel:7187440123"
  }
]

export default function ContactPage() {
  return (
    <PageShell>
      <main className="bg-paper text-ink">
        <section className="relative flex min-h-[72vh] items-center justify-center overflow-hidden px-4 pt-24 text-center text-cream">
          <Photo alt="Moho Mexican Grill storefront at night" className="absolute inset-0" src={images.locationHero} />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.18),rgba(0,0,0,0.58)),linear-gradient(180deg,rgba(0,0,0,0.32),rgba(0,0,0,0.5))]" />
          <div className="hero-readable relative z-10 mx-auto max-w-5xl py-24">
            <p className="text-sm font-extrabold uppercase tracking-[0.28em] text-gold">Moho Mexican Grill</p>
            <h1 className="mt-5 text-[clamp(4rem,11vw,10rem)] font-black leading-[0.82]">
              Hours & Locations
            </h1>
          </div>
        </section>

        <section className="px-4 py-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-6 md:grid-cols-2">
              {locations.map((location, index) => (
                <article className={`location-card reveal-on-scroll reveal-lift ${index === 0 ? "reveal-tilt-left" : "reveal-tilt-right reveal-delay-1"}`} key={location.name}>
                  <div className="location-photo">
                    <Photo alt={location.imageAlt} src={location.image} />
                  </div>
                  <div className="location-card-content">
                    <h2>{location.name}</h2>
                    <p className="location-address">
                      {location.address.map((line) => (
                        <span key={line}>{line}</span>
                      ))}
                    </p>
                    <div className="location-row">
                      <span>Hours</span>
                      <strong>Sunday-Monday: 10:30am-11:30pm</strong>
                    </div>
                    <div className="location-row">
                      <span>Contact</span>
                      <a href={location.phoneHref}>{location.phone}</a>
                    </div>
                    <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                      <a className="button button-dark" href={location.mapsUrl}>Get Directions</a>
                      <a className="button button-outline-dark" href={site.orderUrl}>Order Now</a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
    </PageShell>
  )
}
