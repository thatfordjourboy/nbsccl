// Goods we trade, from the Commodities and Merchandise pages. Pure CSS marquee; pauses on hover and for reduced motion.
const GOODS = [
  'Cocoa', 'Coffee', 'Grains and cereals', 'Sugar and spices', 'Livestock feed', 'Gold', 'Steel and metals',
  'Crude oil', 'Natural gas', 'Chemicals', 'Plastics', 'Textiles', 'Tools and equipment', 'Industrial supplies',
];

export function Ticker() {
  const row = (hidden: boolean) => (
    <ul className="flex shrink-0 items-center gap-10 pr-10" aria-hidden={hidden || undefined}>
      {GOODS.map((g) => (
        <li key={g} className="flex items-center gap-10 whitespace-nowrap">
          <span className="font-heading text-lg sm:text-xl">{g}</span>
          <span className="h-2 w-2 rotate-45 bg-brand" aria-hidden="true" />
        </li>
      ))}
    </ul>
  );
  return (
    <section aria-label="Goods we trade" className="group overflow-hidden border-b border-brand-deep/20 bg-gold py-5 text-brand-deep">
      <div className="flex w-max animate-[ticker_45s_linear_infinite] group-hover:[animation-play-state:paused] motion-reduce:animate-none">
        {row(false)}
        {row(true)}
      </div>
    </section>
  );
}
