import { PageShell } from "@/components/page-shell"
import { Photo } from "@/components/photo"
import { SectionHeading } from "@/components/section-heading"
import { hours, images, site } from "@/lib/content"

export default function ContactPage() {
  return (
    <PageShell>
      <main className="bg-paper">
        <section className="relative grid min-h-screen overflow-hidden bg-ink pt-20 text-cream lg:grid-cols-[0.95fr_1.05fr]">
          <div className="moho-green-orb" />
          <div className="flex items-center px-4 py-20 sm:px-6 lg:px-12">
            <div className="max-w-2xl">
              <span className="moho-green-tag mb-7">Astoria and Bayside</span>
              <SectionHeading eyebrow="Locations" light title="Find Moho Mexican Grill." text="Moho Mexican Grill has convenient locations in Astoria and Bayside, Queens." />
              <div className="mt-9 grid gap-3 text-lg font-bold text-cream/78">
                <a href={site.emailHref}>{site.email}</a>
                <a href={site.orderUrl}>Order online</a>
              </div>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a className="button button-gold" href={site.orderUrl}>Order Now</a>
                <a className="button button-outline-light" href={site.mapsUrl}>Get Directions</a>
              </div>
            </div>
          </div>
          <div className="min-h-[28rem]">
            <Photo alt="Moho location" src={images.contact} />
          </div>
        </section>

        <section className="px-4 py-24 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1fr]">
            <div>
              <SectionHeading title="Astoria and Bayside." text="Use Moho's ordering link for pickup, delivery, directions, and current location availability." />
              <p className="mt-6 text-lg font-black uppercase tracking-[0.18em] text-tomato">Open Daily</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <article className="bg-cream p-7 shadow-[8px_8px_0_#1f1b16]">
                <h2 className="font-heading text-4xl font-black">Address</h2>
                <p className="mt-5 text-xl font-bold leading-8 text-ink/72">
                  {site.addressLine1}
                  <br />
                  {site.addressLine2}
                </p>
              </article>
              <article className="bg-olive p-7 text-cream shadow-[8px_8px_0_#1f1b16]">
                <h2 className="font-heading text-4xl font-black">Hours</h2>
                <div className="mt-5 space-y-2 text-base font-bold leading-7 text-cream/80">
                  {hours.map((item) => (
                    <p key={item.label}>{item.label}: {item.value}</p>
                  ))}
                </div>
              </article>
            </div>
          </div>
        </section>
      </main>
    </PageShell>
  )
}
