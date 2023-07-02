'use client';

import React from 'react';
import { signIn, signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import Image from 'next/image';

export function SignInButton() {
  const { data: session, status } = useSession();
  console.log('SignInButton', { session, status });
  if (status === 'loading') {
    return (
      <button disabled>Loading...</button>
    );
  }
  if (status === 'authenticated') {
    return (
      <Link href="/dashboard">
        <Image
          src={session.user?.image ?? '/mememan.webp'}
          width={32}
          height={32}
          alt={session.user?.name ?? 'User'}
        />
      </Link>
    );
  }
  return (
    <button onClick={() => signIn()}>Sign In</button>
  );
}

export function SignOutButton() {
  return (
    <button onClick={() => signOut()}>Sign Out</button>
  );
}
