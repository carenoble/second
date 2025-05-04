import { motion } from 'framer-motion';

interface StatProps {
  value: string;
  label: string;
  description?: string;
}

interface StatsSectionProps {
  stats: StatProps[];
  title?: string;
  subtitle?: string;
  light?: boolean;
}

const StatsSection = ({ stats, title, subtitle, light = false }: StatsSectionProps) => {
  return (
    <section className={`py-16 ${light ? 'bg-primary-700 text-white' : 'bg-neutral-50'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {title && (
          <div className="text-center mb-12">
            <h2 className={`text-2xl md:text-3xl font-bold mb-4 ${light ? 'text-white' : 'text-neutral-900'}`}>
              {title}
            </h2>
            {subtitle && (
              <p className={`max-w-3xl mx-auto ${light ? 'text-neutral-100' : 'text-neutral-600'}`}>
                {subtitle}
              </p>
            )}
          </div>
        )}
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <p className={`text-4xl font-bold mb-2 ${light ? 'text-white' : 'text-primary-600'}`}>
                {stat.value}
              </p>
              <h3 className={`text-lg font-semibold mb-2 ${light ? 'text-white' : 'text-neutral-800'}`}>
                {stat.label}
              </h3>
              {stat.description && (
                <p className={light ? 'text-neutral-200' : 'text-neutral-600'}>
                  {stat.description}
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;