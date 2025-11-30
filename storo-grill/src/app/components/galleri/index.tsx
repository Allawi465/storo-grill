import Image from 'next/image';
import galleryImg1 from '../../../../public/gallery/gallery1.jpeg';
import galleryImg2 from '../../../../public/gallery/gallery2.jpeg';
import galleryImg3 from '../../../../public/gallery/gallery3.jpeg';
import galleryImg4 from '../../../../public/gallery/gallery4.jpeg';
import galleryImg5 from '../../../../public/gallery/gallery5.jpeg';
import galleryImg6 from '../../../../public/gallery/gallery6.jpeg';

export default function Gallery() {
  return (
    <section className="bg-[#262626] flex flex-col py-40 px-2" id="gallery">
      <div className="flex-1 max-w-7xl mx-auto ">
        <div className="flex flex-col h-full my-auto">
          <div className="gallery grid grid-cols-2 gap-2 my-auto">
            <div>
              <Image
                className="rounded-lg w-full object-cover"
                src={galleryImg1}
                alt=""
              />
            </div>
            <div>
              <Image
                className="rounded-lg w-full object-cover"
                src={galleryImg2}
                alt=""
              />
            </div>
            <div>
              <Image
                className="rounded-lg w-full object-cover"
                src={galleryImg3}
                alt=""
              />
            </div>
            <div>
              <Image
                className=" rounded-lg w-full h-[150px] sm:h-[200px]  object-cover"
                src={galleryImg5}
                alt=""
              />
            </div>
            <div>
              <Image
                className=" rounded-lg w-full h-[150px]  sm:h-[200px]  object-cover"
                src={galleryImg4}
                alt=""
              />
            </div>
            <div>
              <Image
                className=" rounded-lg w-full h-[150px] sm:h-[200px] object-cover"
                src={galleryImg6}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
