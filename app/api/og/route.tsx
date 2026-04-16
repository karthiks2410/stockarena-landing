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
          background: "linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #0a0a0a 100%)",
          position: "relative",
        }}
      >
        {/* Background glow effects */}
        <div
          style={{
            position: "absolute",
            top: "-100px",
            right: "-100px",
            width: "400px",
            height: "400px",
            background: "radial-gradient(circle, rgba(16,185,129,0.3) 0%, transparent 70%)",
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
            background: "radial-gradient(circle, rgba(6,182,212,0.3) 0%, transparent 70%)",
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
          {/* Logo/Icon */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "20px",
            }}
          >
            <span style={{ fontSize: "80px" }}>📈</span>
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
            Stock Arena
          </h1>

          {/* Tagline */}
          <p
            style={{
              fontSize: "32px",
              color: "#9ca3af",
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
                color: "#10b981",
                fontSize: "24px",
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
                color: "#06b6d4",
                fontSize: "24px",
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
                color: "#8b5cf6",
                fontSize: "24px",
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
            color: "#6b7280",
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
