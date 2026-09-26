import { NextResponse } from 'next/server';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api';

export async function GET() {
  try {
    const response = await fetch(`${API_URL}/jobs`, { cache: 'no-store' });
    const result = await response.json();
    return NextResponse.json(result, { status: response.status });
  } catch {
    return NextResponse.json({ message: 'Unable to load roles right now.' }, { status: 502 });
  }
}