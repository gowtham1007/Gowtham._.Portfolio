// // // // // WorkExperience.tsx
// // // // import { motion } from "framer-motion";
// // // // import { useEffect, useState } from "react";

// // // // export default function WorkExperience() {
// // // //   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

// // // //   useEffect(() => {
// // // //     const handleMouseMove = (e: MouseEvent) => {
// // // //       setMousePosition({ x: e.clientX, y: e.clientY });
// // // //     };
// // // //     window.addEventListener("mousemove", handleMouseMove);
// // // //     return () => window.removeEventListener("mousemove", handleMouseMove);
// // // //   }, []);

// // // //   // 80 animated stars
// // // //   const stars = Array.from({ length: 80 }, (_, i) => ({
// // // //     id: i,
// // // //     size: Math.random() * 3 + 1,
// // // //     duration: Math.random() * 20 + 10,
// // // //     delay: Math.random() * 10,
// // // //     left: Math.random() * 100,
// // // //     top: Math.random() * 100,
// // // //   }));

// // // //   return (
// // // //     <>
// // // //       {/* Bootstrap container */}
// // // //       <section className="min-h-screen relative overflow-hidden bg-black text-gray-300 py-20">
// // // //         {/* Moving starry background */}
// // // //         <div className="absolute inset-0 pointer-events-none">
// // // //           {stars.map((star) => (
// // // //             <motion.div
// // // //               key={star.id}
// // // //               className="absolute bg-orange-500 rounded-full shadow-orange-500/50"
// // // //               style={{
// // // //                 width: star.size,
// // // //                 height: star.size,
// // // //                 left: `${star.left}%`,
// // // //                 top: `${star.top}%`,
// // // //                 boxShadow: "0 0 10px #ff8c00",
// // // //               }}
// // // //               animate={{ opacity: [0.2, 1, 0.2], scale: [1, 1.5, 1] }}
// // // //               transition={{
// // // //                 duration: star.duration,
// // // //                 repeat: Infinity,
// // // //                 delay: star.delay,
// // // //                 ease: "easeInOut",
// // // //               }}
// // // //             />
// // // //           ))}
// // // //         </div>

// // // //         {/* Glowing cursor follower */}
// // // //         <motion.div
// // // //           className="fixed w-96 h-96 rounded-full pointer-events-none z-10 opacity-20"
// // // //           style={{
// // // //             background: "radial-gradient(circle, #ff8c00 0%, transparent 70%)",
// // // //             left: -150,
// // // //             top: -150,
// // // //           }}
// // // //           animate={{
// // // //             x: mousePosition.x - 192,
// // // //             y: mousePosition.y - 192,
// // // //           }}
// // // //           transition={{ type: "spring", damping: 30, stiffness: 100 }}
// // // //         />

// // // //         <div className="relative z-20 max-w-4xl mx-auto px-6">
// // // //           {/* Animated Title */}
// // // //           <motion.h2
// // // //             initial={{ opacity: 0, y: -60 }}
// // // //             animate={{ opacity: 1, y: 0 }}
// // // //             transition={{ duration: 1 }}
// // // //             className="text-6xl md:text-7xl font-bold text-center mb-16 bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent animate-pulse"
// // // //             style={{
// // // //               backgroundSize: "200%",
// // // //               animation: "gradient 8s linear infinite",
// // // //             }}
// // // //           >
// // // //             Work Experience
// // // //           </motion.h2>

// // // //           <style jsx>{`
// // // //             @keyframes gradient {
// // // //               0% { background-position: 0% 50%; }
// // // //               100% { background-position: 200% 50%; }
// // // //             }
// // // //           `}</style>

// // // //           {/* Experience Cards */}
// // // //           <div className="space-y-10">
// // // //             {/* KS Globals */}
// // // //             <motion.div
// // // //               initial={{ opacity: 0, x: -100 }}
// // // //               whileInView={{ opacity: 1, x: 0 }}
// // // //               viewport={{ once: true }}
// // // //               transition={{ duration: 0.8, delay: 0.2 }}
// // // //               className="bg-gray-900/70 backdrop-blur-lg border border-orange-500/30 rounded-2xl p-8 shadow-2xl relative overflow-hidden hover:border-orange-400 transition-all duration-500"
// // // //             >
// // // //               <div className="absolute inset-0 bg-gradient-to-br from-transparent via-orange-500/5 to-transparent animate-pulse" />
// // // //               <h3 className="text-2xl md:text-3xl font-bold text-orange-400 flex items-center gap-3">
// // // //                 Project Trainee – Fullstack Developer - KS Globals
// // // //                 <motion.span
// // // //                   animate={{ opacity: [0.4, 1, 0.4] }}
// // // //                   transition={{ duration: 1.5, repeat: Infinity }}
// // // //                   className="text-orange-500 text-4xl"
// // // //                 >
// // // //                   •
// // // //                 </motion.span>
// // // //               </h3>
// // // //               <p className="text-gray-400 italic mt-2">October 2024 - May 2025</p>
// // // //               <p className="mt-4 text-gray-300 leading-relaxed">
// // // //                 Assisted in development and testing of web projects, collaborating with senior developers to troubleshoot and implement solutions. Gained proficiency in:
// // // //               </p>
// // // //               <ul className="mt-4 space-y-2 text-gray-200">
// // // //                 <li className="flex items-start gap-3"><span className="text-orange-500 mt-1">▹</span> HTML, CSS, JavaScript, React.js, Redux, Node.js</li>
// // // //                 <li className="flex items-start gap-3"><span className="text-orange-500 mt-1">▹</span> Strapi, Firebase, Excel/VS Code</li>
// // // //                 <li className="flex items-start gap-3"><span className="text-orange-500 mt-1">▹</span> Canva, GitHub</li>
// // // //               </ul>
// // // //             </motion.div>

// // // //             {/* Accent Techo soft */}
// // // //             <motion.div
// // // //               initial={{ opacity: 0, x: 100 }}
// // // //               whileInView={{ opacity: 1, x: 0 }}
// // // //               viewport={{ once: true }}
// // // //               transition={{ duration: 0.8, delay: 0.4 }}
// // // //               className="bg-gray-900/70 backdrop-blur-lg border border-orange-500/30 rounded-2xl p-8 shadow-2xl relative overflow-hidden hover:border-orange-400 transition-all duration-500"
// // // //             >
// // // //               <div className="absolute inset-0 bg-gradient-to-br from-transparent via-orange-500/5 to-transparent animate-pulse" />
// // // //               <h3 className="text-2xl md:text-3xl font-bold text-orange-400 flex items-center gap-3">
// // // //                 Intern – Fullstack Developer - Accent Techo soft
// // // //                 <motion.span
// // // //                   animate={{ opacity: [0.4, 1, 0.4] }}
// // // //                   transition={{ duration: 1.5, repeat: Infinity }}
// // // //                   className="text-orange-500 text-4xl"
// // // //                 >
// // // //                   •
// // // //                 </motion.span>
// // // //               </h3>
// // // //               <p className="text-gray-400 italic mt-2">07/July/2024 - 24/July/2024</p>
// // // //               <p className="mt-4 text-gray-300 leading-relaxed">
// // // //                 Assisted in web development and testing of web projects, collaborating with senior developers to troubleshoot and implement solutions. Gained proficiency in:
// // // //               </p>
// // // //               <ul className="mt-4 space-y-2 text-gray-200">
// // // //                 <li className="flex items-start gap-3"><span className="text-orange-500 mt-1">▹</span> HTML, CSS, JavaScript, Bootstrap</li>
// // // //                 <li className="flex items-start gap-3"><span className="text-orange-500 mt-1">▹</span> Mysql, Apache</li>
// // // //               </ul>
// // // //             </motion.div>

// // // //             {/* KANALABS */}
// // // //             <motion.div
// // // //               initial={{ opacity: 0, x: -100 }}
// // // //               whileInView={{ opacity: 1, x: 0 }}
// // // //               viewport={{ once: true }}
// // // //               transition={{ duration: 0.8, delay: 0.6 }}
// // // //               className="bg-gray-900/70 backdrop-blur-lg border border-orange-500/30 rounded-2xl p-8 shadow-2xl relative overflow-hidden hover:border-orange-400 transition-all duration-500"
// // // //             >
// // // //               <div className="absolute inset-0 bg-gradient-to-br from-transparent via-orange-500/5 to-transparent animate-pulse" />
// // // //               <h3 className="text-2xl md:text-3xl font-bold text-orange-400 flex items-center gap-3">
// // // //                 Campus Executive – KANALABS
// // // //                 <motion.span
// // // //                   animate={{ opacity: [0.4, 1, 0.4] }}
// // // //                   transition={{ duration: 1.5, repeat: Infinity }}
// // // //                   className="text-orange-500 text-4xl"
// // // //                 >
// // // //                   •
// // // //                 </motion.span>
// // // //               </h3>
// // // //               <p className="text-gray-400 italic mt-2">June 2023 - June 2024</p>
// // // //               <p className="mt-4 text-gray-300 leading-relaxed">
// // // //                 Organized three major promotional events attracting 500+ students, promoted student engagement in co-curriculars through leadership and public speaking.
// // // //               </p>
// // // //               <ul className="mt-4 space-y-2 text-gray-200">
// // // //                 <li className="flex items-start gap-3"><span className="text-orange-500 mt-1">▹</span> Event coordination and planning</li>
// // // //                 <li className="flex items-start gap-3"><span className="text-orange-500 mt-1">▹</span> Community outreach and engagement strategies</li>
// // // //               </ul>
// // // //             </motion.div>
// // // //           </div>
// // // //         </div>
// // // //       </section>
// // // //     </>
// // // //   );
// // // // } 


// // // // WorkExperience.tsx - Clean Modern Redesign
// // // import { motion } from "framer-motion";

// // // const experiences = [

// // //     {
// // //     title: "Intern – Fullstack Developer",
// // //     company: "Overload Ware Labs AI.",
// // //     date: "August 2025 – August 2025",
// // //     description:
// // //       "Assisted in development and testing of web projects, collaborating with senior developers to troubleshoot and implement solutions.",
// // //     skills: [
// // //       "React.js · Redux · Node.js",
// // //       " Firebase .Web flow",
      
// // //     ],
// // //   },
// // //   {
// // //     title: "Project Trainee Intern – Fullstack Developer",
// // //     company: "KS Globals",
// // //     date: "Oct 2024 – May 2025",
// // //     description:
// // //       "Assisted in development and testing of web projects, collaborating with senior developers to troubleshoot and implement solutions.",
// // //     skills: [
// // //       "React.js · Redux · Node.js",
// // //       "Strapi · Firebase",
// // //       "GitHub · VS Code · Canva",
// // //     ],
// // //   },
// // //   {
// // //     title: "Intern – Fullstack Developer",
// // //     company: "Accent Techo soft",
// // //     date: "Jul 2024 – Jul 24, 2024",
// // //     description:
// // //       "Contributed to web application development and testing under senior guidance.",
// // //     skills: ["HTML · CSS · JavaScript · Bootstrap", "MySQL · Apache"],
// // //   },
// // //   {
// // //     title: "Campus Executive",
// // //     company: "KANALABS",
// // //     date: "Jun 2023 – Jun 2024",
// // //     description:
// // //       "Led campus outreach initiatives and organized 3 major events with 500+ attendees.",
// // //     skills: ["Event Planning", "Leadership & Public Speaking", "Community Building"],
// // //   },
// // // ];

// // // export default function WorkExperience() {
// // //   return (
// // //     <section className="min-h-screen bg-[#0a0a0a] text-gray-200 py-24 px-6 overflow-hidden">
// // //       <div className="max-w-5xl mx-auto">
// // //         {/* Title */}
// // //         <motion.div
// // //           initial={{ opacity: 0, y: 30 }}
// // //           whileInView={{ opacity: 1, y: 0 }}
// // //           viewport={{ once: true }}
// // //           transition={{ duration: 0.8 }}
// // //           className="text-center mb-20"
// // //         >
// // //           <h2 className="text-5xl md:text-6xl font-bold tracking-tight">
// // //             <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
// // //               Work Experience
// // //             </span>
// // //           </h2>
// // //           <p className="mt-4 text-gray-500 text-lg">
// // //             Building the future, one line by line.
// // //           </p>
// // //         </motion.div>

// // //         {/* Timeline Container */}
// // //         <div className="relative">
// // //           {/* Vertical Line */}
// // //           <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-orange-500/30 via-orange-500/10 to-transparent" />

// // //           {experiences.map((exp, index) => (
// // //             <motion.div
// // //               key={index}
// // //               initial={{ opacity: 0, y: 50 }}
// // //               whileInView={{ opacity: 1, y: 0 }}
// // //               viewport={{ once: true }}
// // //               transition={{ duration: 0.7, delay: index * 0.2 }}
// // //               className={`relative flex items-center mb-16 ${
// // //                 index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
// // //               } flex-col`}
// // //             >
// // //               {/* Card */}
// // //               <div
// // //                 className={`w-full md:w-5/12 ${
// // //                   index % 2 === 0 ? "md:pr-12" : "md:pl-12"
// // //                 }`}
// // //               >
// // //                 <div className="group relative bg-gray-900/50 backdrop-blur-xl border border-gray-800 rounded-2xl p-8 hover:border-orange-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-orange-500/10 hover:-translate-y-2">
// // //                   {/* Hover glow effect */}
// // //                   <div className="div" className="absolute inset-0 rounded-2xl bg-gradient-to-r from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10" />

// // //                   <div className="flex items-center gap-3 mb-3">
// // //                     <span className="text-orange-500 font-semibold text-sm tracking-wider uppercase">
// // //                       {exp.company}
// // //                     </span>
// // //                     <span className="w-12 h-px bg-orange-500/30" />
// // //                   </div>

// // //                   <h3 className="text-2xl font-bold text-white mb-2">
// // //                     {exp.title}
// // //                   </h3>

// // //                   <time className="text-sm text-orange-400 font-medium">
// // //                     {exp.date}
// // //                   </time>

// // //                   <p className="mt-4 text-gray-400 leading-relaxed">
// // //                     {exp.description}
// // //                   </p>

// // //                   {/* Skills Tags */}
// // //                   <div className="mt-6 flex flex-wrap gap-2">
// // //                     {exp.skills.map((skill, i) => (
// // //                       <span
// // //                         key={i}
// // //                         className="px-4 py-2 text-xs font-medium bg-orange-500/10 text-orange-300 rounded-full border border-orange-500/20"
// // //                       >
// // //                         {skill}
// // //                       </span>
// // //                     ))}
// // //                   </div>
// // //                 </div>
// // //               </div>

// // //               {/* Timeline Dot */}
// // //               <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 flex items-center justify-center">
// // //                 <div className="w-4 h-4 bg-orange-500 rounded-full ring-8 ring-orange-500/20 shadow-lg shadow-orange-500/30" />
// // //               </div>

// // //               {/* Empty spacer for alignment on mobile */}
// // //               <div className="w-full md:w-5/12 h-10 md:h-0" />
// // //             </motion.div>
// // //           ))}
// // //         </div>
// // //       </div>
// // //     </section>
// // //   );
// // // }

// // import { motion } from "framer-motion";
// // import { useEffect, useRef } from "react";
// // import { gsap } from "gsap";

// // const experiences = [
// //   {
// //     title: "Intern – Fullstack Developer",
// //     company: "Overload Ware Labs AI.",
// //     date: "August 2025 – August 2025",
// //     description:
// //       "Assisted in development and testing of web projects, collaborating with senior developers to troubleshoot and implement solutions.",
// //     skills: [
// //       "React.js · Redux · Node.js",
// //       " Firebase .Web flow",
// //     ],
// //   },
// //   {
// //     title: "Project Trainee Intern – Fullstack Developer",
// //     company: "KS Globals",
// //     date: "Oct 2024 – May 2025",
// //     description:
// //       "Assisted in development and testing of web projects, collaborating with senior developers to troubleshoot and implement solutions.",
// //     skills: [
// //       "React.js · Redux · Node.js",
// //       "Strapi · Firebase",
// //       "GitHub · VS Code · Canva",
// //     ],
// //   },
// //   {
// //     title: "Intern – Fullstack Developer",
// //     company: "Accent Techo soft",
// //     date: "Jul 2024 – Jul 24, 2024",
// //     description:
// //       "Contributed to web application development and testing under senior guidance.",
// //     skills: ["HTML · CSS · JavaScript · Bootstrap", "MySQL · Apache"],
// //   },
// //   {
// //     title: "Campus Executive",
// //     company: "KANALABS",
// //     date: "Jun 2023 – Jun 2024",
// //     description:
// //       "Led campus outreach initiatives and organized 3 major events with 500+ attendees.",
// //     skills: ["Event Planning", "Leadership & Public Speaking", "Community Building"],
// //   },
// // ];

// // export default function WorkExperience() {
// //   const timelineRef = useRef(null);
// //   const titleRef = useRef(null);

// //   useEffect(() => {
// //     // GSAP animations for unique entrance effects
// //     gsap.fromTo(
// //       titleRef.current,
// //       { scale: 0.8, rotation: -5, opacity: 0 },
// //       {
// //         scale: 1,
// //         rotation: 0,
// //         opacity: 1,
// //         duration: 1.2,
// //         ease: "back.out(1.7)",
// //       }
// //     );

// //     // GSAP timeline for staggered card animations
// //     const tl = gsap.timeline();
// //     experiences.forEach((_, index) => {
// //       tl.to(`.experience-card-${index}`, {
// //         scale: 1,
// //         opacity: 1,
// //         y: 0,
// //         rotation: gsap.utils.random(-2, 2),
// //         duration: 0.8,
// //         ease: "power2.out",
// //       }, index * 0.3);
// //     });

// //     // GSAP for continuous subtle wire-like line animations on the timeline
// //     gsap.to(".timeline-line", {
// //       scaleY: 1.1,
// //       repeat: -1,
// //       yoyo: true,
// //       duration: 3,
// //       ease: "power1.inOut",
// //     });

// //     // GSAP for blinking star effects (simulating on dots)
// //     gsap.to(".timeline-dot", {
// //       scale: 1.5,
// //       opacity: 0.7,
// //       duration: 1,
// //       repeat: -1,
// //       yoyo: true,
// //       stagger: 0.5,
// //       ease: "power2.inOut",
// //     });
// //   }, []);

// //   return (
// //     <section className="min-h-screen bg-[#0a0a0a] text-gray-200 py-24 px-6 overflow-hidden relative">
// //       <div className="max-w-5xl mx-auto relative z-10">
// //         {/* Title */}
// //         <motion.div
// //           ref={titleRef}
// //           initial={{ opacity: 0, y: 30 }}
// //           whileInView={{ opacity: 1, y: 0 }}
// //           viewport={{ once: true }}
// //           transition={{ duration: 0.8 }}
// //           className="text-center mb-20"
// //         >
// //           <h2 className="text-5xl md:text-6xl font-bold tracking-tight">
// //             <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
// //               Work Experience
// //             </span>
// //           </h2>
// //           <p className="mt-4 text-gray-500 text-lg">
// //             Building the future, one line by line.
// //           </p>
// //         </motion.div>

// //         {/* Timeline Container */}
// //         <div className="relative" ref={timelineRef}>
// //           {/* Vertical Line with enhanced class for GSAP */}
// //           <div className="timeline-line absolute left-8 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-orange-500/30 via-orange-500/10 to-transparent origin-top scale-y-0" />

// //           {experiences.map((exp, index) => (
// //             <motion.div
// //               key={index}
// //               initial={{ opacity: 0, y: 50, scale: 0.95 }}
// //               whileInView={{ opacity: 1, y: 0, scale: 1 }}
// //               viewport={{ once: true }}
// //               transition={{ duration: 0.7, delay: index * 0.2 }}
// //               className={`relative flex items-center mb-16 experience-card-${index} ${
// //                 index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
// //               } flex-col`}
// //             >
// //               {/* Card */}
// //               <div
// //                 className={`w-full md:w-5/12 ${
// //                   index % 2 === 0 ? "md:pr-12" : "md:pl-12"
// //                 }`}
// //               >
// //                 <div className="group relative bg-gray-900/50 backdrop-blur-xl border border-gray-800 rounded-2xl p-8 hover:border-orange-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-orange-500/10 hover:-translate-y-2 experience-card-${index}">
// //                   {/* Hover glow effect - fixed duplicate className */}
// //                   <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10" />

// //                   <div className="flex items-center gap-3 mb-3">
// //                     <span className="text-orange-500 font-semibold text-sm tracking-wider uppercase">
// //                       {exp.company}
// //                     </span>
// //                     <span className="w-12 h-px bg-orange-500/30" />
// //                   </div>

// //                   <h3 className="text-2xl font-bold text-white mb-2">
// //                     {exp.title}
// //                   </h3>

// //                   <time className="text-sm text-orange-400 font-medium">
// //                     {exp.date}
// //                   </time>

// //                   <p className="mt-4 text-gray-400 leading-relaxed">
// //                     {exp.description}
// //                   </p>

// //                   {/* Skills Tags */}
// //                   <div className="mt-6 flex flex-wrap gap-2">
// //                     {exp.skills.map((skill, i) => (
// //                       <span
// //                         key={i}
// //                         className="px-4 py-2 text-xs font-medium bg-orange-500/10 text-orange-300 rounded-full border border-orange-500/20 group-hover:scale-105 transition-transform duration-300"
// //                       >
// //                         {skill}
// //                       </span>
// //                     ))}
// //                   </div>
// //                 </div>
// //               </div>

// //               {/* Timeline Dot with enhanced class for GSAP blinking */}
// //               <div className="timeline-dot absolute left-8 md:left-1/2 transform md:-translate-x-1/2 flex items-center justify-center">
// //                 <div className="w-4 h-4 bg-orange-500 rounded-full ring-8 ring-orange-500/20 shadow-lg shadow-orange-500/30" />
// //               </div>

// //               {/* Empty spacer for alignment on mobile */}
// //               <div className="w-full md:w-5/12 h-10 md:h-0" />
// //             </motion.div>
// //           ))}
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }



// import { motion } from "framer-motion";
// import { useEffect, useRef } from "react";
// import { gsap } from "gsap";

// const experiences = [
//   {
//     title: "Intern – Fullstack Developer",
//     company: "Overload Ware Labs AI.",
//     date: "August 2025 – August 2025",
//     description:
//       "Assisted in development and testing of web projects, collaborating with senior developers to troubleshoot and implement solutions.",
//     skills: [
//       "React.js · Redux · Node.js",
//       " Firebase .Web flow",
//     ],
//   },
//   {
//     title: "Project Trainee Intern – Fullstack Developer",
//     company: "KS Globals",
//     date: "Oct 2024 – May 2025",
//     description:
//       "Assisted in development and testing of web projects, collaborating with senior developers to troubleshoot and implement solutions.",
//     skills: [
//       "React.js · Redux · Node.js",
//       "Strapi · Firebase",
//       "GitHub · VS Code · Canva",
//     ],
//   },
//   {
//     title: "Intern – Fullstack Developer",
//     company: "Accent Techo soft",
//     date: "Jul 2024 – Jul 24, 2024",
//     description:
//       "Contributed to web application development and testing under senior guidance.",
//     skills: ["HTML · CSS · JavaScript · Bootstrap", "MySQL · Apache"],
//   },
//   {
//     title: "Campus Executive",
//     company: "KANALABS",
//     date: "Jun 2023 – Jun 2024",
//     description:
//       "Led campus outreach initiatives and organized 3 major events with 500+ attendees.",
//     skills: ["Event Planning", "Leadership & Public Speaking", "Community Building"],
//   },
// ];

// export default function WorkExperience() {
//   const timelineRef = useRef(null);
//   const titleRef = useRef(null);
//   const starsRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     // GSAP animations for unique entrance effects
//     gsap.fromTo(
//       titleRef.current,
//       { scale: 0.8, rotation: -5, opacity: 0 },
//       {
//         scale: 1,
//         rotation: 0,
//         opacity: 1,
//         duration: 1.2,
//         ease: "back.out(1.7)",
//       }
//     );

//     // GSAP timeline for staggered card animations
//     const tl = gsap.timeline();
//     experiences.forEach((_, index) => {
//       tl.to(`.experience-card-${index}`, {
//         scale: 1,
//         opacity: 1,
//         y: 0,
//         rotation: gsap.utils.random(-2, 2),
//         duration: 0.8,
//         ease: "power2.out",
//       }, index * 0.3);
//     });

//     // GSAP for continuous subtle wire-like line animations on the timeline
//     gsap.to(".timeline-line", {
//       scaleY: 1.1,
//       repeat: -1,
//       yoyo: true,
//       duration: 3,
//       ease: "power1.inOut",
//     });

//     // GSAP for blinking star effects (simulating on dots)
//     gsap.to(".timeline-dot", {
//       scale: 1.5,
//       opacity: 0.7,
//       duration: 1,
//       repeat: -1,
//       yoyo: true,
//       stagger: 0.5,
//       ease: "power2.inOut",
//     });

//     // GSAP for animated stars (twinkling)
//     if (starsRef.current) {
//       gsap.to(".star", {
//         opacity: gsap.utils.random(0.3, 1),
//         scale: gsap.utils.random(0.8, 1.5),
//         duration: gsap.utils.random(1, 3),
//         repeat: -1,
//         yoyo: true,
//         stagger: {
//           amount: 2,
//           from: "random",
//         },
//         ease: "power2.inOut",
//       });
//     }

//     // GSAP for animated grid (subtle shift)
//     gsap.to(".grid-bg", {
//       backgroundPosition: "50px 50px",
//       duration: 20,
//       repeat: -1,
//       ease: "none",
//     });
//   }, []);

//   // Generate stars
//   const stars = [...Array(100)].map((_, i) => ({
//     id: i,
//     left: `${Math.random() * 100}%`,
//     top: `${Math.random() * 100}%`,
//     delay: Math.random() * 5,
//     size: Math.random() * 3 + 1,
//   }));

//   // Grid style
//   const gridStyle = {
//     backgroundImage: `
//       linear-gradient(rgba(249, 115, 22, 0.1) 1px, transparent 1px),
//       linear-gradient(90deg, rgba(249, 115, 22, 0.1) 1px, transparent 1px)
//     `,
//     backgroundSize: "50px 50px",
//   };

//   return (
//     <section className="min-h-screen bg-[#0a0a0a] text-gray-200 py-24 px-6 overflow-hidden relative">
//       {/* Animated Background */}
//       <div className="absolute inset-0 z-0 pointer-events-none">
//         {/* Animated Grid */}
//         <div
//           className="grid-bg absolute inset-0"
//           style={gridStyle}
//         />
        
//         {/* Animated Stars */}
//         <div ref={starsRef} className="absolute inset-0">
//           {stars.map((star) => (
//             <div
//               key={star.id}
//               className="star absolute bg-orange-400 rounded-full opacity-0"
//               style={{
//                 left: star.left,
//                 top: star.top,
//                 width: `${star.size}px`,
//                 height: `${star.size}px`,
//                 animationDelay: `${star.delay}s`,
//               }}
//             />
//           ))}
//         </div>
//       </div>

//       <div className="max-w-5xl mx-auto relative z-10">
//         {/* Title */}
//         <motion.div
//           ref={titleRef}
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           className="text-center mb-20"
//         >
//           <h2 className="text-5xl md:text-6xl font-bold tracking-tight">
//             <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
//               Work Experience
//             </span>
//           </h2>
//           <p className="mt-4 text-gray-500 text-lg">
//             Building the future, one line by line.
//           </p>
//         </motion.div>

//         {/* Timeline Container */}
//         <div className="relative" ref={timelineRef}>
//           {/* Vertical Line with enhanced class for GSAP */}
//           <div className="timeline-line absolute left-8 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-orange-500/30 via-orange-500/10 to-transparent origin-top scale-y-0" />

//           {experiences.map((exp, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 50, scale: 0.95 }}
//               whileInView={{ opacity: 1, y: 0, scale: 1 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.7, delay: index * 0.2 }}
//               className={`relative flex items-center mb-16 experience-card-${index} ${
//                 index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
//               } flex-col`}
//             >
//               {/* Card */}
//               <div
//                 className={`w-full md:w-5/12 ${
//                   index % 2 === 0 ? "md:pr-12" : "md:pl-12"
//                 }`}
//               >
//                 <div className="group relative bg-gray-900/50 backdrop-blur-xl border border-gray-800 rounded-2xl p-8 hover:border-orange-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-orange-500/10 hover:-translate-y-2 experience-card-${index}">
//                   {/* Hover glow effect - fixed duplicate className */}
//                   <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10" />

//                   <div className="flex items-center gap-3 mb-3">
//                     <span className="text-orange-500 font-semibold text-sm tracking-wider uppercase">
//                       {exp.company}
//                     </span>
//                     <span className="w-12 h-px bg-orange-500/30" />
//                   </div>

//                   <h3 className="text-2xl font-bold text-white mb-2">
//                     {exp.title}
//                   </h3>

//                   <time className="text-sm text-orange-400 font-medium">
//                     {exp.date}
//                   </time>

//                   <p className="mt-4 text-gray-400 leading-relaxed">
//                     {exp.description}
//                   </p>

//                   {/* Skills Tags */}
//                   <div className="mt-6 flex flex-wrap gap-2">
//                     {exp.skills.map((skill, i) => (
//                       <span
//                         key={i}
//                         className="px-4 py-2 text-xs font-medium bg-orange-500/10 text-orange-300 rounded-full border border-orange-500/20 group-hover:scale-105 transition-transform duration-300"
//                       >
//                         {skill}
//                       </span>
//                     ))}
//                   </div>
//                 </div>
//               </div>

//               {/* Timeline Dot with enhanced class for GSAP blinking */}
//               <div className="timeline-dot absolute left-8 md:left-1/2 transform md:-translate-x-1/2 flex items-center justify-center">
//                 <div className="w-4 h-4 bg-orange-500 rounded-full ring-8 ring-orange-500/20 shadow-lg shadow-orange-500/30" />
//               </div>

//               {/* Empty spacer for alignment on mobile */}
//               <div className="w-full md:w-5/12 h-10 md:h-0" />
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


// import { motion } from "framer-motion";
// import { useEffect, useRef } from "react";
// import { gsap } from "gsap";

// const experiences = [
//   {
//     title: "Intern – Fullstack Developer",
//     company: "Overload Ware Labs AI.",
//     date: "August 2025 – August 2025",
//     description:
//       "Assisted in development and testing of web projects, collaborating with senior developers to troubleshoot and implement solutions.",
//     skills: [
//       "React.js · Redux · Node.js",
//       " Firebase .Web flow",
//     ],
//   },
//   {
//     title: "Project Trainee Intern – Fullstack Developer",
//     company: "KS Globals",
//     date: "Oct 2024 – May 2025",
//     description:
//       "Assisted in development and testing of web projects, collaborating with senior developers to troubleshoot and implement solutions.",
//     skills: [
//       "React.js · Redux · Node.js",
//       "Strapi · Firebase",
//       "GitHub · VS Code · Canva",
//     ],
//   },
//   {
//     title: "Intern – Fullstack Developer",
//     company: "Accent Techo soft",
//     date: "Jul 2024 – Jul 24, 2024",
//     description:
//       "Contributed to web application development and testing under senior guidance.",
//     skills: ["HTML · CSS · JavaScript · Bootstrap", "MySQL · Apache"],
//   },
//   {
//     title: "Campus Executive",
//     company: "KANALABS",
//     date: "Jun 2023 – Jun 2024",
//     description:
//       "Led campus outreach initiatives and organized 3 major events with 500+ attendees.",
//     skills: ["Event Planning", "Leadership & Public Speaking", "Community Building"],
//   },
// ];

// export default function WorkExperience() {
//   const timelineRef = useRef(null);
//   const titleRef = useRef(null);
//   const bgRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       // Title entrance
//       gsap.fromTo(
//         titleRef.current,
//         { scale: 0.8, rotation: -5, opacity: 0 },
//         {
//           scale: 1,
//           rotation: 0,
//           opacity: 1,
//           duration: 1.4,
//           ease: "back.out(1.8)",
//         }
//       );

//       // Card entrance with varied effects
//       experiences.forEach((_, i) => {
//         gsap.fromTo(
//           `.experience-card-${i}`,
//           {
//             opacity: 0,
//             y: 80,
//             scale: 0.9,
//             rotation: i % 2 === 0 ? -8 : 8,
//           },
//           {
//             opacity: 1,
//             y: 0,
//             scale: 1,
//             rotation: 0,
//             duration: 1,
//             ease: "back.out(1.4)",
//             delay: i * 0.25,
//           }
//         );
//       });

//       // Timeline line pulse
//       gsap.to(".timeline-line", {
//         scaleY: 1.05,
//         opacity: 0.8,
//         repeat: -1,
//         yoyo: true,
//         duration: 4,
//         ease: "sine.inOut",
//       });

//       // Dot pulse
//       gsap.to(".timeline-dot", {
//         scale: 1.6,
//         opacity: 0.6,
//         duration: 2,
//         repeat: -1,
//         yoyo: true,
//         stagger: 0.4,
//         ease: "power2.inOut",
//       });

//       // === NEW BACKGROUND ANIMATIONS ===

//       // Floating Particles with trails
//       gsap.to(".particle", {
//         x: "+=100",
//         y: "-=100",
//         rotation: 360,
//         opacity: 0.6,
//         duration: gsap.utils.random(15, 30),
//         ease: "none",
//         repeat: -1,
//         stagger: {
//           each: 0.5,
//           from: "random",
//         },
//       });

//       // Nebula clouds drifting
//       gsap.to(".nebula", {
//         x: "+=200",
//         y: "+=100",
//         rotation: 0.5,
//         opacity: 0.4,
//         duration: gsap.utils.random(40, 80),
//         ease: "none",
//         repeat: -1,
//         yoyo: true,
//       });

//       // Energy orbs pulse
//       gsap.to(".orb", {
//         scale: 1.4,
//         opacity: 0.7,
//         duration: gsap.utils.random(3, 6),
//         repeat: -1,
//         yoyo: true,
//         stagger: 1,
//         ease: "sine.inOut",
//       });

//       // Rotating hexagons
//       gsap.to(".hexagon", {
//         rotation: "+=360",
//         duration: gsap.utils.random(20, 50),
//         repeat: -1,
//         ease: "none",
//       });

//       // Twinkling stars with depth
//       gsap.to(".star", {
//         opacity: gsap.utils.random(0.2, 1),
//         scale: gsap.utils.random(0.7, 1.6),
//         duration: gsap.utils.random(2, 5),
//         repeat: -1,
//         yoyo: true,
//         stagger: { amount: 3, from: "random" },
//       });
//     }, bgRef);

//     return () => ctx.revert();
//   }, []);

//   // Generate dynamic elements
//   const particles = [...Array(20)].map((_, i) => ({
//     id: i,
//     left: `${Math.random() * 100}%`,
//     top: `${Math.random() * 100}%`,
//     size: Math.random() * 4 + 2,
//     delay: Math.random() * 10,
//   }));

//   const nebulas = [...Array(3)].map((_, i) => ({
//     id: i,
//     size: 400 + i * 200,
//     hue: 20 + i * 30,
//   }));

//   const orbs = [...Array(5)].map((_, i) => ({
//     id: i,
//     left: `${20 + i * 15}%`,
//     top: `${20 + Math.random() * 60}%`,
//     size: 100 + Math.random() * 200,
//   }));

//   const hexagons = [...Array(8)].map((_, i) => ({
//     id: i,
//     left: `${Math.random() * 100}%`,
//     top: `${Math.random() * 100}%`,
//     rotation: Math.random() * 360,
//   }));

//   const stars = [...Array(120)].map((_, i) => ({
//     id: i,
//     left: `${Math.random() * 100}%`,
//     top: `${Math.random() * 100}%`,
//     size: Math.random() * 3 + 0.5,
//     delay: Math.random() * 5,
//   }));

//   return (
//     <section className="min-h-screen bg-black text-gray-200 py-24 px-6 overflow-hidden relative">
//       {/* EPIC ANIMATED BACKGROUND */}
//       <div ref={bgRef} className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
//         {/* Deep Space Gradient */}
//         <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-orange-900/20" />

//         {/* Nebula Layers */}
//         {nebulas.map((n) => (
//           <div
//             key={n.id}
//             className="nebula absolute rounded-full blur-3xl opacity-30"
//             style={{
//               width: `${n.size}px`,
//               height: `${n.size}px`,
//               background: `radial-gradient(circle, hsl(${n.hue}, 70%, 60%), transparent 70%)`,
//               left: "50%",
//               top: "50%",
//               transform: "translate(-50%, -50%)",
//             }}
//           />
//         ))}

//         {/* Floating Energy Orbs */}
//         {orbs.map((orb) => (
//           <div
//             key={orb.id}
//             className="orb absolute rounded-full"
//             style={{
//               left: orb.left,
//               top: orb.top,
//               width: orb.size,
//               height: orb.size,
//               background: `radial-gradient(circle at 30% 30%, #fb923c, #f97316 40%, transparent 70%)`,
//               boxShadow: `0 0 ${orb.size / 3}px #f97316`,
//             }}
//           />
//         ))}

//         {/* Rotating Hexagons */}
//         {hexagons.map((h) => (
//           <div
//             key={h.id}
//             className="hexagon absolute opacity-10"
//             style={{
//               left: h.left,
//               top: h.top,
//               transform: `translate(-50%, -50%) rotate(${h.rotation}deg)`,
//             }}
//           >
//             <svg width="120" height="140" viewBox="0 0 100 115">
//               <path
//                 d="M50 5 L90 30 L90 80 L50 105 L10 80 L10 30 Z"
//                 fill="none"
//                 stroke="#fb923c"
//                 strokeWidth="0.5"
//               />
//             </svg>
//           </div>
//         ))}

//         {/* Floating Particles */}
//         {particles.map((p) => (
//           <div
//             key={p.id}
//             className="particle absolute rounded-full bg-orange-400/60 blur-sm"
//             style={{
//               left: p.left,
//               top: p.top,
//               width: p.size,
//               height: p.size,
//               boxShadow: "0 0 20px #fb923c",
//             }}
//           />
//         ))}

//         {/* Twinkling Stars */}
//         {stars.map((star) => (
//           <div
//             key={star.id}
//             className="star absolute bg-white rounded-full"
//             style={{
//               left: star.left,
//               top: star.top,
//               width: star.size,
//               height: star.size,
//               boxShadow: "0 0 10px rgba(255,255,255,0.8)",
//             }}
//           />
//         ))}
//       </div>

//       <div className="max-w-5xl mx-auto relative z-10">
//         {/* Title */}
//         <motion.div
//           ref={titleRef}
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           className="text-center mb-20"
//         >
//           <h2 className="text-5xl md:text-6xl font-bold tracking-tight">
//             <span className="bg-gradient-to-r from-orange-400 via-pink-500 to-purple-500 bg-clip-text text-transparent">
//               Work Experience
//             </span>
//           </h2>
//           <p className="mt-4 text-gray-500 text-lg">
//             Building the future, one line by line.
//           </p>
//         </motion.div>

//         {/* Timeline */}
//         <div className="relative" ref={timelineRef}>
//           <div className="timeline-line absolute left-8 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-orange-500/60 via-purple-500/40 to-pink-500/20 origin-top" />

//           {experiences.map((exp, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 50, scale: 0.95 }}
//               whileInView={{ opacity: 1, y: 0, scale: 1 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.7, delay: index * 0.2 }}
//               className={`relative flex items-center mb-16 experience-card-${index} ${
//                 index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
//               } flex-col`}
//             >
//               <div className={`w-full md:w-5/12 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
//                 <div className="group relative bg-gray-900/70 backdrop-blur-2xl border border-gray-800/80 rounded-2xl p-8 hover:border-orange-500/60 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 hover:-translate-y-3">
//                   <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-orange-500/20 via-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10 blur-xl" />

//                   <div className="flex items-center gap-3 mb-3">
//                     <span className="text-orange-400 font-semibold text-sm tracking-wider uppercase">
//                       {exp.company}
//                     </span>
//                     <span className="w-12 h-px bg-gradient-to-r from-orange-500 to-transparent" />
//                   </div>

//                   <h3 className="text-2xl font-bold text-white mb-2">{exp.title}</h3>
//                   <time className="text-sm text-purple-400 font-medium">{exp.date}</time>

//                   <p className="mt-4 text-gray-300 leading-relaxed">{exp.description}</p>

//                   <div className="mt-6 flex flex-wrap gap-2">
//                     {exp.skills.map((skill, i) => (
//                       <span
//                         key={i}
//                         className="px-4 py-2 text-xs font-medium bg-gradient-to-r from-orange-500/20 to-purple-500/20 text-orange-300 rounded-full border border-orange-500/30 backdrop-blur-sm group-hover:scale-110 transition-all duration-300"
//                       >
//                         {skill}
//                       </span>
//                     ))}
//                   </div>
//                 </div>
//               </div>

//               <div className="timeline-dot absolute left-8 md:left-1/2 transform md:-translate-x-1/2 flex items-center justify-center">
//                 <div className="w-5 h-5 bg-gradient-to-r from-orange-400 to-purple-600 rounded-full ring-8 ring-purple-500/30 shadow-2xl shadow-orange-500/40" />
//               </div>

//               <div className="w-full md:w-5/12 h-10 md:h-0" />
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const experiences = [
  {
    title: "Intern – Fullstack Developer",
    company: "Overload Ware Labs AI.",
    date: "August 2025 – August 2025",
    description:
      "Assisted in development and testing of web projects, collaborating with senior developers to troubleshoot and implement solutions.",
    skills: [
      "React.js · Redux · Node.js",
      "Firebase · Webflow",
    ],
    logo: "https://media.licdn.com/dms/image/v2/D560BAQFWzC5SjczRrg/company-logo_200_200/B56ZgrkWwVH0AM-/0/1753077607890?e=1766620800&v=beta&t=S7HGu7Pj8yZTKF-ZKzKbAx8gdyuvnfV9i4zoU8-desE", // AI/tech style
  },
  {
    title: "Project Trainee Intern – Fullstack Developer",
    company: "KS Globals",
    date: "Oct 2024 – May 2025",
    description:
      "Assisted in development and testing of web projects, collaborating with senior developers to troubleshoot and implement solutions.",
    skills: [
      "React.js · Redux · Node.js",
      "Strapi · Firebase",
      "GitHub · VS Code · Canva",
    ],
    logo: "https://media.licdn.com/dms/image/v2/C560BAQHLryqICbYGuw/company-logo_200_200/company-logo_200_200/0/1678177004339/k_s_globals_logo?e=1766620800&v=beta&t=c-AVB4e8NR9n6nvKrpU6pepLSzh5R_1w82XVx4OhVQs", // Modern corporate
  },
  {
    title: "Intern – Fullstack Developer",
    company: "Accent Techo Soft",
    date: "Jul 2024 – Jul 2024",
    description:
      "Contributed to web application development and testing under senior guidance.",
    skills: ["HTML · CSS · JavaScript · Bootstrap", "MySQL · Apache"],
    logo: "https://media.licdn.com/dms/image/v2/C510BAQGQV4LCCCJvpw/company-logo_200_200/company-logo_200_200/0/1630606270421/nightingale_software_park_private_limited_logo?e=1766620800&v=beta&t=56yYR1j_db3zMde47jWCFPGTaTB7mmJNg2ifXluNxBA", // Classic tech
  },
  {
    title: "Campus Executive",
    company: "KANALABS",
    date: "Jun 2023 – Jun 2024",
    description:
      "Led campus outreach initiatives and organized 3 major events with 500+ attendees.",
    skills: ["Event Planning", "Leadership & Public Speaking", "Community Building"],
    logo: "https://media.licdn.com/dms/image/v2/D560BAQFy13gXcvBqeg/company-logo_200_200/B56ZoWH8I2KEAI-/0/1761307772470/xyralabs_logo?e=1766620800&v=beta&t=faiqkQ9thCYrfsmz7B2Nf4Td4OfMV5Pb8aByk4QlMpY", // Community/education vibe
  },
];

export default function WorkExperience() {
  const timelineRef = useRef(null);
  const titleRef = useRef(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const logoRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title entrance
      gsap.fromTo(
        titleRef.current,
        { scale: 0.8, rotation: -5, opacity: 0 },
        {
          scale: 1,
          rotation: 0,
          opacity: 1,
          duration: 1.4,
          ease: "back.out(1.8)",
        }
      );

      // Card entrance
      experiences.forEach((_, i) => {
        gsap.fromTo(
          `.experience-card-${i}`,
          {
            opacity: 0,
            y: 80,
            scale: 0.9,
            rotation: i % 2 === 0 ? -8 : 8,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            rotation: 0,
            duration: 1,
            ease: "back.out(1.4)",
            delay: i * 0.25,
          }
        );
      });

      // Logo entrance + float animation
      logoRefs.current.forEach((logo, i) => {
        if (logo) {
          gsap.fromTo(
            logo,
            { opacity: 0, y: 20, rotation: -10 },
            {
              opacity: 1,
              y: 0,
              rotation: 0,
              duration: 0.8,
              delay: i * 0.25 + 0.5,
              ease: "back.out(1.7)",
            }
          );

          // Subtle floating hover effect
          gsap.to(logo, {
            y: "+=8",
            rotation: 2,
            duration: 4,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            delay: i * 0.3,
          });
        }
      });

      // Timeline line pulse
      gsap.to(".timeline-line", {
        scaleY: 1.05,
        opacity: 0.8,
        repeat: -1,
        yoyo: true,
        duration: 4,
        ease: "sine.inOut",
      });

      // Dot pulse
      gsap.to(".timeline-dot", {
        scale: 1.6,
        opacity: 0.6,
        duration: 2,
        repeat: -1,
        yoyo: true,
        stagger: 0.4,
        ease: "power2.inOut",
      });

      // Background animations (unchanged)
      gsap.to(".particle", {
        x: "+=100",
        y: "-=100",
        rotation: 360,
        opacity: 0.6,
        duration: gsap.utils.random(15, 30),
        ease: "none",
        repeat: -1,
        stagger: { each: 0.5, from: "random" },
      });

      gsap.to(".nebula", {
        x: "+=200",
        y: "+=100",
        rotation: 0.5,
        opacity: 0.4,
        duration: gsap.utils.random(40, 80),
        ease: "none",
        repeat: -1,
        yoyo: true,
      });

      gsap.to(".orb", {
        scale: 1.4,
        opacity: 0.7,
        duration: gsap.utils.random(3, 6),
        repeat: -1,
        yoyo: true,
        stagger: 1,
        ease: "sine.inOut",
      });

      gsap.to(".hexagon", {
        rotation: "+=360",
        duration: gsap.utils.random(20, 50),
        repeat: -1,
        ease: "none",
      });

      gsap.to(".star", {
        opacity: gsap.utils.random(0.2, 1),
        scale: gsap.utils.random(0.7, 1.6),
        duration: gsap.utils.random(2, 5),
        repeat: -1,
        yoyo: true,
        stagger: { amount: 3, from: "random" },
      });
    }, bgRef);

    return () => ctx.revert();
  }, []);

  // Generate background elements (unchanged)
  const particles = [...Array(20)].map((_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    size: Math.random() * 4 + 2,
  }));

  const nebulas = [...Array(3)].map((_, i) => ({
    id: i,
    size: 400 + i * 200,
    hue: 20 + i * 30,
  }));

  const orbs = [...Array(5)].map((_, i) => ({
    id: i,
    left: `${20 + i * 15}%`,
    top: `${20 + Math.random() * 60}%`,
    size: 100 + Math.random() * 200,
  }));

  const hexagons = [...Array(8)].map((_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    rotation: Math.random() * 360,
  }));

  const stars = [...Array(120)].map((_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    size: Math.random() * 3 + 0.5,
  }));

  return (
    <section className="min-h-screen bg-black text-gray-200 py-24 px-6 overflow-hidden relative">
      {/* EPIC ANIMATED BACKGROUND (unchanged) */}
      <div ref={bgRef} className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-orange-900/20" />
        {nebulas.map((n) => (
          <div
            key={n.id}
            className="nebula absolute rounded-full blur-3xl opacity-30"
            style={{
              width: `${n.size}px`,
              height: `${n.size}px`,
              background: `radial-gradient(circle, hsl(${n.hue}, 70%, 60%), transparent 70%)`,
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
            }}
          />
        ))}
        {orbs.map((orb) => (
          <div
            key={orb.id}
            className="orb absolute rounded-full"
            style={{
              left: orb.left,
              top: orb.top,
              width: orb.size,
              height: orb.size,
              background: `radial-gradient(circle at 30% 30%, #fb923c, #f97316 40%, transparent 70%)`,
              boxShadow: `0 0 ${orb.size / 3}px #f97316`,
            }}
          />
        ))}
        {hexagons.map((h) => (
          <div
            key={h.id}
            className="hexagon absolute opacity-10"
            style={{
              left: h.left,
              top: h.top,
              transform: `translate(-50%, -50%) rotate(${h.rotation}deg)`,
            }}
          >
            <svg width="120" height="140" viewBox="0 0 100 115">
              <path d="M50 5 L90 30 L90 80 L50 105 L10 80 L10 30 Z" fill="none" stroke="#fb923c" strokeWidth="0.5" />
            </svg>
          </div>
        ))}
        {particles.map((p) => (
          <div
            key={p.id}
            className="particle absolute rounded-full bg-orange-400/60 blur-sm"
            style={{
              left: p.left,
              top: p.top,
              width: p.size,
              height: p.size,
              boxShadow: "0 0 20px #fb923c",
            }}
          />
        ))}
        {stars.map((star) => (
          <div
            key={star.id}
            className="star absolute bg-white rounded-full"
            style={{
              left: star.left,
              top: star.top,
              width: star.size,
              height: star.size,
              boxShadow: "0 0 10px rgba(255,255,255,0.8)",
            }}
          />
        ))}
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Title */}
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight">
            <span className="bg-gradient-to-r from-orange-400 via-pink-500 to-purple-500 bg-clip-text text-transparent">
              Work Experience
            </span>
          </h2>
          <p className="mt-4 text-gray-500 text-lg">
            Building the future, one line by line.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative" ref={timelineRef}>
          <div className="timeline-line absolute left-8 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-orange-500/60 via-purple-500/40 to-pink-500/20 origin-top" />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              className={`relative flex items-center mb-16 experience-card-${index} ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } flex-col`}
            >
              <div className={`w-full md:w-5/12 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                <div className="group relative bg-gray-900/70 backdrop-blur-2xl border border-gray-800/80 rounded-2xl p-8 hover:border-orange-500/60 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 hover:-translate-y-3">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-orange-500/20 via-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10 blur-xl" />

                  {/* Company Logo + Name */}
                  <div className="flex items-center gap-4 mb-4">
                    <div
                      ref={(el) => (logoRefs.current[index] = el)}
                      className="relative flex-shrink-0"
                    >
                      <div className="w-14 h-14 rounded-xl overflow-hidden border-2 border-orange-500/30 shadow-lg shadow-orange-500/20 group-hover:scale-110 group-hover:border-orange-400 transition-all duration-500">
                        <img
                          src={exp.logo}
                          alt={`${exp.company} logo`}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>
                      {/* Glow effect on hover */}
                      <div className="absolute inset-0 rounded-xl bg-orange-400/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10" />
                    </div>

                    <div>
                      <span className="text-orange-400 font-semibold text-sm tracking-wider uppercase block">
                        {exp.company}
                      </span>
                      <span className="w-20 h-px bg-gradient-to-r from-orange-500 to-transparent block mt-1" />
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-2">{exp.title}</h3>
                  <time className="text-sm text-purple-400 font-medium">{exp.date}</time>

                  <p className="mt-4 text-gray-300 leading-relaxed">{exp.description}</p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {exp.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="px-4 py-2 text-xs font-medium bg-gradient-to-r from-orange-500/20 to-purple-500/20 text-orange-300 rounded-full border border-orange-500/30 backdrop-blur-sm group-hover:scale-110 transition-all duration-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="timeline-dot absolute left-8 md:left-1/2 transform md:-translate-x-1/2 flex items-center justify-center">
                <div className="w-5 h-5 bg-gradient-to-r from-orange-400 to-purple-600 rounded-full ring-8 ring-purple-500/30 shadow-2xl shadow-orange-500/40" />
              </div>

              <div className="w-full md:w-5/12 h-10 md:h-0" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}