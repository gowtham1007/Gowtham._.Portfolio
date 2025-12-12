

'use client';

import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const skills = [
  { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg' },
  { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
  { name: 'Vite', icon: 'https://vitejs.dev/logo.svg' },
  { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg' },
  { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg' },
  { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg' },
  { name: 'Tailwind', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' },
  { name: 'Redux', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg' },
  { name: 'Bootstrap', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg' },
  { name: 'Framer Motion', icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAACUCAMAAABGFyDbAAAAmVBMVEX///9ZUp27S5ZScbTcr8u4O5BMRJdEZ6+xvdmzss5VTptUTJr8/P64P5G5QpLBSpWSUJpUbbHTkLvVmMBmYKRKa7HRi7irqMzc2+pQSJmloshGPpTZn8TapchQUp3EwtvoyN369PjMgbS0LIrIcaqVkb7KeK5YWaKbT5qfrtNsZqePoczS0OOFmciLh7l7drA/NpJ6kMQ4X6z9EB1eAAAEwklEQVR4nO3c2VLiQBSAYdIIziQN7hIYnYwyDCq4vv/DDQmCWXo5Wyde0JdcUF/9dU5cKkmvdziHczjf5/y561qQn7t17YPb+2/g0i+T2idH87+6E0rp6Ne3n7WPjgaj64576cV02GSpUbe99Os0MrFUp73uFtPIzFLjf5310q9JZGOpwXlHvfRiGNlZXfXK58rF2vTqwPXZysFSo/Z77Vq5WGrUdi+92KlcrLbnS7/sVU5Wu732c+VlqfF9a65yKx+rvX3Ui18RnNVWr2orP0sNLlpw1VoBWGoUvle9FYQVfh8rOwhmbeYrLKvRCsYKO1+GVkBW0F6GVlBWuF569suggrLU+DoMy9gKzgrTS88Mc4ViBellaYVhqZF0L+MOolnivRa2VjiW7HxZdpDAEu21SOwqJEuul7MVmiXWyzFXFJYa3Aj0sl6vyCw1PuezPK0oLP58eVuRWOxezh2ks3jz5dlBBovVC9CKyqL3ArUis8i9vDvIY9F6AXaQyVLjCzxrBpkrHgvfCzhXTBa6F7gVj6XmmF6IVkwWqheiFZelBrfAXnqCaMVmgXvNYNcrKRZsH/UEeL0SY6nxDaAVZq5kWP75Qs6VEMvbC91KhqXmrl568oZWybCcvQitpFj2+SLMlSDL2mtCaSXHMvcithJkqfGtWCtJVnMfya1EWUrVek1iqkqWVelFul4FYVV6kecqAGuwd9HnKgBr34vVKgBr24vXKgCr6MXYwWCs+RFnB4OxTk65qCia/hBnnf5mq5bH0iyJVlFfnCXR6kyaJdLqrC/NkmklzJJqJcySaNXvC7NkdlCcJTVXoiy5uRJlSbYSY0nOlSBLtpUQS7qVEEu6lQhLvpUIS76VAEv2eiXGegjQis0K04rNCtOKyQrViskK1YrFCteKxQrXisEK2YrBEmhlV1FZYVuRWSHniswK3YrICt2KxDp5CN2KxHrg/gcyij2tCKzBTbrk/Rc5SqL08ViWld/gub5kuZLLda+3upJkbW9XTBOGK0nSzVfoxw851u5m2PSJ7Eqe0u13OHuhWF+3dqYx0ZXEn6pNL8d8YVjlG4eJ81XM1e44eiFY1dv404jg2uxg6SscveCs+k3WhF6VVs5eYFbzlmF0r2orZy8oy3RDOrJXo1XusvQCssy3V6dThCuZ1lttexmvXzCW7WEtRC9Tq+I8m3qBWPZb0cHXr6/rVbOXYb4gLNeDbcBe1laWXgCW+7FJ0D42d7DSa9Xo5Wf5HjJdR97fv+LI0Sp3PdddXpb/EQfvfNnnau+qz5ePBXmAOXP/XpgsM+9X1OfLw4I97p0OHa546GuVn9p8uVnQh73X9l7J0j1Xe1ell5MFf3TZuo/uHay4yr1cLMyLFzKzC9qqcJV6OVi4x7zXJhe8VeH6+rltZ2Ff6pHFjetXHAN2sOx6P/ax8K9caPw9tP0bB+XazZeNRXmhR1a93scRrlXher9ysWiv10mHJVds/P3K69r2MrOoLz8p7WNCaFW4il5GFv3VTevd3Mcx/MpQc+X7aGJxXnT1uY/YHay4Nr0MLN5rrope9FaFa3XVZHFfopYlcZzQW+VHv3/UWfxXzqVT0g6Wj17VWQIv6Mt4rfKjOUNwOIdzONLnP28nklh+Pw9/AAAAAElFTkSuQmCC' },
  { name: 'REST API', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg' },
  { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg' },
  { name: 'Firebase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg' },
  { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg' },
  { name: 'GitHub', icon: 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png' },
  { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg' },
];

const bottomCarouselSkills = [
  { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg' },
  { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg' },
  { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' },
  { name: 'Redux', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/ icons/redux/redux-original.svg' },
  { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
  { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg' },
];

export default function SkillsSection() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(titleRef.current, 
      { y: 100, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 1.4, ease: "power4.out", scrollTrigger: { trigger: titleRef.current, start: "top 80%" } }
    );

    gsap.fromTo(".skill-box", 
      { y: 80, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 0.9, stagger: 0.08, ease: "back.out(1.7)", scrollTrigger: { trigger: sectionRef.current, start: "top 70%" } }
    );
  }, []);

  return (
    <section ref={sectionRef} className="relative min-h-screen bg-black py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Title */}
        <div ref={titleRef} className="text-center mb-16">
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter bg-gradient-to-r from-orange-500 via-orange-600 to-yellow-500 bg-clip-text text-transparent drop-shadow-2xl">
            SKILLS
          </h1>
          <p className="text-2xl md:text-4xl text-gray-300 mt-6 font-light">
            I&apos;m currently looking to join a <span className="text-orange-500 font-bold">cross-functional team</span>
          </p>
          <p className="text-lg md:text-xl text-gray-500 mt-4 max-w-3xl mx-auto">
            that values improving people&apos;s lives through accessible design
          </p>
        </div>

        {/* Skills Grid - Perfect Square Boxes with Full-Size Logos */}
        <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-8 justify-items-center">
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              className="skill-box group relative"
              whileHover={{ scale: 1.15, rotate: 6 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Squareily Square Container */}
              <div className="w-24 h-24 md:w-28 md:h-28 bg-gray-900/90 backdrop-blur-md border-2 border-gray-800 rounded-2xl shadow-2xl flex items-center justify-center p-4 transition-all duration-400 group-hover:bg-orange-600/10 group-hover:border-orange-500 group-hover:shadow-orange-500/40">
                <img 
                  src={skill.icon} 
                  alt={skill.name}
                  className="w-full h-full object-contain drop-shadow-xl"
                />
              </div>

              {/* Skill Name Below */}
              <p className="text-center text-xs md:text-sm mt-3 text-gray-400 group-hover:text-orange-400 font-medium transition-colors">
                {skill.name}
              </p>

              {/* Hover Glow Effect */}
              <div className="absolute -inset-4 bg-orange-500/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
            </motion.div>
          ))}
        </div>

        {/* Bottom Infinite Carousel */}
       
<div className="mt-32 overflow-hidden">
  <motion.div
    className="flex gap-4 items-center py-26"
    animate={{ x: [0, -100 + "%"] }}
    transition={{ repeat: Infinity, repeatType: "loop", duration: 16, ease: "linear" }}
  >
    {[...bottomCarouselSkills, ...bottomCarouselSkills].map((skill, i) => (
      <div key={i} className="flex-none">
        <div className="bg-orange-600/10 backdrop-blur border border-orange-600/30 rounded-full px-8 py-4 flex items-center gap-4 shadow-lg hover:bg-orange-600/20 transition-all">
          <div className="w-10 h-10 bg-orange-600 rounded-full flex items-center justify-center">
            <img src={skill.icon} alt="" className="w-7 h-7" />
          </div>
          <span className="text-orange-400 font-semibold text-lg">{skill.name}</span>
        </div>
      </div>
    ))}
  </motion.div>
</div>
      </div>
    </section>
  );
}