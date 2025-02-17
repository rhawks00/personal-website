import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Autoplay } from 'swiper/modules';

function AboutMe() {
  const images = [
    '/images/Cubs.jpg',
    '/images/NewZealand.jpg',
    '/images/Band.JPG',
    '/images/Bears.jpg',
  ];

  return (
    <section className="relative z-10 bg-transparent ">
      <div className="container mx-auto px-4 bg-[#1E293B] rounded-lg p-6">
        <div className="flex flex-col md:flex-row items-center py-12">
          <div className="w-full md:w-1/2 px-6 order-1 md:order-2 bg-[#1E293B] rounded-lg p-6">
            <h2 className="text-4xl font-semibold text-white mb-4 text-center">About Me</h2>
            <p className="text-xl text-gray-300 mb-4 z-10 text-left">
              I'm Ryan Hawks, a software engineer in Chicago, IL, working at Discover Financial Services as an Associate Software Engineer. I specialize in full-stack development, particularly improving call center software.
            </p>
            <p className="text-xl text-gray-300 mb-4 text-left">
              I have experience with Java, JavaScript, React, Spring, and Node. I'm passionate about learning new technologies and try to take every opportunity to do so.
            </p>
            <p className="text-xl text-gray-300 mb-4 text-left">
              Outside of work, I love Chicago sports, especially attending Cubs games. I enjoy recreational volleyball and, as a former saxophonist in Purdue's "All-American" Marching Band, I still make time for live music whenever I can.
            </p>
          </div>
          <div className="w-full md:w-1/2 h-64 md:h-full px-6 order-2 md:order-1 mt-8 md:mt-0">
            <Swiper
              navigation
              modules={[Navigation, Autoplay]}
              className="rounded-lg h-full"
              loop={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
            >
              {images.map((src, index) => (
                <SwiperSlide key={index} className="h-full">
                  <img src={src} alt={`Slide ${index + 1}`} className="w-full h-full object-cover" />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
