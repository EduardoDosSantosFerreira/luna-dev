import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight, Code, Smartphone, ShoppingCart, BarChart, Users, CheckCircle, ChevronDown } from "lucide-react"
import PortfolioItem from "@/components/portfolio-item"
import TestimonialCard from "@/components/testimonial-card"
import ContactForm from "@/components/contact-form"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative bg-[#0f172a] text-white py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-6 flex flex-col items-center text-center">
          <div className="mb-8 w-32 h-32 md:w-40 md:h-40 relative">
            <Image
              src="/images/luna-logo.png"
              alt="Luna Web Agency Logo"
              width={160}
              height={160}
              className="animate-pulse"
            />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Transforming Ideas Into <span className="text-[#60a5fa]">Digital Reality</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mb-8">
            We design and develop custom websites that help businesses grow, engage customers, and increase revenue.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-[#60a5fa] hover:bg-[#3b82f6] text-white">
              Get Started <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              View Our Work
            </Button>
          </div>
          <div className="absolute bottom-0 left-0 right-0 flex justify-center">
            <ChevronDown className="h-10 w-10 text-[#60a5fa] animate-bounce" />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white" id="services">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We offer a comprehensive range of web development services to meet your business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="rounded-full bg-[#0f172a]/10 p-3 w-12 h-12 flex items-center justify-center mb-4">
                  <Code className="h-6 w-6 text-[#60a5fa]" />
                </div>
                <h3 className="text-xl font-bold mb-2">Custom Web Development</h3>
                <p className="text-gray-600">
                  Tailored websites built from scratch to meet your specific business requirements.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="rounded-full bg-[#0f172a]/10 p-3 w-12 h-12 flex items-center justify-center mb-4">
                  <Smartphone className="h-6 w-6 text-[#60a5fa]" />
                </div>
                <h3 className="text-xl font-bold mb-2">Responsive Design</h3>
                <p className="text-gray-600">
                  Mobile-friendly websites that look great on all devices and screen sizes.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="rounded-full bg-[#0f172a]/10 p-3 w-12 h-12 flex items-center justify-center mb-4">
                  <ShoppingCart className="h-6 w-6 text-[#60a5fa]" />
                </div>
                <h3 className="text-xl font-bold mb-2">E-Commerce Solutions</h3>
                <p className="text-gray-600">Online stores with secure payment gateways and inventory management.</p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="rounded-full bg-[#0f172a]/10 p-3 w-12 h-12 flex items-center justify-center mb-4">
                  <BarChart className="h-6 w-6 text-[#60a5fa]" />
                </div>
                <h3 className="text-xl font-bold mb-2">SEO Optimization</h3>
                <p className="text-gray-600">Improve your search engine rankings and drive more organic traffic.</p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="rounded-full bg-[#0f172a]/10 p-3 w-12 h-12 flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-[#60a5fa]" />
                </div>
                <h3 className="text-xl font-bold mb-2">CMS Integration</h3>
                <p className="text-gray-600">User-friendly content management systems to easily update your website.</p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="rounded-full bg-[#0f172a]/10 p-3 w-12 h-12 flex items-center justify-center mb-4">
                  <CheckCircle className="h-6 w-6 text-[#60a5fa]" />
                </div>
                <h3 className="text-xl font-bold mb-2">Maintenance & Support</h3>
                <p className="text-gray-600">
                  Ongoing technical support and regular updates to keep your site running smoothly.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 bg-gray-50" id="portfolio">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Portfolio</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Browse through our recent projects and see the quality of our work.
            </p>
          </div>

          <Tabs defaultValue="all" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="bg-white">
                <TabsTrigger value="all">All Projects</TabsTrigger>
                <TabsTrigger value="ecommerce">E-Commerce</TabsTrigger>
                <TabsTrigger value="corporate">Corporate</TabsTrigger>
                <TabsTrigger value="portfolio">Portfolio</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="all" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <PortfolioItem
                  title="Eco Store"
                  category="E-Commerce"
                  image="/images/portfolio-1.jpg"
                  description="An eco-friendly product store with custom shopping cart and checkout."
                />
                <PortfolioItem
                  title="Financial Advisors"
                  category="Corporate"
                  image="/images/portfolio-2.jpg"
                  description="A professional website for a financial advisory firm with client portal."
                />
                <PortfolioItem
                  title="Photography Portfolio"
                  category="Portfolio"
                  image="/images/portfolio-3.jpg"
                  description="A minimalist portfolio site for a professional photographer."
                />
                <PortfolioItem
                  title="Tech Conference"
                  category="Corporate"
                  image="/images/portfolio-4.jpg"
                  description="Event website with registration system and schedule management."
                />
                <PortfolioItem
                  title="Handmade Crafts"
                  category="E-Commerce"
                  image="/images/portfolio-5.jpg"
                  description="Online marketplace for artisanal handmade products."
                />
                <PortfolioItem
                  title="Interior Designer"
                  category="Portfolio"
                  image="/images/portfolio-6.jpg"
                  description="Interactive portfolio for an interior design studio."
                />
              </div>
            </TabsContent>

            <TabsContent value="ecommerce" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <PortfolioItem
                  title="Eco Store"
                  category="E-Commerce"
                  image="/images/portfolio-1.jpg"
                  description="An eco-friendly product store with custom shopping cart and checkout."
                />
                <PortfolioItem
                  title="Handmade Crafts"
                  category="E-Commerce"
                  image="/images/portfolio-5.jpg"
                  description="Online marketplace for artisanal handmade products."
                />
              </div>
            </TabsContent>

            <TabsContent value="corporate" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <PortfolioItem
                  title="Financial Advisors"
                  category="Corporate"
                  image="/images/portfolio-2.jpg"
                  description="A professional website for a financial advisory firm with client portal."
                />
                <PortfolioItem
                  title="Tech Conference"
                  category="Corporate"
                  image="/images/portfolio-4.jpg"
                  description="Event website with registration system and schedule management."
                />
              </div>
            </TabsContent>

            <TabsContent value="portfolio" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <PortfolioItem
                  title="Photography Portfolio"
                  category="Portfolio"
                  image="/images/portfolio-3.jpg"
                  description="A minimalist portfolio site for a professional photographer."
                />
                <PortfolioItem
                  title="Interior Designer"
                  category="Portfolio"
                  image="/images/portfolio-6.jpg"
                  description="Interactive portfolio for an interior design studio."
                />
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white" id="about">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">About Luna</h2>
              <p className="text-lg text-gray-600 mb-6">
                Luna is a team of passionate web developers and designers dedicated to creating exceptional digital
                experiences. We combine technical expertise with creative design to deliver websites that stand out.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Founded in 2018, we've helped over 100 businesses establish their online presence and achieve their
                digital goals. Our approach is collaborative, transparent, and focused on delivering results.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="text-center">
                  <p className="text-4xl font-bold text-[#60a5fa]">100+</p>
                  <p className="text-gray-600">Projects Completed</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-bold text-[#60a5fa]">95%</p>
                  <p className="text-gray-600">Client Satisfaction</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-bold text-[#60a5fa]">15+</p>
                  <p className="text-gray-600">Team Members</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-bold text-[#60a5fa]">5+</p>
                  <p className="text-gray-600">Years Experience</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/team.jpg"
                  alt="Luna Team"
                  width={600}
                  height={600}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-[#0f172a] text-white p-6 rounded-xl shadow-lg">
                <p className="text-xl font-bold mb-2">Let's Build Something Amazing</p>
                <Button className="bg-[#60a5fa] hover:bg-[#3b82f6] text-white w-full">Contact Us</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50" id="testimonials">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our clients have to say about working with us.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TestimonialCard
              name="Sarah Johnson"
              company="Eco Store"
              image="/images/testimonial-1.jpg"
              quote="Luna transformed our online presence completely. Our e-commerce sales have increased by 200% since launching our new website."
              rating={5}
            />
            <TestimonialCard
              name="Michael Chen"
              company="Financial Advisors Inc."
              image="/images/testimonial-2.jpg"
              quote="The team at Luna understood our vision perfectly. They delivered a professional website that has helped us attract high-value clients."
              rating={5}
            />
            <TestimonialCard
              name="Emily Rodriguez"
              company="Photography Studio"
              image="/images/testimonial-3.jpg"
              quote="As a creative professional, I needed a portfolio that would showcase my work beautifully. Luna exceeded my expectations."
              rating={5}
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white" id="contact">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Get In Touch</h2>
              <p className="text-lg text-gray-600 mb-8">
                Ready to start your project? Contact us today for a free consultation and quote.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="rounded-full bg-[#0f172a]/10 p-3 mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-[#60a5fa]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Phone</h3>
                    <p className="text-gray-600">(123) 456-7890</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="rounded-full bg-[#0f172a]/10 p-3 mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-[#60a5fa]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Email</h3>
                    <p className="text-gray-600">info@lunawebagency.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="rounded-full bg-[#0f172a]/10 p-3 mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-[#60a5fa]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Location</h3>
                    <p className="text-gray-600">123 Web Street, Digital City, 10001</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0f172a] text-white py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="mb-4 w-32 h-32 relative">
                <Image src="/images/luna-logo.png" alt="Luna Web Agency Logo" width={128} height={128} />
              </div>
              <p className="text-gray-300 mb-4">Transforming ideas into digital reality since 2018.</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-300 hover:text-[#60a5fa] transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-gray-300 hover:text-[#60a5fa] transition-colors">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#portfolio" className="text-gray-300 hover:text-[#60a5fa] transition-colors">
                    Portfolio
                  </a>
                </li>
                <li>
                  <a href="#about" className="text-gray-300 hover:text-[#60a5fa] transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-gray-300 hover:text-[#60a5fa] transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-300 hover:text-[#60a5fa] transition-colors">
                    Web Development
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-[#60a5fa] transition-colors">
                    E-Commerce
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-[#60a5fa] transition-colors">
                    SEO Optimization
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-[#60a5fa] transition-colors">
                    CMS Integration
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-[#60a5fa] transition-colors">
                    Maintenance
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
              <div className="flex space-x-4 mb-4">
                <a href="#" className="bg-white/10 hover:bg-[#60a5fa] p-2 rounded-full transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </a>
                <a href="#" className="bg-white/10 hover:bg-[#60a5fa] p-2 rounded-full transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                  </svg>
                </a>
                <a href="#" className="bg-white/10 hover:bg-[#60a5fa] p-2 rounded-full transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
                <a href="#" className="bg-white/10 hover:bg-[#60a5fa] p-2 rounded-full transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
              </div>
              <p className="text-gray-300">Subscribe to our newsletter for the latest updates.</p>
              <div className="mt-4 flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="bg-white/10 text-white px-4 py-2 rounded-l-md focus:outline-none w-full"
                />
                <Button className="bg-[#60a5fa] hover:bg-[#3b82f6] text-white rounded-l-none">Subscribe</Button>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 mt-12 pt-8 text-center text-gray-300">
            <p>&copy; {new Date().getFullYear()} Luna Web Agency. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
