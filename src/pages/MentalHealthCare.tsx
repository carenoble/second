import { Helmet } from 'react-helmet';
import { Brain, CheckCircle, Heart, Shield, Award } from 'lucide-react';
import Hero from '../components/Hero';
import SectionTitle from '../components/SectionTitle';
import FeatureSection from '../components/FeatureSection';
import TestimonialCard from '../components/TestimonialCard';
import CTASection from '../components/CTASection';

const MentalHealthCare = () => {
  return (
    <>
      <Helmet>
        <title>Mental Health Care Services | CareNoble Morecambe</title>
        <meta name="description" content="CareNoble provides compassionate, personalized mental health care services in Morecambe. Our professional team offers support for various mental health conditions." />
      </Helmet>
      
      <Hero 
        title="Mental Health Care Services"
        subtitle="Compassionate, person-centered support for mental health and emotional wellbeing."
        backgroundImage="https://images.pexels.com/photos/3768131/pexels-photo-3768131.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />
      
      {/* Service Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <SectionTitle 
              title="Supporting Mental Health & Wellbeing"
              subtitle="At CareNoble, we understand the challenges associated with mental health conditions and the importance of compassionate, specialized support."
            />
            
            <div className="prose max-w-none text-neutral-700">
              <p className="mb-4">
                Our mental health care services are designed to provide holistic support for individuals experiencing various mental health challenges, including anxiety, depression, bipolar disorder, schizophrenia, and other conditions that impact emotional wellbeing.
              </p>
              <p className="mb-4">
                We recognize that every person's mental health journey is unique, which is why our approach is highly personalized. Our team of qualified mental health professionals works closely with clients and their healthcare providers to develop comprehensive care plans that address specific needs and goals.
              </p>
              <p>
                Whether you or your loved one needs short-term support during a difficult period or ongoing assistance with a chronic mental health condition, our compassionate caregivers are here to help enhance quality of life and promote recovery.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Approach */}
      <FeatureSection 
        title="Our Mental Health Care Approach"
        subtitle="We take a holistic, person-centered approach to mental health care, focusing on both emotional wellbeing and practical support."
        features={[
          {
            icon: <Brain size={24} />,
            title: "Personalized Care Plans",
            description: "Tailored support plans developed in collaboration with clients, family members, and healthcare professionals to address specific needs and goals."
          },
          {
            icon: <Heart size={24} />,
            title: "Emotional Support",
            description: "Compassionate companionship and emotional support to reduce feelings of isolation, anxiety, and depression."
          },
          {
            icon: <Shield size={24} />,
            title: "Crisis Prevention",
            description: "Proactive monitoring and support to identify early warning signs and prevent mental health crises."
          }
        ]}
        image="https://images.pexels.com/photos/6823416/pexels-photo-6823416.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />
      
      {/* Services Offered */}
      <section className="py-16 bg-primary-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle 
            title="Our Mental Health Care Services"
            subtitle="We offer a range of specialized services to support individuals with mental health conditions."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-center mb-4">
                <CheckCircle size={20} className="text-primary-600 mr-2" />
                <h3 className="text-lg font-semibold text-neutral-900">Medication Management</h3>
              </div>
              <p className="text-neutral-600">
                Assistance with medication schedules to ensure proper adherence to prescribed treatments, which is crucial for mental health stability.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-center mb-4">
                <CheckCircle size={20} className="text-primary-600 mr-2" />
                <h3 className="text-lg font-semibold text-neutral-900">Daily Living Support</h3>
              </div>
              <p className="text-neutral-600">
                Help with everyday activities such as meal preparation, household maintenance, personal care, and shopping, which can be challenging during mental health episodes.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-center mb-4">
                <CheckCircle size={20} className="text-primary-600 mr-2" />
                <h3 className="text-lg font-semibold text-neutral-900">Emotional Companionship</h3>
              </div>
              <p className="text-neutral-600">
                Regular companionship to reduce isolation, provide emotional support, and engage in meaningful activities that promote mental wellbeing.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-center mb-4">
                <CheckCircle size={20} className="text-primary-600 mr-2" />
                <h3 className="text-lg font-semibold text-neutral-900">Therapeutic Activities</h3>
              </div>
              <p className="text-neutral-600">
                Engagement in therapeutic activities such as art, music, mindfulness, and exercise, which can significantly improve mental health and emotional wellbeing.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-center mb-4">
                <CheckCircle size={20} className="text-primary-600 mr-2" />
                <h3 className="text-lg font-semibold text-neutral-900">Appointment Coordination</h3>
              </div>
              <p className="text-neutral-600">
                Assistance with scheduling and attending mental health appointments, including transportation and accompaniment if desired.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-center mb-4">
                <CheckCircle size={20} className="text-primary-600 mr-2" />
                <h3 className="text-lg font-semibold text-neutral-900">Family Support</h3>
              </div>
              <p className="text-neutral-600">
                Education and support for family members to help them understand mental health conditions and effectively support their loved ones.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Benefits */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle 
            title="Benefits of Our Mental Health Care"
            subtitle="Our specialized mental health care services provide numerous advantages for clients and their families."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.pexels.com/photos/8942991/pexels-photo-8942991.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Mental health care benefits" 
                className="rounded-xl shadow-lg w-full h-auto"
              />
            </div>
            
            <div className="space-y-6">
              <div className="flex">
                <div className="flex-shrink-0 mr-4">
                  <Award className="h-6 w-6 text-primary-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-neutral-900">Improved Quality of Life</h3>
                  <p className="text-neutral-600">
                    Our support helps individuals manage their symptoms more effectively, resulting in improved overall wellbeing and quality of life.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0 mr-4">
                  <Award className="h-6 w-6 text-primary-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-neutral-900">Enhanced Independence</h3>
                  <p className="text-neutral-600">
                    Our services promote independence by teaching coping skills and providing support that enables individuals to manage daily life more effectively.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0 mr-4">
                  <Award className="h-6 w-6 text-primary-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-neutral-900">Reduced Hospitalizations</h3>
                  <p className="text-neutral-600">
                    Consistent support and early intervention can help reduce the frequency and duration of mental health crises requiring hospitalization.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0 mr-4">
                  <Award className="h-6 w-6 text-primary-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-neutral-900">Peace of Mind for Families</h3>
                  <p className="text-neutral-600">
                    Families can rest assured that their loved ones are receiving professional, compassionate care tailored to their specific needs.
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
            subtitle="Hear from individuals who have benefited from our mental health care services."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard 
              name="Michael Thompson"
              role="Mental Health Client"
              quote="The support from CareNoble has been transformative for my mental health journey. My caregiver understands my challenges and helps me implement strategies that have significantly improved my daily life."
              rating={5}
              image="https://images.pexels.com/photos/428364/pexels-photo-428364.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              index={0}
            />
            <TestimonialCard 
              name="Rebecca Clarke"
              role="Anxiety Disorder Client"
              quote="Living with severe anxiety was debilitating until I found CareNoble. My caregiver's patience and consistent support have helped me develop coping mechanisms that allow me to engage in activities I previously avoided."
              rating={5}
              image="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              index={1}
            />
            <TestimonialCard 
              name="Daniel Harris"
              role="Family Member"
              quote="Finding the right support for my brother's bipolar disorder was challenging. CareNoble's specialized approach and understanding of his condition have made a tremendous difference for our entire family."
              rating={4}
              image="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              index={2}
            />
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <CTASection 
        title="Get Specialized Mental Health Support"
        subtitle="Contact us today to learn more about our mental health care services and how we can support you or your loved one."
        buttonText="Schedule a Consultation"
        buttonLink="/contact"
      />
    </>
  );
};

export default MentalHealthCare;