"use client"

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { 
  BarChart2, 
  LineChart, 
  Briefcase, 
  LightbulbIcon,
  ChevronRight,
  ArrowRight
} from 'lucide-react';
import Image from 'next/image';

const services = [
  {
    id: 1,
    title: "Portfolio Management",
    description: "Our professional portfolio management service helps you optimize your investments for maximum returns while managing risk. We create a diversified portfolio tailored to your financial goals and risk tolerance.",
    icon: BarChart2,
    image: "https://images.pexels.com/photos/7567444/pexels-photo-7567444.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    link: "/services/portfolio-management",
    features: [
      "Personalized investment strategy",
      "Regular portfolio rebalancing",
      "Quarterly performance reports",
      "Tax-efficient investment recommendations"
    ]
  },
  {
    id: 2,
    title: "Investment Advice",
    description: "Get expert investment advice to help you make informed decisions about where to put your money. Our advisors analyze market trends and opportunities to recommend the best investments for your situation.",
    icon: LineChart,
    image: "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    link: "/services/investment-advice",
    features: [
      "Comprehensive investment analysis",
      "Goal-based investment recommendations",
      "Risk assessment and management",
      "Regular market updates and insights"
    ]
  },
  {
    id: 3,
    title: "Financial Consultant",
    description: "Our financial consultants provide comprehensive guidance on all aspects of your financial life, from budgeting and debt management to retirement planning and estate planning.",
    icon: Briefcase,
    image: "https://images.pexels.com/photos/5849592/pexels-photo-5849592.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    link: "/services/financial-consultant",
    features: [
      "Holistic financial planning",
      "Retirement planning strategies",
      "Tax planning advice",
      "Estate planning recommendations"
    ]
  },
  {
    id: 4,
    title: "How to Invest?",
    description: "Learn the fundamentals of investing with our educational resources and guidance. We'll help you understand different investment options, risk management, and how to build a portfolio that aligns with your goals.",
    icon: LightbulbIcon,
    image: "https://images.pexels.com/photos/6802042/pexels-photo-6802042.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    link: "/services/how-to-invest",
    features: [
      "Investment basics education",
      "Risk and return understanding",
      "Asset allocation guidance",
      "Investment strategy development"
    ]
  }
];

export default function ServicesPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-emerald-600 to-teal-700 text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Our Financial Services
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl mb-8"
            >
              Expert financial guidance to help you achieve your goals
            </motion.p>
          </div>
        </div>
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-20"></div>
          <div className="absolute -bottom-6 left-0 right-0 h-16 bg-white dark:bg-gray-900 transform -skew-y-3"></div>
        </div>
      </section>

      {/* Services Showcase */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-emerald-600 to-emerald-400 bg-clip-text text-transparent"
          >
            Our Services
          </motion.h2>
          
          <div className="space-y-20">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className={`flex flex-col ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } gap-12 items-center`}
              >
                <div className="lg:w-1/2">
                  <div className="relative rounded-lg overflow-hidden shadow-xl">
                    <Image
                      src={service.image}
                      alt={service.title}
                      width={600}
                      height={400}
                      className="w-full h-auto rounded-lg"
                    />
                  </div>
                </div>
                
                <div className="lg:w-1/2">
                  <div className="bg-emerald-100 dark:bg-emerald-900/50 w-14 h-14 rounded-full flex items-center justify-center mb-6">
                    <service.icon className="h-7 w-7 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 dark:text-white">{service.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6 text-lg">{service.description}</p>
                  
                  <div className="mb-8">
                    <h4 className="text-lg font-semibold mb-3 text-gray-800 dark:text-gray-200">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <ChevronRight className="h-5 w-5 text-emerald-600 dark:text-emerald-400 mr-2 mt-0.5" />
                          <span className="text-gray-600 dark:text-gray-400">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Button asChild size="lg" className="bg-emerald-600 hover:bg-emerald-700">
                    <Link href={service.link} className="flex items-center">
                      Learn More <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold mb-6 bg-gradient-to-r from-emerald-600 to-emerald-400 bg-clip-text text-transparent"
            >
              Why Choose MVR Info?
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-gray-600 dark:text-gray-400"
            >
              We're committed to providing exceptional financial services that help you achieve your goals.
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                title: "Expert Advisors", 
                description: "Our team consists of certified financial professionals with years of industry experience." 
              },
              { 
                title: "Personalized Approach", 
                description: "We create customized solutions tailored to your unique financial situation and goals." 
              },
              { 
                title: "Transparent Process", 
                description: "We believe in complete transparency in all our dealings and recommendations." 
              },
              { 
                title: "Comprehensive Services", 
                description: "From investment management to insurance planning, we offer all the financial services you need." 
              },
              { 
                title: "Client Education", 
                description: "We focus on educating our clients to help them make informed financial decisions." 
              },
              { 
                title: "Ongoing Support", 
                description: "We provide continuous support and regular reviews to keep your financial plan on track." 
              },
            ].map((reason, index) => (
              <motion.div 
                key={reason.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">{reason.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{reason.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-600 to-teal-700 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold mb-6"
            >
              Ready to Take Control of Your Financial Future?
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg mb-8"
            >
              Schedule a consultation with one of our financial experts to start your journey toward financial security and prosperity.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button asChild size="lg" className="bg-white text-emerald-700 hover:bg-gray-100">
                <Link href="/contact">Schedule a Consultation</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                <Link href="/products">Explore Our Products</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}