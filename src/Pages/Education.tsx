// // // // import { motion } from "framer-motion";
// // // // import { GraduationCap, Calendar, Code2, Trophy } from "lucide-react";

// // // // export default function Education() {
// // // //   const containerVariants = {
// // // //     hidden: { opacity: 0 },
// // // //     visible: {
// // // //       opacity: 1,
// // // //       transition: {
// // // //         staggerChildren: 0.3,
// // // //         delayChildren: 0.2,
// // // //       },
// // // //     },
// // // //   };

// // // //   const itemVariants = {
// // // //     hidden: { y: 60, opacity: 0 },
// // // //     visible: {
// // // //       y: 0,
// // // //       opacity: 1,
// // // //       transition: {
// // // //         type: "spring",
// // // //         stiffness: 100,
// // // //         damping: 12,
// // // //       },
// // // //     },
// // // //   };

// // // //   const glowVariants = {
// // // //     hover: {
// // // //       boxShadow: "0 0 40px rgba(251, 146, 60, 0.6)",
// // // //       scale: 1.02,
// // // //       transition: { duration: 0.4 },
// // // //     },
// // // //   };

// // // //   return (
// // // //     <section className="min-h-screen bg-black text-gray-100 py-20 px-6 overflow-hidden">
// // // //       <div className="max-w-6xl mx-auto">
// // // //         {/* Section Header */}
// // // //         <motion.div
// // // //           initial={{ opacity: 0, y: -40 }}
// // // //           whileInView={{ opacity: 1, y: 0 }}
// // // //           viewport={{ once: true }}
// // // //           transition={{ duration: 0.8 }}
// // // //           className="text-center mb-16"
// // // //         >
// // // //           <motion.div
// // // //             className="inline-flex items-center gap-3 px-6 py-3 bg-orange-600/10 border border-orange-500/30 rounded-full backdrop-blur-md mb-6"
// // // //             whileHover={{ scale: 1.05, backgroundColor: "rgba(251,146,60,0.2)" }}
// // // //           >
// // // //             <GraduationCap className="w-6 h-6 text-orange-400" />
// // // //             <span className="text-orange-300 font-medium">Education Journey</span>
// // // //           </motion.div>
// // // //           <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-100 to-gray-400 bg-clip-text text-transparent">
// // // //             Academic Foundation
// // // //           </h2>
// // // //           <p className="mt-4 text-gray-400 text-lg max-w-2xl mx-auto">
// // // //              real-world experience
// // // //           </p>
// // // //         </motion.div>

// // // //         {/* Main Education Card */}
// // // //         <motion.div
// // // //           variants={containerVariants}
// // // //           initial="hidden"
// // // //           whileInView="visible"
// // // //           viewport={{ once: true, margin: "-100px" }}
// // // //           className="relative"
// // // //         >
// // // //           {/* Floating Background Glow */}
// // // //           <motion.div
// // // //             animate={{
// // // //               background: [
// // // //                 "radial-gradient(circle at 30% 50%, rgba(251,146,60,0.15) 0%, transparent 50%)",
// // // //                 "radial-gradient(circle at 70% 50%, rgba(251,146,60,0.15) 0%, transparent 50%)",
// // // //                 "radial-gradient(circle at 30% 50%, rgba(251,146,60,0.15) 0%, transparent 50%)",
// // // //               ],
// // // //             }}
// // // //             transition={{ duration: 10, repeat: Infinity }}
// // // //             className="absolute inset-0 -z-10"
// // // //           />

// // // //           <motion.div
// // // //             variants={itemVariants}
// // // //             whileHover="hover"
// // // //             variants={glowVariants}
// // // //             className="relative group"
// // // //           >
// // // //             <div className="bg-gradient-to-br from-gray-900 via-gray-900 to-black border border-gray-800 rounded-3xl p-10 backdrop-blur-xl shadow-2xl overflow-hidden">
// // // //               {/* Orange Accent Line */}
// // // //               <motion.div
// // // //                 initial={{ width: 0 }}
// // // //                 whileInView={{ width: "100px" }}
// // // //                 transition={{ duration: 1.2, delay: 0.5 }}
// // // //                 className="h-1 bg-orange-500 rounded-full mb-8"
// // // //               />

// // // //               <div className="grid md:grid-cols-3 gap-8 items-start">
// // // //                 {/* Left - Icon & Timeline */}
// // // //                 <div className="text-center md:text-left">
// // // //                   <motion.div
// // // //                     whileHover={{ rotate: 360 }}
// // // //                     transition={{ duration: 0.8 }}
// // // //                     className="inline-block p-6 bg-orange-600/10 rounded-2xl border border-orange-500/30 backdrop-blur-md mb-6"
// // // //                   >
// // // //                     <GraduationCap className="w-16 h-16 text-orange-400" />
// // // //                   </motion.div>

// // // //                   <div className="space-y-4">
// // // //                     <div className="flex items-center gap-3 text-orange-400">
// // // //                       <Calendar className="w-5 h-5" />
// // // //                       <span className="text-sm font-medium">September 2022 – May 2026</span>
// // // //                     </div>
// // // //                     <div className="flex items-center gap-3 text-gray-400">
// // // //                       <Trophy className="w-5 h-5" />
// // // //                       <span className="text-sm">Active in Hackathons</span>
// // // //                     </div>
// // // //                   </div>
// // // //                 </div>

// // // //                 {/* Center - Main Content */}
// // // //                 <div className="md:col-span-2">
// // // //                   <motion.h3
// // // //                     initial={{ opacity: 0, x: -30 }}
// // // //                     whileInView={{ opacity: 1, x: 0 }}
// // // //                     transition={{ delay: 0.6 }}
// // // //                     className="text-3xl md:text-4xl font-bold text-white mb-3"
// // // //                   >
// // // //                     B.E. in Computer Science
// // // //                     <span className="block text-orange-400">and Engineering</span>
// // // //                   </motion.h3>

// // // //                   <motion.div
// // // //                     initial={{ opacity: 0, x: -30 }}
// // // //                     whileInView={{ opacity: 1, x: 0 }}
// // // //                     transition={{ delay: 0.8 }}
// // // //                     className="text-xl text-gray-300 mb-6 font-medium"
// // // //                   >
// // // //                     Hindusthan College of Engineering and Technology
// // // //                   </motion.div>

// // // //                   <p className="text-gray-400 leading-relaxed text-lg mb-8 max-w-3xl">
// // // //                     Pursuing undergraduate education with a focus on modern software development, 
// // // //                     system design, and engineering fundamentals. Actively participating in technical 
// // // //                     events, hackathons, and competitive programming to apply theoretical knowledge 
// // // //                     in real-world scenarios.
// // // //                   </p>

// // // //                   {/* Skill Tags */}
                  
// // // //                 </div>
// // // //               </div>

// // // //               {/* Bottom Orange Glow Line */}
// // // //               <motion.div
// // // //                 className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-orange-600 to-transparent"
// // // //                 initial={{ width: 0 }}
// // // //                 whileInView={{ width: "50%" }}
// // // //                 transition={{ duration: 1.5, delay: 1 }}
// // // //               />
// // // //             </div>
// // // //           </motion.div>
// // // //         </motion.div>
// // // //       </div>
// // // //     </section>
// // // //   );
// // // // }


// // // import { motion } from "framer-motion";
// // // import { GraduationCap, Calendar, Code2, Trophy } from "lucide-react";

// // // export default function Education() {
// // //   // Starfield animation variants
// // //   const starVariants = {
// // //     initial: { opacity: 0.2, scale: 0 },
// // //     animate: (i: number) => ({
// // //       opacity: [0.2, 1, 0.2],
// // //       scale: [0.8, 1.2, 0.8],
// // //       transition: {
// // //         duration: 3 + i * 0.5,
// // //         repeat: Infinity,
// // //         delay: i * 0.3,
// // //         ease: "easeInOut",
// // //       },
// // //     }),
// // //   };

// // //   return (
// // //     <section className="min-h-screen relative bg-black text-gray-100 py-20 px-6 overflow-hidden">
// // //       {/* Animated Starfield Background */}
// // //       <div className="absolute inset-0 overflow-hidden">
// // //         {[...Array(50)].map((_, i) => (
// // //           <motion.div
// // //             key={i}
// // //             custom={i}
// // //             variants={starVariants}
// // //             initial="initial"
// // //             animate="animate"
// // //             className="absolute w-1 h-1 bg-white rounded-full"
// // //             style={{
// // //               top: `${Math.random() * 100}%`,
// // //               left: `${Math.random() * 100}%`,
// // //               boxShadow: "0 0 8px rgba(255,255,255,0.8)",
// // //             }}
// // //           />
// // //         ))}
// // //       </div>

// // //       {/* Floating Nebula Glows */}
// // //       <motion.div
// // //         animate={{
// // //           backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
// // //         }}
// // //         transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
// // //         className="absolute inset-0 opacity-30"
// // //         style={{
// // //           background: `
// // //             radial-gradient(circle at 20% 80%, rgba(251, 146, 60, 0.25) 0%, transparent 50%),
// // //             radial-gradient(circle at 80% 20%, rgba(147, 51, 234, 0.2) 0%, transparent 50%),
// // //             radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.15) 0%, transparent 60%)
// // //           `,
// // //           backgroundSize: "200% 200%",
// // //         }}
// // //       />

// // //       {/* Moving Light Streaks */}
// // //       <motion.div
// // //         animate={{ x: [-1000, 2000] }}
// // //         transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
// // //         className="absolute top-1/3 -left-96 w-96 h-1 bg-gradient-to-r from-transparent via-orange-400 to-transparent opacity-20 blur-xl"
// // //       />
// // //       <motion.div
// // //         animate={{ x: [2000, -1000] }}
// // //         transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
// // //         className="absolute bottom-1/4 -right-96 w-96 h-1 bg-gradient-to-l from-transparent via-purple-500 to-transparent opacity-20 blur-xl"
// // //       />

// // //       <div className="max-w-6xl mx-auto relative z-10">
// // //         {/* Section Header - Cosmic Glow */}
// // //         <motion.div
// // //           initial={{ opacity: 0, y: -60 }}
// // //           whileInView={{ opacity: 1, y: 0 }}
// // //           viewport={{ once: true }}
// // //           transition={{ duration: 1.2, type: "spring" }}
// // //           className="text-center mb-20"
// // //         >
// // //           <motion.div
// // //             animate={{ 
// // //               textShadow: [
// // //                 "0 0 20px rgba(251,146,60,0.8)",
// // //                 "0 0 40px rgba(251,146,60,1)",
// // //                 "0 0 20px rgba(251,146,60,0.8)",
// // //               ]
// // //             }}
// // //             transition={{ duration: 4, repeat: Infinity }}
// // //             className="inline-flex items-center gap-4 px-8 py-4 bg-white/5 border border-orange-500/40 rounded-full backdrop-blur-xl mb-8"
// // //             whileHover={{ scale: 1.1, borderColor: "rgba(251,146,60,0.8)" }}
// // //           >
// // //             <GraduationCap className="w-8 h-8 text-orange-400 animate-pulse" />
// // //             <span className="text-orange-300 font-bold text-xl tracking-wider">Education Journey</span>
// // //           </motion.div>

// // //           <h2 className="text-6xl md:text-8xl font-extrabold bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600 bg-clip-text text-transparent animate-pulse">
// // //             Academic Foundation
// // //           </h2>
// // //           <p className="mt-6 text-gray-300 text-xl max-w-2xl mx-auto opacity-90">
// // //             real-world experience
// // //           </p>
// // //         </motion.div>

// // //         {/* Main Card - Floating in Space */}
// // //         <motion.div
// // //           initial={{ opacity: 0, y: 100, rotateX: -20 }}
// // //           whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
// // //           viewport={{ once: true }}
// // //           transition={{ duration: 1.4, type: "spring", stiffness: 80 }}
// // //           className="relative"
// // //         >
// // //           {/* Orbiting Ring Accent */}
// // //           <motion.div
// // //             animate={{ rotate: 360 }}
// // //             transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
// // //             className="absolute -inset-20 border border-orange-500/20 rounded-full opacity-30"
// // //             style={{ filter: "blur(1px)" }}
// // //           />

// // //           {/* Glowing Card */}
// // //           <motion.div
// // //             whileHover={{ 
// // //               scale: 1.03,
// // //               boxShadow: "0 0 80px rgba(251, 146, 60, 0.5), 0 0 140px rgba(251, 146, 60, 0.3)"
// // //             }}
// // //             className="relative bg-gradient-to-br from-gray-900/90 via-purple-900/20 to-black/90 border border-purple-500/30 rounded-3xl p-12 backdrop-blur-2xl shadow-2xl overflow-hidden"
// // //             style={{
// // //               boxShadow: "0 0 60px rgba(251, 146, 60, 0.3), inset 0 0 60px rgba(147, 51, 234, 0.1)",
// // //             }}
// // //           >
// // //             {/* Pulsating Top Glow Line */}
// // //             <motion.div
// // //               animate={{ opacity: [0.6, 1, 0.6] }}
// // //               transition={{ duration: 3, repeat: Infinity }}
// // //               className="h-1 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 rounded-full mb-10"
// // //             />

// // //             <div className="grid md:grid-cols-3 gap-10 items-start">
// // //               {/* Left - Icon & Timeline */}
// // //               <div className="text-center md:text-left">
// // //                 <motion.div
// // //                   animate={{ y: [0, -15, 0] }}
// // //                   transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
// // //                   className="inline-block p-8 bg-gradient-to-br from-orange-600/20 to-purple-600/20 rounded-3xl border border-orange-500/40 backdrop-blur-md mb-8"
// // //                   whileHover={{ rotate: 360, scale: 1.2 }}
// // //                   transition={{ duration: 1 }}
// // //                 >
// // //                   <GraduationCap className="w-20 h-20 text-orange-400 drop-shadow-glow" />
// // //                 </motion.div>

// // //                 <div className="space-y-6">
// // //                   <div className="flex items-center gap-4 text-orange-300">
// // //                     <Calendar className="w-6 h-6 animate-pulse" />
// // //                     <span className="text-lg font-medium">September 2022 – May 2026</span>
// // //                   </div>
// // //                   <div className="flex items-center gap-4 text-purple-300">
// // //                     <Trophy className="w-6 h-6 animate-bounce" />
// // //                     <span className="text-lg">Active in Hackathons</span>
// // //                   </div>
// // //                 </div>
// // //               </div>

// // //               {/* Center - Main Content */}
// // //               <div className="md:col-span-2">
// // //                 <motion.h3
// // //                   initial={{ opacity: 0, x: -50 }}
// // //                   whileInView={{ opacity: 1, x: 0 }}
// // //                   transition={{ delay: 0.6, duration: 1 }}
// // //                   className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight"
// // //                 >
// // //                   B.E. in Computer Science
// // //                   <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-500">
// // //                     and Engineering
// // //                   </span>
// // //                 </motion.h3>

// // //                 <motion.div
// // //                   initial={{ opacity: 0, x: -50 }}
// // //                   whileInView={{ opacity: 1, x: 0 }}
// // //                   transition={{ delay: 0.8, duration: 1 }}
// // //                   className="text-2xl text-gray-200 mb-8 font-semibold"
// // //                 >
// // //                   Hindusthan College of Engineering and Technology
// // //                 </motion.div>

// // //                 <p className="text-gray-300 leading-relaxed text-lg mb-10 max-w-3xl">
// // //                   Pursuing undergraduate education with a focus on modern software development, 
// // //                   system design, and engineering fundamentals. Actively participating in technical 
// // //                   events, hackathons, and competitive programming to apply theoretical knowledge 
// // //                   in real-world scenarios.
// // //                 </p>
// // //               </div>
// // //             </div>

// // //             {/* Bottom Pulsating Glow */}
// // //             <motion.div
// // //               animate={{ 
// // //                 backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
// // //                 opacity: [0.7, 1, 0.7]
// // //               }}
// // //               transition={{ duration: 8, repeat: Infinity }}
// // //               className="absolute bottom-0 left-0 h-2 w-full bg-gradient-to-r from-orange-600 via-purple-600 to-transparent blur-md"
// // //               style={{ backgroundSize: "200% 100%" }}
// // //             />
// // //           </motion.div>
// // //         </motion.div>
// // //       </div>

// // //       <style jsx>{`
// // //         @keyframes glow {
// // //           0%, 100% { text-shadow: 0 0 20px rgba(251,146,60,0.8); }
// // //           50% { text-shadow: 0 0 40px rgba(251,146,60,1), 0 0 60px rgba(251,146,60,0.8); }
// // //         }
// // //         .drop-shadow-glow {
// // //           filter: drop-shadow(0 0 20px rgba(251,146,60,0.8));
// // //         }
// // //       `}</style>
// // //     </section>
// // //   );
// // // }

// // import { motion } from "framer-motion";
// // import { GraduationCap, Calendar, Trophy } from "lucide-react";

// // export default function Education() {
// //   // Twinkling stars with realistic flicker
// //   const starTwinkle = (i: number) => ({
// //     opacity: [0.3, 1, 0.3],
// //     scale: [0.8, 1.3, 0.8],
// //     transition: {
// //       duration: 2.5 + Math.random() * 2,
// //       repeat: Infinity,
// //       delay: i * 0.15,
// //       ease: "easeInOut",
// //     },
// //   });

// //   return (
// //     <section className="min-h-screen relative bg-black text-gray-100 py-20 px-6 overflow-hidden">
// //       {/* Animated Noise Texture Background */}
// //       <div className="absolute inset-0 opacity-20">
// //         <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-950" />
// //         <motion.div
// //           animate={{ opacity: [0.03, 0.06, 0.03] }}
// //           transition={{ duration: 8, repeat: Infinity }}
// //           className="absolute inset-0"
// //           style={{
// //             backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='256' height='256' filter='url(%23noise)' opacity='0.4'/%3E%3C/svg%3E")`,
// //           }}
// //         />
// //       </div>

// //       {/* Twinkling Stars */}
// //       {[...Array(60)].map((_, i) => (
// //         <motion.div
// //           key={i}
// //           initial={{ opacity: 0 }}
// //           animate={starTwinkle(i)}
// //           className="absolute w-1 h-1 bg-white rounded-full"
// //           style={{
// //             top: `${Math.random() * 100}%`,
// //             left: `${Math.random() * 100}%`,
// //             boxShadow: "0 0 12px 2px rgba(255, 255, 255, 0.9)",
// //           }}
// //         />
// //       ))}

// //       {/* Moving Orange Lightning Streaks */}
// //       <motion.div
// //         animate={{ x: [-1200, 2200], y: [-100, 100] }}
// //         transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
// //         className="absolute top-32 w-96 h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-60 blur-2xl"
// //       />
// //       <motion.div
// //         animate={{ x: [2200, -1200], y: [100, -100] }}
// //         transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
// //         className="absolute bottom-40 w-96 h-1 bg-gradient-to-r from-transparent via-orange-400 to-transparent opacity-50 blur-2xl"
// //       />

// //       {/* Pulsing Orange Energy Orbs */}
// //       <motion.div
// //         animate={{
// //           scale: [1, 1.4, 1],
// //           opacity: [0.1, 0.3, 0.1],
// //         }}
// //         transition={{ duration: 10, repeat: Infinity }}
// //         className="absolute top-1/3 left-1/4 w-96 h-96 bg-orange-500 rounded-full blur-3xl opacity-20"
// //       />
// //       <motion.div
// //         animate={{
// //           scale: [1.2, 0.8, 1.2],
// //           opacity: [0.15, 0.25, 0.15],
// //         }}
// //         transition={{ duration: 14, repeat: Infinity }}
// //         className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-orange-600 rounded-full blur-3xl opacity-10"
// //       />

// //       <div className="max-w-6xl mx-auto relative z-10">
// //         {/* Header */}
// //         <motion.div
// //           initial={{ opacity: 0, y: -80 }}
// //           whileInView={{ opacity: 1, y: 0 }}
// //           viewport={{ once: true }}
// //           transition={{ duration: 1, type: "spring", stiffness: 100 }}
// //           className="text-center mb-20"
// //         >
// //           <motion.div
// //             animate={{ 
// //               textShadow: [
// //                 "0 0 20px rgba(251,146,60,0.6)",
// //                 "0 0 50px rgba(251,146,60,1)",
// //                 "0 0 20px rgba(251,146,60,0.6)"
// //               ]
// //             }}
// //             transition={{ duration: 3, repeat: Infinity }}
// //             className="inline-flex items-center gap-4 px-10 py-5 bg-black/30 border border-orange-500/60 rounded-full mb-8 backdrop-blur-sm"
// //             whileHover={{ scale: 1.1, borderColor: "#fb923c" }}
// //           >
// //             <GraduationCap className="w-9 h-9 text-orange-400" />
// //             <span className="text-orange-300 font-bold text-2xl tracking-wider">Education Journey</span>
// //           </motion.div>

// //           <h2 className="text-7xl md:text-9xl font-black tracking-tighter">
// //             <motion.span
// //               initial={{ opacity: 0, y: 50 }}
// //               whileInView={{ opacity: 1, y: 0 }}
// //               transition={{ delay: 0.3 }}
// //               className="block bg-gradient-to-r from-gray-200 via-gray-100 to-orange-400 bg-clip-text text-transparent"
// //             >
// //               Academic
// //             </motion.span>
// //             <motion.span
// //               initial={{ opacity: 0, y: 50 }}
// //               whileInView={{ opacity: 1, y: 0 }}
// //               transition={{ delay: 0.5 }}
// //               className="block bg-gradient-to-r from-orange-400 to-orange-300 bg-clip-text text-transparent"
// //             >
// //               Foundation
// //             </motion.span>
// //           </h2>

// //           <p className="mt-6 text-gray-400 text-xl font-light">real-world experience</p>
// //         </motion.div>

// //         {/* Floating Content - No Background */}
// //         <motion.div
// //           initial={{ opacity: 0, y: 100 }}
// //           whileInView={{ opacity: 1, y: 0 }}
// //           viewport={{ once: true }}
// //           transition={{ duration: 1.4, type: "spring", stiffness: 80 }}
// //           className="relative"
// //         >
// //           {/* Subtle Orbiting Ring */}
// //           <motion.div
// //             animate={{ rotate: 360 }}
// //             transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
// //             className="absolute -inset-20 border border-orange-500/10 rounded-full"
// //           />

// //           <div className="grid md:grid-cols-3 gap-12 items-start">
// //             {/* Left Side */}
// //             <div className="space-y-10">
// //               <motion.div
// //                 animate={{ y: [0, -20, 0] }}
// //                 transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
// //                 whileHover={{ scale: 1.2, rotate: 360 }}
// //                 className="inline-block p-8 rounded-3xl bg-gradient-to-br from-orange-500/10 to-transparent border border-orange-500/20"
// //               >
// //                 <GraduationCap className="w-24 h-24 text-orange-400 drop-shadow-2xl" />
// //               </motion.div>

// //               <div className="space-y-6">
// //                 <motion.div
// //                   whileHover={{ x: 10 }}
// //                   className="flex items-center gap-4 text-gray-300"
// //                 >
// //                   <Calendar className="w-7 h-7 text-orange-400 animate-pulse" />
// //                   <span className="text-lg font-medium">September 2022 – May 2026</span>
// //                 </motion.div>
// //                 <motion.div
// //                   whileHover={{ x: 10 }}
// //                   className="flex items-center gap-4 text-gray-300"
// //                 >
// //                   <Trophy className="w-7 h-7 text-orange-400" />
// //                   <span className="text-lg">Active in Hackathons</span>
// //                 </motion.div>
// //               </div>
// //             </div>

// //             {/* Main Content */}
// //             <div className="md:col-span-2 space-y-8">
// //               <motion.h3
// //                 initial={{ opacity: 0, x: -60 }}
// //                 whileInView={{ opacity: 1, x: 0 }}
// //                 transition={{ delay: 0.4 }}
// //                 className="text-5xl md:text-6xl font-black text-white leading-tight"
// //               >
// //                 B.E. in Computer Science
// //                 <span className="block text-orange-400 text-5xl md:text-6xl">and Engineering</span>
// //               </motion.h3>

// //               <motion.p
// //                 initial={{ opacity: 0, x: -40 }}
// //                 whileInView={{ opacity: 1, x: 0 }}
// //                 transition={{ delay: 0.6 }}
// //                 className="text-2xl text-gray-300 font-medium"
// //               >
// //                 Hindusthan College of Engineering and Technology
// //               </motion.p>

// //               <motion.p
// //                 initial={{ opacity: 0 }}
// //                 whileInView={{ opacity: 1 }}
// //                 transition={{ delay: 0.8 }}
// //                 className="text-gray-400 text-lg leading-relaxed max-w-3xl"
// //               >
// //                 Pursuing undergraduate education with a focus on modern software development, 
// //                 system design, and engineering fundamentals. Actively participating in technical 
// //                 events, hackathons, and competitive programming to apply theoretical knowledge 
// //                 in real-world scenarios.
// //               </motion.p>
// //             </div>
// //           </div>

// //           {/* Animated Bottom Accent Line */}
// //           <motion.div
// //             initial={{ width: 0 }}
// //             whileInView={{ width: "30%" }}
// //             transition={{ duration: 2, delay: 1 }}
// //             className="h-px bg-gradient-to-r from-orange-500 to-transparent mt-16"
// //           />
// //         </motion.div>
// //       </div>
// //     </section>
// //   );
// // }


// import { motion } from "framer-motion";
// import { GraduationCap, Calendar, Trophy } from "lucide-react";

// export default function Education() {
//   // Network node pulse animation
//   const nodePulse = {
//     scale: [1, 1.6, 1],
//     opacity: [0.3, 0.8, 0.3],
//     transition: {
//       duration: 4,
//       repeat: Infinity,
//       ease: "easeInOut",
//     },
//   };

//   // Line connection flash
//   const lineFlash = {
//     opacity: [0.1, 0.4, 0.1],
//     transition: { duration: 3, repeat: Infinity },
//   };

//   return (
//     <section className="min-h-screen relative bg-black text-gray-100 py-20 px-6 overflow-hidden">
//       {/* Full-Screen Animated Network Background */}
//       <div className="absolute inset-0 pointer-events-none">
//         {/* Grid Pattern */}
//         <div 
//           className="absolute inset-0 opacity-10"
//           style={{
//             backgroundImage: `linear-gradient(orange 1px, transparent 1px), linear-gradient(90deg, orange 1px, transparent 1px)`,
//             backgroundSize: "60px 60px",
//           }}
//         />

//         {/* Animated Connection Lines */}
//         {[...Array(12)].map((_, i) => (
//           <motion.div
//             key={`line-${i}`}
//             animate={lineFlash}
//             transition={{ delay: i * 0.3 }}
//             className="absolute bg-gradient-to-r from-transparent via-orange-500 to-transparent h-px opacity-20"
//             style={{
//               top: `${10 + i * 7}%`,
//               left: 0,
//               right: 0,
//               transform: i % 2 === 0 ? "rotate(12deg)" : "rotate(-8deg)",
//             }}
//           />
//         ))}

//         {/* Glowing Network Nodes */}
//         {[...Array(25)].map((_, i) => (
//           <motion.div
//             key={`node-${i}`}
//             animate={nodePulse}
//             transition={{ delay: i * 0.2 }}
//             className="absolute w-2 h-2 bg-orange-400 rounded-full"
//             style={{
//               top: `${Math.random() * 90 + 5}%`,
//               left: `${Math.random() * 90 + 5}%`,
//               boxShadow: "0 0 20px rgba(251,146,60,0.8)",
//             }}
//           />
//         ))}

//         {/* Subtle moving diagonal lines */}
//         <motion.div
//           animate={{ x: [-100, 100], y: [-50, 50] }}
//           transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
//           className="absolute inset-0 opacity-5"
//           style={{
//             background: `repeating-linear-gradient(45deg, transparent, transparent 30px, rgba(251,146,60,0.1) 30px, rgba(251,146,60,0.1) 60px)`,
//           }}
//         />
//       </div>

//       {/* Twinkling Stars (kept) */}
//       {[...Array(50)].map((_, i) => (
//         <motion.div
//           key={i}
//           initial={{ opacity: 0.2 }}
//           animate={{
//             opacity: [0.2, 1, 0.2],
//             scale: [0.8, 1.4, 0.8],
//           }}
//           transition={{
//             duration: 3 + i * 0.1,
//             repeat: Infinity,
//             delay: i * 0.1,
//           }}
//           className="absolute w-1 h-1 bg-white rounded-full"
//           style={{
//             top: `${Math.random() * 100}%`,
//             left: `${Math.random() * 100}%`,
//             boxShadow: "0 0 10px rgba(255,255,255,0.8)",
//           }}
//         />
//       ))}

//       {/* Fast Orange Lightning Streaks */}
//       <motion.div
//         animate={{ x: [-1400, 2400] }}
//         transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
//         className="absolute top-40 w-full h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-70 blur-2xl"
//       />
//       <motion.div
//         animate={{ x: [2400, -1400] }}
//         transition={{ duration: 13, repeat: Infinity, ease: "linear" }}
//         className="absolute bottom-52 w-full h-1 bg-gradient-to-r from-transparent via-orange-400 to-transparent opacity-60 blur-2xl"
//       />

//       <div className="max-w-6xl mx-auto relative z-10">
//         {/* Header */}
//         <motion.div
//           initial={{ opacity: 0, y: -100 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 1.2, type: "spring", stiffness: 90 }}
//           className="text-center mb-24"
//         >
//           <motion.div
//             animate={{
//               textShadow: [
//                 "0 0 30px rgba(251,146,60,0.7)",
//                 "0 0 60px rgba(251,146,60,1)",
//                 "0 0 30px rgba(251,146,60,0.7)",
//               ],
//             }}
//             transition={{ duration: 2.5, repeat: Infinity }}
//             className="inline-flex items-center gap-5 px-12 py-6 bg-black/40 border border-orange-500/70 rounded-full backdrop-blur-md mb-10"
//             whileHover={{ scale: 1.08 }}
//           >
//             <GraduationCap className="w-10 h-10 text-orange-400" />
//             <span className="text-orange-300 font-bold text-2xl tracking-widest">Education Journey</span>
//           </motion.div>

//           <h2 className="text-8xl md:text-9xl font-black tracking-tight">
//             <motion.span className="block bg-gradient-to-r from-gray-100 to-orange-300 bg-clip-text text-transparent">
//               Academic
//             </motion.span>
//             <motion.span className="block bg-gradient-to-r from-orange-400 to-orange-200 bg-clip-text text-transparent">
//               Foundation
//             </motion.span>
//           </h2>
//           <p className="mt-8 text-gray-400 text-xl">real-world experience</p>
//         </motion.div>

//         {/* Clean Floating Content */}
//         <motion.div
//           initial={{ opacity: 0, y: 120 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 1.4, type: "spring" }}
//           className="relative"
//         >
//           <div className="grid md:grid-cols-3 gap-16 items-start">
//             {/* Left */}
//             <div className="space-y-12">
//               <motion.div
//                 animate={{ y: [0, -15, 0] }}
//                 transition={{ duration: 6, repeat: Infinity }}
//                 className="inline-block p-10 bg-orange-500/5 border border-orange-500/30 rounded-3xl backdrop-blur-sm"
//               >
//                 <GraduationCap className="w-28 h-28 text-orange-400" />
//               </motion.div>

//               <div className="space-y-8">
//                 <div className="flex items-center gap-5 text-gray-300">
//                   <Calendar className="w-8 h-8 text-orange-400 animate-pulse" />
//                   <span className="text-xl font-medium">September 2022 – May 2026</span>
//                 </div>
//                 <div className="flex items-center gap-5 text-gray-300">
//                   <Trophy className="w-8 h-8 text-orange-400" />
//                   <span className="text-xl">Active in Hackathons</span>
//                 </div>
//               </div>
//             </div>

//             {/* Right - Main Text */}
//             <div className="md:col-span-2 space-y-10">
//               <motion.h3
//                 initial={{ opacity: 0, x: -80 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 transition={{ delay: 0.5 }}
//                 className="text-6xl md:text-7xl font-black text-white leading-tight"
//               >
//                 B.E. in Computer Science
//                 <span className="block text-orange-400 text-6xl md:text-7xl">and Engineering</span>
//               </motion.h3>

//               <motion.p
//                 initial={{ opacity: 0, x: -60 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 transition={{ delay: 0.7 }}
//                 className="text-3xl text-gray-300 font-medium"
//               >
//                 Hindusthan College of Engineering and Technology
//               </motion.p>

//               <motion.p
//                 initial={{ opacity: 0 }}
//                 whileInView={{ opacity: 1 }}
//                 transition={{ delay: 0.9 }}
//                 className="text-gray-400 text-lg leading-relaxed max-w-4xl"
//               >
//                 Pursuing undergraduate education with a focus on modern software development, 
//                 system design, and engineering fundamentals. Actively participating in technical 
//                 events, hackathons, and competitive programming to apply theoretical knowledge 
//                 in real-world scenarios.
//               </motion.p>
//             </div>
//           </div>

//           {/* Final glowing line */}
//           <motion.div
//             initial={{ scaleX: 0 }}
//             whileInView={{ scaleX: 1 }}
//             transition={{ duration: 1.8, delay: 1.2 }}
//             className="h-px bg-gradient-to-r from-orange-500 via-orange-400 to-transparent mt-20 origin-left"
//           />
//         </motion.div>
//       </div>
//     </section>
//   );
// }


import { motion } from "framer-motion";
import { GraduationCap, Calendar, Trophy } from "lucide-react";

export default function Education() {
  // New: Network node smooth flow animation
  const nodeFlow = {
    x: [0, Math.random() * 50 - 25], // Subtle horizontal drift
    y: [0, Math.random() * 50 - 25], // Subtle vertical drift
    scale: [0.8, 1.2, 0.8],
    transition: {
      duration: 10 + Math.random() * 5, // Longer, varied duration
      repeat: Infinity,
      ease: "linear", // Smooth, constant movement
    },
  };

  // New: Line connection continuous wave
  const lineWave = {
    opacity: [0.1, 0.5, 0.1],
    scaleX: [0.95, 1.05, 0.95],
    transition: { duration: 5, repeat: Infinity, ease: "linear" },
  };

  // Container variants for the main content (staggering effect)
  const containerVariants = {
    hidden: { opacity: 0, x: -100, y: 100 },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 1.5,
        type: "spring",
        stiffness: 70,
        when: "beforeChildren",
        staggerChildren: 0.3,
      },
    },
  };

  // Text slide-in variants
  const textSlideIn = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  return (
    <section className="min-h-screen relative bg-black text-gray-100 py-20 px-6 overflow-hidden">
      {/* Full-Screen Animated Network Background */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `linear-gradient(orange 1px, transparent 1px), linear-gradient(90deg, orange 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />

        {/* Animated Connection Lines (using new lineWave) */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={`line-${i}`}
            animate={lineWave}
            transition={{ delay: i * 0.4 }} // Adjusted delay for new flow
            className="absolute bg-gradient-to-r from-transparent via-orange-500 to-transparent h-px opacity-20"
            style={{
              top: `${10 + i * 7}%`,
              left: 0,
              right: 0,
              transform: i % 2 === 0 ? "rotate(12deg)" : "rotate(-8deg)",
            }}
          />
        ))}

        {/* Glowing Network Nodes (using new nodeFlow) */}
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={`node-${i}`}
            animate={nodeFlow}
            transition={{ delay: i * 0.3 }} // Adjusted delay for new flow
            className="absolute w-2 h-2 bg-orange-400 rounded-full"
            style={{
              top: `${Math.random() * 90 + 5}%`,
              left: `${Math.random() * 90 + 5}%`,
              boxShadow: "0 0 20px rgba(251,146,60,0.8)",
            }}
          />
        ))}

        {/* Subtle moving diagonal lines (moved to a slower, smaller movement) */}
        <motion.div
          animate={{ x: [-50, 50], y: [-20, 20] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 opacity-5"
          style={{
            background: `repeating-linear-gradient(45deg, transparent, transparent 30px, rgba(251,146,60,0.1) 30px, rgba(251,146,60,0.1) 60px)`,
          }}
        />
      </div>

      {/* Twinkling Stars (kept the original, effective twinkle) */}
      {[...Array(50)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0.2 }}
          animate={{
            opacity: [0.2, 1, 0.2],
            scale: [0.8, 1.4, 0.8],
          }}
          transition={{
            duration: 3 + i * 0.1,
            repeat: Infinity,
            delay: i * 0.1,
          }}
          className="absolute w-1 h-1 bg-white rounded-full"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            boxShadow: "0 0 10px rgba(255,255,255,0.8)",
          }}
        />
      ))}

      {/* Fast Orange Lightning Streaks (kept the original, effective motion) */}
      <motion.div
        animate={{ x: [-1400, 2400] }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        className="absolute top-40 w-full h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-70 blur-2xl"
      />
      <motion.div
        animate={{ x: [2400, -1400] }}
        transition={{ duration: 13, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-52 w-full h-1 bg-gradient-to-r from-transparent via-orange-400 to-transparent opacity-60 blur-2xl"
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header (New: Subtle 3D rotation and faster glow effect) */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.0, ease: "easeOut" }}
          className="text-center mb-24"
        >
          <motion.div
            initial={{ rotateX: 0 }}
            animate={{
              rotateX: [0, 5, -5, 0], // Subtle 3D tilt
              textShadow: [
                "0 0 20px rgba(251,146,60,0.7)",
                "0 0 50px rgba(251,146,60,1)",
                "0 0 20px rgba(251,146,60,0.7)",
              ],
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }} // Faster glow
            className="inline-flex items-center gap-5 px-12 py-6 bg-black/40 border border-orange-500/70 rounded-full backdrop-blur-md mb-10"
            whileHover={{ scale: 1.05 }}
          >
            <GraduationCap className="w-10 h-10 text-orange-400" />
            <span className="text-orange-300 font-bold text-2xl tracking-widest">Education Journey</span>
          </motion.div>

          <h2 className="text-6xl md:text-9xl font-black tracking-tight">
            <motion.span
              initial={{ opacity: 0, x: -200 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 1.5, type: "spring", stiffness: 80 }}
              className="block bg-gradient-to-r from-gray-100 to-orange-300 bg-clip-text text-transparent"
            >
              Academic
            </motion.span>
            <motion.span
              initial={{ opacity: 0, x: 200 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7, duration: 1.5, type: "spring", stiffness: 80 }}
              className="block bg-gradient-to-r from-orange-400 to-orange-200 bg-clip-text text-transparent"
            >
              Foundation
            </motion.span>
          </h2>
          <p className="mt-8 text-gray-400 text-xl">real-world experience</p>
        </motion.div>

        {/* Clean Floating Content (New: Pop-in from bottom-left with stagger) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative"
        >
          <div className="grid md:grid-cols-3 gap-16 items-start">
            {/* Left */}
            <div className="space-y-12">
              <motion.div
                animate={{ y: [0, -10, 0] }} // Subtle smaller float
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="inline-block p-10 bg-orange-500/5 border border-orange-500/30 rounded-3xl backdrop-blur-sm"
              >
                <GraduationCap className="w-28 h-28 text-orange-400" />
              </motion.div>

              <div className="space-y-8">
                <motion.div
                  variants={textSlideIn}
                  transition={{ delay: 0.5 }}
                  className="flex items-center gap-5 text-gray-300"
                >
                  <Calendar className="w-8 h-8 text-orange-400 animate-pulse" />
                  <span className="text-xl font-medium">September 2022 – May 2026</span>
                </motion.div>
                <motion.div
                  variants={textSlideIn}
                  transition={{ delay: 0.7 }}
                  className="flex items-center gap-5 text-gray-300"
                >
                  <Trophy className="w-8 h-8 text-orange-400" />
                  <span className="text-xl">Active in Hackathons</span>
                </motion.div>
              </div>
            </div>

            {/* Right - Main Text (Uses slide-in variants) */}
            <div className="md:col-span-2 space-y-10">
              <motion.h3
                variants={textSlideIn}
                transition={{ delay: 0.9 }}
                className="text-6xl md:text-7xl font-black text-white leading-tight"
              >
                B.E. in Computer Science
                <span className="block text-orange-400 text-6xl md:text-7xl">and Engineering</span>
              </motion.h3>

              <motion.p
                variants={textSlideIn}
                transition={{ delay: 1.1 }}
                className="text-3xl text-gray-300 font-medium"
              >
                Hindusthan College of Engineering and Technology
              </motion.p>

              <motion.p
                variants={textSlideIn}
                initial={{ opacity: 0 }} // Reset to ensure opacity transition works well
                whileInView={{ opacity: 1 }}
                transition={{ delay: 1.3, duration: 1 }}
                className="text-gray-400 text-lg leading-relaxed max-w-4xl"
              >
                Pursuing undergraduate education with a focus on modern software development,
                system design, and engineering fundamentals. Actively participating in technical
                events, hackathons, and competitive programming to apply theoretical knowledge
                in real-world scenarios.
              </motion.p>
            </div>
          </div>

          {/* Final glowing line (New: Faster draw with spring) */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1.5, delay: 1.5, type: "spring", stiffness: 70 }}
            className="h-px bg-gradient-to-r from-orange-500 via-orange-400 to-transparent mt-20 origin-left"
          />
        </motion.div>
      </div>
    </section>
  );
}