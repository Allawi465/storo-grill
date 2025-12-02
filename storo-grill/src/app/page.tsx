
'use client';
import { useEffect, useState } from 'react';
import Loading from './components/loader/loading';
import MenuBtns from './components/meny';
import Hero from './components/hero';
import Gallery from './components/galleri';
import GoogleMapEmbed from './components/reviws/map';

export default function Home() {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsReady(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!isReady) {
    return <Loading />;
  }

  return (
    <div>
      <Hero />
      <MenuBtns />
      <Gallery />
      <GoogleMapEmbed />
    </div>
  );
}