import { Helmet } from 'react-helmet';
import { Brain, Users, Heart, CheckCircle, Star, Calendar } from 'lucide-react';
import Hero from '../components/Hero';
import SectionTitle from '../components/SectionTitle';
import ServiceCard from '../components/ServiceCard';
import FeatureSection from '../components/FeatureSection';
import TestimonialCard from '../components/TestimonialCard';
import CTASection from '../components/CTASection';

const Services = () => {
  return (
    <>
      <Helmet>
        <title>Our Care Services | CareNoble Morecambe</title>
        <meta name="description" content="Explore CareNoble's specialized care services, including mental health care, elderly care, and specialist care for individuals with complex needs." />
      </Helmet>
      
      <Hero 
        title="Our Care Services"
        subtitle="Personalized care solutions designed to meet individual needs and enhance quality of life."
        backgroundImage="https://images.pexels.com/photos/7959730/pexels-photo-7959730.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />
      
      {/* Service Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle 
            title="Comprehensive Care Solutions"
            subtitle="At CareNoble, we provide a range of specialized care services tailored to meet the unique needs of each individual."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard 
              icon={<Brain size={28} />}
              title="Mental Health Care"
              description="Supportive care for individuals experiencing mental health challenges, focusing on recovery and emotional wellbeing."
              link="/services/mental-health-care"
              index={0}
            />
            <ServiceCard 
              icon={<Users size={28} />}
              title="Elderly Care"
              description="Compassionate support for seniors, helping them maintain independence and dignity in the comfort of their own homes."
              link="/services/elderly-care"
              index={1}
            />
            <ServiceCard 
              icon={<Heart size={28} />}
              title="Specialist Care"
              description="Specialized care for individuals with complex needs, including dementia, physical disabilities, and palliative care."
              link="/services/specialist-care"
              index={2}
            />
          </div>
        </div>
      </section>
      
      {/* Mental Health Care Section */}
      <FeatureSection 
        title="Mental Health Care"
        subtitle="Our mental health services provide compassionate support for individuals experiencing various mental health challenges."
        features={[
          {
            icon: <CheckCircle size={24} />,
            title: "Personalized Care Plans",
            description: "Tailored support plans designed to address specific mental health needs and promote recovery."
          },
          {
            icon: <CheckCircle size={24} />,
            title: "Emotional Support",
            description: "Regular companionship and emotional support to reduce feelings of isolation and anxiety."
          },
          {
            icon: <CheckCircle size={24} />,
            title: "Medication Management",
            description: "Assistance with medication schedules to ensure proper treatment adherence."
          }
        ]}
        image="https://images.pexels.com/photos/7551611/pexels-photo-7551611.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />
      
      {/* Elderly Care Section */}
      <FeatureSection 
        title="Elderly Care"
        subtitle="Our elderly care services are designed to help seniors maintain their independence while receiving the support they need."
        features={[
          {
            icon: <CheckCircle size={24} />,
            title: "Personal Care Assistance",
            description: "Help with daily living activities such as bathing, dressing, and mobility."
          },
          {
            icon: <CheckCircle size={24} />,
            title: "Companionship",
            description: "Regular visits to provide social interaction and emotional support, reducing isolation."
          },
          {
            icon: <CheckCircle size={24} />,
            title: "Household Support",
            description: "Assistance with light housekeeping, meal preparation, and other domestic tasks."
          }
        ]}
        image="https://images.pexels.com/photos/7551838/pexels-photo-7551838.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        imageSide="left"
      />
      
      {/* Specialist Care Section */}
      <FeatureSection 
        title="Specialist Care"
        subtitle="Our specialist care services provide expert support for individuals with complex care needs."
        features={[
          {
            icon: <CheckCircle size={24} />,
            title: "Dementia Care",
            description: "Specialized support for individuals with dementia, focusing on safety, comfort, and quality of life."
          },
          {
            icon: <CheckCircle size={24} />,
            title: "Physical Disability Support",
            description: "Assistance for individuals with physical disabilities, promoting independence and dignity."
          },
          {
            icon: <CheckCircle size={24} />,
            title: "Palliative Care",
            description: "Compassionate end-of-life care focused on comfort, dignity, and emotional support."
          }
        ]}
        image="https://images.pexels.com/photos/45842/clasped-hands-comfort-hands-people-45842.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />
      
      {/* Our Care Approach */}
      <section className="py-16 bg-primary-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle 
            title="Our Care Approach"
            subtitle="What makes CareNoble different is our thoughtful, person-centered approach to care."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="bg-primary-100 w-12 h-12 rounded-full flex items-center justify-center mb-4 text-primary-600">
                <Star size={24} />
              </div>
              <h3 className="text-lg font-semibold mb-3 text-neutral-900">Initial Assessment</h3>
              <p className="text-neutral-600">
                We begin with a thorough assessment to understand individual needs, preferences, and goals, forming the foundation of our care plan.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="bg-primary-100 w-12 h-12 rounded-full flex items-center justify-center mb-4 text-primary-600">
                <Users size={24} />
              </div>
              <h3 className="text-lg font-semibold mb-3 text-neutral-900">Personalized Care Planning</h3>
              <p className="text-neutral-600">
                We develop a tailored care plan in collaboration with clients and their families, ensuring all specific needs and preferences are addressed.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="bg-primary-100 w-12 h-12 rounded-full flex items-center justify-center mb-4 text-primary-600">
                <Heart size={24} />
              </div>
              <h3 className="text-lg font-semibold mb-3 text-neutral-900">Caregiver Matching</h3>
              <p className="text-neutral-600">
                We carefully match clients with caregivers based on needs, personality, and expertise to ensure a positive relationship.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="bg-primary-100 w-12 h-12 rounded-full flex items-center justify-center mb-4 text-primary-600">
                <Calendar size={24} />
              </div>
              <h3 className="text-lg font-semibold mb-3 text-neutral-900">Regular Reviews</h3>
              <p className="text-neutral-600">
                We conduct periodic reviews to assess progress, adapt to changing needs, and ensure care plans remain effective and appropriate.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="bg-primary-100 w-12 h-12 rounded-full flex items-center justify-center mb-4 text-primary-600">
                <Brain size={24} />
              </div>
              <h3 className="text-lg font-semibold mb-3 text-neutral-900">Holistic Approach</h3>
              <p className="text-neutral-600">
                We consider all aspects of wellbeing – physical, emotional, social, and cognitive – for truly comprehensive care.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="bg-primary-100 w-12 h-12 rounded-full flex items-center justify-center mb-4 text-primary-600">
                <CheckCircle size={24} />
              </div>
              <h3 className="text-lg font-semibold mb-3 text-neutral-900">Quality Assurance</h3>
              <p className="text-neutral-600">
                We implement rigorous quality control measures to ensure consistently high standards of care for all clients.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle 
            title="Client Experiences"
            subtitle="Hear from individuals and families who have experienced our care services."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard 
              name="Thomas Harris"
              role="Mental Health Client"
              quote="The mental health support from CareNoble has been life-changing. My caregiver's understanding and patience have helped me make remarkable progress."
              rating={5}
              image="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              index={0}
            />
            <TestimonialCard 
              name="Margaret Wilson"
              role="Elderly Care Client"
              quote="I was determined to stay in my own home despite my age, and CareNoble has made that possible. My caregiver is wonderful and has become like family."
              rating={5}
              image="https://images.pexels.com/photos/2269872/pexels-photo-2269872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              index={1}
            />
            <TestimonialCard 
              name="Robert Johnson"
              role="Relative of Specialist Care Client"
              quote="Finding the right care for my sister's complex needs seemed impossible until we discovered CareNoble. Their specialist team has been exceptional."
              rating={4}
              image="https://images.pexels.com/photos/834863/pexels-photo-834863.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              index={2}
            />
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <CTASection 
        title="Need Help Choosing the Right Care Service?"
        subtitle="Our care experts are here to help you understand which service best suits your needs or those of your loved one."
        buttonText="Contact Us Today"
        buttonLink="/contact"
      />
    </>
  );
};

export default Services;