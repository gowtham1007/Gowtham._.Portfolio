
// // // import { motion } from "framer-motion";
// // // import { FaGithub } from "react-icons/fa";

// // // // Swiper Imports
// // // import { Swiper, SwiperSlide } from "swiper/react";
// // // import { Pagination, Navigation } from "swiper/modules";
// // // import "swiper/css";
// // // import "swiper/css/pagination";
// // // import "swiper/css/navigation";

// // // const projectDetails = [
// // //   {
// // //     heading: "Passenger Safety At Bus Stop",
// // //     description: "Real-time bus tracking system ensuring precise bus alignment at stops.",
// // //     features: ["Smart Passenger Info", "Arrival Timings", "Data Collection"],
// // //     tech: ["Arduino", "ESP32", "C++", "RFID", "IR Sensor"],
// // //     images: ["src/assets/uyir.png","src/assets/uyir1.jpg", "src/assets/uyir2.jpeg", "src/assets/uyir3.jpg"],
// // //   },
// // //   {
// // //     heading: "Blood Donation",
// // //     description: "Connect donors with recipients via a real-time platform.",
// // //     features: ["Plasma Requests", "Donor Registration", "Activity Monitoring"],
// // //     tech: ["React", "Tailwind", "Firebase", "REST API"],
// // //     images: ["src/assets/blood1.jpg", " src/assets/Blood2.jpg","src/assets/blood3.jpg"],
// // //   },
// // //   {
// // //     heading: "AI Complaint System - Railways",
// // //     description: "AI-powered complaint resolution for faster service in railways.",
// // //     features: ["Image Analysis", "AI Chatbots", "Complaint Dashboard"],
// // //     tech: ["Python", "NLP", "Bootstrap", "Vercel"],
// // //     images: ["src/assets/Rail3.jpg", "src/assets/Rail2.jpg","src/assets/Rail1.jpg"],
// // //   },
// // //   {
// // //     heading: "Food Delivery Website",
// // //     description: "Delectable menu with a seamless ordering experience.",
// // //     features: ["Order Tracking", "Variety of Dishes", "Fast Delivery"],
// // //     tech: ["React", "Node.js", "MongoDB", "Express"],
// // //     images: ["src/assets/f1.jpg", "src/assets/f2.jpg","src/assets/f3.jpg"],
// // //   },
// // //   {
// // //     heading: "E-commerce Platform",
// // //     description: "Modern online shopping experience with admin panel.",
// // //     features: ["User Auth", "Admin CRUD", "Secure Payments"],
// // //     tech: ["React", "Firebase", "Redux", "Tailwind"],
// // //     images: ["src/assets/ecom1.jpg", "src/assets/ecom2.jpg","src/assets/ecom3.jpg"],
// // //   },
// // //   {
// // //     heading: "Internship Projects",
// // //     description: "Job portal, used-car site & cosmetic shop using PHP stack.",
// // //     features: ["High Performance", "Advanced Search", "Secure Access"],
// // //     tech: ["PHP", "MySQL", "Bootstrap", "XAMPP"],
// // //     images: ["src/assets/intern.png", "src/assets/intern2.jpg","src/assets/intern 3.jpg","src/assets/intern1.png"],
// // //   },
  
// // // ];

// // // // Card Color Variants
// // // const cardVariants = [
// // //   { container: "border-4 border-orange-500 bg-white shadow-xl" },
// // //   { container: "bg-gray-100 border-2 border-gray-300 shadow-lg" },
// // //   { container: "bg-white border border-gray-200 shadow-md relative overflow-hidden", underline: true },
// // // ];

// // // const ProjectCard = ({ project, index }: { project: typeof projectDetails[0]; index: number }) => {
// // //   const style = cardVariants[index % 3];

// // //   return (
// // //     <motion.div
// // //       initial={{ opacity: 0, y: 80 }}
// // //       whileInView={{ opacity: 1, y: 0 }}
// // //       viewport={{ once: true, amount: 0.3 }}
// // //       transition={{ duration: 0.7, delay: index * 0.15 }}
// // //       whileHover={{
// // //         y: -10,
// // //         boxShadow:
// // //           index % 3 === 0
// // //             ? "0 25px 50px -12px rgba(249,115,22,0.3)"
// // //             : "0 20px 25px -5px rgba(0,0,0,0.1)",
// // //       }}
// // //       className={`rounded-2xl p-8 h-full flex flex-col transition-all duration-300 ${style.container}`}
// // //     >
// // //       {/* Image Carousel */}
// // //       <div className="w-full h-64 mb-6 rounded-xl overflow-hidden">
// // //         <Swiper
// // //           modules={[Pagination, Navigation]}
// // //           pagination={{ clickable: true }}
// // //           navigation
// // //           spaceBetween={10}
// // //           slidesPerView={1}
// // //           className="h-full"
// // //         >
// // //           {project.images?.map((src, i) => (
// // //             <SwiperSlide key={i}>
// // //               <img
// // //                 src={src}
// // //                 className="w-full h-64 object-cover rounded-xl"
// // //                 alt={`Project ${i + 1}`}
// // //               />
// // //             </SwiperSlide>
// // //           ))}
// // //         </Swiper>
// // //       </div>

// // //       {/* Underline for Variant 3 */}
// // //       {style.underline && (
// // //         <div className="absolute top-0 left-8 right-8 h-1 bg-orange-500"></div>
// // //       )}

// // //       <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
// // //         {project.heading}
// // //       </h3>

// // //       <p className="text-gray-600 mb-6 flex-grow leading-relaxed">
// // //         {project.description}
// // //       </p>

// // //       {/* Features */}
// // //       <ul className="space-y-2 mb-6">
// // //         {project.features.map((feat, i) => (
// // //           <li key={i} className="flex items-start text-gray-700">
// // //             <span className="text-orange-500 mr-3 mt-1">▹</span>
// // //             <span className="text-sm md:text-base">{feat}</span>
// // //           </li>
// // //         ))}
// // //       </ul>

// // //       {/* Tech Stack */}
// // //       <div className="flex flex-wrap gap-2 mb-6">
// // //         {project.tech.map((t, i) => (
// // //           <span
// // //             key={i}
// // //             className="px-4 py-2 text-xs font-semibold bg-orange-100 text-orange-700 rounded-full"
// // //           >
// // //             {t}
// // //           </span>
// // //         ))}
// // //       </div>

// // //       {/* GitHub Link */}
// // //       <motion.a
// // //         href="https://github.com/gowtham1007"
// // //         target="_blank"
// // //         rel="noopener noreferrer"
// // //         className="inline-flex items-center gap-2 text-orange-600 font-bold hover:text-orange-700 transition mt-auto"
// // //         whileHover={{ x: 8 }}
// // //       >
// // //         <FaGithub size={22} />
// // //         View on GitHub
// // //       </motion.a>
// // //     </motion.div>
// // //   );
// // // };

// // // const CuratedWorkGallery = () => {
// // //   return (
// // //     <section className="bg-gray-50 py-20">
// // //       <div className="max-w-7xl mx-auto px-6">
// // //         {/* Section Title */}
// // //         <motion.div
// // //           initial={{ opacity: 0, y: -40 }}
// // //           whileInView={{ opacity: 1, y: 0 }}
// // //           viewport={{ once: true }}
// // //           transition={{ duration: 0.8 }}
// // //           className="text-center mb-16"
// // //         >
// // //           <h1 className="text-5xl md:text-6xl font-extrabold text-gray-800">
// // //             Curated <span className="text-orange-500">Projects</span>
// // //           </h1>
// // //           <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
// // //             A collection of my best work — crafted with precision and passion.
// // //           </p>
// // //         </motion.div>

// // //         {/* Project Grid */}
// // //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
// // //           {projectDetails.map((project, index) => (
// // //             <ProjectCard key={index} project={project} index={index} />
// // //           ))}
// // //         </div>
// // //       </div>
// // //     </section>
// // //   );
// // // };

// // // export default CuratedWorkGallery;




// import { useEffect, useRef } from "react";
// import { FaGithub } from "react-icons/fa";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Pagination, Navigation } from "swiper/modules";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";
// import '../index.css';

// // Register ScrollTrigger
// gsap.registerPlugin(ScrollTrigger);

// const projectDetails = [
//   {
//     heading: "Passenger Safety At Bus Stop",
//     description: "Real-time bus tracking system ensuring precise bus alignment at stops.",
//     features: ["Smart Passenger Info", "Arrival Timings", "Data Collection"],
//     tech: ["Arduino", "ESP32", "C++", "RFID", "IR Sensor"],
//     images: ["src/assets/uyir.png", "src/assets/uyir1.jpg", "src/assets/uyir2.jpeg", "src/assets/uyir3.jpg"],
//   },
//   {
//     heading: "Blood Donation",
//     description: "Connect donors with recipients via a real-time platform.",
//     features: ["Plasma Requests", "Donor Registration", "Activity Monitoring"],
//     tech: ["React", "Tailwind", "Firebase", "REST API"],
//     images: ["src/assets/blood1.jpg", "src/assets/Blood2.jpg", "src/assets/blood3.jpg"],
//   },
//   {
//     heading: "AI Complaint System - Railways",
//     description: "AI-powered complaint resolution for faster service in railways.",
//     features: ["Image Analysis", "AI Chatbots", "Complaint Dashboard"],
//     tech: ["Python", "NLP", "Bootstrap", "Vercel"],
//     images: ["src/assets/Rail3.jpg", "src/assets/Rail2.jpg", "src/assets/Rail1.jpg"],
//   },
//   {
//     heading: "Food Delivery Website",
//     description: "Delectable menu with a seamless ordering experience.",
//     features: ["Order Tracking", "Variety of Dishes", "Fast Delivery"],
//     tech: ["React", "Node.js", "MongoDB", "Express"],
//     images: ["src/assets/f1.jpg", "src/assets/f2.jpg", "src/assets/f3.jpg"],
//   },
//   {
//     heading: "E-commerce Platform",
//     description: "Modern online shopping experience with admin panel.",
//     features: ["User Auth", "Admin CRUD", "Secure Payments"],
//     tech: ["React", "Firebase", "Redux", "Tailwind"],
//     images: ["src/assets/ecom1.jpg", "src/assets/ecom2.jpg", "src/assets/ecom3.jpg"],
//   },
//   {
//     heading: "Internship Projects",
//     description: "Job portal, used-car site & cosmetic shop using PHP stack.",
//     features: ["High Performance", "Advanced Search", "Secure Access"],
//     tech: ["PHP", "MySQL", "Bootstrap", "XAMPP"],
//     images: ["src/assets/intern.png", "src/assets/intern2.jpg", "src/assets/intern 3.jpg", "src/assets/intern1.png"],
//   },
// ];

// const ProjectCard = ({ project, index }: { project: any; index: number }) => {
//   const cardRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const card = cardRef.current;
//     if (!card) return;

//     gsap.fromTo(
//       card,
//       { y: 120, opacity: 0 },
//       {
//         y: 0,
//         opacity: 1,
//         duration: 1,
//         ease: "power4.out",
//         delay: index * 0.1,
//         scrollTrigger: {
//           trigger: card,
//           start: "top 85%",
//         },
//       }
//     );
//   }, [index]);

//   return (
//     <div
//       ref={cardRef}
//       className="group relative bg-white/10 backdrop-blur-xl border border-orange-500/40 rounded-2xl p-6 h-full flex flex-col overflow-hidden shadow-2xl hover:shadow-orange-500/40 transition-all duration-500 w-96 mx-auto project-card"
//     >
//       {/* Removed inner orbs – clean card now */}

//       {/* Carousel */}
//       <div className="relative z-10 w-full h-64 mb-6 rounded-2xl overflow-hidden border-4 border-orange-500/60">
//         <Swiper
//           modules={[Autoplay, Pagination, Navigation]}
//           autoplay={{ delay: 3000, disableOnInteraction: false }}
//           loop={true}
//           pagination={{ clickable: true }}
//           navigation={true}
//           className="h-full"
//         >
//           {project.images.map((src: string, i: number) => (
//             <SwiperSlide key={i}>
//               <img src={src} alt="" className="w-full h-full object-cover" />
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>

//       <h3 className="text-3xl font-bold text-orange-400 mb-4 z-10 drop-shadow-lg">
//         {project.heading}
//       </h3>

//       <p className="text-gray-300 mb-6 flex-grow z-10">{project.description}</p>

//       <ul className="space-y-3 mb-8 z-10">
//         {project.features.map((feat: string, i: number) => (
//           <li key={i} className="flex items-center text-gray-200">
//             <span className="text-orange-500 font-bold mr-3">▹</span>
//             {feat}
//           </li>
//         ))}
//       </ul>

//       <div className="flex flex-wrap gap-3 mb-8 z-10">
//         {project.tech.map((t: string, i: number) => (
//           <span
//             key={i}
//             className="px-5 py-2 bg-orange-500/20 border border-orange-400 text-orange-300 rounded-full text-sm font-medium backdrop-blur-sm"
//           >
//             {t}
//           </span>
//         ))}
//       </div>

//       <a
//         href="https://github.com/gowtham1007"
//         target="_blank"
//         rel="noopener noreferrer"
//         className="z-10 mt-auto inline-flex items-center gap-3 text-orange-400 font-bold text-lg hover:text-orange-300 transition"
//       >
//         <FaGithub size={28} />
//         View on GitHub
//         <span className="group-hover:translate-x-4 transition-transform">→</span>
//       </a>
//     </div>
//   );
// };

// const CuratedWorkGallery = () => {
//   const sectionRef = useRef<HTMLDivElement>(null);
//   const canvasRef = useRef<HTMLCanvasElement>(null);

//   // Starfield Animation
//   useEffect(() => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;
//     const ctx = canvas.getContext("2d");
//     if (!ctx) return;

//     canvas.width = window.innerWidth;
//     canvas.height = window.innerHeight;

//     const stars: { x: number; y: number; size: number; opacity: number; speed: number }[] = [];
//     for (let i = 0; i < 200; i++) {
//       stars.push({
//         x: Math.random() * canvas.width,
//         y: Math.random() * canvas.height,
//         size: Math.random() * 2 + 0.5,
//         opacity: Math.random(),
//         speed: Math.random() * 0.05 + 0.01,
//       });
//     }

//     const animate = () => {
//       ctx.clearRect(0, 0, canvas.width, canvas.height);
//       stars.forEach((star) => {
//         star.opacity += star.speed;
//         if (star.opacity >= 1 || star.opacity <= 0.2) star.speed *= -1;

//         ctx.beginPath();
//         ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
//         ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
//         ctx.fill();
//       });
//       requestAnimationFrame(animate);
//     };
//     animate();

//     const handleResize = () => {
//       canvas.width = window.innerWidth;
//       canvas.height = window.innerHeight;
//     };
//     window.addEventListener("resize", handleResize);

//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   // Connecting Lines Animation
//   useEffect(() => {
//     const cards = document.querySelectorAll(".project-card");
//     if (cards.length < 2) return;

//     const tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: ".projects-grid",
//         start: "top 60%",
//         once: true,
//       },
//     });

//     cards.forEach((card, i) => {
//       if (i === 0) return;
//       const prevCard = cards[i - 1];

//       const line = document.createElement("div");
//       line.className = "connection-line";
//       document.querySelector(".projects-grid")?.appendChild(line);

//       const updateLine = () => {
//         const rect1 = prevCard.getBoundingClientRect();
//         const rect2 = card.getBoundingClientRect();
//         const parentRect = document.querySelector(".projects-grid")!.getBoundingClientRect();

//         const x1 = rect1.right - parentRect.left;
//         const y1 = rect1.top + rect1.height / 2 - parentRect.top;
//         const x2 = rect2.left - parentRect.left;
//         const y2 = rect2.top + rect2.height / 2 - parentRect.top;

//         const length = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
//         const angle = Math.atan2(y2 - y1, x2 - x1) * (180 / Math.PI);

//         line.style.width = `${length}px`;
//         line.style.left = `${x1}px`;
//         line.style.top = `${y1}px`;
//         line.style.transform = `rotate(${angle}deg)`;
//       };

//       gsap.set(line, { opacity: 0, scaleX: 0 });
//       tl.to(line, { opacity: 0.3, scaleX: 1, duration: 1.2, ease: "power3.out", delay: i * 0.2 }, 0);

//       updateLine();
//       window.addEventListener("resize", updateLine);
//       ScrollTrigger.create({ trigger: card, onEnter: updateLine, onEnterBack: updateLine });

//       return () => window.removeEventListener("resize", updateLine);
//     });
//   }, []);

//   useEffect(() => {
//     gsap.fromTo(
//       ".title-word",
//       { y: 100, opacity: 0 },
//       {
//         y: 0,
//         opacity: 1,
//         duration: 1.2,
//         ease: "power4.out",
//         stagger: 0.15,
//         scrollTrigger: {
//           trigger: ".title-word",
//           start: "top 80%",
//         },
//       }
//     );
//   }, []);

//   return (
//     <section
//       ref={sectionRef}
//       className="relative min-h-screen bg-black overflow-hidden py-24 px-6"
//     >
//       {/* Starfield Canvas */}
//       <canvas
//         ref={canvasRef}
//         className="absolute inset-0 pointer-events-none z-0"
//       />

//       {/* Subtle Gradient Overlay */}
//       <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-orange-900/20 pointer-events-none z-10" />

//       <div className="relative z-20 max-w-7xl mx-auto">
//         {/* Hero Title */}
//         <div className="text-center mb-20 overflow-hidden">
//           <h1 className="text-6xl md:text-8xl font-black tracking-tight">
//             {"Curated Projects".split(" ").map((word, i) => (
//               <span key={i} className="inline-block title-word">
//                 <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 via-orange-500 to-amber-500">
//                   {word}
//                 </span>{" "}
//               </span>
//             ))}
//           </h1>
//           <p className="mt-8 text-xl text-orange-300/80 font-light">
//             Built with fire. Delivered with passion.
//           </p>
//         </div>

//         {/* Grid with Connecting Lines Container */}
//         <div className="relative projects-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
//           {projectDetails.map((project, index) => (
//             <div key={index} className="project-card">
//               <ProjectCard project={project} index={index} />
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* CSS for connecting lines */}
//       <style jsx>{`
//         .connection-line {
//           position: absolute;
//           height: 2px;
//           background: linear-gradient(90deg, transparent, #fb923c, transparent);
//           transform-origin: 0 0;
//           z-index: 5;
//           pointer-events: none;
//         }
//       `}</style>
//     </section>
//   );
// };

// export default CuratedWorkGallery;



import { useEffect, useRef } from "react";
import { FaGithub } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion"; // Framer Motion Import

// Swiper CSS
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Register ScrollTrigger for GSAP
gsap.registerPlugin(ScrollTrigger);

// --- Project Data ---
const projectDetails = [
  {
    heading: "Passenger Safety At Bus Stop",
    description: "Real-time bus tracking system ensuring precise bus alignment at stops.",
    features: ["Smart Passenger Info", "Arrival Timings", "Data Collection"],
    tech: ["Arduino", "ESP32", "C++", "RFID", "IR Sensor"],
    images: ["src/assets/uyir.png", "src/assets/uyir1.jpg", "src/assets/uyir2.jpeg", "src/assets/uyir3.jpg"],
  },
  {
    heading: "Blood Donation",
    description: "Connect donors with recipients via a real-time platform.",
    features: ["Plasma Requests", "Donor Registration", "Activity Monitoring"],
    tech: ["React", "Tailwind", "Firebase", "REST API"],
    images: ["src/assets/blood1.jpg", "src/assets/Blood2.jpg", "src/assets/blood3.jpg"],
  },
  {
    heading: "AI Complaint System - Railways",
    description: "AI-powered complaint resolution for faster service in railways.",
    features: ["Image Analysis", "AI Chatbots", "Complaint Dashboard"],
    tech: ["Python", "NLP", "Bootstrap", "Vercel"],
    images: ["src/assets/Rail3.jpg", "src/assets/Rail2.jpg", "src/assets/Rail1.jpg"],
  },
  {
    heading: "Food Delivery Website",
    description: "Delectable menu with a seamless ordering experience.",
    features: ["Order Tracking", "Variety of Dishes", "Fast Delivery"],
    tech: ["React", "Node.js", "MongoDB", "Express"],
    images: ["src/assets/f1.jpg", "src/assets/f2.jpg", "src/assets/f3.jpg"],
  },
  {
    heading: "E-commerce Platform",
    description: "Modern online shopping experience with admin panel.",
    features: ["User Auth", "Admin CRUD", "Secure Payments"],
    tech: ["React", "Firebase", "Redux", "Tailwind"],
    images: ["src/assets/ecom1.jpg", "src/assets/ecom2.jpg", "src/assets/ecom3.jpg"],
  },
  {
    heading: "Internship Projects",
    description: "Job portal, used-car site & cosmetic shop using PHP stack.",
    features: ["High Performance", "Advanced Search", "Secure Access"],
    tech: ["PHP", "MySQL", "Bootstrap", "XAMPP"],
    images: ["src/assets/intern.png", "src/assets/intern2.jpg", "src/assets/intern 3.jpg", "src/assets/intern1.png"],
  },
];

// --- Project Card Component ---
const ProjectCard = ({ project, index }: { project: any; index: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  // GSAP: Scroll-based card entry animation
  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    gsap.fromTo(
      card,
      { y: 120, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power4.out",
        delay: index * 0.1,
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
        },
      }
    );
  }, [index]);

  return (
    <motion.div // FRAMER MOTION: Use motion.div for animation
      ref={cardRef}
      className="group relative bg-white/10 backdrop-blur-xl border border-orange-500/40 rounded-2xl p-6 h-full flex flex-col overflow-hidden shadow-2xl hover:shadow-orange-500/40 transition-all duration-500 w-96 mx-auto project-card "
      
      // FRAMER MOTION: Gesture Animation on Hover
      whileHover={{ 
        scale: 1.03, // Slightly enlarge the card
        borderColor: "rgb(249, 115, 22)", 
        transition: { duration: 0.3 }
      }}
      whileTap={{ scale: 0.98 }} // Animation on click/tap
    >
      {/* Carousel (using Swiper) */}
      <div className="relative z-10 w-full h-64 mb-6 rounded-2xl overflow-hidden border-4 border-orange-500/60">
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          pagination={{ clickable: true }}
          navigation={true}
          className="h-full"
        >
          {project.images.map((src: string, i: number) => (
            <SwiperSlide key={i}>
              <img src={src} alt="" className="w-full h-full object-cover" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <h3 className="text-3xl font-bold text-orange-400 mb-4 z-10 drop-shadow-lg">
        {project.heading}
      </h3>

      <p className="text-gray-300 mb-6 flex-grow z-10">{project.description}</p>

      <ul className="space-y-3 mb-8 z-10">
        {project.features.map((feat: string, i: number) => (
          <li key={i} className="flex items-center text-gray-200">
            <span className="text-orange-500 font-bold mr-3">▹</span>
            {feat}
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-3 mb-8 z-10">
        {project.tech.map((t: string, i: number) => (
          <span
            key={i}
            className="px-5 py-2 bg-orange-500/20 border border-orange-400 text-orange-300 rounded-full text-sm font-medium backdrop-blur-sm"
          >
            {t}
          </span>
        ))}
      </div>

      <a
        href="https://github.com/gowtham1007"
        target="_blank"
        rel="noopener noreferrer"
        className="z-10 mt-auto inline-flex items-center gap-3 text-orange-400 font-bold text-lg hover:text-orange-300 transition"
      >
        <FaGithub size={28} />
        View on GitHub
        <span className="group-hover:translate-x-4 transition-transform">→</span>
      </a>
    </motion.div>
  );
};

// --- Main Gallery Component ---
const CuratedWorkGallery = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const titleRef = useRef<HTMLDivElement>(null); // Ref for title animation

  // Vanilla JS/Canvas: Starfield Background Animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    };
    resizeCanvas();

    const stars: { x: number; y: number; size: number; opacity: number; speed: number }[] = [];
    for (let i = 0; i < 200; i++) {
        stars.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * 2 + 0.5,
            opacity: Math.random(),
            speed: Math.random() * 0.05 + 0.01,
        });
    }

    const animate = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        stars.forEach((star) => {
            star.opacity += star.speed;
            if (star.opacity >= 1 || star.opacity <= 0.2) star.speed *= -1;

            ctx.beginPath();
            ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
            ctx.fill();
        });
        requestAnimationFrame(animate);
    };
    animate();

    window.addEventListener("resize", resizeCanvas);
    return () => window.removeEventListener("resize", resizeCanvas);
  }, []);

  // GSAP: Connecting Lines Animation
  useEffect(() => {
    const cards = document.querySelectorAll(".project-card");
    if (cards.length < 2) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".projects-grid",
        start: "top 60%",
        once: true,
      },
    });

    cards.forEach((card, i) => {
      if (i === 0) return;
      const prevCard = cards[i - 1];

      const line = document.createElement("div");
      line.className = "connection-line";
      const parentGrid = document.querySelector(".projects-grid");
      if (parentGrid) {
          parentGrid.appendChild(line);
      }

      const updateLine = () => {
        const rect1 = prevCard.getBoundingClientRect();
        const rect2 = card.getBoundingClientRect();
        const parentRect = parentGrid?.getBoundingClientRect();

        if (!parentRect) return;

        const x1 = rect1.right - parentRect.left;
        const y1 = rect1.top + rect1.height / 2 - parentRect.top;
        const x2 = rect2.left - parentRect.left;
        const y2 = rect2.top + rect2.height / 2 - parentRect.top;

        const length = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
        const angle = Math.atan2(y2 - y1, x2 - x1) * (180 / Math.PI);

        line.style.width = `${length}px`;
        line.style.left = `${x1}px`;
        line.style.top = `${y1}px`;
        line.style.transform = `rotate(${angle}deg)`;
      };

      gsap.set(line, { opacity: 0, scaleX: 0 });
      tl.to(line, { opacity: 0.3, scaleX: 1, duration: 1.2, ease: "power3.out", delay: i * 0.2 }, 0);

      updateLine();
      window.addEventListener("resize", updateLine);
      ScrollTrigger.create({ trigger: card, onEnter: updateLine, onEnterBack: updateLine });

      return () => window.removeEventListener("resize", updateLine);
    });
  }, []);
  
  // GSAP: Title Stagger Animation (Re-added, targeting words)
  useEffect(() => {
    gsap.fromTo(
      ".title-word",
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power4.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen bg-black overflow-hidden py-24 px-6"
    >
      {/* Starfield Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none z-0"
      />

      {/* Subtle Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-orange-900/20 pointer-events-none z-10" />

      <div className="relative z-20 max-w-7xl mx-auto">
        {/* Hero Title (Using GSAP Stagger effect) */}
        <div ref={titleRef} className="text-center mb-20 overflow-hidden">
          <h1 className="text-6xl md:text-8xl font-black tracking-tight">
            {"Curated Projects".split(" ").map((word, i) => (
              <span key={i} className="inline-block title-word">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 via-orange-500 to-amber-500">
                  {word}
                </span>{" "}
              </span>
            ))}
          </h1>
          <p className="mt-8 text-xl text-orange-300/80 font-light">
            Built with fire. Delivered with passion.
          </p>
        </div>

        {/* Grid with Connecting Lines Container */}
        <div className="relative projects-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projectDetails.map((project, index) => (
            <div key={index}> 
              <ProjectCard project={project} index={index} />
            </div>
          ))}
        </div>
      </div>

      {/* CSS for connecting lines */}
      <style jsx>{`
        .connection-line {
          position: absolute;
          height: 2px;
          background: linear-gradient(90deg, transparent, #fb923c, transparent);
          transform-origin: 0 0;
          z-index: 5;
          pointer-events: none;
        }
      `}</style>
    </section>
  );
};

export default CuratedWorkGallery;