// Goods and capability themes we pursue across commodity trading, import/export and merchandise supply.
const GOODS = [
  'Cocoa', 'Coffee', 'Grains and cereals', 'Sugar and spices', 'Livestock feed', 'Steel and metals',
  'Building materials', 'Industrial equipment', 'Office equipment', 'Electrical supplies',
  'Chemicals', 'Plastics', 'Textiles', 'Tools and equipment', 'Institutional supplies',
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
    <section aria-label="Goods and supplies we work with" className="group overflow-hidden border-b border-brand-deep/20 bg-gold py-5 text-brand-deep">
      <div className="flex w-max animate-[ticker_45s_linear_infinite] group-hover:[animation-play-state:paused] motion-reduce:animate-none">
        {row(false)}
        {row(true)}
      </div>
    </section>
  );
}
