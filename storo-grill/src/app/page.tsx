'use client';
import MenuBtns from './components/meny';
import Hero from './components/hero';
import Gallery from './components/galleri';

export default function Home() {
  return (
    <div>
      <Hero />
      <MenuBtns />
      <Gallery />
    </div>
  );
}
