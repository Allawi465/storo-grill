'use client';
import MenuBtns from './components/meny';
import Hero from './components/hero';
import OrderWith from './components/hero/orderWith';
import Gallery from './components/galleri';

export default function Home() {
  return (
    <div>
      <Hero />
      <OrderWith />
      <MenuBtns />
      <Gallery />
    </div>
  );
}
