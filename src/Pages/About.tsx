// // // import "bootstrap/dist/css/bootstrap.min.css";
// // // import { motion } from "framer-motion";

// // // const About = () => {
// // //   // Ultra-smooth staggered spring animation
// // //   const container = {
// // //     hidden: { opacity: 0 },
// // //     visible: {
// // //       opacity: 1,
// // //       transition: {
// // //         staggerChildren: 0.25,
// // //         delayChildren: 0.3,
// // //       },
// // //     },
// // //   };

// // //   const item = {
// // //     hidden: { opacity: 0, y: 70 },
// // //     visible: {
// // //       opacity: 1,
// // //       y: 0,
// // //       transition: {
// // //         type: "spring",
// // //         stiffness: 80,
// // //         damping: 20,
// // //         mass: 1.2,
// // //         restDelta: 0.001,
// // //       },
// // //     },
// // //   };

// // //   const title = {
// // //     hidden: { opacity: 0, y: -60 },
// // //     visible: {
// // //       opacity: 1,
// // //       y: 0,
// // //       transition: {
// // //         type: "spring",
// // //         stiffness: 90,
// // //         damping: 18,
// // //         delay: 0.2,
// // //       },
// // //     },
// // //   };

// // //   return (
// // //     <section className="relative min-h-screen bg-black text-gray-100 overflow-hidden py-24">
// // //       {/* Smooth Floating Orbs - More Elegant */}
// // //       <div className="absolute inset-0 overflow-hidden pointer-events-none">
// // //         <motion.div
// // //           animate={{
// // //             x: [0, 140, 0],
// // //             y: [0, -140, 0],
// // //           }}
// // //           transition={{
// // //             duration: 28,
// // //             repeat: Infinity,
// // //             ease: "easeInOut",
// // //           }}
// // //           className="absolute -top-52 -left-52 w-96 h-96 bg-orange-600 rounded-full filter blur-3xl opacity-30"
// // //         />
// // //         <motion.div
// // //           animate={{
// // //             x: [0, -160, 0],
// // //             y: [0, 120, 0],
// // //           }}
// // //           transition={{
// // //             duration: 32,
// // //             repeat: Infinity,
// // //             ease: "easeInOut",
// // //           }}
// // //           className="absolute -bottom-48 -right-48 w-96 h-96 bg-orange-500 rounded-full filter blur-3xl opacity-25"
// // //         />
// // //         <motion.div
// // //           animate={{
// // //             scale: [1, 1.4, 1],
// // //           }}
// // //           transition={{
// // //             duration: 12,
// // //             repeat: Infinity,
// // //             ease: "easeInOut",
// // //           }}
// // //           className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gray-800 rounded-full filter blur-3xl opacity-15"
// // //         />
// // //       </div>

// // //       {/* Main Content */}
// // //       <motion.div
// // //         variants={container}
// // //         initial="hidden"
// // //         whileInView="visible"
// // //         viewport={{ once: true, margin: "-150px" }}
// // //         className="relative z-10 max-w-5xl mx-auto px-6 text-center"
// // //       >
// // //         {/* Title - Super Smooth */}
// // //         <motion.h2
// // //           variants={title}
// // //           className="text-5xl md:text-7xl font-extrabold mb-16 bg-gradient-to-r from-orange-400 via-orange-500 to-amber-400 bg-clip-text text-transparent 
// // //                      drop-shadow-2xl tracking-tight"
// // //         >
// // //           About Me
// // //         </motion.h2>

// // //         {/* Glass Card */}
// // //         <motion.div
// // //           initial={{ opacity: 0, scale: 0.95 }}
// // //           whileInView={{ opacity: 1, scale: 1 }}
// // //           viewport={{ once: true }}
// // //           transition={{
// // //             duration: 1.2,
// // //             ease: "easeOut",
// // //             delay: 0.4,
// // //           }}
// // //           className="backdrop-blur-xl bg-gray-900/70 border border-gray-800/60 rounded-3xl p-10 md:p-16 shadow-2xl 
// // //                      ring-1 ring-orange-500/20 overflow-hidden"
// // //         >
// // //           <div className="space-y-10 text-lg md:text-xl leading-relaxed">
// // //             <motion.p variants={item} className="text-gray-200">
// // //               Hi, I'm <span className="text-orange-400 font-bold">Gowtham R</span>, a passionate frontend developer based in Coimbatore. I'm in my final year of Computer Science at{" "}
// // //               <span className="text-orange-300 font-semibold">
// // //                 Hindusthan College of Engineering and Technology, Coimbatore
// // //               </span>
// // //               , and I bring over <span className="text-orange-400 font-bold">two years</span> of hands-on experience in modern web development.
// // //             </motion.p>

// // //             <motion.p variants={item} className="text-gray-200">
// // //               My expertise includes{" "}
// // //               <span className="text-orange-400 font-medium">
// // //                 HTML, CSS, JavaScript, React.js, Bootstrap, TailwindCSS, Framer Motion, Firebase, SQL, and MongoDB
// // //               </span>
// // //               , and I thrive on building beautiful, responsive user interfaces that are both functional and delightful to use.
// // //             </motion.p>

// // //             <motion.p variants={item} className="text-gray-300">
// // //               Whether it's crafting personal projects or collaborating in team environments, I strive to deliver clean, efficient code with thoughtful design principles.
// // //             </motion.p>
// // //           </div>

// // //           {/* Button - Extra Smooth Hover */}
// // //           <motion.a
// // //             href="https://portfolio-gowtham1008.onrender.com"
// // //             target="_blank"
// // //             rel="noopener noreferrer"
// // //             initial={{ y: 50, opacity: 0 }}
// // //             whileInView={{ y: 0, opacity: 1 }}
// // //             viewport={{ once: true }}
// // //             transition={{ delay: 1, duration: 0.9, type: "spring", stiffness: 80 }}
// // //             whileHover={{
// // //               scale: 1.1,
// // //               boxShadow: "0 0 40px rgba(251, 146, 60, 0.7)",
// // //               transition: { duration: 0.3 },
// // //             }}
// // //             whileTap={{ scale: 0.95 }}
// // //             className="inline-flex items-center gap-4 mt-14 px-12 py-6 bg-gradient-to-r from-orange-600 to-amber-600 text-white font-bold text-xl rounded-full shadow-2xl border border-orange-400/50"
// // //           >
// // //             Visit My Portfolio
// // //             <motion.svg
// // //               animate={{ x: [0, 5, 0] }}
// // //               transition={{ duration: 1.5, repeat: Infinity }}
// // //               className="w-7 h-7"
// // //               fill="none"
// // //               stroke="currentColor"
// // //               viewBox="0 0 24 24"
// // //             >
// // //               <path strokeLinecap="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
// // //             </motion.svg>
// // //           </motion.a>
// // //         </motion.div>
// // //       </motion.div>
// // //     </section>
// // //   );
// // // };

// // // export default About;


// // import "bootstrap/dist/css/bootstrap.min.css";
// // import { motion } from "framer-motion";
// // import React from "react";
// // // NOTE: For the star effect, you would typically use a CSS file imported here,
// // // or use a utility like 'styled-components' or plain 'style' tags.
// // // For a standalone .jsx component, let's include the keyframes for stars
// // // and a utility component for the lightning flash.

// // // --- CSS/Style Definitions for Stars ---
// // // In a real project, this would be in a separate CSS file (e.g., SpaceBackground.css)
// // const starStyles = {
// //   // Styles for the container holding all stars
// //   starsContainer: {
// //     position: "absolute",
// //     width: "100%",
// //     height: "100%",
// //     background: "transparent",
// //   },
// //   // Base star style
// //   star: {
// //     position: "absolute",
// //     borderRadius: "50%",
// //     backgroundColor: "#ffffff", // White/Twinkling color
// //     boxShadow: "0 0 4px 1px rgba(255, 255, 255, 0.8)",
// //   },
// // };

// // // --- Star Utility Component ---
// // // Generates a random star with a slight twinkle animation
// // const Star = ({ size, top, left, duration }) => (
// //   <motion.div
// //     style={{
// //       ...starStyles.star,
// //       width: size,
// //       height: size,
// //       top: `${top}%`,
// //       left: `${left}%`,
// //     }}
// //     animate={{
// //       opacity: [0.3, 1, 0.3], // Twinkle effect
// //       scale: [1, 1.2, 1],
// //     }}
// //     transition={{
// //       duration: duration,
// //       repeat: Infinity,
// //       ease: "easeInOut",
// //       delay: Math.random() * 2, // Stagger the start time
// //     }}
// //   />
// // );

// // // --- Lightning Flash Component (Framer Motion) ---
// // const LightningFlash = () => (
// //   <motion.div
// //     className="absolute inset-0 z-0 pointer-events-none"
// //     style={{
// //       backgroundColor: "rgba(255, 255, 255, 0.9)", // Bright white flash
// //       mixBlendMode: "overlay", // Makes the flash interact with background colors
// //     }}
// //     initial={{ opacity: 0 }}
// //     animate={{
// //       opacity: [0, 0, 0.8, 0], // Quick flash: invisible -> flash -> invisible
// //     }}
// //     transition={{
// //       duration: 0.1, // Very quick flash
// //       repeat: Infinity,
// //       repeatDelay: Math.random() * 15 + 10, // Flash randomly between 10-25 seconds
// //     }}
// //   />
// // );


// // // --- Main Background Component ---
// // const SpaceBackground = () => {
// //   // Generate 100 stars with random properties
// //   const stars = Array.from({ length: 100 }, (_, i) => ({
// //     key: i,
// //     size: Math.random() * 2 + 1, // 1px to 3px
// //     top: Math.random() * 100,
// //     left: Math.random() * 100,
// //     duration: Math.random() * 3 + 2, // 2s to 5s twinkle duration
// //   }));

// //   return (
// //     <div className="absolute inset-0 overflow-hidden z-0">
// //       {/* 1. Base Dark Background */}
// //       <div className="absolute inset-0 bg-black" />

// //       {/* 2. Twinkling Stars Layer */}
// //       <div style={starStyles.starsContainer}>
// //         {stars.map((star) => (
// //           <Star
// //             key={star.key}
// //             size={star.size}
// //             top={star.top}
// //             left={star.left}
// //             duration={star.duration}
// //           />
// //         ))}
// //       </div>
      
// //       {/* 3. Floating Orbs (Kept from original for depth) */}
// //       <div className="absolute inset-0 overflow-hidden pointer-events-none">
// //         <motion.div
// //           animate={{ x: [0, 140, 0], y: [0, -140, 0] }}
// //           transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
// //           className="absolute -top-52 -left-52 w-96 h-96 bg-orange-600 rounded-full filter blur-3xl opacity-20"
// //         />
// //         <motion.div
// //           animate={{ x: [0, -160, 0], y: [0, 120, 0] }}
// //           transition={{ duration: 32, repeat: Infinity, ease: "easeInOut" }}
// //           className="absolute -bottom-48 -right-48 w-96 h-96 bg-orange-500 rounded-full filter blur-3xl opacity-15"
// //         />
// //         <motion.div
// //           animate={{ scale: [1, 1.4, 1] }}
// //           transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
// //           className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gray-800 rounded-full filter blur-3xl opacity-10"
// //         />
// //       </div>

// //       {/* 4. Lightning Flash Layer */}
// //       <LightningFlash />
// //     </div>
// //   );
// // };


// // // --- Main Component ---
// // const About = () => {
// //   // Existing animation variants
// //   const container = {
// //     hidden: { opacity: 0 },
// //     visible: {
// //       opacity: 1,
// //       transition: {
// //         staggerChildren: 0.25,
// //         delayChildren: 0.3,
// //       },
// //     },
// //   };

// //   const item = {
// //     hidden: { opacity: 0, y: 70 },
// //     visible: {
// //       opacity: 1,
// //       y: 0,
// //       transition: {
// //         type: "spring",
// //         stiffness: 80,
// //         damping: 20,
// //         mass: 1.2,
// //         restDelta: 0.001,
// //       },
// //     },
// //   };

// //   const title = {
// //     hidden: { opacity: 0, y: -60 },
// //     visible: {
// //       opacity: 1,
// //       y: 0,
// //       transition: {
// //         type: "spring",
// //         stiffness: 90,
// //         damping: 18,
// //         delay: 0.2,
// //       },
// //     },
// //   };

// //   return (
// //     <section className="relative min-h-screen bg-black text-gray-100 overflow-hidden py-24">
// //       {/* --- NEW: Space Background Component --- */}
// //       <SpaceBackground />
// //       {/* ------------------------------------- */}

// //       {/* Main Content (Z-index ensures it's above the background) */}
// //       <motion.div
// //         variants={container}
// //         initial="hidden"
// //         whileInView="visible"
// //         viewport={{ once: true, margin: "-150px" }}
// //         className="relative z-10 max-w-5xl mx-auto px-6 text-center"
// //       >
// //         {/* Title - Super Smooth */}
// //         <motion.h2
// //           variants={title}
// //           className="text-5xl md:text-7xl font-extrabold mb-16 bg-gradient-to-r from-orange-400 via-orange-500 to-amber-400 bg-clip-text text-transparent drop-shadow-2xl tracking-tight"
// //         >
// //           About Me
// //         </motion.h2>

// //         {/* Glass Card */}
// //         <motion.div
// //           initial={{ opacity: 0, scale: 0.95 }}
// //           whileInView={{ opacity: 1, scale: 1 }}
// //           viewport={{ once: true }}
// //           transition={{
// //             duration: 1.2,
// //             ease: "easeOut",
// //             delay: 0.4,
// //           }}
// //           className="backdrop-blur-xl bg-gray-900/70 border border-gray-800/60 rounded-3xl p-10 md:p-16 shadow-2xl ring-1 ring-orange-500/20 overflow-hidden"
// //         >
// //           <div className="space-y-10 text-lg md:text-xl leading-relaxed">
// //             <motion.p variants={item} className="text-gray-200">
// //               Hi, I'm <span className="text-orange-400 font-bold">Gowtham R</span>, a passionate frontend developer based in Coimbatore. I'm in my final year of Computer Science at{" "}
// //               <span className="text-orange-300 font-semibold">
// //                 Hindusthan College of Engineering and Technology, Coimbatore
// //               </span>
// //               , and I bring over <span className="text-orange-400 font-bold">two years</span> of hands-on experience in modern web development.
// //             </motion.p>

// //             <motion.p variants={item} className="text-gray-200">
// //               My expertise includes{" "}
// //               <span className="text-orange-400 font-medium">
// //                 HTML, CSS, JavaScript, React.js, Bootstrap, TailwindCSS, Framer Motion, Firebase, SQL, and MongoDB
// //               </span>
// //               , and I thrive on building beautiful, responsive user interfaces that are both functional and delightful to use.
// //             </motion.p>

// //             <motion.p variants={item} className="text-gray-300">
// //               Whether it's crafting personal projects or collaborating in team environments, I strive to deliver clean, efficient code with thoughtful design principles.
// //             </motion.p>
// //           </div>

// //           {/* Button - Extra Smooth Hover */}
// //           <motion.a
// //             href="https://portfolio-gowtham1008.onrender.com"
// //             target="_blank"
// //             rel="noopener noreferrer"
// //             initial={{ y: 50, opacity: 0 }}
// //             whileInView={{ y: 0, opacity: 1 }}
// //             viewport={{ once: true }}
// //             transition={{ delay: 1, duration: 0.9, type: "spring", stiffness: 80 }}
// //             whileHover={{
// //               scale: 1.1,
// //               boxShadow: "0 0 40px rgba(251, 146, 60, 0.7)",
// //               transition: { duration: 0.3 },
// //             }}
// //             whileTap={{ scale: 0.95 }}
// //             className="inline-flex items-center gap-4 mt-14 px-12 py-6 bg-gradient-to-r from-orange-600 to-amber-600 text-white font-bold text-xl rounded-full shadow-2xl border border-orange-400/50"
// //           >
// //             Visit My Portfolio
// //             <motion.svg
// //               animate={{ x: [0, 5, 0] }}
// //               transition={{ duration: 1.5, repeat: Infinity }}
// //               className="w-7 h-7"
// //               fill="none"
// //               stroke="currentColor"
// //               viewBox="0 0 24 24"
// //             >
// //               <path strokeLinecap="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
// //             </motion.svg>
// //           </motion.a>
// //         </motion.div>
// //       </motion.div>
// //     </section>
// //   );
// // };

// // export default About;



// import "bootstrap/dist/css/bootstrap.min.css";
// import { motion } from "framer-motion";
// import React from "react";

// // Letter";

// // Split text into letters for per-letter animation
// const AnimatedText = ({ children }: { children: string }) => {
//   return (
//     <>
//       {children.split("").map((char, i) => (
//         <motion.span
//           key={i}
//           initial={{ opacity: 0, y: 100, rotateX: -90 }}
//           whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
//           viewport={{ once: true }}
//           transition={{
//             duration: 0.8,
//             delay: i * 0.03,
//             type: "spring",
//             stiffness: 120,
//             damping: 15,
//           }}
//           className="inline-block"
//         >
//           {char === " " ? "\u00A0" : char}
//         </motion.span>
//       ))}
//     </>
//   );
// };

// const About = () => {
//   return (
//     <section className="relative min-h-screen bg-black text-gray-100 overflow-hidden">
//       {/* === DYNAMIC SPLITTING & MORPHING BACKGROUND === */}
//       <div className="absolute inset-0">
//         {/* Morphing Blob 1 - Orange */}
//         <motion.div
//           animate={{
//             borderRadius: ["40%50", "30% 70%", "70% 30%", "50%"],
//             x: [0, 200, -100, 0],
//             y: [0, -150, 100, 0],
//             scale: [1, 1.4, 0.9, 1.2],
//           }}
//           transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
//           className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-orange-600 to-orange-800 rounded-full filter blur-3xl opacity-40"
//         />

//         {/* Splitting Blob 2 - Grey */}
//         <motion.div
//           animate={{
//             scale: [1, 1.6, 1],
//             x: [0, -300, 200, 0],
//             y: [0, 200, -200, 0],
//           }}
//           transition={{ duration: 24, repeat: Infinity }}
//           className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-gray-700 to-gray-900 rounded-full filter blur-3xl opacity-30"
//         />

//         {/* Pulsing Center Core */}
//         <motion.div
//           animate={{
//             scale: [1, 1.3, 1],
//             boxShadow: [
//               "0 0 60px rgba(251,146,60,0.3)",
//               "0 0 120px rgba(251,146,60,0.8)",
//               "0 0 60px rgba(251,146,60,0.3)",
//             ],
//           }}
//           transition={{ duration: 6, repeat: Infinity }}
//           className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-orange-500/20 rounded-full blur-2xl"
//         />

//         {/* Neon Grid Lines - Moving */}
//         <div className="absolute inset-0 opacity-20">
//           <motion.div
//             animate={{ x: [-100, 100], y: [-100, 100] }}
//             transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
//             className="h-full w-full bg-gradient-to-r from-transparent via-orange-500 to-transparent blur-xl"
//           />
//         </div>

//         {/* Floating Particles */}
//         {[...Array(12)].map((_, i) => (
//           <motion.div
//             key={i}
//             initial={{ opacity: 0 }}
//             animate={{
//               y: [1000, -200],
//               x: Math.sin(i) * 300,
//               opacity: [0, 0.8, 0],
//             }}
//             transition={{
//               duration: 15 + i,
//               repeat: Infinity,
//               delay: i * 1.5,
//               ease: "linear",
//             }}
//             className="absolute w-1 h-1 bg-orange-400 rounded-full"
//             style={{ left: `${20 + i * 6}%` }}
//           />
//         ))}
//       </div>

//       {/* === CONTENT - FLOATING DIRECTLY ON BACKGROUND === */}
//       <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 py-24 text-center">
//         {/* Title - Letter by Letter */}
//         <motion.h2 className="text-6xl md:text-8xl font-black mb-16 tracking-tight">
//           <AnimatedText>About Me</AnimatedText>
//         </motion.h2>

//         <div className="max-w-4xl space-y-12 text-xl md:text-2xl leading-relaxed font-light">
//           {/* Paragraph 1 */}
//           <motion.p
//             initial={{ opacity: 0, y: 60 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.6, duration: 1.2, ease: "easeOut" }}
//             className="text-gray-300"
//           >
//             Hi, I'm{" "}
//             <span className="text-orange-400 font-bold text-3xl md:text-4xl">
//               Gowtham R
//             </span>
//             , a passionate frontend developer and Fullstack developer.
//           </motion.p>

//           {/* Paragraph 2 */}
//           <motion.p
//             initial={{ opacity: 0, y: 60 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.9, duration: 1.4 }}
//             className="text-gray-400 max-w-3xl mx-auto"
//           >
//             I'm in my final year of Computer Science at{" "}
//             <span className="text-orange-300 font-medium">
//               Hindusthan College of Engineering and Technology, Coimbatore
//             </span>
//             , and I bring over{" "}
//             <span className="text-orange-400 font-bold">one years</span> of hands-on experience in modern web development.
//           </motion.p>

//           {/* Skills - Highlighted */}
//           <motion.p
//             initial={{ opacity: 0, scale: 0.9 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             viewport={{ once: true }}
//             transition={{ delay: 1.3, duration: 1.2 }}
//             className="text-gray-300"
//           >
//             My expertise includes{" "}
//             <span className="text-orange-400 font-semibold text-2xl">
//              Html . Css . Bootstrap . React.js · Tailwind · Framer Motion · Firebase · MongoDB . SQl
//             </span>{" "}
//              and building beautiful, responsive interfaces that feel alive.
//           </motion.p>

//           {/* Final Line 4 */}
//           <motion.p
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: 1.6, duration: 1 }}
//             className="text-gray-500 italic"
//           >
//             Clean code. Thoughtful design. Unforgettable experiences.
//           </motion.p>
//         </div>

//         {/* Glowing CTA Button */}
//         <motion.a
//           href=""
//           target="_blank"
//           rel="noopener noreferrer"
//           initial={{ scale: 0, opacity: 0 }}
//           whileInView={{ scale: 1, opacity: 1 }}
//           viewport={{ once: true }}
//           transition={{ delay: 2, duration: 1.2, type: "spring", stiffness: 100 }}
//           whileHover={{
//             scale: 1.15,
//             boxShadow: "0 0 60px rgba(251,146,60,0.9)",
//             textShadow: "0 0 20px rgba(251,146,60,1)",
//           }}
//           whileTap={{ scale: 0.95 }}
//           className="mt-20 px-12 py-6 bg-orange-600/20 backdrop-blur-md border-2 border-orange-500 rounded-full text-orange-300 font-bold text-xl shadow-2xl hover:bg-orange-600/40 transition-all duration-500"
//         >
//           Enter My Achievements →
//         </motion.a>
//       </div>
//     </section>
//   );
// };

// export default About;



import "bootstrap/dist/css/bootstrap.min.css";
import { motion } from "framer-motion";
import React from "react";

// --- Blinking Star Component ---
const BlinkingStar = ({ delay, duration, size, top, left }: { delay: number, duration: number, size: string, top: string, left: string }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: [0, 1, 0] }}
    transition={{
      delay: delay,
      duration: duration,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut",
    }}
    className={`absolute ${size} bg-white rounded-full shadow-lg shadow-white/80`}
    style={{ top: top, left: left }}
  />
);

// --- Animated Text Component (Updated Animation) ---
// Split text into letters for per-letter animation
const AnimatedText = ({ children }: { children: string }) => {
  return (
    <>
      {children.split("").map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 30 }} // Starts transparent and slightly below
          whileInView={{ opacity: 1, y: 0 }} // Fades in and slides up
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            delay: i * 0.05, // Staggered delay for typewriter effect
            type: "spring",
            stiffness: 100, // Make it springy
            damping: 10,
          }}
          className="inline-block"
        >
          {/* Use non-breaking space for actual spaces */}
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </>
  );
};

// --- About Component ---
const About = () => {
  // Array of random star properties for a non-uniform field
  const starData = [...Array(40)].map(() => ({
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    size: Math.random() < 0.2 ? 'w-1 h-1' : 'w-0.5 h-0.5', // Few larger stars
    delay: Math.random() * 5, // Random initial delay
    duration: 1.5 + Math.random() * 2, // Random blink duration
  }));

  return (
    <section className="relative min-h-screen bg-black text-gray-100 overflow-hidden">
      {/* === DYNAMIC SPLITTING & MORPHING BACKGROUND === */}
      <div className="absolute inset-0">
        {/* Blinking Stars */}
        {starData.map((star, i) => (
          <BlinkingStar
            key={i}
            delay={star.delay}
            duration={star.duration}
            size={star.size}
            top={star.top}
            left={star.left}
          />
        ))}

        {/* Morphing Blob 1 - Orange */}
        <motion.div
          animate={{
            borderRadius: ["40%50", "30% 70%", "70% 30%", "50%"],
            x: [0, 200, -100, 0],
            y: [0, -150, 100, 0],
            scale: [1, 1.4, 0.9, 1.2],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-orange-600 to-orange-800 rounded-full filter blur-3xl opacity-40"
        />

        {/* Splitting Blob 2 - Grey */}
        <motion.div
          animate={{
            scale: [1, 1.6, 1],
            x: [0, -300, 200, 0],
            y: [0, 200, -200, 0],
          }}
          transition={{ duration: 24, repeat: Infinity }}
          className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-gray-700 to-gray-900 rounded-full filter blur-3xl opacity-30"
        />

        {/* Pulsing Center Core */}
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            boxShadow: [
              "0 0 60px rgba(251,146,60,0.3)",
              "0 0 120px rgba(251,146,60,0.8)",
              "0 0 60px rgba(251,146,60,0.3)",
            ],
          }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-orange-500/20 rounded-full blur-2xl"
        />

        {/* Neon Grid Lines - Moving */}
        <div className="absolute inset-0 opacity-20">
          <motion.div
            animate={{ x: [-100, 100], y: [-100, 100] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="h-full w-full bg-gradient-to-r from-transparent via-orange-500 to-transparent blur-xl"
          />
        </div>

        {/* Floating Particles */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{
              y: [1000, -200],
              x: Math.sin(i) * 300,
              opacity: [0, 0.8, 0],
            }}
            transition={{
              duration: 15 + i,
              repeat: Infinity,
              delay: i * 1.5,
              ease: "linear",
            }}
            className="absolute w-1 h-1 bg-orange-400 rounded-full"
            style={{ left: `${20 + i * 6}%` }}
          />
        ))}
      </div>

      {/* === CONTENT - FLOATING DIRECTLY ON BACKGROUND === */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 py-24 text-center">
        {/* Title - Letter by Letter (New Animation) */}
        <motion.h2 className="text-6xl md:text-8xl font-black mb-16 tracking-tight">
          <AnimatedText>About Me</AnimatedText>
        </motion.h2>

        <div className="max-w-4xl space-y-12 text-xl md:text-2xl leading-relaxed font-light">
          {/* Paragraph 1 (New Animation) */}
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 1, type: "spring", stiffness: 80, damping: 10 }}
            className="text-gray-300"
          >
            Hi, I'm{" "}
            <span className="text-orange-400 font-bold text-3xl md:text-4xl">
              Gowtham R
            </span>
            , a passionate frontend developer and Fullstack developer.
          </motion.p>

          {/* Paragraph 2 (New Animation) */}
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.9, duration: 1, type: "spring", stiffness: 80, damping: 10 }}
            className="text-gray-400 max-w-3xl mx-auto"
          >
            I'm in my final year of Computer Science at{" "}
            <span className="text-orange-300 font-medium">
              Hindusthan College of Engineering and Technology, Coimbatore
            </span>
            , and I bring over{" "}
            <span className="text-orange-400 font-bold">one years</span> of hands-on experience in modern web development.
          </motion.p>

          {/* Skills - Highlighted (New Animation) */}
          <motion.p
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="text-gray-300"
          >
            My expertise includes{" "}
            <span className="text-orange-400 font-semibold text-2xl">
              Html . Css . Bootstrap . React.js · Tailwind · Framer Motion · Firebase · MongoDB . SQl
            </span>{" "}
            and building beautiful, responsive interfaces that feel alive.
          </motion.p>
<motion.p
  initial={{ opacity: 0, scale: 0.95 }}
  whileInView={{ opacity: 1, scale: 1 }}
  viewport={{ once: true }}
  transition={{ delay: 1.2, duration: 0.8 }}
  className="text-gray-300"
>
  I have participated in{" "}
  <span className="text-orange-400 font-semibold text-2xl">
    six major hackathons
  </span>
  , securing{" "}
  <span className="text-orange-400 font-semibold text-2xl">
    first place in SIH 2024
  </span>{" "}
  and reaching the finals in{" "}
  <span className="text-orange-400 font-semibold text-2xl">
    Uyir Hackathon 2025
  </span>
  . I also took part in SIH 2025, MSME 4.0, Lablab.ai, and Hack2Skill, gaining strong technical and teamwork experience.
</motion.p>

<motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 1.3, duration: 1 }}
            className="text-orange-300 font-semibold text-2xl"
          >
            I was also invited by <span className="text-orange-400 font-bold">Google AI Labs</span> in Coimbatore to participate in the <span className="text-orange-400 font-bold">Hack2Skill Workshop</span>, where I gained advanced hands-on experience with cutting-edge AI tools.
          </motion.p>

          {/* Final Line 4 (New Animation) */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="text-gray-500 italic"
          >
            Clean code. Thoughtful design. Unforgettable expertise.
          </motion.p>
        </div>

        {/* Glowing CTA Button (Preserved Animation but adjusted delay) */}
       <motion.a
  href="#achieve"
  initial={{ opacity: 0, scale: 0.8 }}
  whileInView={{ opacity: 1, scale: 1 }}
  viewport={{ once: true }}
  transition={{ delay: 1.8, duration: 1.2, ease: "easeOut" }}
  style={{
    background:
      "linear-gradient(45deg, transparent 45%, rgba(251,146,60,0.3) 50%, transparent 55%)",
    backgroundSize: "300% 300%",
  }}
  animate={{
    backgroundPosition: ["0% 50%", "100% 50%"],
  }}
  // animation timing goes here
  transition={{
    delay: 1.8,
    duration: 1.2,
    ease: "easeOut",
    // animation-specific transition
    backgroundPosition: {
      duration: 4,
      repeat: Infinity,
      ease: "linear",
    },
  }}
  whileHover={{
    scale: 1.1,
    background: "rgba(251,146,60,0.4)",
    boxShadow: "0 0 30px rgba(251,146,60,0.8)",
  }}
  whileTap={{ scale: 0.95 }}
  className="mt-20 px-12 py-6 bg-orange-600/20 backdrop-blur-md border-2 border-orange-500 rounded-full text-orange-300 font-bold text-xl shadow-2xl transition-all duration-500"
>
  Enter My Achievements →
</motion.a>

      </div>
    </section>
  );
};

export default About;