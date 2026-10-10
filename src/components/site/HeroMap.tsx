import { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';

function useWide() {
  const query = '(min-width: 1024px)';
  const [wide, setWide] = useState(() => window.matchMedia(query).matches);
  useEffect(() => {
    const mq = window.matchMedia(query);
    const onChange = () => setWide(mq.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);
  return wide;
}

// Equirectangular projection centred on 0°N 0°E. SCALE px per degree in viewBox units.
const SCALE = 6;
const project = (lon: number, lat: number) => [lon * SCALE, -lat * SCALE] as const;

const ACCRA = project(-0.19, 5.6);

// Major trade hubs. Unlabelled on purpose: the routes illustrate reach, they are not a client list.
const HUBS: [number, number][] = [
  [4.5, 51.9], [121.5, 31.2], [55.3, 25.3], [-95.4, 29.8], [72.9, 19.1], [3.4, 6.5],
  [-46.3, -23.9], [31, -29.9], [29, 41], [113.3, 23.1], [-74, 40.7], [-17.4, 14.7],
];

function arc(lon: number, lat: number) {
  const [x0, y0] = ACCRA;
  const [x1, y1] = project(lon, lat);
  const dx = x1 - x0, dy = y1 - y0;
  // Bow every route northwards (towards -y) by a quarter of its length.
  let nx = -dy, ny = dx;
  if (ny > 0) { nx = -nx; ny = -ny; }
  const len = Math.hypot(nx, ny) || 1;
  const bow = Math.hypot(dx, dy) * 0.22;
  const cx = (x0 + x1) / 2 + (nx / len) * bow;
  const cy = (y0 + y1) / 2 + (ny / len) * bow;
  return { d: `M${x0} ${y0} Q${cx.toFixed(1)} ${cy.toFixed(1)} ${x1} ${y1}`, end: [x1, y1] as const };
}

const ROUTES = HUBS.map(([lon, lat]) => arc(lon, lat));

const graticule = [
  ...Array.from({ length: 25 }, (_, i) => -180 + i * 15).map((lon) => `M${lon * SCALE} ${-90 * SCALE}V${90 * SCALE}`),
  ...Array.from({ length: 11 }, (_, i) => -75 + i * 15).map((lat) => `M${-180 * SCALE} ${-lat * SCALE}H${180 * SCALE}`),
].join('');

export function HeroMap() {
  const still = useReducedMotion() ?? false;
  // Desktop: Accra right of the headline. Narrow screens: Accra below it.
  const wide = useWide();
  const viewBox = wide ? '-1050 -520 1650 1000' : '-613 -814 1000 1000';
  const left = wide ? -1030 : -355;
  const t = (delay: number, duration = 1.2) => ({ delay, duration, ease: [0.16, 1, 0.3, 1] as const });
  const from = <T,>(initial: T) => (still ? false : initial);

  return (
    <svg
      viewBox={viewBox}
      preserveAspectRatio="xMidYMid slice"
      className="absolute inset-0 h-full w-full"
      aria-hidden="true"
    >
      <motion.path
        d={graticule}
        stroke="white"
        strokeOpacity={0.1}
        strokeWidth={1}
        fill="none"
        initial={from({ opacity: 0 })}
        animate={{ opacity: 1 }}
        transition={t(0, 1.6)}
      />

      {/* Equator and Prime Meridian */}
      <motion.line
        x1={-1200} y1={0} x2={1200} y2={0}
        stroke="var(--color-gold)" strokeOpacity={0.75} strokeWidth={1.5}
        initial={from({ pathLength: 0 })}
        animate={{ pathLength: 1 }}
        transition={t(0.2, 1.8)}
      />
      <motion.line
        x1={0} y1={-600} x2={0} y2={600}
        stroke="var(--color-gold)" strokeOpacity={0.75} strokeWidth={1.5}
        initial={from({ pathLength: 0 })}
        animate={{ pathLength: 1 }}
        transition={t(0.45, 1.8)}
      />
      <motion.g initial={from({ opacity: 0 })} animate={{ opacity: 1 }} transition={t(1.4, 1)}>
        <text x={left} y={-8} fill="var(--color-gold)" fillOpacity={0.7} fontSize={12} letterSpacing={0.5}>
          Equator 0°
        </text>
        <text x={8} y={wide ? 470 : 40} fill="var(--color-gold)" fillOpacity={0.7} fontSize={12} letterSpacing={0.5}>
          Prime Meridian 0°
        </text>
      </motion.g>

      {/* Routes */}
      {ROUTES.map((r, i) => (
        <g key={r.d}>
          <motion.path
            d={r.d}
            fill="none"
            stroke="white"
            strokeOpacity={0.5}
            strokeWidth={1.2}
            initial={from({ pathLength: 0 })}
            animate={{ pathLength: 1 }}
            transition={t(1.5 + i * 0.09, 1.6)}
          />
          <motion.circle
            cx={r.end[0]} cy={r.end[1]} r={3} fill="white" fillOpacity={0.85}
            initial={from({ opacity: 0 })}
            animate={{ opacity: 1 }}
            transition={t(2.6 + i * 0.09, 0.6)}
          />
          {!still && (
            <circle r={3.2} fill="var(--color-gold)">
              <animateMotion
                path={r.d}
                dur={`${4 + (i % 4) * 0.9}s`}
                begin={`${3 + i * 0.35}s`}
                repeatCount="indefinite"
                keyPoints="0;1"
                keyTimes="0;1"
                calcMode="spline"
                keySplines="0.45 0 0.55 1"
              />
            </circle>
          )}
        </g>
      ))}

      {/* Accra */}
      {!still && (
        <circle cx={ACCRA[0]} cy={ACCRA[1]} r={5} fill="none" stroke="var(--color-gold)" strokeWidth={1.5}>
          <animate attributeName="r" values="5;30" dur="2.6s" begin="1.4s" repeatCount="indefinite" />
          <animate attributeName="stroke-opacity" values="0.8;0" dur="2.6s" begin="1.4s" repeatCount="indefinite" />
        </circle>
      )}
      <motion.circle
        cx={ACCRA[0]} cy={ACCRA[1]} r={5.5} fill="var(--color-gold)"
        initial={from({ opacity: 0 })}
        animate={{ opacity: 1 }}
        transition={t(1.2, 0.5)}
      />
      <motion.g initial={from({ opacity: 0 })} animate={{ opacity: 1 }} transition={t(1.5, 0.8)}>
        <text x={ACCRA[0] + 14} y={ACCRA[1] - 10} fill="white" fontSize={15} fontWeight={600}>
          Accra
        </text>
        <text x={ACCRA[0] + 14} y={ACCRA[1] + 8} fill="white" fillOpacity={0.55} fontSize={12}>
          5.60°N 0.19°W
        </text>
      </motion.g>
    </svg>
  );
}
