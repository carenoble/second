import { Helmet } from 'react-helmet';
import { Users, CheckCircle, Clock, Heart, Award } from 'lucide-react';
import Hero from '../components/Hero';
import SectionTitle from '../components/SectionTitle';
import FeatureSection from '../components/FeatureSection';
import TestimonialCard from '../components/TestimonialCard';
import CTASection from '../components/CTASection';

const ElderlyCare = () => {
  return (
    <>
      <Helmet>
        <title>Elderly Care Services | CareNoble Morecambe</title>
        <meta name="description" content="CareNoble provides compassionate elderly care services in Morecambe, helping seniors maintain independence and dignity in their own homes." />
      </Helmet>
      
      <Hero 
        title="Elderly Care Services"
        subtitle="Compassionate, dignified care helping seniors maintain independence and quality of life."
        backgroundImage="https://images.pexels.com/photos/7551838/pexels-photo-7551838.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />
      
      {/* Service Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <SectionTitle 
              title="Supporting Independent Living for Seniors"
              subtitle="Our elderly care services are designed to help seniors maintain their independence and dignity while receiving the support they need."
            />
            
            <div className="prose max-w-none text-neutral-700">
              <p className="mb-4">
                At CareNoble, we understand that most seniors prefer to remain in the comfort of their own homes as they age. Our elderly care services make this possible by providing personalized support that adapts to changing needs while preserving independence and dignity.
              </p>
              <p className="mb-4">
                Whether your loved one needs occasional companionship, regular assistance with daily activities, or more comprehensive care, our experienced caregivers provide professional, compassionate support tailored to individual preferences and requirements.
              </p>
              <p>
                We work closely with clients and their families to develop care plans that address specific needs while respecting personal routines and lifestyle choices, ensuring that seniors can continue to enjoy life on their own terms.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Approach */}
      <FeatureSection 
        title="Our Elderly Care Approach"
        subtitle="We believe in providing holistic, person-centered care that supports all aspects of senior wellbeing."
        features={[
          {
            icon: <Users size={24} />,
            title: "Personalized Care Plans",
            description: "Individually tailored care plans designed to address specific needs while respecting personal preferences and routines."
          },
          {
            icon: <Heart size={24} />,
            title: "Dignity and Respect",
            description: "Care delivered with the utmost respect for personal dignity, independence, and individual choices."
          },
          {
            icon: <Clock size={24} />,
            title: "Flexible Support",
            description: "Adaptable care services that can evolve as needs change, from occasional help to comprehensive daily support."
          }
        ]}
        image="https://images.pexels.com/photos/7551666/pexels-photo-7551666.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />
      
      {/* Services Offered */}
      <section className="py-16 bg-primary-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle 
            title="Our Elderly Care Services"
            subtitle="We offer a comprehensive range of services to support seniors in their daily lives."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-center mb-4">
                <CheckCircle size={20} className="text-primary-600 mr-2" />
                <h3 className="text-lg font-semibold text-neutral-900">Personal Care</h3>
              </div>
              <p className="text-neutral-600">
                Assistance with bathing, dressing, grooming, toileting, and other personal care needs, delivered with dignity and respect.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-center mb-4">
                <CheckCircle size={20} className="text-primary-600 mr-2" />
                <h3 className="text-lg font-semibold text-neutral-900">Medication Management</h3>
              </div>
              <p className="text-neutral-600">
                Reminders and assistance with medication schedules to ensure proper adherence to prescribed treatments.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-center mb-4">
                <CheckCircle size={20} className="text-primary-600 mr-2" />
                <h3 className="text-lg font-semibold text-neutral-900">Meal Preparation</h3>
              </div>
              <p className="text-neutral-600">
                Planning and preparation of nutritious meals that accommodate dietary requirements and personal preferences.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-center mb-4">
                <CheckCircle size={20} className="text-primary-600 mr-2" />
                <h3 className="text-lg font-semibold text-neutral-900">Housekeeping</h3>
              </div>
              <p className="text-neutral-600">
                Light housekeeping services including cleaning, laundry, and maintaining a safe and comfortable home environment.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-center mb-4">
                <CheckCircle size={20} className="text-primary-600 mr-2" />
                <h3 className="text-lg font-semibold text-neutral-900">Transportation</h3>
              </div>
              <p className="text-neutral-600">
                Assistance with transportation to medical appointments, shopping, social activities, and community events.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-center mb-4">
                <CheckCircle size={20} className="text-primary-600 mr-2" />
                <h3 className="text-lg font-semibold text-neutral-900">Companionship</h3>
              </div>
              <p className="text-neutral-600">
                Regular social interaction, conversation, and engagement in favorite hobbies and activities to reduce isolation.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-center mb-4">
                <CheckCircle size={20} className="text-primary-600 mr-2" />
                <h3 className="text-lg font-semibold text-neutral-900">Mobility Assistance</h3>
              </div>
              <p className="text-neutral-600">
                Support with walking, transferring, and navigating the home safely to prevent falls and maintain independence.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-center mb-4">
                <CheckCircle size={20} className="text-primary-600 mr-2" />
                <h3 className="text-lg font-semibold text-neutral-900">Respite Care</h3>
              </div>
              <p className="text-neutral-600">
                Temporary care to provide family caregivers with much-needed breaks to rest and recharge.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-center mb-4">
                <CheckCircle size={20} className="text-primary-600 mr-2" />
                <h3 className="text-lg font-semibold text-neutral-900">Overnight Care</h3>
              </div>
              <p className="text-neutral-600">
                24-hour supervision and assistance for seniors who require support during the night or continuous care.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* How It Works */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle 
            title="How Our Elderly Care Works"
            subtitle="We follow a structured process to ensure that our care services perfectly match each client's needs."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-primary-600">
                <span className="text-2xl font-bold">1</span>
              </div>
              <h3 className="text-lg font-semibold mb-3 text-neutral-900">Initial Consultation</h3>
              <p className="text-neutral-600">
                We meet with you and your loved one to understand care needs, preferences, and goals.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-primary-600">
                <span className="text-2xl font-bold">2</span>
              </div>
              <h3 className="text-lg font-semibold mb-3 text-neutral-900">Care Plan Development</h3>
              <p className="text-neutral-600">
                We create a personalized care plan addressing specific needs, schedules, and preferences.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-primary-600">
                <span className="text-2xl font-bold">3</span>
              </div>
              <h3 className="text-lg font-semibold mb-3 text-neutral-900">Caregiver Matching</h3>
              <p className="text-neutral-600">
                We carefully select and introduce caregivers who match both care needs and personality.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-primary-600">
                <span className="text-2xl font-bold">4</span>
              </div>
              <h3 className="text-lg font-semibold mb-3 text-neutral-900">Ongoing Support & Review</h3>
              <p className="text-neutral-600">
                We provide continuous supervision and regularly review care plans to adapt to changing needs.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Benefits */}
      <section className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle 
            title="Benefits of Our Elderly Care"
            subtitle="Our personalized care services offer numerous advantages for seniors and their families."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex">
                <div className="flex-shrink-0 mr-4">
                  <Award className="h-6 w-6 text-primary-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-neutral-900">Enhanced Independence</h3>
                  <p className="text-neutral-600">
                    Our support helps seniors maintain their independence by providing just the right amount of assistance.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0 mr-4">
                  <Award className="h-6 w-6 text-primary-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-neutral-900">Improved Safety</h3>
                  <p className="text-neutral-600">
                    Professional caregivers help prevent falls and accidents while ensuring a safe home environment.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0 mr-4">
                  <Award className="h-6 w-6 text-primary-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-neutral-900">Better Nutrition</h3>
                  <p className="text-neutral-600">
                    Regular, nutritious meals tailored to dietary needs help maintain health and energy levels.
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
                    Families can rest assured knowing their loved ones are receiving professional, compassionate care.
                  </p>
                </div>
              </div>
            </div>
            
            <div>
              <img 
                src="https://images.pexels.com/photos/7551824/pexels-photo-7551824.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Elderly care benefits" 
                className="rounded-xl shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle 
            title="Family Testimonials"
            subtitle="Hear from families who have experienced the difference our elderly care services make."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard 
              name="Elizabeth Parker"
              role="Daughter of Client"
              quote="The care provided to my mother has exceeded our expectations. Her caregiver has become like family, and the peace of mind this has given us is invaluable."
              rating={5}
              image="https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              index={0}
            />
            <TestimonialCard 
              name="Richard Thompson"
              role="Son of Client"
              quote="CareNoble has enabled my father to remain in his own home despite his increasing needs. The caregivers' professionalism and genuine care have made all the difference."
              rating={5}
              image="https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              index={1}
            />
            <TestimonialCard 
              name="Margaret Wilson"
              role="Elderly Client"
              quote="At 87, I was determined to stay in my own home. Thanks to CareNoble, I've been able to do just that while receiving the help I need with daily activities."
              rating={4}
              image="https://images.pexels.com/photos/2269872/pexels-photo-2269872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              index={2}
            />
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <CTASection 
        title="Arrange Elderly Care for Your Loved One"
        subtitle="Contact us today to learn more about our elderly care services and how we can support your loved one."
        buttonText="Schedule a Consultation"
        buttonLink="/contact"
      />
    </>
  );
};

export default ElderlyCare;