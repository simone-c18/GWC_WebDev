import { NextResponse } from "next/server";

export async function GET() {
  try {
    const API_KEY = process.env.GOOGLE_API_KEY;
    const CALENDAR_ID = process.env.GOOGLE_CALENDAR_ID;

    const response = await fetch(
      `https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events?key=${API_KEY}`
    );

    const data = await response.json();

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch calendar events" },
      { status: 500 }
    );
  }
}