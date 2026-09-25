import './globals.css';
import './overrides.css';
import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'VirexaTech | Find work that fits', description: 'Find your next opportunity with VirexaTech.' };
export default function RootLayout({ children }: { children: React.ReactNode }) { return <html lang="en"><body>{children}</body></html>; }
