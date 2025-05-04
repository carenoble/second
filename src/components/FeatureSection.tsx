import { motion } from 'framer-motion';

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface FeatureSectionProps {
  title: string;
  subtitle?: string;
  features: FeatureProps[];
  image?: string;
  imageSide?: 'left' | 'right';
  light?: boolean;
}

const FeatureSection = ({ 
  title, 
  subtitle, 
  features, 
  image, 
  imageSide = 'right',
  light = false 
}: FeatureSectionProps) => {
  return (
    <section className={`py-16 ${light ? 'bg-primary-700 text-white' : ''}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image (conditionally rendered based on imageSide) */}
          {image && imageSide === 'left' && (
            <motion.div 
              className="rounded-xl overflow-hidden shadow-xl"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img src={image} alt={title} className="w-full h-auto" />
            </motion.div>
          )}
          
          {/* Content */}
          <div>
            <motion.h2 
              className={`text-2xl md:text-3xl font-bold mb-4 ${light ? 'text-white' : 'text-neutral-900'}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              {title}
            </motion.h2>
            
            {subtitle && (
              <motion.p 
                className={`mb-8 ${light ? 'text-neutral-200' : 'text-neutral-600'}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                {subtitle}
              </motion.p>
            )}
            
            <div className="space-y-6">
              {features.map((feature, index) => (
                <motion.div 
                  key={index} 
                  className="flex"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
                >
                  <div className={`flex-shrink-0 mr-4 ${light ? 'text-white' : 'text-primary-600'}`}>
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className={`text-lg font-semibold mb-2 ${light ? 'text-white' : 'text-neutral-900'}`}>
                      {feature.title}
                    </h3>
                    <p className={light ? 'text-neutral-200' : 'text-neutral-600'}>
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Image (conditionally rendered based on imageSide) */}
          {image && imageSide === 'right' && (
            <motion.div 
              className="rounded-xl overflow-hidden shadow-xl"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img src={image} alt={title} className="w-full h-auto" />
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;