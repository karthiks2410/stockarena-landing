"use client";

interface LogoProps {
  size?: number;
  showText?: boolean;
  variant?: "light" | "dark" | "auto";
}

export default function Logo({
  size = 40,
  showText = true,
  variant = "auto",
}: LogoProps) {
  // Determine text colors based on variant
  const getTextColors = () => {
    switch (variant) {
      case "light":
        // For light backgrounds, use darker versions of the brand colors
        return {
          stocks: "#059669", // emerald-600
          arena: "#0891b2", // cyan-600
        };
      case "dark":
        // For dark backgrounds, use lighter/brighter colors
        return {
          stocks: "#10b981", // emerald-500
          arena: "#06b6d4", // cyan-500
        };
      case "auto":
      default:
        // Auto uses CSS that works on both (via currentColor or specific dark/light classes)
        return {
          stocks: "#10b981",
          arena: "#06b6d4",
        };
    }
  };

  const textColors = getTextColors();

  // Generate unique gradient IDs to avoid conflicts when multiple logos are rendered
  const gradientId = `logo-gradient-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <div className="flex items-center gap-2">
      {/* Logo Icon */}
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        aria-label="StocksArena Logo"
      >
        <defs>
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#10b981" />
            <stop offset="50%" stopColor="#06b6d4" />
            <stop offset="100%" stopColor="#8b5cf6" />
          </linearGradient>
        </defs>

        {/* Outer arena ring */}
        <circle
          cx="50"
          cy="50"
          r="45"
          stroke={`url(#${gradientId})`}
          strokeWidth="4"
          fill="none"
        />

        {/* Inner arena ring (subtle) */}
        <circle
          cx="50"
          cy="50"
          r="35"
          stroke="#10b981"
          strokeWidth="2"
          fill="none"
          opacity="0.3"
        />

        {/* Rising bars - representing stock chart going up */}
        <rect x="25" y="55" width="10" height="20" rx="2" fill="#10b981" />
        <rect x="38" y="45" width="10" height="30" rx="2" fill="#06b6d4" />
        <rect x="51" y="35" width="10" height="40" rx="2" fill="#8b5cf6" />
        <rect
          x="64"
          y="25"
          width="10"
          height="50"
          rx="2"
          fill={`url(#${gradientId})`}
        />

        {/* Crown/chevron on top - winner theme */}
        <path
          d="M45 20 L50 10 L55 20 M47 15 L50 10 L53 15"
          stroke="#fbbf24"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />
      </svg>

      {/* Text wordmark */}
      {showText && (
        <span
          className={`font-bold ${
            size >= 40 ? "text-xl" : size >= 32 ? "text-lg" : "text-base"
          }`}
        >
          <span
            style={{ color: textColors.stocks }}
            className={
              variant === "auto"
                ? "text-emerald-500 dark:text-emerald-400"
                : undefined
            }
          >
            Stocks
          </span>
          <span
            style={variant !== "auto" ? { color: textColors.arena } : undefined}
            className={
              variant === "auto"
                ? "text-cyan-600 dark:text-cyan-400"
                : undefined
            }
          >
            Arena
          </span>
        </span>
      )}
    </div>
  );
}
