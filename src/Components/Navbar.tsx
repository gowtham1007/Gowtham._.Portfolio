// import { AnimatePresence, motion } from "framer-motion";
// import { Menu, X } from "lucide-react";
// import { useEffect, useRef, useState } from "react";
// import { gsap } from "gsap";
// import Logo from "../assets/name.png";

// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [isHeroVisible, setIsHeroVisible] = useState(true);
//   const navRef = useRef(null);

//   useEffect(() => {
//     gsap.fromTo(
//       navRef.current,
//       { y: -80, opacity: 0 },
//       { y: 0, opacity: 1, duration: 1.2, ease: "power3.out" }
//     );
//   }, []);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => setIsHeroVisible(entry.isIntersecting),
//       { threshold: 0.1 }
//     );
//     const section = document.querySelector("#hero");
//     if (section) observer.observe(section);
//     return () => section && observer.unobserve(section);
//   }, []);

//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth >= 768) setMenuOpen(false);
//     };
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   const handleLinkClick = (e, id) => {
//     e.preventDefault();
//     const section = document.querySelector(id);
//     if (section) section.scrollIntoView({ behavior: "smooth" });
//     setMenuOpen(false);
//   };

//   if (!isHeroVisible) return null;

//   const navItems = [
//     { href: "#hero", label: "Home" },
//     { href: "#about", label: "About" },
//     { href: "#experience", label: "Experience" },
//     { href: "#projects", label: "Projects" },
//   ];

//   const itemVariants = {
//     hiddenLeft: { opacity: 0, x: -80 },
//     hiddenRight: { opacity: 0, x: 80 },
//     visible: {
//       opacity: 1,
//       x: 0,
//       transition: { type: "spring", stiffness: 80, damping: 12 },
//     },
//   };

//   return (
//     <motion.nav
//       ref={navRef}
//       className="fixed top-0 w-full z-50 bg-gradient-to-r from-[#1a1a1a] to-[#000000] border-b border-orange-500/20 backdrop-blur-md shadow-[0_0_25px_rgba(255,140,0,0.3)]"
//       initial={{ y: -100, opacity: 0 }}
//       animate={{ y: 0, opacity: 1 }}
//       transition={{ duration: 0.8, ease: "easeOut" }}
//     >
//       <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

//         {/* Logo */}
//         <motion.div
//           whileHover={{ scale: 1.1, rotate: 3 }}
//           transition={{ type: "spring", stiffness: 300 }}
//           className="cursor-pointer"
//           onClick={(e) => handleLinkClick(e, "#hero")}
//         >
//           <img
//             src={Logo}
//             alt="Logo"
//             className="h-12 w-auto drop-shadow-[0_0_15px_rgba(255,165,0,0.7)]"
//           />
//         </motion.div>

//         {/* Desktop Navigation */}
//         <motion.div
//           className="hidden md:flex space-x-8 text-lg font-medium"
//           initial="hidden"
//           animate="visible"
//         >
//           {navItems.map((item, i) => (
//             <motion.a
//               key={item.href}
//               href={item.href}
//               onClick={(e) => handleLinkClick(e, item.href)}
//               variants={itemVariants}
//               initial={i % 2 === 0 ? "hiddenLeft" : "hiddenRight"}
//               animate="visible"
//               whileHover={{
//                 scale: 1.12,
//                 y: -4,
//                 x: i % 2 === 0 ? 3 : -3,
//                 color: "#fff",
//                 textShadow: "0px 0px 12px rgba(255,140,0,0.8)",
//               }}
//               className="relative px-3 py-1 text-orange-400 tracking-wide transition duration-300 hover:text-white after:content-[''] after:absolute after:w-0 after:h-[2px] after:left-0 after:bottom-0 after:bg-gradient-to-r from-orange-400 to-yellow-500 hover:after:w-full"
//             >
//               {item.label}
//             </motion.a>
//           ))}

//           <motion.a
//             href="#contact"
//             initial={{ opacity: 0, x: 100 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ delay: 0.6, type: "spring", stiffness: 100 }}
//             whileHover={{
//               scale: 1.1,
//               y: -4,
//               boxShadow: "0 0 15px rgba(255,120,0,0.6)",
//             }}
//             className="ml-6 px-5 py-2 rounded-lg bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold shadow-lg transition duration-300"
//           >
//             Contact
//           </motion.a>
//         </motion.div>

//         {/* Mobile Toggle */}
//         <div className="md:hidden text-orange-400">
//           <button onClick={() => setMenuOpen(!menuOpen)}>
//             {menuOpen ? <X size={34} /> : <Menu size={34} />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       <AnimatePresence>
//         {menuOpen && (
//           <motion.div
//             key="mobileMenu"
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -20 }}
//             transition={{ duration: 0.4 }}
//             className="md:hidden flex flex-col items-center bg-gradient-to-b from-[#1a1a1a] to-[#000] border-t border-orange-500/20 py-6 space-y-5"
//           >
//             {navItems.map((item, i) => (
//               <motion.a
//                 key={item.href}
//                 href={item.href}
//                 onClick={(e) => handleLinkClick(e, item.href)}
//                 initial={i % 2 === 0 ? { x: -60, opacity: 0 } : { x: 60, opacity: 0 }}
//                 animate={{ x: 0, opacity: 1 }}
//                 transition={{ delay: i * 0.1, type: "spring", stiffness: 120 }}
//                 whileHover={{
//                   scale: 1.1,
//                   y: -3,
//                   x: i % 2 === 0 ? 3 : -3,
//                   color: "#fff",
//                 }}
//                 className="w-4/5 text-center px-4 py-3 rounded-lg text-orange-400 font-semibold transition-all duration-300 hover:text-white hover:bg-orange-500/20"
//               >
//                 {item.label}
//               </motion.a>
//             ))}

//             <motion.a
//               href="#contact"
//               whileTap={{ scale: 0.96 }}
//               whileHover={{
//                 scale: 1.1,
//                 y: -4,
//                 boxShadow: "0 0 15px rgba(255,120,0,0.6)",
//               }}
//               transition={{ type: "spring", stiffness: 200 }}
//               className="w-4/5 text-center px-4 py-3 rounded-lg bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold shadow-lg hover:shadow-[0_0_15px_rgba(255,120,0,0.6)] transition duration-300"
//             >
//               Contact
//             </motion.a>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </motion.nav>
//   );
// };

// export default Navbar;


// import { AnimatePresence, motion } from "framer-motion";
// import { Menu, X } from "lucide-react";
// import { useEffect, useRef, useState } from "react";
// import { gsap } from "gsap";
// import Logo from "../assets/name.png"; // keep your asset path

// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [isHeroVisible, setIsHeroVisible] = useState(true);
//   const navRef = useRef(null);
//   const logoRef = useRef(null);
//   const linkRefs = useRef([]); // store refs for each nav link for GSAP hover
//   linkRefs.current = []; // reset each render

//   // helper to collect refs
//   const addToRefs = (el) => {
//     if (el && !linkRefs.current.includes(el)) linkRefs.current.push(el);
//   };

//   /* ------------------------------
//      GSAP: Entrance animation for navbar
//      ------------------------------ */
//   useEffect(() => {
//     if (!navRef.current) return;
//     gsap.fromTo(
//       navRef.current,
//       { y: -100, opacity: 0 },
//       { y: 0, opacity: 1, duration: 0.9, ease: "power3.out" }
//     );
//   }, []);

//   /* ------------------------------
//      GSAP: "Imperative" hover elevation for logo & links (desktop)
//      - On mouseenter: scale up slightly + rise + stronger box-shadow
//      - On mouseleave: return to neutral
//      ------------------------------ */
//   useEffect(() => {
//     // Logo hover using pointer events attached to logoRef
//     const logoEl = logoRef.current;
//     if (logoEl) {
//       const onEnter = () => {
//         gsap.to(logoEl, { scale: 1.12, y: -4, duration: 0.28, ease: "power2.out" });
//         gsap.to(logoEl, { boxShadow: "0 12px 36px rgba(255,140,0,0.28)", duration: 0.28 });
//       };
//       const onLeave = () => {
//         gsap.to(logoEl, { scale: 1, y: 0, duration: 0.4, ease: "power3.out" });
//         gsap.to(logoEl, { boxShadow: "none", duration: 0.4 });
//       };
//       logoEl.addEventListener("mouseenter", onEnter);
//       logoEl.addEventListener("mouseleave", onLeave);
//       return () => {
//         logoEl.removeEventListener("mouseenter", onEnter);
//         logoEl.removeEventListener("mouseleave", onLeave);
//       };
//     }
//   }, []);

//   // Attach GSAP hover to each desktop link (optional; Framer handles simpler case)
//   useEffect(() => {
//     linkRefs.current.forEach((el) => {
//       if (!el) return;
//       const enter = () => {
//         gsap.to(el, { scale: 1.08, y: -4, duration: 0.22, ease: "power2.out", overwrite: true });
//         gsap.to(el, { textShadow: "0 0 12px rgba(255,140,0,0.85)", duration: 0.18, overwrite: true });
//       };
//       const leave = () => {
//         gsap.to(el, { scale: 1, y: 0, duration: 0.35, ease: "power3.out", overwrite: true });
//         gsap.to(el, { textShadow: "none", duration: 0.35, overwrite: true });
//       };
//       el.addEventListener("mouseenter", enter);
//       el.addEventListener("mouseleave", leave);
//       // cleanup
//       return () => {
//         el.removeEventListener("mouseenter", enter);
//         el.removeEventListener("mouseleave", leave);
//       };
//     });
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [linkRefs.current.length]);

//   /* ------------------------------
//      IntersectionObserver: hide when hero not visible (keeps your logic)
//      ------------------------------ */
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => setIsHeroVisible(entry.isIntersecting),
//       { threshold: 0.05 }
//     );
//     const section = document.querySelector("#hero");
//     if (section) observer.observe(section);
//     return () => section && observer.unobserve(section);
//   }, []);

//   /* ------------------------------
//      Auto close mobile menu on resize
//      ------------------------------ */
//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth >= 768) setMenuOpen(false);
//     };
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   const handleLinkClick = (e, id) => {
//     e.preventDefault();
//     const section = document.querySelector(id);
//     if (section) section.scrollIntoView({ behavior: "smooth" });
//     setMenuOpen(false);
//   };

//   if (!isHeroVisible) return null;

//   const navItems = [
//     { href: "#hero", label: "Home" },
//     { href: "#about", label: "About" },
//     { href: "#experience", label: "Experience" },
//     { href: "#projects", label: "Projects" },
//   ];

//   /* Framer variants for a subtle staggered reveal */
//   const desktopList = {
//     hidden: {},
//     show: {
//       transition: {
//         staggerChildren: 0.06,
//         delayChildren: 0.12,
//       },
//     },
//   };
//   const desktopItem = {
//     hidden: { opacity: 0, y: -12 },
//     show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 160, damping: 14 } },
//   };

//   return (
//     <motion.nav
//       ref={navRef}
//       className="fixed top-0 w-full z-50 bg-gradient-to-r from-[#0f0f0f]/90 to-[#000000]/90 border-b border-orange-500/20 backdrop-blur-md"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//     >
//       <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
//         {/* Logo */}
//         <motion.div
//           ref={logoRef}
//           className="cursor-pointer select-none"
//           onClick={(e) => handleLinkClick(e, "#hero")}
//           // keep framer hover fallback (if GSAP not loaded / mobile)
//           whileHover={{ scale: 1.08, rotate: 2 }}
//           transition={{ type: "spring", stiffness: 250 }}
//         >
//           <img
//             src={Logo}
//             alt="Logo"
//             className="h-12 w-auto drop-shadow-[0_0_15px_rgba(255,165,0,0.8)]"
//           />
//         </motion.div>

//         {/* Desktop Navigation */}
//         <motion.div
//           className="hidden md:flex space-x-8 text-lg font-medium items-center"
//           variants={desktopList}
//           initial="hidden"
//           animate="show"
//         >
//           {navItems.map((item, i) => (
//             <motion.a
//               key={item.href}
//               href={item.href}
//               onClick={(e) => handleLinkClick(e, item.href)}
//               className="relative px-3 py-1 text-orange-400 tracking-wide transition-colors duration-200"
//               variants={desktopItem}
//               // Framer: quick scale + lift on hover (works on touch too)
//               whileHover={{ scale: 1.06, y: -3 }}
//               transition={{ type: "spring", stiffness: 220 }}
//               ref={addToRefs}
//             >
//               {/* underline animated with after pseudo-element via Tailwind utilities below */}
//               <span className="relative z-10">{item.label}</span>
//               <span
//                 className="absolute left-0 bottom-0 h-[2px] w-0 bg-gradient-to-r from-orange-400 to-yellow-400 transition-all duration-300"
//                 style={{ transformOrigin: "left" }}
//               />
//             </motion.a>
//           ))}

//           {/* CTA */}
//           <motion.a
//             href="#contact"
//             onClick={(e) => handleLinkClick(e, "#contact")}
//             className="ml-6 px-5 py-2 rounded-lg bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold shadow-lg"
//             whileHover={{ scale: 1.08, y: -4 }}
//             transition={{ type: "spring", stiffness: 200 }}
//           >
//             Contact
//           </motion.a>
//         </motion.div>

//         {/* Mobile Toggle */}
//         <div className="md:hidden text-orange-400">
//           <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Open menu">
//             {menuOpen ? <X size={28} /> : <Menu size={28} />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       <AnimatePresence>
//         {menuOpen && (
//           <motion.div
//             key="mobileMenu"
//             initial={{ opacity: 0, y: -8 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -8 }}
//             transition={{ duration: 0.28 }}
//             className="md:hidden flex flex-col items-center bg-gradient-to-b from-[#111] to-[#000] border-t border-orange-500/20 py-6 space-y-4"
//           >
//             {navItems.map((item) => (
//               <motion.a
//                 key={item.href}
//                 href={item.href}
//                 onClick={(e) => handleLinkClick(e, item.href)}
//                 className="w-10/12 text-center px-4 py-3 rounded-lg text-orange-400 font-semibold hover:bg-orange-500/10 hover:text-white transition"
//                 whileTap={{ scale: 0.98 }}
//               >
//                 {item.label}
//               </motion.a>
//             ))}

//             <motion.a
//               href="#contact"
//               className="w-10/12 text-center px-4 py-3 rounded-lg bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold shadow-lg"
//               onClick={(e) => handleLinkClick(e, "#contact")}
//               whileTap={{ scale: 0.96 }}
//             >
//               Contact
//             </motion.a>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </motion.nav>
//   );
// };

// export default Navbar;



import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Sparkles } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import Logo from "../assets/name.png"; // Update your logo path

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Track scroll for dynamic navbar background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => window.innerWidth >= 768 && setIsOpen(false);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  const navItems = [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    
  ];

  // Framer Motion variants
  const navVariants = {
    hidden: { y: -100 },
    visible: {
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 20 },
    },
  };

  const mobileMenuVariants = {
    closed: {
      x: "100%",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
    open: {
      x: 0,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 30,
      },
    },
  };

  return (
    <>
      {/* Main Navbar */}
      <motion.nav
        variants={navVariants}
        initial="hidden"
        animate="visible"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
          scrolled
            ? "bg-black/20 backdrop-blur-xl border-b border-white/10"
            : "bg-gradient-to-b from-black/90 via-black/50 to-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo with glow & magnetic hover */}
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
            className="relative group cursor-pointer"
            onClick={(e) => scrollToSection(e, "#hero")}
          >
            <div className="absolute -inset-2 bg-orange-500/30 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition duration-500" />
            <img
              src={Logo}
              alt="Logo"
              className="relative h-14 w-auto drop-shadow-2xl filter brightness-110 transition-all duration-300 group-hover:brightness-150"
            />
            <Sparkles className="absolute -top-2 -right-2 h-5 w-5 text-yellow-400 opacity-0 group-hover:opacity-100 animate-pulse" />
          </motion.div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-10">
            {navItems.map((item, i) => (
              <motion.a
                key={item.href}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                variants={itemVariants}
                whileHover={{ y: -4 }}
                className="relative text-gray-300 font-medium text-lg tracking-wider group overflow-hidden"
              >
                <span className="relative z-10">{item.label}</span>

                {/* Animated Underline */}
                <motion.span
                  className="absolute bottom-0 left-0 h-0.5 w-full bg-gradient-to-r from-orange-400 to-pink-500 origin-left"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                />

                {/* Shine Effect */}
                <motion.span
                  className="absolute inset-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  animate={{ x: ["-100%", "200%"] }}
                  transition={{
                    repeat: Infinity,
                    repeatDelay: 5 + i,
                    duration: 3,
                    ease: "linear",
                  }}
                />
              </motion.a>
            ))}

            {/* CTA Button with pulse & float */}
            <motion.a
              href="#contacts"
              onClick={(e) => scrollToSection(e, "#contacts")}
              className="relative px-6 py-3 bg-gradient-to-r from-orange-600 to-pink-600 rounded-full font-bold text-white shadow-2xl overflow-hidden group"
              whileHover={{ scale: 1.1, y: -4 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 flex items-center gap-2">
                Contact <Sparkles className="h-4 w-4" />
              </span>
              <motion.div
                className="absolute inset-0 bg-white/20"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.6 }}
              />
              <div className="absolute -inset-1 bg-gradient-to-r from-orange-400 to-pink-400 blur-lg opacity-70 group-hover:opacity-100 animate-pulse" />
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white z-50 relative"
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                >
                  <X size={32} strokeWidth={2.5} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                >
                  <Menu size={32} strokeWidth={2.5} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </motion.nav>

      {/* Mobile Full-Screen Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={mobileMenuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed inset-0 bg-black/95 backdrop-blur-2xl z-40 flex flex-col items-center justify-center gap-10 md:hidden"
          >
            {/* Background decorative gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-orange-900/20 via-transparent to-pink-900/20" />

            {navItems.map((item, i) => (
              <motion.a
                key={item.href}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15, type: "spring", stiffness: 120 }}
                className="text-4xl md:text-5xl font-bold text-gray-300 hover:text-white transition-all duration-300 relative group"
              >
                <span className="relative">
                  {item.label}
                  <motion.span
                    className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-orange-500 to-pink-500"
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.5 }}
                  />
                </span>
              </motion.a>
            ))}

             <motion.a
              href="#contacts"
              onClick={(e) => scrollToSection(e, "#contacts")}
              className="relative px-6 py-3 bg-gradient-to-r from-orange-600 to-pink-600 rounded-full font-bold text-white shadow-2xl overflow-hidden group"
              whileHover={{ scale: 1.1, y: -4 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 flex items-center gap-2">
                Contact <Sparkles className="h-4 w-4" />
              </span>
              <motion.div
                className="absolute inset-0 bg-white/20"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.6 }}
              />
              <div className="absolute -inset-1 bg-gradient-to-r from-orange-400 to-pink-400 blur-lg opacity-70 group-hover:opacity-100 animate-pulse" />
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;