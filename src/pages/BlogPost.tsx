import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Calendar, User, ArrowLeft, Facebook, Twitter, Linkedin } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import CTASection from '../components/CTASection';
import TestimonialCard from '../components/TestimonialCard';

// Mock blog post data
const blogPosts = {
  '1': {
    title: 'Understanding Dementia: Signs, Symptoms, and Support Strategies',
    excerpt: 'Learn about the early signs of dementia, how it progresses, and effective strategies for supporting individuals with dementia and their caregivers.',
    content: `
      <p class="mb-4">Dementia is a term used to describe a collection of symptoms affecting memory, thinking, and social abilities severely enough to interfere with daily functioning. While Alzheimer's disease is the most common cause of dementia, several other conditions can cause similar symptoms.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">Early Signs and Symptoms</h2>
      <p class="mb-4">Recognizing the early signs of dementia is crucial for timely intervention and support. These signs may include:</p>
      <ul class="list-disc pl-6 mb-4">
        <li class="mb-2">Memory loss that disrupts daily life</li>
        <li class="mb-2">Challenges in planning or solving problems</li>
        <li class="mb-2">Difficulty completing familiar tasks</li>
        <li class="mb-2">Confusion with time or place</li>
        <li class="mb-2">Trouble understanding visual images and spatial relationships</li>
        <li class="mb-2">New problems with words in speaking or writing</li>
        <li class="mb-2">Misplacing things and losing the ability to retrace steps</li>
        <li class="mb-2">Decreased or poor judgment</li>
        <li class="mb-2">Withdrawal from work or social activities</li>
        <li class="mb-2">Changes in mood and personality</li>
      </ul>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">Progression of Dementia</h2>
      <p class="mb-4">Dementia typically progresses through several stages, from mild cognitive impairment to severe dementia. Understanding these stages can help caregivers anticipate changes and adapt care strategies accordingly:</p>
      
      <h3 class="text-xl font-semibold mt-6 mb-3">Mild Dementia</h3>
      <p class="mb-4">In the early stage, a person may function independently but experience memory lapses, such as forgetting familiar words or the location of everyday objects. Other signs include:</p>
      <ul class="list-disc pl-6 mb-4">
        <li class="mb-2">Difficulty performing complex tasks</li>
        <li class="mb-2">Becoming more forgetful of recent events</li>
        <li class="mb-2">Experiencing personality changes</li>
      </ul>
      
      <h3 class="text-xl font-semibold mt-6 mb-3">Moderate Dementia</h3>
      <p class="mb-4">As dementia progresses to the middle stage, individuals require more care and supervision. Symptoms become more pronounced and may include:</p>
      <ul class="list-disc pl-6 mb-4">
        <li class="mb-2">Increased memory loss and confusion</li>
        <li class="mb-2">Inability to learn new things</li>
        <li class="mb-2">Difficulty with language and problems with logical thinking</li>
        <li class="mb-2">Shortened attention span</li>
        <li class="mb-2">Problems recognizing family and friends</li>
        <li class="mb-2">Hallucinations, delusions, or paranoia</li>
        <li class="mb-2">Impulsive behavior</li>
      </ul>
      
      <h3 class="text-xl font-semibold mt-6 mb-3">Severe Dementia</h3>
      <p class="mb-4">In the late stage, individuals lose the ability to respond to their environment, carry on a conversation, and eventually, control movement. They may:</p>
      <ul class="list-disc pl-6 mb-4">
        <li class="mb-2">Need 24-hour care and supervision</li>
        <li class="mb-2">Experience significant personality changes</li>
        <li class="mb-2">Lose awareness of recent experiences and surroundings</li>
        <li class="mb-2">Require assistance with daily activities and personal care</li>
        <li class="mb-2">Experience increased sleeping</li>
        <li class="mb-2">Lose the ability to walk, sit, and eventually, swallow</li>
      </ul>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">Support Strategies for Individuals with Dementia</h2>
      <p class="mb-4">While there is no cure for most types of dementia, various strategies can help manage symptoms and improve quality of life:</p>
      
      <h3 class="text-xl font-semibold mt-6 mb-3">Establish Routine</h3>
      <p class="mb-4">Creating a consistent daily routine can provide structure and reduce confusion. Try to schedule activities, meals, and rest at the same times each day.</p>
      
      <h3 class="text-xl font-semibold mt-6 mb-3">Simplify Communication</h3>
      <p class="mb-4">When communicating with someone who has dementia:</p>
      <ul class="list-disc pl-6 mb-4">
        <li class="mb-2">Speak clearly and slowly using simple words and sentences</li>
        <li class="mb-2">Maintain eye contact and use non-verbal cues</li>
        <li class="mb-2">Ask one question at a time and provide simple choices</li>
        <li class="mb-2">Be patient and allow time for responses</li>
        <li class="mb-2">Avoid arguing or correcting; instead, redirect attention</li>
      </ul>
      
      <h3 class="text-xl font-semibold mt-6 mb-3">Create a Safe Environment</h3>
      <p class="mb-4">Modify the living space to reduce risks and support independence:</p>
      <ul class="list-disc pl-6 mb-4">
        <li class="mb-2">Install handrails in bathrooms and along stairs</li>
        <li class="mb-2">Remove tripping hazards and ensure good lighting</li>
        <li class="mb-2">Use labels with pictures for room identification</li>
        <li class="mb-2">Secure potentially dangerous items and medications</li>
      </ul>
      
      <h3 class="text-xl font-semibold mt-6 mb-3">Engage in Meaningful Activities</h3>
      <p class="mb-4">Participation in activities that provide meaning and purpose can enhance wellbeing:</p>
      <ul class="list-disc pl-6 mb-4">
        <li class="mb-2">Listen to music or sing familiar songs</li>
        <li class="mb-2">Look through photo albums and reminisce about past experiences</li>
        <li class="mb-2">Engage in simple crafts or household tasks</li>
        <li class="mb-2">Spend time outdoors and in nature</li>
        <li class="mb-2">Participate in gentle exercise appropriate to their abilities</li>
      </ul>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">Support for Caregivers</h2>
      <p class="mb-4">Caring for someone with dementia can be physically and emotionally demanding. Caregivers should:</p>
      <ul class="list-disc pl-6 mb-4">
        <li class="mb-2">Seek education about dementia and caregiving techniques</li>
        <li class="mb-2">Join support groups to connect with others in similar situations</li>
        <li class="mb-2">Take advantage of respite care services to prevent burnout</li>
        <li class="mb-2">Maintain their own physical and mental health</li>
        <li class="mb-2">Explore community resources and professional care options</li>
      </ul>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">Professional Care Options</h2>
      <p class="mb-4">As dementia progresses, professional care services become increasingly important:</p>
      <ul class="list-disc pl-6 mb-4">
        <li class="mb-2"><strong>Home Care:</strong> Professional caregivers provide assistance in the familiar environment of home.</li>
        <li class="mb-2"><strong>Day Centers:</strong> Offer social activities and care during daytime hours.</li>
        <li class="mb-2"><strong>Respite Care:</strong> Short-term care that gives regular caregivers a break.</li>
        <li class="mb-2"><strong>Memory Care Units:</strong> Specialized residential facilities designed specifically for people with dementia.</li>
      </ul>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">Conclusion</h2>
      <p class="mb-4">While dementia presents significant challenges for individuals and their caregivers, understanding the condition and implementing appropriate support strategies can enhance quality of life and well-being. Early diagnosis, consistent care approaches, and access to support services are key components of effective dementia care.</p>
      
      <p class="mb-4">At CareNoble, our specialized dementia care services are designed to support individuals at all stages of dementia, providing personalized care that promotes dignity, comfort, and meaningful engagement. Our experienced caregivers work closely with families to develop comprehensive care plans that address the unique needs of each individual.</p>
      
      <p>If you or a loved one is living with dementia, contact CareNoble today to learn more about our specialized dementia care services and how we can help.</p>
    `,
    image: 'https://images.pexels.com/photos/7551666/pexels-photo-7551666.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    date: 'May 15, 2023',
    author: 'Dr. Robert Chen',
    categories: ['Dementia', 'Elderly Care', 'Caregiving Tips']
  },
  // Other blog posts would be defined here
};

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  const post = blogPosts[id as keyof typeof blogPosts];
  
  if (!post) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold mb-4">Blog Post Not Found</h1>
        <p className="mb-8">Sorry, the blog post you're looking for doesn't exist.</p>
        <Link 
          to="/blog" 
          className="inline-flex items-center text-primary-600 hover:text-primary-800 font-medium"
        >
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
        </Link>
      </div>
    );
  }
  
  return (
    <>
      <Helmet>
        <title>{post.title} | CareNoble Blog</title>
        <meta name="description" content={post.excerpt} />
      </Helmet>
      
      <div className="pt-20 bg-white"> {/* pt-20 to account for the fixed navbar */}
        {/* Blog Header */}
        <div className="w-full h-80 md:h-96 relative">
          <img 
            src={post.image} 
            alt={post.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-neutral-900/50"></div>
          
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h1 className="text-2xl md:text-4xl font-bold text-white mb-4">
                {post.title}
              </h1>
              
              <div className="flex items-center justify-center text-sm text-white">
                <span className="flex items-center">
                  <Calendar size={14} className="mr-1" />
                  {post.date}
                </span>
                <span className="mx-2">•</span>
                <span className="flex items-center">
                  <User size={14} className="mr-1" />
                  {post.author}
                </span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Blog Content */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-3xl mx-auto">
            <Link 
              to="/blog" 
              className="inline-flex items-center text-primary-600 hover:text-primary-800 font-medium mb-8"
            >
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
            </Link>
            
            <div className="prose max-w-none">
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </div>
            
            {/* Categories */}
            <div className="mt-8 pt-6 border-t border-neutral-200">
              <div className="flex items-center flex-wrap gap-2">
                <span className="text-neutral-700 font-medium">Categories:</span>
                {post.categories.map((category, index) => (
                  <a 
                    key={index}
                    href="#" 
                    className="bg-primary-50 text-primary-700 px-3 py-1 rounded-full text-sm hover:bg-primary-100 transition-colors"
                  >
                    {category}
                  </a>
                ))}
              </div>
            </div>
            
            {/* Share */}
            <div className="mt-6 pt-6 border-t border-neutral-200">
              <div className="flex items-center">
                <span className="text-neutral-700 font-medium mr-4">Share this article:</span>
                <div className="flex space-x-3">
                  <a href="#" className="text-neutral-600 hover:text-primary-600 transition-colors">
                    <Facebook size={20} />
                  </a>
                  <a href="#" className="text-neutral-600 hover:text-primary-600 transition-colors">
                    <Twitter size={20} />
                  </a>
                  <a href="#" className="text-neutral-600 hover:text-primary-600 transition-colors">
                    <Linkedin size={20} />
                  </a>
                </div>
              </div>
            </div>
            
            {/* Author Bio */}
            <div className="mt-8 p-6 bg-neutral-50 rounded-xl">
              <div className="flex items-center">
                <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                  <img 
                    src="https://images.pexels.com/photos/5490276/pexels-photo-5490276.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                    alt={post.author} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{post.author}</h3>
                  <p className="text-neutral-600">
                    Clinical Director at CareNoble with over 20 years of experience in geriatric and mental health care. Dr. Chen is passionate about educating caregivers and families on dementia care.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Related Articles */}
        <section className="py-16 bg-neutral-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <SectionTitle 
              title="You May Also Like"
              subtitle="Explore more articles on related topics."
            />
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Link to="/blog/2" className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <img 
                    src="https://images.pexels.com/photos/7551740/pexels-photo-7551740.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                    alt="The Importance of Social Connection for Elderly Mental Health" 
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-2 text-neutral-900">
                    The Importance of Social Connection for Elderly Mental Health
                  </h3>
                  <p className="text-sm text-neutral-500 mb-2">April 28, 2023</p>
                </div>
              </Link>
              
              <Link to="/blog/3" className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <img 
                    src="https://images.pexels.com/photos/5205250/pexels-photo-5205250.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                    alt="Nutrition and Aging: Dietary Needs for Seniors" 
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-2 text-neutral-900">
                    Nutrition and Aging: Dietary Needs for Seniors
                  </h3>
                  <p className="text-sm text-neutral-500 mb-2">March 10, 2023</p>
                </div>
              </Link>
              
              <Link to="/blog/5" className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <img 
                    src="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                    alt="Home Safety Modifications for Aging in Place" 
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-2 text-neutral-900">
                    Home Safety Modifications for Aging in Place
                  </h3>
                  <p className="text-sm text-neutral-500 mb-2">January 15, 2023</p>
                </div>
              </Link>
            </div>
          </div>
        </section>
        
        {/* Testimonials */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <SectionTitle 
              title="What Our Clients Say"
              subtitle="Hear from families who have experienced our dementia care services."
            />
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <TestimonialCard 
                name="Margaret Wilson"
                role="Daughter of Dementia Client"
                quote="The specialized dementia care that CareNoble provides for my mother has been exceptional. Their understanding of her condition and patient approach has made such a difference."
                rating={5}
                image="https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                index={0}
              />
              <TestimonialCard 
                name="Richard Harris"
                role="Son of Dementia Client"
                quote="Finding caregivers who truly understand dementia was challenging until we discovered CareNoble. Their expertise has helped us navigate this difficult journey with more confidence."
                rating={5}
                image="https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                index={1}
              />
              <TestimonialCard 
                name="Emily Johnson"
                role="Granddaughter of Client"
                quote="The dementia care strategies that CareNoble implemented have significantly reduced my grandmother's anxiety and improved her quality of life. We're so grateful for their support."
                rating={4}
                image="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                index={2}
              />
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="py-16 bg-neutral-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <SectionTitle 
              title="Frequently Asked Questions"
              subtitle="Common questions about dementia care and our services."
            />
            
            <div className="max-w-3xl mx-auto">
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-lg font-semibold mb-2 text-neutral-900">
                    What's the difference between dementia and Alzheimer's disease?
                  </h3>
                  <p className="text-neutral-600">
                    Dementia is a general term for symptoms affecting memory, thinking, and social abilities. Alzheimer's disease is the most common cause of dementia, accounting for 60-80% of cases. While all Alzheimer's patients have dementia, not all dementia is caused by Alzheimer's.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-lg font-semibold mb-2 text-neutral-900">
                    Can dementia be prevented?
                  </h3>
                  <p className="text-neutral-600">
                    While there's no guaranteed way to prevent dementia, research suggests that maintaining a healthy lifestyle can reduce risk factors. This includes regular physical exercise, a balanced diet, mental stimulation, social engagement, and managing conditions like high blood pressure and diabetes.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-lg font-semibold mb-2 text-neutral-900">
                    How do CareNoble's dementia care services differ from general elderly care?
                  </h3>
                  <p className="text-neutral-600">
                    Our dementia care services are provided by caregivers with specialized training in dementia care techniques. They understand the unique challenges of dementia and use specific approaches to communication, behavior management, and daily activities that are tailored to the individual's stage of dementia and personal preferences.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-lg font-semibold mb-2 text-neutral-900">
                    What should we do if a loved one is showing signs of dementia?
                  </h3>
                  <p className="text-neutral-600">
                    If you notice potential signs of dementia, it's important to consult a healthcare professional for proper evaluation. Early diagnosis can help with treatment planning and accessing appropriate support services. Once diagnosed, consider contacting CareNoble to discuss how our specialized dementia care services can help.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <CTASection 
          title="Need Specialized Dementia Care?"
          subtitle="Contact us today to learn how our dementia care specialists can support you and your loved ones."
          buttonText="Contact Us Today"
          buttonLink="/contact"
        />
      </div>
    </>
  );
};

export default BlogPost;