import React, { useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Header from './Header';

export default function Layoutcheck() {

 const pathname = usePathname();
  const router = useRouter();

  const isLoginPage = pathname === '/login';
  
  // Redirect to the homepage if the current route is /pages/Layout
  useEffect(() => {
    if (pathname === '/Layout') {
      router.push('/');
    }
  }, [pathname, router]);
  return       !isLoginPage && <Header />

}
