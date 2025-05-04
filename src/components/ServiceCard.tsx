import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
  index?: number;
}

const ServiceCard = ({ icon, title, description, link, index = 0 }: ServiceCardProps) => {
  return (
    <motion.div 
      className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="bg-primary-100 w-14 h-14 rounded-lg flex items-center justify-center mb-4 text-primary-600">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3 text-neutral-900">{title}</h3>
      <p className="text-neutral-600 mb-5">{description}</p>
      <Link 
        to={link}
        className="inline-flex items-center text-primary-600 hover:text-primary-800 font-medium transition-colors"
      >
        Learn More <ArrowRight className="ml-2 w-4 h-4" />
      </Link>
    </motion.div>
  );
};

export default ServiceCard;