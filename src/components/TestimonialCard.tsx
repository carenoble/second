import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  role: string;
  quote: string;
  rating: number;
  image?: string;
  index?: number;
}

const TestimonialCard = ({ 
  name, 
  role, 
  quote, 
  rating, 
  image = "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  index = 0 
}: TestimonialCardProps) => {
  return (
    <motion.div 
      className="bg-white p-6 rounded-xl shadow-md"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="flex items-center space-x-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i} 
            size={18} 
            className={i < rating ? "text-warning-500 fill-warning-500" : "text-neutral-300"}
          />
        ))}
      </div>
      <p className="text-neutral-700 mb-6 italic">"{quote}"</p>
      <div className="flex items-center">
        <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
          <img src={image} alt={name} className="w-full h-full object-cover" />
        </div>
        <div>
          <h4 className="font-semibold text-neutral-900">{name}</h4>
          <p className="text-sm text-neutral-500">{role}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;