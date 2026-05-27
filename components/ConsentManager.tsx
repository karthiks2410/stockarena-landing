"use client";

import {
  ConsentBanner,
  ConsentDialog,
  ConsentDialogTrigger,
  ConsentManagerProvider,
} from "@c15t/react";
import type { ReactNode } from "react";

const GA_MEASUREMENT_ID = "G-Q3G4SDGV4X";

export function ConsentManager({ children }: { children: ReactNode }) {
  return (
    <ConsentManagerProvider
      options={{
        mode: "offline",
        consentCategories: ["necessary", "measurement", "marketing"],
        scripts: [
          {
            id: "google-analytics-loader",
            src: `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`,
            category: "measurement",
            async: true,
          },
          {
            id: "google-analytics-init",
            textContent: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_MEASUREMENT_ID}');
            `,
            category: "measurement",
          },
        ],
      }}
    >
      <ConsentBanner />
      <ConsentDialog />
      <ConsentDialogTrigger />
      {children}
    </ConsentManagerProvider>
  );
}
