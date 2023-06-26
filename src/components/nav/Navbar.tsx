import * as React from 'react';

interface NavbarProps {
  isHome: boolean;
}
export default function Navbar({ isHome }: NavbarProps) {
  return <div>{isHome ? <div>Home</div> : <div>Not Home</div>}</div>;
}
