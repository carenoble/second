import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface CTASectionProps {
  title: string;
  subtitle?: string;
  buttonText: string;
  buttonLink: string;
  backgroundImage?: string;
}

const CTASection = ({ 
  title, 
  subtitle, 
  buttonText, 
  buttonLink,
  backgroundImage = "https://images.pexels.com/photos/3768131/pexels-photo-3768131.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
}: CTASectionProps) => {
  return (
    <section 
      className="py-20 bg-cover bg-center relative"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-primary-900/80"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center text-white">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {title}
          </motion.h2>
          
          {subtitle && (
            <motion.p 
              className="text-lg opacity-90 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {subtitle}
            </motion.p>
          )}
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link 
              to={buttonLink}
              className="inline-block bg-white text-primary-700 hover:bg-neutral-100 font-medium py-3 px-8 rounded-lg transition-colors"
            >
              {buttonText}
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;