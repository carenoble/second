import { Helmet } from 'react-helmet';
import { Heart, CheckCircle, Award, Shield, Users } from 'lucide-react';
import Hero from '../components/Hero';
import SectionTitle from '../components/SectionTitle';
import FeatureSection from '../components/FeatureSection';
import TestimonialCard from '../components/TestimonialCard';
import CTASection from '../components/CTASection';

const SpecialistCare = () => {
  return (
    <>
      <Helmet>
        <title>Specialist Care Services | CareNoble Morecambe</title>
        <meta name="description" content="CareNoble provides specialized care services in Morecambe for individuals with complex needs, including dementia care, disability support, and palliative care." />
      </Helmet>
      
      <Hero 
        title="Specialist Care Services"
        subtitle="Expert, tailored care for individuals with complex and specialized needs."
        backgroundImage="https://images.pexels.com/photos/45842/clasped-hands-comfort-hands-people-45842.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />
      
      {/* Service Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <SectionTitle 
              title="Expert Care for Complex Needs"
              subtitle="Our specialist care services provide tailored support for individuals with complex care requirements."
            />
            
            <div className="prose max-w-none text-neutral-700">
              <p className="mb-4">
                At CareNoble, we understand that some individuals require specialized care to address complex health conditions and support needs. Our specialist care services are designed to provide expert support for people with specific conditions, including dementia, physical disabilities, sensory impairments, and those requiring palliative care.
              </p>
              <p className="mb-4">
                Our team of highly trained and experienced specialist caregivers has the skills and knowledge to deliver personalized care that addresses the unique challenges associated with complex conditions. We work closely with healthcare professionals, clients, and their families to develop comprehensive care plans that promote dignity, independence, and quality of life.
              </p>
              <p>
                Whether you or your loved one needs round-the-clock support or specialized assistance with particular aspects of daily life, our dedicated team is committed to providing exceptional care tailored to individual needs and preferences.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Approach */}
      <FeatureSection 
        title="Our Specialist Care Approach"
        subtitle="We take a comprehensive, multidisciplinary approach to specialist care, focusing on individual needs and outcomes."
        features={[
          {
            icon: <Heart size={24} />,
            title: "Person-Centered Care",
            description: "Tailored care plans that place the individual at the center, respecting their choices, preferences, and dignity."
          },
          {
            icon: <Shield size={24} />,
            title: "Specialized Expertise",
            description: "Caregivers with specific training and experience in different types of complex care needs and conditions."
          },
          {
            icon: <Users size={24} />,
            title: "Collaborative Approach",
            description: "Working closely with healthcare professionals, families, and other support services to ensure comprehensive care."
          }
        ]}
        image="https://images.pexels.com/photos/7551754/pexels-photo-7551754.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />
      
      {/* Specialist Services */}
      <section className="py-16 bg-primary-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle 
            title="Our Specialist Care Services"
            subtitle="We offer expert care for a range of complex conditions and specialized needs."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-4 text-neutral-900">Dementia Care</h3>
              <p className="text-neutral-600 mb-4">
                Specialized support for individuals living with Alzheimer's disease and other forms of dementia, focusing on maintaining cognitive function, managing behavioral changes, and ensuring safety.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle size={16} className="text-primary-600 mt-1 mr-2 flex-shrink-0" />
                  <span className="text-neutral-600">Memory-enhancing activities and cognitive stimulation</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={16} className="text-primary-600 mt-1 mr-2 flex-shrink-0" />
                  <span className="text-neutral-600">Support with orientation and reducing confusion</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={16} className="text-primary-600 mt-1 mr-2 flex-shrink-0" />
                  <span className="text-neutral-600">Managing behavioral symptoms with patience and expertise</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-4 text-neutral-900">Physical Disability Support</h3>
              <p className="text-neutral-600 mb-4">
                Compassionate assistance for individuals with physical disabilities, aimed at maximizing independence, mobility, and participation in daily activities.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle size={16} className="text-primary-600 mt-1 mr-2 flex-shrink-0" />
                  <span className="text-neutral-600">Mobility assistance and transfer support</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={16} className="text-primary-600 mt-1 mr-2 flex-shrink-0" />
                  <span className="text-neutral-600">Assistance with personal care and daily living activities</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={16} className="text-primary-600 mt-1 mr-2 flex-shrink-0" />
                  <span className="text-neutral-600">Support with physiotherapy exercises and rehabilitation</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-4 text-neutral-900">Palliative and End-of-Life Care</h3>
              <p className="text-neutral-600 mb-4">
                Compassionate support for individuals with life-limiting illnesses, focusing on comfort, dignity, and quality of life during their final journey.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle size={16} className="text-primary-600 mt-1 mr-2 flex-shrink-0" />
                  <span className="text-neutral-600">Pain management and symptom control</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={16} className="text-primary-600 mt-1 mr-2 flex-shrink-0" />
                  <span className="text-neutral-600">Emotional and spiritual support for clients and families</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={16} className="text-primary-600 mt-1 mr-2 flex-shrink-0" />
                  <span className="text-neutral-600">Coordination with hospice and other healthcare providers</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-4 text-neutral-900">Sensory Impairment Support</h3>
              <p className="text-neutral-600 mb-4">
                Specialized assistance for individuals with visual or hearing impairments, helping them navigate daily life with confidence and independence.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle size={16} className="text-primary-600 mt-1 mr-2 flex-shrink-0" />
                  <span className="text-neutral-600">Communication support and adaptive techniques</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={16} className="text-primary-600 mt-1 mr-2 flex-shrink-0" />
                  <span className="text-neutral-600">Environmental modifications for safety and accessibility</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={16} className="text-primary-600 mt-1 mr-2 flex-shrink-0" />
                  <span className="text-neutral-600">Assistance with using adaptive equipment and technology</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-4 text-neutral-900">Neurological Condition Support</h3>
              <p className="text-neutral-600 mb-4">
                Expert care for individuals with neurological conditions such as Parkinson's disease, multiple sclerosis, or those recovering from stroke.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle size={16} className="text-primary-600 mt-1 mr-2 flex-shrink-0" />
                  <span className="text-neutral-600">Management of symptoms and medication regimes</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={16} className="text-primary-600 mt-1 mr-2 flex-shrink-0" />
                  <span className="text-neutral-600">Support with mobility and coordination challenges</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={16} className="text-primary-600 mt-1 mr-2 flex-shrink-0" />
                  <span className="text-neutral-600">Assistance with speech and communication difficulties</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-4 text-neutral-900">Learning Disability Support</h3>
              <p className="text-neutral-600 mb-4">
                Personalized care for adults with learning disabilities, aimed at promoting independence, skill development, and community participation.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle size={16} className="text-primary-600 mt-1 mr-2 flex-shrink-0" />
                  <span className="text-neutral-600">Support with daily living skills and personal care</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={16} className="text-primary-600 mt-1 mr-2 flex-shrink-0" />
                  <span className="text-neutral-600">Assistance with communication and social interaction</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={16} className="text-primary-600 mt-1 mr-2 flex-shrink-0" />
                  <span className="text-neutral-600">Help with accessing community activities and services</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Benefits */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle 
            title="Benefits of Our Specialist Care"
            subtitle="Our specialized care services offer numerous advantages for individuals with complex needs and their families."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.pexels.com/photos/7551789/pexels-photo-7551789.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Specialist care benefits" 
                className="rounded-xl shadow-lg w-full h-auto"
              />
            </div>
            
            <div className="space-y-6">
              <div className="flex">
                <div className="flex-shrink-0 mr-4">
                  <Award className="h-6 w-6 text-primary-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-neutral-900">Expert Knowledge</h3>
                  <p className="text-neutral-600">
                    Our specialist caregivers have specific training and experience in different complex conditions, ensuring knowledgeable care.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0 mr-4">
                  <Award className="h-6 w-6 text-primary-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-neutral-900">Improved Quality of Life</h3>
                  <p className="text-neutral-600">
                    Personalized care that addresses specific challenges helps enhance comfort, independence, and overall wellbeing.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0 mr-4">
                  <Award className="h-6 w-6 text-primary-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-neutral-900">Consistent Support</h3>
                  <p className="text-neutral-600">
                    Regular care from familiar caregivers provides stability and security, particularly important for those with complex needs.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0 mr-4">
                  <Award className="h-6 w-6 text-primary-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-neutral-900">Family Peace of Mind</h3>
                  <p className="text-neutral-600">
                    Families can rest assured that their loved ones are receiving expert care tailored to their specific condition.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle 
            title="Client Stories"
            subtitle="Hear from individuals and families who have benefited from our specialist care services."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard 
              name="Stephen Matthews"
              role="Brother of Client with MS"
              quote="Finding the right care for my sister's multiple sclerosis was challenging until we discovered CareNoble. Their specialist knowledge has made a tremendous difference to her quality of life."
              rating={5}
              image="https://images.pexels.com/photos/834863/pexels-photo-834863.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              index={0}
            />
            <TestimonialCard 
              name="Catherine Edwards"
              role="Daughter of Dementia Client"
              quote="The dementia care provided to my father has been exceptional. The caregivers' patience, understanding, and expertise in managing his condition have given our family invaluable peace of mind."
              rating={5}
              image="https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              index={1}
            />
            <TestimonialCard 
              name="James Williams"
              role="Client with Physical Disability"
              quote="CareNoble's specialist support has enabled me to maintain my independence despite my physical limitations. Their personalized approach and respect for my preferences have made all the difference."
              rating={4}
              image="https://images.pexels.com/photos/1073097/pexels-photo-1073097.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              index={2}
            />
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <CTASection 
        title="Get Specialized Care Support"
        subtitle="Contact us today to learn more about our specialist care services and how we can support you or your loved one."
        buttonText="Schedule a Consultation"
        buttonLink="/contact"
      />
    </>
  );
};

export default SpecialistCare;