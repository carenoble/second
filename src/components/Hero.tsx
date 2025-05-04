import { motion } from 'framer-motion';
import React, { useRef, useState } from 'react';

interface InfoCard {
  icon?: React.ReactNode;
  label: string;
  value: string;
  highlight?: boolean;
}

interface HeroProps {
  title: string;
  accentText?: string;
  subtitle?: string;
  buttonText?: string;
  buttonLink?: string;
  mainImage?: string;
  infoCards?: InfoCard[];
}

const Hero = ({ 
  title, 
  accentText,
  subtitle, 
  buttonText, 
  buttonLink = "/contact",
  mainImage,
  infoCards = [],
}: HeroProps) => {
  const heroRef = useRef<HTMLDivElement>(null);
  const [mouse, setMouse] = useState({ x: 0.5, y: 0.5 });

  // Track mouse position as a percentage of the hero area
  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = heroRef.current?.getBoundingClientRect();
    if (rect) {
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      setMouse({ x, y });
    }
  };

  return (
    <section
      ref={heroRef}
      className="relative bg-white overflow-hidden pt-12 pb-8 md:pt-20 md:pb-16"
      onMouseMove={handleMouseMove}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left: Text Content */}
          <div className="z-10 relative">
            <motion.p 
              className="text-lg text-neutral-500 mb-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Hi, there!
            </motion.p>
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 text-neutral-900 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {accentText && <span className="text-primary-600">{accentText} </span>}
              <span className="lowercase">{title}</span>
            </motion.h1>
            {subtitle && (
              <motion.p 
                className="text-lg md:text-xl text-neutral-600 mb-8 max-w-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {subtitle}
              </motion.p>
            )}
            {buttonText && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <a 
                  href={buttonLink} 
                  className="inline-block bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition-colors text-lg"
                >
                  {buttonText}
                </a>
              </motion.div>
            )}
          </div>

          {/* Right: Image & Floating Cards */}
          <div className="relative flex justify-center items-center min-h-[350px] md:min-h-[450px]">
            {/* Abstract Shape BG */}
            <div className="absolute -top-8 -right-8 w-72 h-72 bg-gradient-to-tr from-primary-100 via-primary-300 to-pink-200 rounded-[3rem] z-0 blur-2xl opacity-80"></div>
            <div className="absolute top-12 left-0 w-40 h-40 bg-primary-200 rounded-full z-0 blur-2xl opacity-60"></div>
            {/* Main Image */}
            {mainImage && (
              <motion.img 
                src={mainImage} 
                alt="Hero" 
                className="relative z-10 w-64 h-64 md:w-80 md:h-80 object-cover rounded-3xl shadow-2xl border-8 border-white"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7 }}
              />
            )}
            {/* Floating Info Cards */}
            {infoCards.map((card, idx) => {
              // Parallax movement: each card moves a different amount
              const maxMove = 18 + idx * 6; // px
              const moveX = (mouse.x - 0.5) * maxMove;
              const moveY = (mouse.y - 0.5) * maxMove;
              return (
                <motion.div
                  key={card.label}
                  className={`absolute z-20 bg-white rounded-2xl shadow-xl px-5 py-3 flex items-center gap-2 border border-neutral-100 animate-float ${
                    idx === 0 ? 'top-6 left-0' : idx === 1 ? 'top-10 right-0' : 'bottom-6 right-6'
                  } ${card.highlight ? 'ring-2 ring-primary-400' : ''}`}
                  style={{ 
                    animationDelay: `${idx * 0.8}s`,
                    transform: `translate3d(${moveX}px, ${moveY}px, 0)`
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 + idx * 0.15 }}
                >
                  {card.icon && <span className="text-primary-600">{card.icon}</span>}
                  <div>
                    <div className="text-sm font-semibold text-neutral-900">{card.value}</div>
                    <div className="text-xs text-neutral-500">{card.label}</div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;