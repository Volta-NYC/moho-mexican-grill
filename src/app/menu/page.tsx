import { PageShell } from "@/components/page-shell"
import { Photo } from "@/components/photo"
import { images, site } from "@/lib/content"

const digitalMenuUrl = "/s/Moho-Paper-Menu.pdf"

const buildItems = [
  { image: images.buildNachos, title: "Bowls & Nachos" },
  { image: images.buildBurrito, title: "Burritos" },
  { image: images.quesadilla, title: "Quesadillas" },
  { image: images.tacos, title: "Tacos" },
  { image: images.loadedNachos, title: "Loaded Nachos" }
]

const birriaItems = [
  { image: images.birriaTacos, title: "Birria Tacos" },
  { image: images.birriaPie, title: "Birria Pies" }
]

const sideItems = [
  { image: images.sideFish, title: "Crispy Sides" },
  { image: images.chipsBag, title: "Chips" },
  { image: images.chipsGuac, title: "Chips & Guac" }
]

const dessertItems = [
  { image: images.dessertChurros, title: "Churros" },
  { image: images.dessertXangos, title: "Xangos" }
]

const drinkItems = [
  { image: images.cokeBottle, title: "Coca-Cola" },
  { image: images.jarritos, title: "Jarritos" },
  { image: images.sprite, title: "Sprite" },
  { image: images.water, title: "Water" }
]

const menuBoards = [
  { image: images.menuBoardMain, title: "Entrees menu" },
  { image: images.menuBoardBirria, title: "Birria menu" },
  { image: images.menuBoardSides, title: "Sides, extras, and drinks" }
]

export default function MenuPage() {
  return (
    <PageShell>
      <main className="bg-paper text-ink">
        <section className="relative flex min-h-[78vh] items-center justify-center overflow-hidden px-4 pt-24 text-center">
          <Photo alt="Assorted Moho Mexican Grill dishes on a beige background." className="absolute inset-0" src={images.menuBanner} />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.18),rgba(0,0,0,0.5)),linear-gradient(180deg,rgba(0,0,0,0.22),rgba(0,0,0,0.44))]" />
          <div className="hero-readable relative z-10 mx-auto max-w-5xl py-24">
            <h1 className="text-[clamp(4rem,12vw,11rem)] font-black leading-[0.82] text-cream">
              OUR MENU
            </h1>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a className="button button-gold" href={digitalMenuUrl}>Digital Menu</a>
              <a className="button button-outline-light" href={site.orderUrl}>Order Now</a>
            </div>
          </div>
        </section>

        <MenuGallery eyebrow="Build your own" title="Choose your base, protein, toppings, sauces, and extras." items={buildItems} />
        <MenuGallery dark eyebrow="Birria your way" title="Slow-cooked flavor, melty cheese, and rich dipping broth." items={birriaItems} />
        <MenuGallery eyebrow="Side orders" title="Round out the meal with crispy sides, chips, and guac." items={sideItems} />
        <MenuGallery eyebrow="Sweeten' up the meal" title="Complete your order with desserts that hit the same comfort-food note." items={dessertItems} />
        <MenuGallery dark eyebrow="Quench your thirst" title="Cold bottles, sodas, and water for the full Moho order." items={drinkItems} />

        <section className="bg-paper px-4 py-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl text-center">
            <p className="text-sm font-extrabold uppercase tracking-[0.28em] text-tomato">Digital Menu</p>
            <h2 className="mx-auto mt-5 max-w-4xl text-5xl font-black leading-[0.95] sm:text-7xl">
              Entrees, birria, sides, extras, and drinks.
            </h2>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {menuBoards.map((board) => (
                <a className="menu-board-card" href={digitalMenuUrl} key={board.title}>
                  <Photo alt={board.title} src={board.image} />
                </a>
              ))}
            </div>
            <div className="mt-10">
              <a className="button button-dark" href={digitalMenuUrl}>Open Digital Menu</a>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-ink px-4 py-24 text-cream sm:px-6 lg:px-8">
          <div className="absolute inset-0 opacity-24">
            <Photo alt="Moho catering chips" src={images.cateringChips} />
          </div>
          <div className="relative z-10 mx-auto max-w-5xl text-center">
            <p className="text-sm font-extrabold uppercase tracking-[0.28em] text-gold">Hosting a party?</p>
            <h2 className="mt-5 text-5xl font-black leading-[0.95] sm:text-7xl">
              Bring Moho to the table.
            </h2>
            <a className="button button-gold mt-8" href={site.cateringExternalUrl}>Order Catering</a>
          </div>
        </section>
      </main>
    </PageShell>
  )
}

function MenuGallery({
  dark = false,
  eyebrow,
  items,
  title
}: {
  dark?: boolean
  eyebrow: string
  items: { image: string; title: string }[]
  title: string
}) {
  return (
    <section className={`${dark ? "bg-ink text-cream" : "bg-paper text-ink"} px-4 py-24 sm:px-6 lg:px-8`}>
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <p className={`text-sm font-extrabold uppercase tracking-[0.28em] ${dark ? "text-gold" : "text-tomato"}`}>{eyebrow}</p>
          <h2 className="mx-auto mt-5 max-w-4xl text-5xl font-black leading-[0.95] sm:text-7xl">{title}</h2>
        </div>
        <div className={`mt-12 grid gap-5 ${items.length === 2 ? "md:grid-cols-2" : "md:grid-cols-3 lg:grid-cols-5"}`}>
          {items.map((item, index) => (
            <article className={`live-menu-card moho-fade-up ${dark ? "live-menu-card-dark" : ""}`} key={item.title} style={{ animationDelay: `${index * 80}ms` }}>
              <Photo alt={item.title} src={item.image} />
              <h3>{item.title}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
