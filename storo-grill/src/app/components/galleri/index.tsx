import GoogleMapEmbed from '../reviws/map';

export default function Gallery() {
  return (
    <section className="h-screen bg-[#262626] flex flex-col" id="gallery">
      <div className="flex-1"></div>
      <div className="pb-8">
        <GoogleMapEmbed />
      </div>
    </section>
  );
}
