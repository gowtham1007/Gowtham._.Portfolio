

// // src/Pages/Contacts.tsx
// import React, { useEffect, useRef } from "react";
// import { motion } from "framer-motion";
// import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import Swal from "sweetalert2";

// import CVFile from "../assets/Gowtham R _ Resume.pdf";
// import ProfileImage from "../assets/G-profile.png";

// gsap.registerPlugin(ScrollTrigger);

// interface Star {
//   x: number;
//   y: number;
//   size: number;
//   opacity: number;
//   twinkleSpeed: number;
//   pulsePhase: number;
// }

// const ContactPage: React.FC = () => {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const canvasRef = useRef<HTMLCanvasElement>(null);
//   const profileRef = useRef<HTMLDivElement>(null);
//   const formRef = useRef<HTMLDivElement>(null);

//   // ONLY THE STARS — Clean Bloating & Twinkling Starfield
//   useEffect(() => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;

//     const ctx = canvas.getContext("2d");
//     if (!ctx) return;

//     let animationFrameId: number;
//     const stars: Star[] = [];

//     const resizeCanvas = () => {
//       canvas.width = window.innerWidth;
//       canvas.height = window.innerHeight;
//     };

//     resizeCanvas();
//     window.addEventListener("resize", resizeCanvas);

//     // Generate stars
//     const starCount = Math.floor((window.innerWidth * window.innerHeight) / 3000);
//     for (let i = 0; i < starCount; i++) {
//       stars.push({
//         x: Math.random() * canvas.width,
//         y: Math.random() * canvas.height,
//         size: Math.random() * 2 + 0.5,
//         opacity: Math.random() * 0.8 + 0.2,
//         twinkleSpeed: Math.random() * 0.04 + 0.015,
//         pulsePhase: Math.random() * Math.PI * 2,
//       });
//     }

//     const animate = () => {
//       ctx.clearRect(0, 0, canvas.width, canvas.height);

//       stars.forEach((star) => {
//         star.pulsePhase += star.twinkleSpeed;

//         const pulse = Math.sin(star.pulsePhase) * 0.4 + 0.6;
//         const opacity = star.opacity * pulse;
//         const bloatedSize = star.size * (1 + Math.sin(star.pulsePhase * 1.5) * 0.4);

//         ctx.beginPath();
//         ctx.arc(star.x, star.y, bloatedSize, 0, Math.PI * 2);
//         ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
//         ctx.shadowBlur = bloatedSize * 12;
//         ctx.shadowColor = "#ffffff";
//         ctx.fill();
//       });

//       animationFrameId = requestAnimationFrame(animate);
//     };

//     animate();

//     return () => {
//       window.removeEventListener("resize", resizeCanvas);
//       cancelAnimationFrame(animationFrameId);
//     };
//   }, []);

//   // Keep your GSAP entrance animations (profile + form)
//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       gsap.from(profileRef.current, {
//         y: 300,
//         opacity: 0,
//         rotation: -15,
//         duration: 1.2,
//         ease: "back.out(1.7)",
//       });

//       gsap.from(formRef.current?.children, {
//         y: 60,
//         opacity: 0,
//         stagger: 0.15,
//         duration: 0.8,
//         ease: "power3.out",
//         scrollTrigger: {
//           trigger: formRef.current,
//           start: "top 80%",
//         },
//       });
//     }, containerRef);

//     return () => ctx.revert();
//   }, []);

//   const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     const formData = new FormData(e.currentTarget);
//     formData.append("access_key", "758692e8-02fe-46c1-b7a0-7e5b532b2114");

//     const res = await fetch("https://api.web3forms.com/submit", {
//       method: "POST",
//       body: formData,
//     }).then((res) => res.json());

//     if (res.success) {
//       Swal.fire({
//         title: "Sent!",
//         text: "I'll get back to you soon",
//         icon: "success",
//         background: "#1a1a1a",
//         color: "#fff",
//         confirmButtonColor: "#FF4E00",
//       });
//       e.currentTarget.reset();
//     }
//   };

//   return (
//     <div ref={containerRef} className="min-h-screen bg-black text-gray-200 overflow-hidden relative">
//       {/* ONLY STARS — Pure Cosmic Background */}
//       <canvas
//         ref={canvasRef}
//         className="fixed inset-0 pointer-events-none z-0"
//         style={{ mixBlendMode: "screen" }}
//       />

//       {/* Main Content */}
//       <div className="relative z-10 flex flex-col lg:flex-row min-h-screen items-center justify-between px-6 py-16 max-w-7xl mx-auto gap-12">
//         {/* Profile Section */}
//         <motion.div
//           ref={profileRef}
//           className="flex flex-col items-center lg:items-start text-center lg:text-left"
//           whileHover={{ scale: 1.02 }}
//           transition={{ type: "spring", stiffness: 300 }}
//         >
//           <motion.div
//             className="relative group mb-8"
//             whileHover={{ rotateY: 15, rotateX: 10 }}
//             style={{ transformStyle: "preserve-3d" }}
//           >
//             <div className="w-80 h-80 rounded-3xl overflow-hidden border-4 border-orange-600 shadow-2xl shadow-orange-600/40">
//               <img
//                 src={ProfileImage}
//                 alt="Gowtham R"
//                 className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
//               <div className="absolute inset-0 bg-orange-600 mix-blend-overlay opacity-0 group-hover:opacity-30 transition-opacity" />
//             </div>
//             <div className="absolute -inset-2 bg-orange-600 blur-3xl opacity-40 group-hover:opacity-70 transition-opacity -z-10" />
//           </motion.div>

//           <motion.h1
//             className="text-5xl font-black bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-yellow-500"
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.6 }}
//           >
//             GOWTHAM R
//           </motion.h1>

//           <motion.p className="text-2xl font-bold text-gray-400 mt-2 tracking-wider"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.8 }}
//           >
//             FULLSTACK DEVELOPER
//           </motion.p>

//           <div className="flex gap-8 mt-8 text-4xl">
//             {[
//               { Icon: FaLinkedin, link: "https://www.linkedin.com/in/gowtham1008/" },
//               { Icon: FaGithub, link: "https://github.com/gowtham1007" },
//               { Icon: FaInstagram, link: "https://instagram.com/gowtham._.1008/" },
//             ].map(({ Icon, link }, i) => (
//               <motion.a
//                 key={i}
//                 href={link}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 whileHover={{ y: -10, color: "#FF4E00" }}
//                 transition={{ type: "spring" }}
//               >
//                 <Icon />
//               </motion.a>
//             ))}
//           </div>

//           <motion.a
//             href={CVFile}
//             download="Gowtham_R_Resume.pdf"
//             className="mt-10 px-10 py-4 bg-orange-600 text-black font-bold text-lg rounded-full shadow-2xl hover:bg-orange-500 transition-all hover:shadow-orange-600/60"
//             whileHover={{ scale: 1.1 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             DOWNLOAD CV
//           </motion.a>
//         </motion.div>

//         {/* Contact Form */}
//         <motion.div
//           ref={formRef}
//           className="w-full lg:w-1/2 bg-gray-900/70 backdrop-blur-xl border border-gray-800 rounded-3xl p-10 shadow-2xl"
//           initial={{ opacity: 0, x: 200 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 1, delay: 0.4 }}
//         >
//           <h2 className="text-5xl font-black text-orange-500 mb-8 text-center tracking-tight">
//             LET'S CONNECT
//           </h2>

//           <div className="grid grid-cols-2 gap-1 text-gray-400 mb-8 text-sm">
//             <div>gowtham1008r@gmail.com</div>
//             <div>+91 63695 48380</div>
//           </div>

//           <form onSubmit={onSubmit} className="space-y-6">
//             {["name", "email", "Mobile Number", "message"].map((field) => (
//               <motion.div
//                 key={field}
//                 whileFocus={{ scale: 1.02 }}
//                 transition={{ type: "spring" }}
//               >
//                 <input
//                   type={field === "message" ? "textarea" : field === "email" ? "email" : "text"}
//                   name={field === "Mobile Number" ? "Mobile Number" : field}
//                   placeholder={`Your ${field}`}
//                   required
//                   rows={field === "message" ? 5 : undefined}
//                   className="w-full px-6 py-4 bg-gray-800/60 border border-gray-700 rounded-2xl focus:border-orange-500 focus:outline-none focus:ring-4 focus:ring-orange-500/30 transition-all placeholder-gray-500 text-white resize-none"
//                 />
//               </motion.div>
//             ))}

//             <motion.button
//               type="submit"
//               className="w-full py-4 bg-gradient-to-r from-orange-600 to-red-600 text-black font-black text-xl rounded-2xl shadow-xl hover:shadow-orange-600/50 transform hover:-translate-y-1 transition-all"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               SEND MESSAGE
//             </motion.button>
//           </form>

//           <p className="text-center mt-10 text-gray-500 text-sm">
//             Crafted By <span className="text-orange-500">Gowtham R</span>
//           </p>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default ContactPage;

import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Swal from "sweetalert2";

import CVFile from "../assets/Gowtham R _ Resume.pdf";
import ProfileImage from "../assets/G-profile.png";

gsap.registerPlugin(ScrollTrigger);

const ContactPage: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const profileRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);

  // GSAP entrance animations only
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(profileRef.current, {
        y: 300,
        opacity: 0,
        rotation: -15,
        duration: 1.2,
        ease: "back.out(1.7)",
      });

      gsap.from(formRef.current?.children, {
        y: 60,
        opacity: 0,
        stagger: 0.15,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: formRef.current,
          start: "top 80%",
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    formData.append("access_key", "758692e8-02fe-46c1-b7a0-7e5b532b2114");

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Sent!",
        text: "I'll get back to you soon",
        icon: "success",
        background: "#1a1a1a",
        color: "#fff",
        confirmButtonColor: "#FF4E00",
      });
      e.currentTarget.reset();
    }
  };

  return (
    <div ref={containerRef} className="min-h-screen bg-black text-gray-200 overflow-hidden relative">
      {/* Stars have been completely removed */}

      {/* Main Content */}
      <div className="relative z-10 flex flex-col lg:flex-row min-h-screen items-center justify-between px-6 py-16 max-w-7xl mx-auto gap-12">
        {/* Profile Section */}
        <motion.div
          ref={profileRef}
          className="flex flex-col items-center lg:items-start text-center lg:text-left"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <motion.div
            className="relative group mb-8"
            whileHover={{ rotateY: 15, rotateX: 10 }}
            style={{ transformStyle: "preserve-3d" }}
          >
            <div className="w-80 h-80 rounded-3xl overflow-hidden border-4 border-orange-600 shadow-2xl shadow-orange-600/40">
              <img
                src={ProfileImage}
                alt="Gowtham R"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
              <div className="absolute inset-0 bg-orange-600 mix-blend-overlay opacity-0 group-hover:opacity-30 transition-opacity" />
            </div>
            <div className="absolute -inset-2 bg-orange-600 blur-3xl opacity-40 group-hover:opacity-70 transition-opacity -z-10" />
          </motion.div>

          <motion.h1
            className="text-5xl font-black bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-yellow-500"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            GOWTHAM R
          </motion.h1>

          <motion.p className="text-2xl font-bold text-gray-400 mt-2 tracking-wider"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            FULLSTACK DEVELOPER
          </motion.p>

          <div className="flex gap-8 mt-8 text-4xl">
            {[
              { Icon: FaLinkedin, link: "https://www.linkedin.com/in/gowtham1008/" },
              { Icon: FaGithub, link: "https://github.com/gowtham1007" },
              { Icon: FaInstagram, link: "https://instagram.com/gowtham._.1008/" },
            ].map(({ Icon, link }, i) => (
              <motion.a
                key={i}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -10, color: "#FF4E00" }}
                transition={{ type: "spring" }}
              >
                <Icon />
              </motion.a>
            ))}
          </div>

          <motion.a
            href={CVFile}
            download="Gowtham_R_Resume.pdf"
            className="mt-10 px-10 py-4 bg-orange-600 text-black font-bold text-lg rounded-full shadow-2xl hover:bg-orange-500 transition-all hover:shadow-orange-600/60"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            DOWNLOAD CV
          </motion.a>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          ref={formRef}
          className="w-full lg:w-1/2 bg-gray-900/70 backdrop-blur-xl border border-gray-800 rounded-3xl p-10 shadow-2xl"
          initial={{ opacity: 0, x: 200 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <h2 className="text-5xl font-black text-orange-500 mb-8 text-center tracking-tight">
            LET'S CONNECT
          </h2>

          <div className="grid grid-cols-2 gap-1 text-gray-400 mb-8 text-sm">
            <div>gowtham1008r@gmail.com</div>
            <div>+91 63695 48380</div>
          </div>

          <form onSubmit={onSubmit} className="space-y-6">
            {["name", "email", "Mobile Number", "message"].map((field) => (
              <motion.div
                key={field}
                whileFocus={{ scale: 1.02 }}
                transition={{ type: "spring" }}
              >
                <input
                  type={field === "message" ? "textarea" : field === "email" ? "email" : "text"}
                  name={field === "Mobile Number" ? "Mobile Number" : field}
                  placeholder={`Your ${field}`}
                  required
                  rows={field === "message" ? 5 : undefined}
                  className="w-full px-6 py-4 bg-gray-800/60 border border-gray-700 rounded-2xl focus:border-orange-500 focus:outline-none focus:ring-4 focus:ring-orange-500/30 transition-all placeholder-gray-500 text-white resize-none"
                />
              </motion.div>
            ))}

            <motion.button
              type="submit"
              className="w-full py-4 bg-gradient-to-r from-orange-600 to-red-600 text-black font-black text-xl rounded-2xl shadow-xl hover:shadow-orange-600/50 transform hover:-translate-y-1 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              SEND MESSAGE
            </motion.button>
          </form>

          <p className="text-center mt-10 text-gray-500 text-sm">
            Crafted By <span className="text-orange-500">Gowtham R</span>
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactPage;