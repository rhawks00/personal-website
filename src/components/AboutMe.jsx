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
    <section className="relative z-10 bg-transparent py-24 ">  
      <div className="container mx-auto px-4 bg-[#1E293B] rounded-lg p-6">
        <div className="flex flex-col md:flex-row items-center py-12">
          <div className="w-full md:w-1/2 px-6 order-1 md:order-2 bg-[#1E293B] rounded-lg p-6">
            <h2 className="text-4xl font-semibold text-white mb-4 text-center">
              About Me
            </h2>
            <p className="text-lg text-gray-300 mb-4 z-10 text-left">
              Hi, I'm Ryan Hawks, a software engineer based in Chicago, IL, with a strong passion for full-stack development. 
              I currently work at Discover Financial Services as an Associate Software Engineer, focusing on enhancing Discover's 
              call center software. 
            </p>
            <p className="text-lg text-gray-300 mb-4 text-left">
              I have extensive experience with technologies such as Java, JavaScript, React, Spring, and Node. I'm always eager 
              to embrace new challenges and expand my skill set. I also enjoy sharing knowledge with others through tech talks 
              on AWS certification and live demos for the apps I've built.
            </p>
            <p className="text-lg text-gray-300 mb-4 text-left">
              Outside of work, I'm an avid Chicago sports fan, particularly passionate about attending Cubs games at Wrigley Field. I stay active by playing 
              recreational sports, with volleyball currently being my favorite activity in the city. While at Purdue University, I was a saxophonist in the 
              prestigious "All-American" Marching Band and Wind Ensemble, where I served as section leader for both groups. I'm also a big music enthusiast 
              and make it a point to attend live concerts whenever my favorite artists come to Chicago!
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
