import { Helmet } from 'react-helmet';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import Hero from '../components/Hero';
import SectionTitle from '../components/SectionTitle';
import ContactForm from '../components/ContactForm';

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact CareNoble | Healthcare Services in Morecambe</title>
        <meta name="description" content="Contact CareNoble for inquiries about our care services in Morecambe, Lancashire. Reach out for consultations, information, or to schedule a visit." />
      </Helmet>
      
      <Hero 
        title="Contact Us"
        subtitle="Get in touch with our team to learn more about our care services or to schedule a consultation."
        backgroundImage="https://images.pexels.com/photos/7551682/pexels-photo-7551682.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />
      
      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle 
            title="Get in Touch"
            subtitle="We're here to answer your questions and provide the information you need about our care services."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-primary-100 p-3 rounded-lg mr-4">
                    <MapPin className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-neutral-900">Our Location</h3>
                    <p className="text-neutral-600">
                      123 Care Street<br />
                      Morecambe, Lancashire<br />
                      LA4 5TE, United Kingdom
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary-100 p-3 rounded-lg mr-4">
                    <Phone className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-neutral-900">Phone</h3>
                    <p className="text-neutral-600">
                      Main Office: +44 1234 567890<br />
                      Care Helpline: +44 1234 567891
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary-100 p-3 rounded-lg mr-4">
                    <Mail className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-neutral-900">Email</h3>
                    <p className="text-neutral-600">
                      General Inquiries: info@carenoble.co.uk<br />
                      Care Support: care@carenoble.co.uk<br />
                      Careers: careers@carenoble.co.uk
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary-100 p-3 rounded-lg mr-4">
                    <Clock className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-neutral-900">Office Hours</h3>
                    <p className="text-neutral-600">
                      Monday to Friday: 9:00 AM - 5:00 PM<br />
                      Saturday: 10:00 AM - 2:00 PM<br />
                      Sunday: Closed<br />
                      <span className="font-medium text-primary-700">*Care services are available 24/7</span>
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10">
                <h3 className="text-lg font-semibold mb-4 text-neutral-900">Follow Us</h3>
                <div className="flex space-x-4">
                  <a href="#" className="bg-neutral-100 p-3 rounded-full hover:bg-primary-100 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-neutral-600 hover:text-primary-600">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                  </a>
                  <a href="#" className="bg-neutral-100 p-3 rounded-full hover:bg-primary-100 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-neutral-600 hover:text-primary-600">
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                    </svg>
                  </a>
                  <a href="#" className="bg-neutral-100 p-3 rounded-full hover:bg-primary-100 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-neutral-600 hover:text-primary-600">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                  </a>
                  <a href="#" className="bg-neutral-100 p-3 rounded-full hover:bg-primary-100 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-neutral-600 hover:text-primary-600">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            <ContactForm />
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle 
            title="Find Us"
            subtitle="Our care office is conveniently located in Morecambe, Lancashire."
          />
          
          <div className="rounded-xl overflow-hidden shadow-lg h-96">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d18709.90620772089!2d-2.8868115871582084!3d54.07140232311216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487b62371e46ce59%3A0x1f53d726a36a8549!2sMorecambe!5e0!3m2!1sen!2suk!4v1694539195750!5m2!1sen!2suk" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle 
            title="Frequently Asked Questions"
            subtitle="Find answers to common questions about our care services and consultation process."
          />
          
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              <div className="bg-neutral-50 p-6 rounded-xl">
                <h3 className="text-lg font-semibold mb-2 text-neutral-900">
                  How quickly can you start providing care services?
                </h3>
                <p className="text-neutral-600">
                  We aim to begin care services as soon as possible after the initial assessment. In urgent situations, we can often arrange care within 24-48 hours, while standard setups typically take 3-5 business days to ensure proper matching and planning.
                </p>
              </div>
              
              <div className="bg-neutral-50 p-6 rounded-xl">
                <h3 className="text-lg font-semibold mb-2 text-neutral-900">
                  What areas do you serve in Lancashire?
                </h3>
                <p className="text-neutral-600">
                  CareNoble primarily serves Morecambe and the surrounding areas, including Lancaster, Heysham, Carnforth, and other nearby communities within approximately 15 miles of our main office.
                </p>
              </div>
              
              <div className="bg-neutral-50 p-6 rounded-xl">
                <h3 className="text-lg font-semibold mb-2 text-neutral-900">
                  Are your care services available 24/7?
                </h3>
                <p className="text-neutral-600">
                  Yes, our care services are available 24 hours a day, 7 days a week, including weekends and holidays. We offer various care schedules, from hourly visits to around-the-clock support, depending on individual needs.
                </p>
              </div>
              
              <div className="bg-neutral-50 p-6 rounded-xl">
                <h3 className="text-lg font-semibold mb-2 text-neutral-900">
                  How are your caregivers selected and trained?
                </h3>
                <p className="text-neutral-600">
                  All our caregivers undergo a rigorous selection process, including background checks, reference verification, and interviews. They receive comprehensive training in various aspects of care, including specialized training for dementia care, mobility assistance, and other specific needs.
                </p>
              </div>
              
              <div className="bg-neutral-50 p-6 rounded-xl">
                <h3 className="text-lg font-semibold mb-2 text-neutral-900">
                  What happens during the initial consultation?
                </h3>
                <p className="text-neutral-600">
                  During the initial consultation, our care manager will meet with you and your loved one to understand specific care needs, preferences, and goals. We'll discuss health conditions, daily routines, and any concerns, then develop a personalized care plan and recommend appropriate services.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;