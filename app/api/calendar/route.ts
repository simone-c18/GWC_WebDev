import { NextResponse } from "next/server";

// export async function GET() {
//   try {
//     const API_KEY = process.env.GOOGLE_API_KEY;
//     const CALENDAR_ID = process.env.GOOGLE_CALENDAR_ID;

//     const response = await fetch(
//       `https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events?key=${API_KEY}`
//     );

//     const data = await response.json();

//     return NextResponse.json(data);
//   } catch (error) {
//     return NextResponse.json(
//       { error: "Failed to fetch calendar events" },
//       { status: 500 }
//     );
//   }
// }

const CALENDAR_ID = process.env.GOOGLE_CALENDAR_ID;
const API_KEY = process.env.GOOGLE_CALENDAR_API_KEY;

export async function GET() {
  if (!API_KEY || !CALENDAR_ID) {
    return NextResponse.json(
      { error: "Missing GOOGLE_CALENDAR_API_KEY or GOOGLE_CALENDAR_ID" },
      { status: 500 }
    );
  }

  const now = new Date().toISOString();
  const url = `https://www.googleapis.com/calendar/v3/calendars/${encodeURIComponent(
    CALENDAR_ID
  )}/events?key=${API_KEY}&timeMin=${now}&singleEvents=true&orderBy=startTime&maxResults=20`;

  try {
    const res = await fetch(url, { next: { revalidate: 300 } });
    if (!res.ok) {
      const body = await res.text();
      return NextResponse.json(
        { error: `Google API error: ${res.status}`, details: body },
        { status: res.status }
      );
    }
    const data = await res.json();
    return NextResponse.json(data);
  } catch {
    return NextResponse.json({ error: "Fetch failed" }, { status: 500 });
  }
}