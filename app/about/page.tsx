import { Metadata } from 'next';
import React from 'react';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'MySpace App',
  description: 'Remember MySpace?',
};

export default function About(): React.ReactNode {
  return (
    <main>
      <h1>About</h1>
      <p>We are social media company</p>
    </main>
  );
}
