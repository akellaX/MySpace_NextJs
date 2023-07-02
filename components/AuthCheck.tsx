'use client';

import { useSession } from 'next-auth/react';
import React from 'react';

export default function AuthCheck({ children }: { children: React.ReactNode }) {
  const { data: session, status } = useSession();

  console.log('AuthCheck', { session, status });
  if (status === 'authenticated') {
    return <>{ children }</>;
  }
  return null;
}
