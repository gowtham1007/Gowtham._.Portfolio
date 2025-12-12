


// 'use client';

// import React, { useEffect, useRef } from 'react';
// import { motion } from 'framer-motion';
// import { gsap } from 'gsap';
// import { Carousel } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Trophy, UsersRound, Award, Wrench } from 'lucide-react';

// const achievements = [
//   {
//     id: 1,
//     icon: <Trophy className="w-12 h-12" />,
//     heading: "Hackathon Finalist and Participation",
//     description: "I have participated in six major hackathons, securing first place in SIH 2024 (college level) and reaching the finals in Uyir Hackathon 2025. I also took part in SIH 2025, MSME 4.0, Lablab.ai, and Hack2Skill, gaining strong technical and teamwork experience",
//     features: [],
//     tech: [],
//     images: [
//       "src/assets/uyir1.jpg",
//       "src/assets/A3.jpeg",
//       "src/assets/A2.jpeg" ,
//       "src/assets/GAI.png",
//       "src/assets/uyir.png",
//       "src/assets/sih.jpeg",
//       "src/assets/labai.jpeg"
//     ],
//   },
//   {
//     id: 2,
//     icon: <UsersRound className="w-12 h-12" />,
//     heading: "Organizing Events",
//     description: " As a campus executive, An organizing events on campus.I successfully coordinated  events with 300–400 student participants. I hosted an online event attended by around 100 members.These experiences strengthened my leadership.",
//     features: [],
//     tech: [],
//     images: [
//       "src/assets/c1.jpeg",
//       "src/assets/c3 .jpeg",
//       "src/assets/c2.jpeg",
//       "src/assets/c4.jpeg",
//     ],
//   },
//   {
//     id: 3,
//     icon: <Award className="w-12 h-12" />,
//     heading: "Certifications",
//     description: "I have completed 30+ certifications across cloud, automation, and software engineering.Key credentials include AWS Academy Cloud Foundations, Accenture Nordics Software Engineering Simulation, and UiPath Automation Developer certifications.I also earned industry-recognized badges from Naukri (AiNCAT) and upGrad in SEO and React.These certifications strengthened my technical skills and provided hands-on real-world learning",
//     features: [],
//     tech: [],
//     images: [
//       "src/assets/ct1.png",
//       "src/assets/ct2.png",
//       "src/assets/ct3.png",
//       "src/assets/ct4.png",
//       "src/assets/ct5.png",
//     ],
//   },
//   {
//     id: 4,
//     icon: <Wrench className="w-12 h-12" />,
//     heading: "Workshops",
//     description: "I have actively participated in 20+ workshops, seminars, across AI, cloud, and productivity tools.These include sessions on LLMs with LangChain, Google AI Labs, Office Master Excel, and Future Prime Skills Cloud.I also gained hands-on experience through Amypo Cloud, Viskit Bharat, and Novitech AI programs.Additionally, I completed the Future Prime Skills Ascent AI Fundamental Skills training, strengthening my core AI knowledge.",
//     features: [],
//     tech: [],
//     images: [
//       "src/assets/cw1.jpeg",
//       "src/assets/cw2.jpeg",
//       "src/assets/cw3.jpeg",
//       "src/assets/cw4.jpeg",
//       "src/assets/cw5.jpeg",
//       "src/assets/cw6.jpeg",
//       "src/assets/cw7.jpeg",
//     ],
//   },
// ];

// export default function AchievementsShowcase() {
//   const starsRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const stars = starsRef.current?.querySelectorAll('.star');
//     if (!stars) return;

//     stars.forEach((star, i) => {
//       gsap.to(star, {
//         opacity: Math.random() > 0.5 ? 0.3 : 1,
//         duration: 1 + Math.random() * 2,
//         repeat: -1,
//         yoyo: true,
//         delay: i * 0.1,
//         ease: "power1.inOut",
//       });
//     });
//   }, []);

//   return (
//     <>
//       <div className="min-h-screen bg-black text-white overflow-hidden relative">
//         {/* Blinking Stars Background */}
//         <div ref={starsRef} className="absolute inset-0 pointer-events-none">
//           {[...Array(100)].map((_, i) => (
//             <div
//               key={i}
//               className="star absolute rounded-full bg-white"
//               style={{
//                 width: Math.random() * 3 + 1 + 'px',
//                 height: Math.random() * 3 + 1 + 'px',
//                 top: Math.random() * 100 + '%',
//                 left: Math.random() * 100 + '%',
//                 opacity: 0.6,
//               }}
//             />
//           ))}
//         </div>

//         <div className="relative z-10 container mx-auto px-6 py-16">
//           <motion.h1
//             initial={{ opacity: 0, y: -50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1, type: "spring" }}
//             className="text-5xl md:text-7xl font-bold text-center mb-20 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-amber-400"
//           >
//             Achievements
//           </motion.h1>

//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
//             {achievements.map((project, index) => (
//               <motion.div
//                 key={project.id}
//                 initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.8, delay: index * 0.2 }}
//                 className="group relative"
//               >
//                 <div className="bg-gray-900/50 backdrop-blur-lg rounded-3xl overflow-hidden border border-orange-500/20 shadow-2xl hover:shadow-orange-500/30 transition-all duration-500 hover:scale-105">
//                   <div className="p-8 md:p-10">
//                     <div className="flex items-center gap-4 mb-6">
//                       <div className="p-4 bg-gradient-to-br from-orange-600 to-amber-600 rounded-2xl text-white">
//                         {project.icon}
//                       </div>
//                       <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-amber-400">
//                         {project.heading}
//                       </h2>
//                     </div>

//                     <p className="text-gray-300 text-lg mb-6 leading-relaxed">
//                       {project.description}
//                     </p>

//                     {/* Removed Features & Tech sections since your reference doesn't have them */}
                    
//                     {/* Image Carousel */}
//                     <Carousel
//                       indicators={false}
//                       controls={project.images.length > 1}
//                       interval={1200}
//                       className="rounded-2xl overflow-hidden border-2 border-orange-500/30"
//                     >
//                       {project.images.map((img, i) => (
//                         <Carousel.Item key={i}>
//                           <img
//                             className="d-block w-full h-64 md:h-96 object-contain bg-black/40"
//                             src={img}
//                             alt={`Slide ${i + 1}`}
//                           />
//                         </Carousel.Item>
//                       ))}
//                     </Carousel>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>

//           {/* Final CTA */}
//           <motion.div
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             transition={{ delay: 1 }}
//             className="text-center mt-20"
//           >
//             <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-amber-500">
//               Keep Growing, Keep Achieving
//             </h2>
//             <p className="text-xl text-gray-300">
//               Every milestone is a step toward excellence.
//             </p>
//           </motion.div>
//         </div>
//       </div>
//     </>
//   );
// }




'use client';

import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Trophy, UsersRound, Award, Wrench } from 'lucide-react';

const achievements = [
  {
    id: 1,
    icon: <Trophy className="w-12 h-12" />,
    heading: "Hackathon Finalist and Participation",
    description: "I have participated in six major hackathons, securing first place in SIH 2024 (college level) and reaching the finals in Uyir Hackathon 2025. I also took part in SIH 2025, MSME 4.0, Lablab.ai, and Hack2Skill, gaining strong technical and teamwork experience",
    features: [],
    tech: [],
    images: [
      "src/assets/uyir1.jpg",
      "src/assets/A3.jpeg",
      "src/assets/A2.jpeg",
      "src/assets/GAI.png",
      "src/assets/uyir.png",
      "src/assets/sih.jpeg",
      "src/assets/labai.jpeg"
    ],
  },
  {
    id: 2,
    icon: <UsersRound className="w-12 h-12" />,
    heading: "Organizing Events",
    description: " As a campus executive, An organizing events on campus.I successfully coordinated  events with 300–400 student participants. I hosted an online event attended by around 100 members.These experiences strengthened my leadership.",
    features: [],
    tech: [],
    images: [
      "src/assets/c1.jpeg",
      "src/assets/c3 .jpeg",
      "src/assets/c2.jpeg",
      "src/assets/c4.jpeg",
    ],
  },
  {
    id: 3,
    icon: <Award className="w-12 h-12" />,
    heading: "Certifications",
    description: "I have completed 30+ certifications across cloud, automation, and software engineering.Key credentials include AWS Academy Cloud Foundations, Accenture Nordics Software Engineering Simulation, and UiPath Automation Developer certifications.I also earned industry-recognized badges from Naukri (AiNCAT) and upGrad in SEO and React.These certifications strengthened my technical skills and provided hands-on real-world learning",
    features: [],
    tech: [],
    images: [
      "src/assets/ct1.png",
      "src/assets/ct2.png",
      "src/assets/ct3.png",
      "src/assets/ct4.png",
      "src/assets/ct5.png",
    ],
  },
  {
    id: 4,
    icon: <Wrench className="w-12 h-12" />,
    heading: "Workshops",
    description: "I have actively participated in 20+ workshops, seminars, across AI, cloud, and productivity tools.These include sessions on LLMs with LangChain, Google AI Labs, Office Master Excel, and Future Prime Skills Cloud.I also gained hands-on experience through Amypo Cloud, Viskit Bharat, and Novitech AI programs.Additionally, I completed the Future Prime Skills Ascent AI Fundamental Skills training, strengthening my core AI knowledge.",
    features: [],
    tech: [],
    images: [
      "src/assets/cw1.jpeg",
      "src/assets/cw2.jpeg",
      "src/assets/cw3.jpeg",
      "src/assets/cw4.jpeg",
      "src/assets/cw5.jpeg",
      "src/assets/cw6.jpeg",
      "src/assets/cw7.jpeg",
    ],
  },
];

export default function AchievementsShowcase() {
  const starsRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Blinking Stars
    const stars = starsRef.current?.querySelectorAll('.star');
    stars?.forEach((star, i) => {
      gsap.to(star, {
        opacity: Math.random() > 0.5 ? 0.2 : 1,
        duration: 1.5 + Math.random() * 3,
        repeat: -1,
        yoyo: true,
        delay: i * 0.05,
        ease: "power1.inOut",
      });
    });

    // Floating Particles / Light Orbs
    const particles = particlesRef.current?.querySelectorAll('.particle');
    particles?.forEach((p, i) => {
      gsap.to(p, {
        x: Math.random() * 300 - 150,
        y: Math.random() * 300 - 150,
        scale: 0.8 + Math.random() * 0.7,
        opacity: 0.6,
        duration: 15 + Math.random() * 20,
        repeat: -1,
        yoyo: true,
        ease: "none",
        delay: i * 0.3,
      });
    });

    // Subtle grid pulse
    if (gridRef.current) {
      gsap.to(gridRef.current, {
        opacity: 0.4,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }
  }, []);

  return (
    <>
      <div className="min-h-screen bg-black text-white overflow-hidden relative">
        {/* Animated Network Grid Background */}
        <div
          ref={gridRef}
          className="absolute inset-0 opacity-30 pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(cyan 1px, transparent 1px),
              linear-gradient(90deg, cyan 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px',
            maskImage: 'radial-gradient(circle at center, black 30%, transparent 80%)',
            WebkitMaskImage: 'radial-gradient(circle at center, black 30%, transparent 80%)',
          }}
        />

        {/* Blinking Stars Layer */}
        <div ref={starsRef} className="absolute inset-0 pointer-events-none">
          {[...Array(150)].map((_, i) => (
            <div
              key={`star-${i}`}
              className="star absolute rounded-full bg-white shadow-glow"
              style={{
                width: Math.random() * 3 + 1 + 'px',
                height: Math.random() * 3 + 1 + 'px',
                top: Math.random() * 100 + '%',
                left: Math.random() * 100 + '%',
                boxShadow: '0 0 8px rgba(255,255,255,0.8)',
              }}
            />
          ))}
        </div>

        {/* Floating Glow Particles / Light Orbs */}
        <div ref={particlesRef} className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div
              key={`particle-${i}`}
              className="particle absolute rounded-full"
              style={{
                width: Math.random() * 80 + 20 + 'px',
                height: Math.random() * 80 + 20 + 'px',
                background: `radial-gradient(circle, rgba(251,146,60,0.6), transparent 70%)`,
                filter: 'blur(20px)',
                top: Math.random() * 100 + '%',
                left: Math.random() * 100 + '%',
              }}
            />
          ))}
        </div>

        {/* Moving Connection Lines (Neural Network Style) */}
        <svg className="absolute inset-0 pointer-events-none opacity-20" style={{ zIndex: 1 }}>
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fb923c" />
              <stop offset="100%" stopColor="#22d3ee" />
            </linearGradient>
          </defs>
          {[...Array(8)].map((_, i) => {
            const x1 = Math.random() * 100;
            const y1 = Math.random() * 100;
            const x2 = Math.random() * 100;
            const y2 = Math.random() * 100;
            return (
              <line
                key={`line-${i}`}
                x1={`${x1}%`}
                y1={`${y1}%`}
                x2={`${x2}%`}
                y2={`${y2}%`}
                stroke="url(#lineGradient)"
                strokeWidth="1"
                opacity="0.6"
              >
                <animate
                  attributeName="opacity"
                  values="0;0.8;0"
                  dur={`${8 + i}s`}
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="stroke-dashoffset"
                  from="0"
                  to="-100"
                  dur={`${10 + i * 2}s`}
                  repeatCount="indefinite"
                />
              </line>
            );
          })}
        </svg>

        {/* Main Content - Unchanged */}
        <div className="relative z-10 container mx-auto px-6 py-16">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, type: "spring" }}
            className="text-5xl md:text-7xl font-bold text-center mb-20 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-amber-400"
          >
            Achievements
          </motion.h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
            {achievements.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="group relative"
              >
                <div className="bg-gray-900/50 backdrop-blur-lg rounded-3xl overflow-hidden border border-orange-500/20 shadow-2xl hover:shadow-orange-500/30 transition-all duration-500 hover:scale-105">
                  <div className="p-8 md:p-10">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="p-4 bg-gradient-to-br from-orange-600 to-amber-600 rounded-2xl text-white">
                        {project.icon}
                      </div>
                      <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-amber-400">
                        {project.heading}
                      </h2>
                    </div>

                    <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    <Carousel
                      indicators={false}
                      controls={project.images.length > 1}
                      interval={1200}
                      className="rounded-2xl overflow-hidden border-2 border-orange-500/30"
                    >
                      {project.images.map((img, i) => (
                        <Carousel.Item key={i}>
                          <img
                            className="d-block w-full h-64 md:h-96 object-contain bg-black/40"
                            src={img}
                            alt={`Slide ${i + 1}`}
                          />
                        </Carousel.Item>
                      ))}
                    </Carousel>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="text-center mt-20"
          >
            <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-amber-500">
              Keep Growing, Keep Achieving
            </h2>
            <p className="text-xl text-gray-300">
              Every milestone is a step toward excellence.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Optional: Add this to your global CSS for glow effect */}
      <style jsx global>{`
        .shadow-glow {
          box-shadow: 0 0 10px rgba(255, 255, 255, 0.8);
        }
      `}</style>
    </>
  );
}