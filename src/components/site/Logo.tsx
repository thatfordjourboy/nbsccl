import { Link } from 'react-router-dom';

/** The client's lockup, keyed out of its original plum background (see public/logo.png). Only use on dark brand surfaces. */
export function Logo({ onClick, className = 'h-10 sm:h-11' }: { onClick?: () => void; className?: string }) {
  return (
    <Link to="/" onClick={onClick} className="flex shrink-0 items-center" aria-label="NB Sebastian Commodities Company Limited, home">
      <img src="/logo.png" alt="" width={939} height={238} className={`w-auto ${className}`} />
    </Link>
  );
}
