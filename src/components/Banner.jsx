import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { motion } from "framer-motion";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Banner = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="h-[70vh]"
    >
      <div className="h-[70vh]">
        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          autoplay={{ delay: 3000 }}
          loop={true}
          navigation
          pagination={{ clickable: true }}
          className="h-full"
        >
          <SwiperSlide>
            <div
              className="h-full bg-cover bg-center flex items-center"
              style={{
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1542751371-adc38448a05e)",
              }}
            >
              <div className="bg-black/60 w-full h-full flex items-center px-10">
                <div className="max-w-xl text-white sm:ml-20">
                  <h1 className="text-4xl font-bold mb-4">
                    Discover Indie Games
                  </h1>
                  <p className="text-slate-300 mb-6">
                    Explore unique games from independent developers.
                  </p>
                  <button className="btn btn-warning text-black">
                    Explore Games
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div
              className="h-full bg-cover bg-center flex items-center"
              style={{
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1511512578047-dfb367046420)",
              }}
            >
              <div className="bg-black/60 w-full h-full flex items-center px-10">
                <div className="max-w-xl text-white sm:ml-20">
                  <h1 className="text-4xl font-bold mb-4">
                    Support Game Creators
                  </h1>
                  <p className="text-slate-300 mb-6">
                    Download and support indie developers.
                  </p>
                  <button className="btn btn-warning text-black">
                    Join Now
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="h-full bg-cover bg-center flex items-center"
              style={{
                backgroundImage:
                  "url(https://media.istockphoto.com/id/2196652263/photo/cyberpunk-character-standing-in-futuristic-city-street.webp?a=1&b=1&s=612x612&w=0&k=20&c=TC7cdWX2rcP2aHZkAuIkV2zdJgNbTOmKG0cWQa7guN4=)",
              }}
            >
              <div className="bg-black/60 w-full h-full flex items-center px-10">
                <div className="max-w-xl text-white sm:ml-20">
                  <h1 className="text-4xl font-bold mb-4">Cyber Adventure</h1>
                  <p className="text-slate-300 mb-6">Action • Indie</p>
                  <button className="btn btn-warning text-black">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </motion.div>
  );
};

export default Banner;
