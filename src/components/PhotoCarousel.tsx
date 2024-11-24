import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const PhotoCarousel = () => {
  const photos = [
    "/images/photoCarousel/rx7veilside.jpg",
    "/images/photoCarousel/typer.jpg",
    "/images/photoCarousel/evo.jpg",
    "/images/photoCarousel/lakelouise.jpg",
    "/images/photoCarousel/mexico.jpg",
    "/images/photoCarousel/minam.jpg",
    "/images/photoCarousel/r32.jpg",
    "/images/photoCarousel/s2k.jpg",
    "/images/photoCarousel/silverrx72.jpg",
    "/images/photoCarousel/e301.jpg",
    "/images/photoCarousel/momo.jpg",
  ];

  return (
    <section id="photos" className="mt-24 my-8 py-4 px-4">
      <h2 className="text-3xl font-bold mb-6">Photos I&#39;ve Taken</h2>

      <div className="relative">
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          navigation={true} 
          pagination={{ clickable: true }} 
          modules={[Navigation, Pagination]} 
          grabCursor={true}
        >
          {photos.map((photo, index) => (
            <SwiperSlide key={index}>
              <div className="flex justify-center items-center w-full">
                <img src={photo} alt={`Slide ${index + 1}`} className="md:w-3/4 lg:w-3/5 h-auto rounded-md" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default PhotoCarousel;
