import { NextResponse } from 'next/server';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api';

export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    const response = await fetch(`${API_URL}/applications`, {
      method: 'POST',
      headers: {
        Authorization: request.headers.get('authorization') || '',
      },
      body: formData,
    });

    const result = await response.json();

    return NextResponse.json(result, { status: response.status });
  } catch {
    return NextResponse.json(
      { message: 'Unable to submit your application right now.' },
      { status: 502 }
    );
  }
}