import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, User } from 'lucide-react';

interface BlogCardProps {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  author: string;
  index?: number;
}

const BlogCard = ({ id, title, excerpt, image, date, author, index = 0 }: BlogCardProps) => {
  return (
    <motion.article 
      className="bg-white rounded-xl shadow-md overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link to={`/blog/${id}`} className="block h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </Link>
      
      <div className="p-6">
        <div className="flex items-center text-sm text-neutral-500 mb-3">
          <span className="flex items-center">
            <Calendar size={14} className="mr-1" />
            {date}
          </span>
          <span className="mx-2">•</span>
          <span className="flex items-center">
            <User size={14} className="mr-1" />
            {author}
          </span>
        </div>
        
        <h3 className="text-xl font-semibold mb-2">
          <Link to={`/blog/${id}`} className="text-neutral-900 hover:text-primary-600 transition-colors">
            {title}
          </Link>
        </h3>
        
        <p className="text-neutral-600 mb-4">
          {excerpt}
        </p>
        
        <Link 
          to={`/blog/${id}`}
          className="inline-block text-primary-600 hover:text-primary-800 font-medium transition-colors"
        >
          Read More
        </Link>
      </div>
    </motion.article>
  );
};

export default BlogCard;