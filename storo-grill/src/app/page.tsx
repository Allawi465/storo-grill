'use client';
import MenuBtns from './components/meny';
import Hero from './components/hero';
import Gallery from './components/galleri';
import GoogleMapEmbed from './components/reviws/map';

export default function Home() {
  return (
    <div>
      <Hero />
      <MenuBtns />
      <Gallery />
      <GoogleMapEmbed />
    </div>
  );
}
