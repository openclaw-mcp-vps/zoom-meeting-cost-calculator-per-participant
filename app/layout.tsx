import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MeetingCost — Calculate the True Cost of Zoom Meetings",
  description: "Integrate with Google Calendar and Zoom to see real-time meeting costs based on participant salaries. Stop wasting money on unnecessary meetings."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="55bfc340-6902-49d3-b232-af0a67d4bd40"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
