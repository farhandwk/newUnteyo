import React from "react";
import { PhoneCall } from "lucide-react";
import { useInView } from "react-intersection-observer";
import { motion } from 'framer-motion';

import podcastProd from "../assets/services/podcastprod.png";
import contentProd from "../assets/services/contentprod.png";

import dokPodcast from "../assets/services/dok-podcastprod.jpg";
import dokContent from "../assets/services/dok-contentprod.jpg";

function Services() {
    const services = [
        {
          title: "Podcast Production",
          description:
            "Professional podcast production with superior audio quality and engaging content flow. We also provide ready-to-upload short-form clips (shorts/highlights) for Instagram, TikTok, and Reels.",
          image: podcastProd,
          docImage: dokPodcast,
          chips: ["Pre-production", "Recording", "Editing", "Clipper"],
        },
        {
          title: "Content Production",
          description:
            "Creative video and shorts production for Instagram & TikTok, covering the entire process from concept and shooting to the final editing.",
          image: contentProd,
          docImage: dokContent,
          chips: ["Scripting", "Shooting", "Editing"],
        },
      ];

      function AnimatedArticle({ children }) {
          const { ref, inView } = useInView({
            triggerOnce: true,
            threshold: 0.1,
          });
      
          return (
            <article
              ref={ref}
              className={`group relative rounded-xl px-3 py-4 bg-white/10 shadow-md transition-shadow duration-300 transform ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              } hover:shadow-lg hover:-translate-y-1`}
              style={{ transitionProperty: "opacity, transform, box-shadow" }}
            >
              {children}
            </article>
          );
        }

      const AnimatedSection = ({ children }) => (
          <motion.section
            initial={{ opacity: 0, y: 50 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true, amount: 0.3 }} 
            transition={{ duration: 0.8, ease: "easeOut" }}
            className='max-w-screen w-screen h-auto mt-36 flex flex-col items-center justify-center p-8 font-[helvetica] flex flex-col items-center justify-center gap-0 md:h-auto'
          >
            {children}
          </motion.section>
        );
  return (
    <AnimatedSection>
        {/* Heading */}
        <h2 className="text-white text-2xl lg:text-4xl font-bold">
            Services
        </h2>
        <p className="mt-3 text-center text-white text-base max-w-xl mx-auto">
            The most demanded by our client.
        </p>
        <div className="mt-10 grid gap-8 sm:gap-10 grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto">
        {services.map(({ title, description, image, docImage, chips }, i) => (
          <AnimatedArticle key={i}>
            <div className="md:flex h-full">
              {/* Kiri: dokumentasi */}
              <div className="md:w-2/5 overflow-hidden rounded-t-xl md:rounded-l-xl md:rounded-tr-none">
                <img
                  src={docImage}
                  alt={`${title} — dokumentasi`}
                  loading="lazy"
                  className="w-full h-48 md:h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                />
              </div>

              {/* Kanan: konten */}
              <div className="md:w-3/5 p-6 flex flex-col justify-between">
                <div>
                  <div className="mb-4">
                    <img
                      src={image}
                      alt={title}
                      loading="lazy"
                      className="w-12 h-12 sm:w-14 sm:h-14 object-contain rounded-lg shadow-sm transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-white transition-transform duration-300 group-hover:translate-y-[-4px]">
                    {title}
                  </h3>
                  <p className="mt-2 text-white text-sm sm:text-base leading-relaxed transition-opacity duration-300 group-hover:opacity-90">
                    {description}
                  </p>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {chips.map((chip) => (
                    <span
                      key={chip}
                      className="rounded-full bg-black px-3 py-1 text-xs font-semibold text-white hover:text-black select-none cursor-default transition-transform duration-200 hover:scale-110 hover:bg-white"
                    >
                      {chip}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedArticle>
        ))}
      </div>
    </AnimatedSection>
  )
}

export default Services
