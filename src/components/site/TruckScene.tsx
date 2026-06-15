/**
 * Signature hero scene — MGT container truck on a midnight highway.
 * Pure SVG + CSS animation: 0 images, 0 JS, ~6 KB. The skyline and road
 * move; the truck (brand red container, brand blue cab) drives forever.
 */
export function TruckScene() {
  const stars: Array<[number, number, number, number]> = [
    [90, 60, 1.6, 0], [200, 110, 1.2, 0.6], [330, 45, 1.8, 1.2], [430, 130, 1.1, 0.3],
    [560, 70, 1.5, 1.8], [660, 35, 1.2, 0.9], [780, 100, 1.7, 2.2], [880, 55, 1.2, 0.2],
    [990, 140, 1.4, 1.5], [1100, 55, 1.7, 0.8], [1260, 150, 1.3, 2.0], [1330, 70, 1.6, 1.1],
    [1400, 120, 1.2, 0.4], [150, 160, 1.3, 1.7],
  ];

  return (
    <svg
      viewBox="0 0 1440 430"
      preserveAspectRatio="xMidYMax slice"
      className="block h-[230px] w-full sm:h-[300px] lg:h-[360px]"
      role="img"
      aria-label="An MGT Packers and Movers container truck driving along a night highway past the city skyline"
    >
      <defs>
        <linearGradient id="redGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#e8444b" />
          <stop offset="1" stopColor="#b01f27" />
        </linearGradient>
        <linearGradient id="blueGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#3a49b0" />
          <stop offset="1" stopColor="#232f7d" />
        </linearGradient>
        <linearGradient id="glassGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#cfe2ff" />
          <stop offset="1" stopColor="#8fb3ee" />
        </linearGradient>
        <linearGradient id="beamGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#ffc42e" stopOpacity="0.5" />
          <stop offset="1" stopColor="#ffc42e" stopOpacity="0" />
        </linearGradient>
        <radialGradient id="moonGlow">
          <stop offset="0" stopColor="#ffdf9e" stopOpacity="0.45" />
          <stop offset="1" stopColor="#ffdf9e" stopOpacity="0" />
        </radialGradient>

        {/* far skyline strip (repeats seamlessly) */}
        <g id="cityFar" fill="#101a49">
          <rect x="0" y="250" width="70" height="100" /><rect x="80" y="270" width="50" height="80" />
          <rect x="140" y="225" width="65" height="125" /><rect x="215" y="280" width="40" height="70" />
          <rect x="265" y="240" width="80" height="110" /><rect x="355" y="290" width="45" height="60" />
          <rect x="410" y="235" width="55" height="115" /><rect x="475" y="265" width="70" height="85" />
          <rect x="555" y="215" width="50" height="135" /><rect x="615" y="275" width="60" height="75" />
          <rect x="685" y="245" width="75" height="105" /><rect x="770" y="285" width="40" height="65" />
          <rect x="820" y="230" width="60" height="120" /><rect x="890" y="265" width="70" height="85" />
          <rect x="970" y="240" width="55" height="110" /><rect x="1035" y="285" width="50" height="65" />
          <rect x="1095" y="225" width="65" height="125" /><rect x="1170" y="270" width="55" height="80" />
          <rect x="1235" y="245" width="70" height="105" /><rect x="1315" y="280" width="45" height="70" />
          <rect x="1370" y="250" width="70" height="100" />
        </g>

        {/* near skyline strip with lit windows */}
        <g id="cityNear">
          <g fill="#0d1640">
            <rect x="30" y="190" width="90" height="160" /><rect x="160" y="240" width="70" height="110" />
            <rect x="350" y="160" width="100" height="190" /><rect x="560" y="220" width="80" height="130" />
            <rect x="700" y="180" width="110" height="170" /><rect x="900" y="250" width="70" height="100" />
            <rect x="1010" y="170" width="90" height="180" /><rect x="1180" y="230" width="100" height="120" />
            <rect x="1330" y="190" width="80" height="160" />
          </g>
          <rect x="398" y="130" width="3" height="30" fill="#0d1640" />
          <circle cx="399.5" cy="127" r="3" fill="#d92b34" className="scene-lamp" />
          <g fill="#ffc42e" opacity="0.5">
            <rect x="50" y="215" width="6" height="9" /><rect x="78" y="250" width="6" height="9" />
            <rect x="372" y="190" width="6" height="9" /><rect x="404" y="230" width="6" height="9" />
            <rect x="425" y="280" width="6" height="9" /><rect x="586" y="245" width="6" height="9" />
            <rect x="728" y="210" width="6" height="9" /><rect x="762" y="260" width="6" height="9" />
            <rect x="1036" y="200" width="6" height="9" /><rect x="1066" y="255" width="6" height="9" />
            <rect x="1210" y="255" width="6" height="9" /><rect x="1352" y="220" width="6" height="9" />
          </g>
          <g fill="#e8444b" opacity="0.45">
            <rect x="106" y="235" width="6" height="9" /><rect x="940" y="275" width="6" height="9" />
          </g>
        </g>
      </defs>

      {/* night sky */}
      <rect width="1440" height="430" fill="#060d28" />

      {/* moon + stars */}
      <circle cx="870" cy="110" r="80" fill="url(#moonGlow)" />
      <circle cx="870" cy="120" r="26" fill="#ffe9c0" opacity="0.9" />
      {stars.map(([x, y, r, d], i) => (
        <circle
          key={i}
          cx={x}
          cy={y}
          r={r}
          fill="#fff"
          className="scene-star"
          style={{ animationDelay: `${d}s` }}
        />
      ))}

      {/* parallax skylines */}
      <g className="scene-far">
        <use href="#cityFar" />
        <use href="#cityFar" x="1440" />
      </g>
      <g className="scene-near">
        <use href="#cityNear" />
        <use href="#cityNear" x="1440" />
      </g>

      {/* road */}
      <rect x="0" y="350" width="1440" height="80" fill="#070d26" />
      <line x1="0" y1="350.5" x2="1440" y2="350.5" stroke="#2b3a80" strokeWidth="1" opacity="0.6" />
      <line
        x1="0" y1="392" x2="1440" y2="392"
        stroke="#3a49b0" strokeWidth="5" strokeDasharray="58 58"
        className="scene-dash" opacity="0.85"
      />

      {/* the MGT truck */}
      <g className="truck-enter">
        <g transform="translate(450 0)">
          <ellipse cx="230" cy="356" rx="252" ry="9" fill="#000" opacity="0.32" />

          <g className="truck-bob">
            {/* chassis */}
            <rect x="4" y="316" width="452" height="12" rx="3" fill="#070d26" />
            <rect x="20" y="328" width="60" height="10" rx="4" fill="#101a49" />

            {/* container — brand red, MGT livery */}
            <rect x="0" y="156" width="340" height="160" rx="12" fill="url(#redGrad)" />
            <rect x="0" y="156" width="340" height="24" rx="12" fill="#fff" opacity="0.12" />
            <g stroke="#000" opacity="0.08" strokeWidth="3">
              <line x1="26" y1="170" x2="26" y2="306" /><line x1="58" y1="170" x2="58" y2="306" />
              <line x1="282" y1="170" x2="282" y2="306" /><line x1="314" y1="170" x2="314" y2="306" />
            </g>
            <line x1="8" y1="164" x2="8" y2="310" stroke="#7d161c" strokeWidth="3" />
            <text
              x="86" y="240" fill="#fff" fontSize="56" fontWeight="800"
              fontFamily="var(--font-display)" letterSpacing="2"
            >
              MGT
            </text>
            <text
              x="88" y="266" fill="#ffd6d8" fontSize="13" fontWeight="700" letterSpacing="5"
              fontFamily="var(--font-sans)"
            >
              PACKERS &amp; MOVERS
            </text>

            {/* exhaust stack */}
            <rect x="341" y="182" width="6" height="36" rx="2" fill="#1a2350" />

            {/* cab — brand blue */}
            <path
              d="M348 316 L348 216 Q348 198 366 196 L412 192 Q428 192 434 206 L452 248 L456 316 Z"
              fill="url(#blueGrad)"
            />
            <path d="M366 210 L408 205 Q418 205 422 214 L432 242 L370 246 Z" fill="url(#glassGrad)" />
            <line x1="376" y1="208" x2="412" y2="240" stroke="#fff" strokeWidth="3" opacity="0.35" />
            <line x1="392" y1="246" x2="392" y2="312" stroke="#1a2566" strokeWidth="2" />
            <rect x="398" y="262" width="12" height="3.5" rx="1.5" fill="#cfd6f6" />
            <rect x="436" y="226" width="10" height="16" rx="2" fill="#1a2566" />
            <rect x="444" y="306" width="16" height="12" rx="3" fill="#070d26" />
            <circle cx="450" cy="296" r="5" fill="#ffc42e" className="scene-lamp" />
            <polygon points="454,290 588,260 588,328 454,306" fill="url(#beamGrad)" className="scene-beam" />

            {/* exhaust puffs */}
            {[0, 0.9, 1.8].map((d) => (
              <circle
                key={d}
                cx="344" cy="174" r="8" fill="#aab4e6"
                className="scene-puff"
                style={{ animationDelay: `${d}s` }}
              />
            ))}
          </g>

          {/* wheels (outside the bob — suspension effect) */}
          {[60, 140, 425].map((cx) => (
            <g key={cx}>
              <circle cx={cx} cy="330" r="22" fill="#0a0f2e" stroke="#2b3a80" strokeWidth="3" />
              <circle cx={cx} cy="330" r="12" fill="#16225c" />
              <g className="wheel-spin" stroke="#97a6e8" strokeWidth="3" strokeLinecap="round">
                <line x1={cx - 10} y1="330" x2={cx + 10} y2="330" />
                <line x1={cx} y1="320" x2={cx} y2="340" />
                <line x1={cx - 7} y1="323" x2={cx + 7} y2="337" />
                <line x1={cx - 7} y1="337" x2={cx + 7} y2="323" />
              </g>
              <circle cx={cx} cy="330" r="4" fill="#d92b34" />
            </g>
          ))}
        </g>
      </g>
    </svg>
  );
}
