import { Helmet } from 'react-helmet';
import { Heart, Brain, Users, Clock, Award, Wrench, Medal, CheckCircle } from 'lucide-react';
import Hero from '../components/Hero';
import SectionTitle from '../components/SectionTitle';
import ServiceCard from '../components/ServiceCard';
import TestimonialCard from '../components/TestimonialCard';
import StatsSection from '../components/StatsSection';
import FeatureSection from '../components/FeatureSection';
import CTASection from '../components/CTASection';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>CareNoble - Compassionate Care Services in Morecambe</title>
        <meta name="description" content="CareNoble provides high-quality mental health, elderly, and specialist care services in Morecambe, Lancashire." />
      </Helmet>
      
      <Hero 
        title="IS HERE TO BE YOUR ASSISTANCE"
        accentText="CareNoble"
        subtitle="I am here ready to help you in making creative digital products"
        buttonText="Let's Discuss"
        buttonLink="/contact"
        mainImage="https://images.pexels.com/photos/1181696/pexels-photo-1181696.jpeg?auto=compress&fit=crop&w=400&q=80"
        infoCards={[
          {
            icon: <span className="inline-block bg-primary-600 text-white rounded-full p-1 text-xs font-bold">2K+</span>,
            label: 'Projects',
            value: '2K+',
            highlight: true,
          },
          {
            icon: <span className="inline-block text-yellow-400">★</span>,
            label: 'Satisfaction',
            value: '4.8',
          },
        ]}
      />
      
      {/* Services Section */}
      <section className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle 
            title="Our Care Services"
            subtitle="At CareNoble, we offer a comprehensive range of care services tailored to the unique needs of each individual."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard 
              icon={<Brain size={28} />}
              title="Mental Health Care"
              description="Personalized mental health support with compassionate care plans designed to promote emotional wellbeing and recovery."
              link="/services/mental-health-care"
              index={0}
            />
            <ServiceCard 
              icon={<Users size={28} />}
              title="Elderly Care"
              description="Dignified and respectful care for the elderly, focusing on maintaining independence and quality of life in their own homes."
              link="/services/elderly-care"
              index={1}
            />
            <ServiceCard 
              icon={<Heart size={28} />}
              title="Specialist Care"
              description="Specialized care services for individuals with complex needs, including dementia, physical disabilities, and sensory impairments."
              link="/services/specialist-care"
              index={2}
            />
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <FeatureSection 
        title="About CareNoble"
        subtitle="Founded in Morecambe in 2015, CareNoble is dedicated to providing high-quality care services that enhance the lives of our clients and their families."
        features={[
          {
            icon: <Award size={24} />,
            title: "Quality Assurance",
            description: "Our care services meet the highest standards of quality and safety, with regular assessments and continuous improvement."
          },
          {
            icon: <Users size={24} />,
            title: "Experienced Caregivers",
            description: "Our team consists of qualified professionals with extensive experience in various aspects of healthcare and personal care."
          },
          {
            icon: <Heart size={24} />,
            title: "Person-Centered Care",
            description: "We believe in putting the individual at the center of their care, with personalized plans that respect their choices and preferences."
          }
        ]}
        image="https://images.pexels.com/photos/7551670/pexels-photo-7551670.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />
      
      {/* Stats Section */}
      <StatsSection 
        stats={[
          {
            value: "8+",
            label: "Years of Experience",
            description: "Providing quality care since 2015"
          },
          {
            value: "500+",
            label: "Clients Served",
            description: "In Morecambe and surrounding areas"
          },
          {
            value: "50+",
            label: "Care Professionals",
            description: "Qualified and compassionate staff"
          },
          {
            value: "Good",
            label: "CQC Rating",
            description: "Consistently meeting care standards"
          }
        ]}
      />
      
      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle 
            title="What Our Clients Say"
            subtitle="Don't just take our word for it - hear from families who have experienced the CareNoble difference."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard 
              name="Sarah Johnson"
              role="Daughter of Elderly Client"
              quote="The care provided to my mother has been exceptional. The caregivers are professional, compassionate, and have become like family to us."
              rating={5}
              image="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              index={0}
            />
            <TestimonialCard 
              name="David Williams"
              role="Mental Health Client"
              quote="CareNoble's mental health support has transformed my life. Their personalized approach and consistent support have helped me regain my confidence."
              rating={5}
              image="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              index={1}
            />
            <TestimonialCard 
              name="Emily Thompson"
              role="Sister of Specialist Care Client"
              quote="Finding the right care for my brother's complex needs was challenging until we discovered CareNoble. Their specialist care team has been outstanding."
              rating={4}
              image="https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              index={2}
            />
          </div>
        </div>
      </section>
      
      {/* Why Choose Us Section */}
      <section className="py-16 bg-primary-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle 
            title="Why Choose CareNoble?"
            subtitle="We believe that quality care should be accessible to everyone who needs it. Here's what sets us apart:"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <CheckCircle size={24} className="text-primary-600 mb-4" />
              <h3 className="text-lg font-semibold mb-2 text-neutral-900">Personalized Care Plans</h3>
              <p className="text-neutral-600">Tailored care plans designed to meet individual needs and preferences.</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <Clock size={24} className="text-primary-600 mb-4" />
              <h3 className="text-lg font-semibold mb-2 text-neutral-900">24/7 Support</h3>
              <p className="text-neutral-600">Round-the-clock care and support when you need it most.</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <Medal size={24} className="text-primary-600 mb-4" />
              <h3 className="text-lg font-semibold mb-2 text-neutral-900">Qualified Professionals</h3>
              <p className="text-neutral-600">Experienced and trained caregivers with relevant qualifications.</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <Wrench size={24} className="text-primary-600 mb-4" />
              <h3 className="text-lg font-semibold mb-2 text-neutral-900">Flexible Services</h3>
              <p className="text-neutral-600">Adaptable care services that evolve with changing needs.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <CTASection 
        title="Ready to Experience Quality Care?"
        subtitle="Contact us today to learn more about our services and how we can help you or your loved ones."
        buttonText="Get in Touch"
        buttonLink="/contact"
      />
    </>
  );
};

export default Home;