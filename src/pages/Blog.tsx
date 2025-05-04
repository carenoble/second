import { Helmet } from 'react-helmet';
import Hero from '../components/Hero';
import SectionTitle from '../components/SectionTitle';
import BlogCard from '../components/BlogCard';
import CTASection from '../components/CTASection';

// Mock blog data
const blogPosts = [
  {
    id: '1',
    title: 'Understanding Dementia: Signs, Symptoms, and Support Strategies',
    excerpt: 'Learn about the early signs of dementia, how it progresses, and effective strategies for supporting individuals with dementia and their caregivers.',
    image: 'https://images.pexels.com/photos/7551666/pexels-photo-7551666.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    date: 'May 15, 2023',
    author: 'Dr. Robert Chen'
  },
  {
    id: '2',
    title: 'The Importance of Social Connection for Elderly Mental Health',
    excerpt: 'Discover why social connections are vital for the mental wellbeing of elderly individuals and practical ways to prevent isolation and loneliness.',
    image: 'https://images.pexels.com/photos/7551740/pexels-photo-7551740.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    date: 'April 28, 2023',
    author: 'Sarah Williams'
  },
  {
    id: '3',
    title: 'Nutrition and Aging: Dietary Needs for Seniors',
    excerpt: 'Explore the unique nutritional requirements of older adults and learn how proper nutrition can support health, energy, and quality of life.',
    image: 'https://images.pexels.com/photos/5205250/pexels-photo-5205250.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    date: 'March 10, 2023',
    author: 'Emma Johnson, Nutritionist'
  },
  {
    id: '4',
    title: 'Supporting a Loved One with Depression: A Guide for Families',
    excerpt: 'Practical advice for recognizing signs of depression in a loved one and effective ways to provide support while caring for your own wellbeing.',
    image: 'https://images.pexels.com/photos/4101143/pexels-photo-4101143.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    date: 'February 22, 2023',
    author: 'Dr. Michael Thompson'
  },
  {
    id: '5',
    title: 'Home Safety Modifications for Aging in Place',
    excerpt: 'Learn about effective home modifications that can enhance safety and accessibility, allowing seniors to remain independent in their own homes.',
    image: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    date: 'January 15, 2023',
    author: 'Mark Thompson'
  },
  {
    id: '6',
    title: 'The Role of Exercise in Managing Parkinson\'s Disease',
    excerpt: 'Discover how regular, appropriate exercise can help manage Parkinson\'s symptoms and improve quality of life for those living with the condition.',
    image: 'https://images.pexels.com/photos/7551754/pexels-photo-7551754.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    date: 'December 5, 2022',
    author: 'Dr. Laura Singh, Neurologist'
  }
];

const Blog = () => {
  return (
    <>
      <Helmet>
        <title>CareNoble Blog | Healthcare Insights & Resources</title>
        <meta name="description" content="Explore CareNoble's blog for insights on elderly care, mental health support, dementia care, and other healthcare topics from our Morecambe-based professionals." />
      </Helmet>
      
      <Hero 
        title="CareNoble Blog"
        subtitle="Insights, advice, and resources on care services, mental health, and wellbeing."
        backgroundImage="https://images.pexels.com/photos/5473182/pexels-photo-5473182.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />
      
      {/* Featured Blog Posts */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle 
            title="Latest Articles"
            subtitle="Explore our collection of articles written by healthcare professionals and care experts."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <BlogCard
                key={post.id}
                id={post.id}
                title={post.title}
                excerpt={post.excerpt}
                image={post.image}
                date={post.date}
                author={post.author}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Categories Section */}
      <section className="py-16 bg-primary-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle 
            title="Explore By Category"
            subtitle="Find articles relevant to your specific interests and care needs."
          />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <a 
              href="#" 
              className="bg-white p-4 rounded-lg shadow-sm text-center hover:shadow-md transition-shadow"
            >
              <h3 className="text-lg font-semibold text-neutral-900">Mental Health</h3>
              <p className="text-neutral-600 text-sm">12 Articles</p>
            </a>
            
            <a 
              href="#" 
              className="bg-white p-4 rounded-lg shadow-sm text-center hover:shadow-md transition-shadow"
            >
              <h3 className="text-lg font-semibold text-neutral-900">Elderly Care</h3>
              <p className="text-neutral-600 text-sm">15 Articles</p>
            </a>
            
            <a 
              href="#" 
              className="bg-white p-4 rounded-lg shadow-sm text-center hover:shadow-md transition-shadow"
            >
              <h3 className="text-lg font-semibold text-neutral-900">Dementia</h3>
              <p className="text-neutral-600 text-sm">8 Articles</p>
            </a>
            
            <a 
              href="#" 
              className="bg-white p-4 rounded-lg shadow-sm text-center hover:shadow-md transition-shadow"
            >
              <h3 className="text-lg font-semibold text-neutral-900">Nutrition</h3>
              <p className="text-neutral-600 text-sm">6 Articles</p>
            </a>
            
            <a 
              href="#" 
              className="bg-white p-4 rounded-lg shadow-sm text-center hover:shadow-md transition-shadow"
            >
              <h3 className="text-lg font-semibold text-neutral-900">Caregiving Tips</h3>
              <p className="text-neutral-600 text-sm">10 Articles</p>
            </a>
            
            <a 
              href="#" 
              className="bg-white p-4 rounded-lg shadow-sm text-center hover:shadow-md transition-shadow"
            >
              <h3 className="text-lg font-semibold text-neutral-900">Health & Wellness</h3>
              <p className="text-neutral-600 text-sm">14 Articles</p>
            </a>
            
            <a 
              href="#" 
              className="bg-white p-4 rounded-lg shadow-sm text-center hover:shadow-md transition-shadow"
            >
              <h3 className="text-lg font-semibold text-neutral-900">Specialist Care</h3>
              <p className="text-neutral-600 text-sm">9 Articles</p>
            </a>
            
            <a 
              href="#" 
              className="bg-white p-4 rounded-lg shadow-sm text-center hover:shadow-md transition-shadow"
            >
              <h3 className="text-lg font-semibold text-neutral-900">Resources</h3>
              <p className="text-neutral-600 text-sm">7 Articles</p>
            </a>
          </div>
        </div>
      </section>
      
      {/* Newsletter Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-neutral-900">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-neutral-600 mb-8">
              Stay updated with our latest articles, care tips, and resources delivered directly to your inbox.
            </p>
            
            <form className="flex flex-col sm:flex-row gap-4">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="flex-grow px-4 py-3 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
                required
              />
              <button 
                type="submit" 
                className="bg-primary-600 hover:bg-primary-700 text-white font-medium py-3 px-6 rounded-lg transition-colors"
              >
                Subscribe
              </button>
            </form>
            
            <p className="text-sm text-neutral-500 mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <CTASection 
        title="Have a Topic You'd Like Us to Cover?"
        subtitle="We're always looking for new article ideas that would be valuable to our readers. Let us know what you'd like to learn more about."
        buttonText="Suggest a Topic"
        buttonLink="/contact"
      />
    </>
  );
};

export default Blog;