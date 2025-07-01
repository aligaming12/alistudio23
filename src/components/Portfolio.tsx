import { motion } from 'framer-motion';
import Image from 'next/image';

const Portfolio = () => {
  const projects = [
    {
      title: 'Brand Identity',
      category: 'Branding',
      image: '/images/portfolio-1.jpg',
    },
    {
      title: 'Mobile App',
      category: 'UI/UX Design',
      image: '/images/portfolio-2.jpg',
    },
    {
      title: 'E-commerce Website',
      category: 'Web Development',
      image: '/images/portfolio-3.jpg',
    },
    {
      title: 'Product Packaging',
      category: 'Branding',
      image: '/images/portfolio-4.jpg',
    },
    {
      title: 'Social Media Campaign',
      category: 'Marketing',
      image: '/images/portfolio-5.jpg',
    },
    {
      title: 'Corporate Website',
      category: 'Web Development',
      image: '/images/portfolio-6.jpg',
    },
  ];

  return (
    <section id="portfolio" className="section bg-background">
      <div className="container-wrapper">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="heading-lg mb-4 text-primary">Our Work</h2>
          <p className="text-lg text-secondary/80">
            Explore our latest projects and see how we've helped our clients achieve their goals.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="group relative overflow-hidden rounded-xl"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="relative h-72 w-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <motion.div 
                className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-6 flex flex-col justify-end"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              >
                <span className="text-primary text-sm font-medium mb-1">{project.category}</span>
                <h3 className="text-white text-xl font-bold">{project.title}</h3>
              </motion.div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <motion.a 
            href="#contact" 
            className="btn-primary inline-block"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Your Project
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio; 