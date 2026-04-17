import { ImageResponse } from "@vercel/og";

export const runtime = "edge";

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #ffffff 0%, #f0fdf4 50%, #ecfeff 100%)",
          position: "relative",
        }}
      >
        {/* Background glow effects - softer for light theme */}
        <div
          style={{
            position: "absolute",
            top: "-100px",
            right: "-100px",
            width: "400px",
            height: "400px",
            background: "radial-gradient(circle, rgba(16,185,129,0.15) 0%, transparent 70%)",
            borderRadius: "50%",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-100px",
            left: "-100px",
            width: "400px",
            height: "400px",
            background: "radial-gradient(circle, rgba(6,182,212,0.15) 0%, transparent 70%)",
            borderRadius: "50%",
          }}
        />

        {/* Main content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "40px",
          }}
        >
          {/* Logo - Arena with rising bars */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "20px",
            }}
          >
            <svg
              width="100"
              height="100"
              viewBox="0 0 100 100"
              fill="none"
            >
              {/* Outer arena ring */}
              <circle
                cx="50"
                cy="50"
                r="45"
                stroke="url(#ogGradient)"
                strokeWidth="4"
                fill="none"
              />
              {/* Inner arena ring */}
              <circle
                cx="50"
                cy="50"
                r="35"
                stroke="#10b981"
                strokeWidth="2"
                fill="none"
                opacity="0.3"
              />
              {/* Rising bars */}
              <rect x="25" y="55" width="10" height="20" rx="2" fill="#10b981" />
              <rect x="38" y="45" width="10" height="30" rx="2" fill="#06b6d4" />
              <rect x="51" y="35" width="10" height="40" rx="2" fill="#8b5cf6" />
              <rect x="64" y="25" width="10" height="50" rx="2" fill="url(#ogGradient)" />
              {/* Crown */}
              <path
                d="M45 20 L50 10 L55 20 M47 15 L50 10 L53 15"
                stroke="#fbbf24"
                strokeWidth="2"
                strokeLinecap="round"
                fill="none"
              />
              <defs>
                <linearGradient id="ogGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#10b981" />
                  <stop offset="50%" stopColor="#06b6d4" />
                  <stop offset="100%" stopColor="#8b5cf6" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Title */}
          <h1
            style={{
              fontSize: "72px",
              fontWeight: "bold",
              background: "linear-gradient(90deg, #10b981 0%, #06b6d4 50%, #8b5cf6 100%)",
              backgroundClip: "text",
              color: "transparent",
              margin: "0 0 20px 0",
              textAlign: "center",
            }}
          >
            Stocks Arena
          </h1>

          {/* Tagline */}
          <p
            style={{
              fontSize: "32px",
              color: "#475569",
              margin: "0 0 30px 0",
              textAlign: "center",
            }}
          >
            India&apos;s First Stock Market Fantasy Game
          </p>

          {/* Features */}
          <div
            style={{
              display: "flex",
              gap: "40px",
              marginTop: "20px",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                color: "#059669",
                fontSize: "24px",
                fontWeight: "600",
              }}
            >
              <span>📊</span>
              <span>Real NSE/BSE Prices</span>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                color: "#0891b2",
                fontSize: "24px",
                fontWeight: "600",
              }}
            >
              <span>🏆</span>
              <span>Compete & Win</span>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                color: "#7c3aed",
                fontSize: "24px",
                fontWeight: "600",
              }}
            >
              <span>🆓</span>
              <span>Free to Play</span>
            </div>
          </div>
        </div>

        {/* Domain */}
        <div
          style={{
            position: "absolute",
            bottom: "30px",
            fontSize: "24px",
            color: "#64748b",
            fontWeight: "500",
          }}
        >
          stocksarena.net
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
