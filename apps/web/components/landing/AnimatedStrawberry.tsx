'use client';

export function AnimatedStrawberry({ className = '', size = 60, delay = 0 }: { className?: string; size?: number; delay?: number }) {
  return (
    <div className={`inline-block ${className}`} style={{ animationDelay: `${delay}ms` }}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="animate-float"
      >
        {/* Strawberry body */}
        <path
          d="M50 20C35 20 25 30 25 45C25 55 30 70 40 80C45 85 50 90 50 90C50 90 55 85 60 80C70 70 75 55 75 45C75 30 65 20 50 20Z"
          fill="#FF4D6D"
          className="drop-shadow-lg"
        />

        {/* Highlight */}
        <ellipse cx="40" cy="40" rx="8" ry="12" fill="#FF6B8A" opacity="0.6" />

        {/* Seeds */}
        <circle cx="38" cy="45" r="1.5" fill="#C41E3A" />
        <circle cx="45" cy="42" r="1.5" fill="#C41E3A" />
        <circle cx="52" cy="45" r="1.5" fill="#C41E3A" />
        <circle cx="62" cy="45" r="1.5" fill="#C41E3A" />
        <circle cx="42" cy="52" r="1.5" fill="#C41E3A" />
        <circle cx="48" cy="50" r="1.5" fill="#C41E3A" />
        <circle cx="55" cy="52" r="1.5" fill="#C41E3A" />
        <circle cx="58" cy="55" r="1.5" fill="#C41E3A" />
        <circle cx="45" cy="58" r="1.5" fill="#C41E3A" />
        <circle cx="52" cy="60" r="1.5" fill="#C41E3A" />
        <circle cx="48" cy="65" r="1.5" fill="#C41E3A" />

        {/* Leaves */}
        <g>
          <path
            d="M45 20C45 20 42 15 40 12C38 9 35 8 35 8"
            stroke="#4CAF50"
            strokeWidth="2.5"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M50 18C50 18 50 13 50 10C50 7 50 5 50 5"
            stroke="#4CAF50"
            strokeWidth="2.5"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M55 20C55 20 58 15 60 12C62 9 65 8 65 8"
            stroke="#4CAF50"
            strokeWidth="2.5"
            strokeLinecap="round"
            fill="none"
          />

          {/* Leaf shapes */}
          <path
            d="M35 8C35 8 32 10 30 15C32 13 35 12 35 8Z"
            fill="#66BB6A"
          />
          <path
            d="M50 5C50 5 47 7 45 12C47 10 50 9 50 5Z"
            fill="#66BB6A"
          />
          <path
            d="M65 8C65 8 68 10 70 15C68 13 65 12 65 8Z"
            fill="#66BB6A"
          />
        </g>
      </svg>
    </div>
  );
}

export function StrawberryPattern() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
      <AnimatedStrawberry className="absolute top-10 left-10" size={40} delay={0} />
      <AnimatedStrawberry className="absolute top-20 right-20" size={50} delay={500} />
      <AnimatedStrawberry className="absolute bottom-20 left-1/4" size={35} delay={1000} />
      <AnimatedStrawberry className="absolute top-1/3 right-1/3" size={45} delay={1500} />
      <AnimatedStrawberry className="absolute bottom-1/4 right-10" size={40} delay={2000} />
      <AnimatedStrawberry className="absolute top-1/2 left-10" size={30} delay={2500} />
    </div>
  );
}
