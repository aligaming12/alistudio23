import { motion } from 'framer-motion';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center bg-gradient-to-r from-background to-background/80 pt-20">
      <div className="container-wrapper">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <motion.span 
              className="inline-block text-primary font-medium mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              Welcome to
            </motion.span>
            <motion.h1 
              className="heading-xl mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              Ali Studio <br />
              <span className="text-primary">Creative Design</span> Studio
            </motion.h1>
            <motion.p 
              className="text-lg text-secondary/80 mb-8 max-w-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              We create modern, impactful designs that help businesses stand out in the digital landscape.
            </motion.p>
            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              <motion.a 
                href="#contact" 
                className="btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get in touch
              </motion.a>
              <motion.a 
                href="#portfolio" 
                className="btn-outline"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View our work
              </motion.a>
            </motion.div>
          </motion.div>
          
          <motion.div
            className="relative h-[400px] md:h-[500px] lg:h-[600px] w-full flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <motion.div
              className="absolute w-[80%] h-[80%] rounded-full bg-primary/10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              animate={{ 
                scale: [1, 1.05, 1],
                rotate: [0, 3, 0],
              }}
              transition={{ 
                duration: 8, 
                ease: "easeInOut", 
                repeat: Infinity,
                repeatType: "reverse"
              }}
            />
            <Image
              src="/images/hero-image.png"
              alt="Ali Studio Showcase"
              fill
              className="object-contain z-10"
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 