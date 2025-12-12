

// // src/components/HeroWithStars.jsx
// import React, { useEffect, useRef, useMemo } from "react";
// import { motion } from "framer-motion";
// import gsap from "gsap";

// // 🚀 CHANGE 1: Import the image asset
// // NOTE: Adjust the path to where your image file is actually located.
// import profileImageSrc from '../../src/assets/G-profile.png'; // Example path (assuming /src/components/ and image is in /src/assets/images)
// import Resume from '../assets/Gowtham R _ Resume.pdf'
// // Fallback if the local import fails (optional, but good practice)
// // const placeholderImage = "https://placehold.co/400x400/374151/ffffff?text=GOWTHAM+R+Dev";


// const generateStars = (count = 300) => {
//   const out = [];
//   for (let i = 0; i < count; i++) {
//     out.push({
//       id: i,
//       top: `${Math.random() * 100}%`,
//       left: `${Math.random() * 100}%`,
//       size: Math.max(1, Math.random() * 3), // px
//       delayOffset: Math.random() * 3,
//     });
//   }
//   return out;
// };

// // Framer Motion variants for the staggered text entrance
// const containerVariants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     // Start stagger after the background elements have begun their entrance
//     transition: { staggerChildren: 0.08, delayChildren: 0.6 },
//   },
// };
// const itemVariants = {
//   hidden: { opacity: 0, y: 18 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
// };

// export default function HeroWithStars() {
//   const rootRef = useRef(null);
//   const textureRef = useRef(null);
//   const contentRef = useRef(null);
//   const starFieldRef = useRef(null);
//   const neonScannerRef = useRef(null);
//   const textureLineRef = useRef(null); // Ref for the animated vertical line
//   const profileContainerRef = useRef(null); 

//   // **CHANGE 3: Calling with 300 stars**
//   // Memoize stars so they stay stable across renders
//   const stars = useMemo(() => generateStars(300), []);

//   useEffect(() => {
//     if (!rootRef.current) return;

//     // Use gsap.context to scope selectors & ensure cleanup on unmount
//     const ctx = gsap.context(() => {
//       const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
//       const starEls = starFieldRef.current ? Array.from(starFieldRef.current.children) : [];
//       const entranceDuration = 1.2; // Common duration for main elements

//       // --- Initial Sets ---
//       gsap.set(textureRef.current, { skewX: 6, x: -160, opacity: 0 });
//       gsap.set(neonScannerRef.current, { xPercent: -100, opacity: 0.15 });
//       gsap.set(starEls, { opacity: 0 });
//       gsap.set(textureLineRef.current, { height: 0 }); // Initial state for the line

//       // --- Entrance Timeline (GSAP for background elements) ---

//       // 1. Texture Panel Entrance
//       tl.to(textureRef.current, {
//         skewX: 0,
//         x: 0,
//         opacity: 0.85,
//         duration: entranceDuration,
//       }, 0); // Start at time 0

//       // 2. Vertical Line Animation (follows the panel)
//       tl.to(textureLineRef.current, {
//         height: "50%",
//         duration: entranceDuration * 1.1,
//         ease: "power2.out",
//       }, 0.5); // Start after panel has moved a bit

//       // 3. Star Field Fade-in (Target all stars)
//       if (starEls.length) {
//         tl.to(starEls, {
//           opacity: 1, // Fade them in
//           duration: entranceDuration * 0.8,
//           stagger: { each: 0.005, from: "random" },
//         }, 0.4); // Start slightly later
//       }

//       // --- Continuous Animations ---

//       // Star twinkle (Already twinkling, no change needed here)
//       if (starEls.length) {
//         gsap.to(starEls, {
//           opacity: () => 0.25 + Math.random() * 0.85,
//           scale: () => 0.6 + Math.random() * 1.4,
//           duration: () => 1.5 + Math.random() * 2.5,
//           ease: "sine.inOut",
//           repeat: -1,
//           yoyo: true,
//           stagger: { each: 0.06, from: "random" },
//           delay: 0.2 // Add a slight delay to ensure the initial fade-in completes
//         });
//       }

//       // **Photo Container Glowing Animation**
//       gsap.to(profileContainerRef.current, {
//         boxShadow: "0 0 15px 5px rgba(249, 115, 22, 0.6), 0 0 25px 10px rgba(255, 255, 255, 0.1)",
//         duration: 2.5,
//         ease: "power1.inOut",
//         repeat: -1,
//         yoyo: true,
//         delay: 1, // Start after initial entrance
//       });

//       // Neon scanner sweep - use xPercent for responsive motion
//       gsap.to(neonScannerRef.current, {
//         xPercent: 100,
//         opacity: 0.95,
//         duration: 3.8,
//         ease: "power1.inOut",
//         repeat: -1,
//         yoyo: true,
//         repeatDelay: 0.3,
//         onRepeat() {
//           // subtle randomization on each pass
//           gsap.set(neonScannerRef.current, { opacity: 0.25 + Math.random() * 0.6 });
//         },
//       });

//     }, rootRef);

//     return () => {
//       // revert() kills tweens inside context and removes registered effects
//       ctx.revert();
//     };
//   }, []); // run once
  
//   // NOTE: The placeholderImage variable is no longer needed but kept for context.
//   // const placeholderImage = "https://placehold.co/400x400/374151/ffffff?text=GOWTHAM+R+Dev";


//   return (
//     <div ref={rootRef} className="min-h-screen bg-gray-950 text-gray-200 relative overflow-hidden p-4 md:p-8 font-sans">
//       {/* Star field - Background elements omitted for brevity */}
//       <div
//         ref={starFieldRef}
//         className="absolute inset-0 z-0 pointer-events-none"
//         aria-hidden="true"
//       >
//         {stars.map((s) => (
//           <div
//             key={s.id}
//             className="absolute rounded-full bg-white"
//             style={{
//               width: `${s.size}px`,
//               height: `${s.size}px`,
//               top: s.top,
//               left: s.left,
//               // **Glow box-shadow for "lightzing"**
//               boxShadow: "0 0 4px 1px rgba(255, 255, 255, 0.4), 0 0 8px rgba(249, 115, 22, 0.6)",
//               // use transforms (composite) to make animations GPU-accelerated
//               transform: "translateZ(0)",
//               willChange: "opacity, transform",
//               opacity: 0, // Initial state set by JS
//             }}
//           />
//         ))}
//       </div>

//       {/* Neon scanner - Background elements omitted for brevity */}
//       <div
//         ref={neonScannerRef}
//         className="absolute top-0 left-0 h-full w-28 transform -skew-x-12"
//         style={{
//           zIndex: 20,
//           backgroundImage:
//             "linear-gradient(90deg, transparent 0%, rgba(249,115,22,0.08) 18%, rgba(249,115,22,0.35) 45%, rgba(249,115,22,0.55) 55%, rgba(249,115,22,0.25) 75%, transparent 100%)",
//           filter: "blur(10px)",
//           mixBlendMode: "screen",
//           opacity: 0.2,
//           pointerEvents: "none",
//         }}
//       />

//       {/* Textured angled panel - Background elements omitted for brevity */}
//       <div
//         ref={textureRef}
//         className="absolute top-0 left-0 w-3/5 h-full bg-gray-800/90 origin-top-left hidden lg:block border-r border-orange-600/30"
//         style={{
//           transform: "skewX(-3deg)",
//           backgroundImage: "repeating-linear-gradient(45deg, #0b1220, #0b1220 5px, #111827 5px, #111827 10px)",
//           boxShadow: "20px 0 60px rgba(0,0,0,0.55)",
//           zIndex: 2,
//         }}
//       >
//         {/* Animated vertical line - now controlled by GSAP */}
//         <div
//           ref={textureLineRef}
//           className="absolute top-1/2 left-0 w-1 bg-orange-500 rounded-full shadow-lg"
//           style={{ transform: "translateY(-50%)", height: 0 }} // Added translateY for center origin
//         />
//       </div>

//       {/* Main content - Refactored to use GRID */}
//       <div
//         ref={contentRef}
//         className="relative z-30 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-16 pt-20 pb-14"
//       >
        
//         {/* Left Column: Text Content */}
//         <motion.div 
//             // **CORRECTION:** order-1 for mobile (Text Top), lg:order-1 for laptop (Text Left)
//             className="w-full p-6 md:p-10 lg:pr-16 text-center lg:text-left order-1 lg:order-1" 
//             initial="hidden" 
//             animate="visible" 
//             variants={containerVariants}
//         >
//           <motion.p 
//             className="text-orange-400 font-medium text-sm mb-4 uppercase tracking-widest border-b border-orange-400/30 pb-1 w-fit mx-auto lg:mx-0 mt-4" 
//             variants={itemVariants}
//           >
//             // Full Stack Developer //
//           </motion.p>

//           <motion.h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight" variants={itemVariants}>
//             Hello, I'm <br />
//             <span className="text-orange-500" style={{ textShadow: "0 0 12px rgba(249,115,22,0.4)" }}>
//               GOWTHAM R
//             </span>
//           </motion.h1>

//           <motion.p 
//             // Text justified for cleaner paragraph look
//             className="text-gray-400 text-lg mb-4 max-w-md border-l-4 border-gray-600 pl-4 text-justify mx-auto lg:mx-0" 
//             variants={itemVariants}
//           >
// A motivated individual eager to learn and create useful and creative software solutions. An out-of-the-box
// thinker dedicated to improving performance. Works well in teams and consistently delivers on time.
// Committed to providing high-quality solutions that enhance performance and support data-driven decision
// making
//           </motion.p>

//           <motion.div 
//             // Center buttons on small screens, left align on laptops
//             className="flex space-x-4 justify-center lg:justify-start" 
//             variants={itemVariants}
//           >
//             <motion.button
//               className="px-6 py-3 rounded-lg font-bold text-white transition-all duration-300 transform"
//               style={{ backgroundImage: "linear-gradient(90deg,#f97316,#ea580c)" }}
//               whileHover={{ scale: 1.04, boxShadow: "0 10px 20px rgba(249,115,22,0.32)" }}
//               whileTap={{ scale: 0.96 }}
//             >
//               <i className="fas fa-code mr-2" aria-hidden />
//               View Projects
//             </motion.button>

//             <motion.button
//              ref={Resume}
//               className="px-6 py-3 rounded-lg font-bold text-orange-400 border-2 border-orange-500/50 bg-gray-900 transition-colors duration-300"
//               whileHover={{ scale: 1.04 }}
//               whileTap={{ scale: 0.96 }}
//             >
//               <i className="fas fa-file-pdf mr-2" aria-hidden />
//               Download Resume
//             </motion.button>
//           </motion.div>
//         </motion.div>

//         {/* Right Column: Profile Image Container */}
//         <div 
//             // **CORRECTION:** order-2 for mobile (Image Bottom), lg:order-2 for laptop (Image Right)
//             className="w-full mt-12 lg:mt-0 flex justify-center lg:justify-end p-6 order-2 lg:order-2"
//         >
//           <motion.div
//             ref={profileContainerRef} 
//             className="relative p-3  rounded-xl shadow-2xl border-t border-l border-orange-500/40 w-full max-w-sm mt-2"
//             initial={{ opacity: 0, x: 80 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.95, delay: 0.75, type: "spring", stiffness: 50 }}
//             whileHover={{ y: -6 }}
//             style={{ 
//               boxShadow: "0 0 10px 0px rgba(249, 115, 22, 0.4), 0 0 15px 0px rgba(255, 255, 255, 0.1)" 
//             }}
//           >
//             <div className="relative overflow-hidden rounded-lg border border-gray-700">
//               <img
//                 // 🚀 CHANGE 4: Use the imported asset source here
//                 src={profileImageSrc} 
//                 alt="GOWTHAM R - Full-stack Developer"
//                 className="w-full h-auto object-cover rounded-lg transform hover:scale-[1.02] transition-transform duration-500"
//                 // The onError handler now tries to load the imported asset first, though typically unnecessary for local assets
//                 onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = "https://placehold.co/400x400/374151/ffffff?text=Image+Load+Error"; }}
//               />
//             </div>

//             <div className="flex justify-center space-x-6 p-4">
//               {/* Social links - Framer Motion for Hover & Tap */}
//               {["fab fa-github", "fab fa-linkedin-in", "fab fa-twitter", "fas fa-envelope"].map((ic, idx) => (
//                 <motion.a
//                   key={idx}
//                   href="#"
//                   className="text-gray-400 hover:text-orange-500 transition-colors text-2xl"
//                   whileHover={{ scale: 1.25, y: -4 }}
//                   whileTap={{ scale: 0.9 }}
//                   aria-label="social-link"
//                 >
//                   <i className={ic} />
//                 </motion.a>
//               ))}
//             </div>
//           </motion.div>
//         </div>
//       </div>

//       {/* Font Awesome CDN — keep if you don't have FA in your project bundle */}
//       <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
//     </div>
//   );
// }

import React, { useMemo } from "react";
import { motion } from "framer-motion";
import profileImageSrc from '../../src/assets/G-profile.png';
import Resume from '../assets/Gowtham R _ Resume.pdf';

const generateStars = (count = 250) => {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 2.5 + 0.5,
    duration: 4 + Math.random() * 8,
    delay: Math.random() * 5,
  }));
};

export default function HeroWithStarsV2() {
  const stars = useMemo(() => generateStars(250), []);

  const floatingVariants = {
    animate: {
      y: [0, -20, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const glowPulse = {
    animate: {
      boxShadow: [
        "0 0 20px rgba(249, 115, 22, 0.4)",
        "0 0 50px rgba(249, 115, 22, 0.7)",
        "0 0 20px rgba(249, 115, 22, 0.4)",
      ],
      transition: { duration: 4, repeat: Infinity },
    },
  };

  return (
    <>
      <div className="min-h-screen bg-[#0a0e17] text-white relative overflow-hidden flex items-center justify-center px-6 py-16">
        {/* Animated Stars Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {stars.map((star) => (
            <motion.div
              key={star.id}
              className="absolute rounded-full bg-white"
              style={{
                width: star.size + "px",
                height: star.size + "px",
                left: star.x + "%",
                top: star.y + "%",
                boxShadow: "0 0 8px rgba(255,255,255,0.8)",
              }}
              animate={{
                opacity: [0.2, 1, 0.2],
                scale: [1, 1.4, 1],
              }}
              transition={{
                duration: star.duration,
                repeat: Infinity,
                delay: star.delay,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        {/* Neon Scanner Sweep */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          initial={{ x: "-100%" }}
          animate={{ x: "100%" }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        >
          <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-orange-500/10 to-transparent skew-x-12 blur-xl" />
        </motion.div>

        {/* Textured Angled Panel (Left Side) */}
        <div className="absolute top-0 left-0 w-full lg:w-3/5 h-full bg-gradient-to-br from-gray-900/80 via-gray-950 to-black hidden lg:block">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-900/10 via-transparent to-transparent" />
          <div className="absolute inset-0 opacity-30">
            <div className="h-full w-full bg-gradient-to-br from-transparent via-orange-600/5 to-transparent" />
          </div>
          <motion.div
            className="absolute top-1/2 left-4 w-1 bg-orange-500 rounded-full shadow-2xl shadow-orange-500/50"
            initial={{ height: 0 }}
            animate={{ height: "60%" }}
            transition={{ duration: 1.8, delay: 0.6 }}
            style={{ transform: "translateY(-50%)" }}
          />
        </div>

        {/* Main Hero Card - Floating Center */}
        <motion.div
          className="relative z-10 max-w-5xl w-full mx-auto"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, type: "spring", stiffness: 80 }}
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <motion.div
              className="text-center lg:text-left space-y-8"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.2, delayChildren: 0.8 },
                },
              }}
              initial="hidden"
              animate="visible"
            >
              <motion.p
                className="text-orange-400 font-semibold tracking-widest text-sm uppercase mt-10"
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              >
                Full Stack Developer
              </motion.p>

              <motion.h1
                className="text-5xl md:text-7xl font-black leading-tight"
                variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
              >
                Hi, I'm{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600 drop-shadow-lg">
                  Gowtham R
                </span>
              </motion.h1>

             <motion.p
  className="text-gray-300 text-lg max-w-lg mx-auto lg:mx-0 leading-relaxed"
  style={{ textAlign: "justify" }}
  variants={{
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }}
>
  A motivated individual eager to learn and create useful and creative software
  solutions. An out-of-the-box thinker dedicated to improving performance. Works
  well in teams and consistently delivers on time. Committed to providing
  high-quality solutions that enhance performance and support data-driven
  decision making...
</motion.p>


              <motion.div
                className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start pt-6"
                variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
              >
                <motion.a
                  href="#projects"
                  className="px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-700 text-white font-bold rounded-xl shadow-lg hover:shadow-orange-500/30 transition-all"
                  whileHover={{ scale: 1.05, y: -4 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View My Work
                </motion.a>
                <motion.a
                  href={Resume}
                  download="Gowtham_R_Resume.pdf"
                  className="px-8 py-4 border-2 border-orange-500/60 text-orange-400 font-bold rounded-xl backdrop-blur-sm bg-white/5 hover:bg-white/10 transition-all"
                  whileHover={{ scale: 1.05, borderColor: "#fb923c" }}
                  whileTap={{ scale: 0.95 }}
                >
                  Download CV
                </motion.a>
              </motion.div>
            </motion.div>

            {/* Profile Image with Floating + Glow Effect */}
            <motion.div
              className="flex justify-center lg:justify-end"
              variants={floatingVariants}
              animate="animate"
            >
              <motion.div
                className="relative p-4 rounded-3xl bg-gradient-to-br from-gray-800/50 to-gray-900/80 backdrop-blur-xl border border border-orange-500/30"
                variants={glowPulse}
                animate="animate"
                whileHover={{ scale: 1.04, rotate: 2 }}
              >
                <div className="relative rounded-2xl overflow-hidden border-4 border-orange-500/40 shadow-2xl">
                  <img
                    src={profileImageSrc}
                    alt="Gowtham R"
                    className="w-80 h-80 md:w-96 md:h-96 object-cover rounded-2xl"
                    onError={(e) => {
                      e.currentTarget.src = "https://placehold.co/400x400?text=Gowtham+R";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-2xl" />
                </div>

                {/* Floating Social Icons */}
               <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex gap-5">
  {[
    {
      icon: "github",
      url: "https://github.com/gowtham1007",
      
      style: "bg-gray-900 text-white hover:bg-white hover:text-black border-gray-600"
    },
    {
      icon: "linkedin",
      url: "https://www.linkedin.com/in/gowtham1008/",
      style: "bg-blue-600 text-white hover:bg-blue-500 border-blue-400"
    },
    {
      icon: "instagram",
      url: "https://instagram.com/gowtham._.1008/",
      style:
        "bg-gradient-to-tr from-purple-600 via-pink-500 to-yellow-400 text-white hover:opacity-90 border-pink-300"
    },
   
  ].map((item, i) => (
    <motion.a
      key={item.icon}
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`w-12 h-12 rounded-full flex items-center justify-center border transition-all ${item.style}`}
      whileHover={{ y: -8, scale: 1.2 }}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.4 + i * 0.1 }}
    >
      <i className={`fab fa-${item.icon === "envelope" ? "fas fa-envelope" : item.icon}`}></i>
    </motion.a>
  ))}
</div>

              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* Optional: Subtle grid overlay */}
        <div className="absolute inset-0 pointer-events-none opacity-5">
          <div className="h-full w-full bg-gradient-to-b from-transparent via-orange-500/10 to-transparent" />
        </div>
      </div>

      {/* Font Awesome CDN */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
      />
    </>
  );
}