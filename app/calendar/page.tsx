// "use client";

// import { useEffect, useState } from "react";
// import Script from 'next/script'

// export default function CalendarPage() {

  // return (
  //   <div className=" min-h-screen py-16 px-4 sm:px-6 lg:px-8 pt-32">
  //     <div className="max-w-6xl mx-auto">

  //       {/* header */}
  //       <div className="text-center mb-16">
  //         <h1 className="text-4xl md:text-5xl font-bold text-gwc-darkblue mb-4 mt-8 text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);">
  //           monthly calendar
  //         </h1>
  //       </div>

  //       {/* calendar */}
  //       <div style={{ display: 'flex', justifyContent: 'center', width: '100%', marginBottom: '10%' }}>
  //         <iframe
  //           src="https://calendar.google.com/calendar/embed?height=500&wkst=1&ctz=America%2FNew_York&title=Girls%20Who%20Code%20Event%20Calendar%20%E2%8B%86%E2%80%A7%C2%B0%F0%93%8F%B2%D6%BC%F0%9D%84%A2&src=Z3djdWNmZGV2QGdtYWlsLmNvbQ&src=ZDA1YWI3MTM3MTlkZmQzZWE2MzBlOTUzZDgxM2U2ZTY0ODdkZmNlYjI1ZjRlYTgxOWE1ZmJhNTE5ODZlNjA5YkBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=ZW4udXNhI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&color=%23b39ddb&color=%23039be5&color=%23b39ddb"
  //           style={{ border: 0, width: '100%', maxWidth: '800px' }}
  //           height="600"
  //         />
  //       </div>
      
  //       {/* instagram post */}
  //       <Script src="https://www.instagram.com/embed.js" strategy="lazyOnload" />
  //       <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
  //         <blockquote
  //           className="instagram-media"
  //           data-instgrm-permalink="https://www.instagram.com/p/DXHOzcBDozD/?utm_source=ig_embed&amp;utm_campaign=loading"
  //           data-instgrm-version="14"
  //           style={{ maxWidth: '500px', width: '100%' }}
  //         />
  //       </div>

  //     </div>
  //   </div>
  // );
// }

"use client";

import { useEffect, useState } from "react";
import Script from "next/script";

interface CalendarEvent {
  id: string;
  summary?: string;
  start?: { dateTime?: string; date?: string };
}

export default function CalendarPage() {
  const [events, setEvents] = useState<CalendarEvent[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/calendar")
      .then((res) => {
        if (!res.ok) throw new Error(`API returned ${res.status}`);
        return res.json();
      })
      .then((data) => setEvents(data.items || []))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 pt-32">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1
            className="text-4xl md:text-5xl font-bold text-gwc-darkblue mb-4 mt-8"
            style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
          >
            monthly calendar
          </h1>
        </div>

        {/* dynamic event list */}
        <div className="mb-16">
          {loading && <p className="text-center">Loading events...</p>}
          {error && <p className="text-center text-red-500">Error: {error}</p>}
          {!loading && !error && events.length === 0 && (
            <p className="text-center">No events found.</p>
          )}
          {!loading && !error && events.length > 0 && (
            <ul className="max-w-2xl mx-auto space-y-2">
              {events.map((event) => (
                <li key={event.id} className="border-b pb-2">
                  <span className="font-semibold">{event.summary}</span>
                  {" – "}
                  {event.start?.dateTime
                    ? new Date(event.start.dateTime).toLocaleString()
                    : event.start?.date}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* instagram post */}
        <Script src="https://www.instagram.com/embed.js" strategy="lazyOnload" />
        <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
          <blockquote
            className="instagram-media"
            data-instgrm-permalink="https://www.instagram.com/p/DXHOzcBDozD/?utm_source=ig_embed&utm_campaign=loading"
            data-instgrm-version="14"
            style={{ maxWidth: "500px", width: "100%" }}
          />
        </div>
      </div>
    </div>
  );
}