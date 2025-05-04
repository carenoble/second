import { Helmet } from 'react-helmet';
import { Heart, Award, Shield, Smile, Clock, Users } from 'lucide-react';
import Hero from '../components/Hero';
import SectionTitle from '../components/SectionTitle';
import TestimonialCard from '../components/TestimonialCard';
import StatsSection from '../components/StatsSection';
import FeatureSection from '../components/FeatureSection';
import CTASection from '../components/CTASection';

const About = () => {
  return (
    <>
      <Helmet>
        <title>About CareNoble - Our Story & Values | Morecambe Care Agency</title>
        <meta name="description" content="Learn about CareNoble's history, mission, and values. Discover what makes our care services in Morecambe special and meet our dedicated team." />
      </Helmet>
      
      <Hero 
        title="About CareNoble"
        subtitle="Learn about our story, our mission, and the passionate team behind our care services."
        backgroundImage="https://images.pexels.com/photos/7579831/pexels-photo-7579831.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />
      
      {/* Our Story Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <SectionTitle 
              title="Our Story"
              subtitle="CareNoble was founded with a simple yet powerful mission: to improve the quality of life for those in need of care."
            />
            
            <div className="prose max-w-none text-neutral-700">
              <p className="mb-4">
                Established in 2015 in the coastal town of Morecambe, Lancashire, CareNoble was born from the personal experiences of our founder, Jane Noble. After witnessing the challenges of finding quality care for her own parents, Jane was determined to create a care service that truly put people first.
              </p>
              <p className="mb-4">
                What began as a small team of dedicated caregivers has grown into a trusted care provider, serving hundreds of clients throughout Morecambe and the surrounding areas. Yet despite our growth, we've remained committed to our core principles: compassion, respect, and excellence in everything we do.
              </p>
              <p className="mb-4">
                Today, CareNoble offers a comprehensive range of services, from mental health support to elderly care and specialist services for those with complex needs. Our team of qualified professionals works tirelessly to ensure that each client receives personalized care that enables them to live with dignity and as much independence as possible.
              </p>
              <p>
                As we look to the future, we continue to innovate and improve our services, always guided by our founding mission and the needs of the communities we serve.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Mission & Values Section */}
      <section className="py-16 bg-primary-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle 
            title="Our Mission & Values"
            subtitle="Everything we do at CareNoble is guided by our core mission and values."
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-xl font-bold mb-4 text-neutral-900">Our Mission</h3>
              <p className="text-neutral-700 mb-8">
                To enhance the quality of life for individuals requiring care by providing compassionate, person-centered services that promote dignity, independence, and wellbeing, while supporting families and the wider community.
              </p>
              
              <h3 className="text-xl font-bold mb-4 text-neutral-900">Our Vision</h3>
              <p className="text-neutral-700 mb-8">
                To be the leading provider of personalized care services in Lancashire, recognized for excellence, innovation, and genuine compassion.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <Heart size={24} className="text-primary-600 mb-4" />
                <h4 className="text-lg font-semibold mb-2 text-neutral-900">Compassion</h4>
                <p className="text-neutral-600">We care deeply about the wellbeing of our clients and approach our work with empathy and kindness.</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <Shield size={24} className="text-primary-600 mb-4" />
                <h4 className="text-lg font-semibold mb-2 text-neutral-900">Integrity</h4>
                <p className="text-neutral-600">We conduct ourselves with honesty, transparency, and ethical standards in all our interactions.</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <Award size={24} className="text-primary-600 mb-4" />
                <h4 className="text-lg font-semibold mb-2 text-neutral-900">Excellence</h4>
                <p className="text-neutral-600">We are committed to providing the highest quality of care and continuously improving our services.</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <Smile size={24} className="text-primary-600 mb-4" />
                <h4 className="text-lg font-semibold mb-2 text-neutral-900">Respect</h4>
                <p className="text-neutral-600">We honor the dignity, choices, and individuality of each person we serve.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Team Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle 
            title="Meet Our Team"
            subtitle="Our dedicated team of professionals is what makes CareNoble special."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="mb-4 mx-auto w-48 h-48 rounded-full overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Jane Noble" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-semibold text-neutral-900">Jane Noble</h3>
              <p className="text-primary-600 mb-2">Founder & Director</p>
              <p className="text-neutral-600">
                With over 20 years in healthcare, Jane founded CareNoble with a vision of compassionate, person-centered care.
              </p>
            </div>
            
            <div className="text-center">
              <div className="mb-4 mx-auto w-48 h-48 rounded-full overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/5490276/pexels-photo-5490276.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Dr. Robert Chen" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-semibold text-neutral-900">Dr. Robert Chen</h3>
              <p className="text-primary-600 mb-2">Clinical Director</p>
              <p className="text-neutral-600">
                Dr. Chen oversees our clinical standards, bringing extensive experience in geriatric and mental health care.
              </p>
            </div>
            
            <div className="text-center">
              <div className="mb-4 mx-auto w-48 h-48 rounded-full overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/5059825/pexels-photo-5059825.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Sarah Williams" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-semibold text-neutral-900">Sarah Williams</h3>
              <p className="text-primary-600 mb-2">Care Manager</p>
              <p className="text-neutral-600">
                Sarah leads our care team, ensuring each client receives personalized, high-quality care.
              </p>
            </div>
            
            <div className="text-center">
              <div className="mb-4 mx-auto w-48 h-48 rounded-full overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/7093958/pexels-photo-7093958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Mark Thompson" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-semibold text-neutral-900">Mark Thompson</h3>
              <p className="text-primary-600 mb-2">Community Liaison</p>
              <p className="text-neutral-600">
                Mark builds relationships with local organizations to ensure comprehensive support for our clients.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <StatsSection 
        title="CareNoble by the Numbers"
        subtitle="Our impact in the community and commitment to quality care."
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
            value: "24/7",
            label: "Support Available",
            description: "Round-the-clock care when needed"
          }
        ]}
        light={true}
      />
      
      {/* Accreditations & Partners */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle 
            title="Our Accreditations & Partners"
            subtitle="CareNoble works with trusted organizations to ensure the highest standards of care."
          />
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
            <div className="bg-neutral-100 p-6 rounded-lg h-32 w-full flex items-center justify-center">
              <p className="text-center font-semibold text-neutral-700">Care Quality Commission</p>
            </div>
            <div className="bg-neutral-100 p-6 rounded-lg h-32 w-full flex items-center justify-center">
              <p className="text-center font-semibold text-neutral-700">NHS Partner</p>
            </div>
            <div className="bg-neutral-100 p-6 rounded-lg h-32 w-full flex items-center justify-center">
              <p className="text-center font-semibold text-neutral-700">UK Homecare Association</p>
            </div>
            <div className="bg-neutral-100 p-6 rounded-lg h-32 w-full flex items-center justify-center">
              <p className="text-center font-semibold text-neutral-700">Morecambe Health Network</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle 
            title="What People Say About Us"
            subtitle="The experiences of our clients and their families speak volumes about our care quality."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard 
              name="Patricia Moore"
              role="Client's Family Member"
              quote="The care and attention my father receives from CareNoble has given our family peace of mind. The caregivers are exceptional."
              rating={5}
              image="https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              index={0}
            />
            <TestimonialCard 
              name="James Wilson"
              role="Mental Health Client"
              quote="The support I've received has been life-changing. The team truly understands mental health and has helped me overcome significant challenges."
              rating={5}
              image="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              index={1}
            />
            <TestimonialCard 
              name="Dr. Helen Richardson"
              role="Local GP"
              quote="As a GP, I confidently refer patients to CareNoble. Their professional approach and quality of care consistently meets high standards."
              rating={4}
              image="https://images.pexels.com/photos/5407206/pexels-photo-5407206.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              index={2}
            />
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <CTASection 
        title="Join Our Team"
        subtitle="Are you passionate about making a difference in people's lives? We're always looking for caring, dedicated individuals to join our team."
        buttonText="View Careers"
        buttonLink="/contact"
        backgroundImage="https://images.pexels.com/photos/7551754/pexels-photo-7551754.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />
    </>
  );
};

export default About;