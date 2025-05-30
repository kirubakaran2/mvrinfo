"use client"

import Image from 'next/image';
import { motion } from '@/components/motion';
import { 
  Award, 
  TrendingUp, 
  Users, 
  Shield, 
  CheckCircle,
  Calendar
} from 'lucide-react';

export default function AboutPage() {
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
              About MVR Info
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl mb-8"
            >
              A leading financial advisory firm with a mission to secure your financial future
            </motion.p>
          </div>
        </div>
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-20"></div>
          <div className="absolute -bottom-6 left-0 right-0 h-16 bg-white dark:bg-gray-900 transform -skew-y-3"></div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
                <Image
                  src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Our Story"
                  width={600}
                  height={400}
                  className="object-cover rounded-lg"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-emerald-600 text-white p-6 rounded-lg shadow-lg">
                <p className="text-lg font-bold">Est. 2005</p>
                <p>17+ Years of Excellence</p>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-emerald-600 to-emerald-400 bg-clip-text text-transparent">Our Story</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Founded in 2005, MVR Info began with a simple mission: to provide honest, transparent financial advice that puts clients' needs first. What started as a small team of dedicated professionals has grown into one of the most trusted financial advisory firms in the country.
              </p>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Throughout our journey, we have remained committed to our core values of integrity, excellence, and client-centricity. We believe that financial planning should be accessible to everyone, regardless of their financial status or background.
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                Today, we serve thousands of clients across India, helping them navigate the complex world of insurance, investments, and financial planning. Our success is measured not by the number of policies sold, but by the financial security and peace of mind we provide to our clients.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
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
              Our Mission & Vision
            </motion.h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md"
            >
              <div className="bg-emerald-100 dark:bg-emerald-900/50 p-4 rounded-full inline-flex mb-6">
                <TrendingUp className="h-8 w-8 text-emerald-600 dark:text-emerald-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Our Mission</h3>
              <p className="text-gray-600 dark:text-gray-400">
                To empower individuals and families to achieve financial security through personalized, ethical advice and innovative solutions that address their unique needs and goals.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md"
            >
              <div className="bg-emerald-100 dark:bg-emerald-900/50 p-4 rounded-full inline-flex mb-6">
                <Award className="h-8 w-8 text-emerald-600 dark:text-emerald-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Our Vision</h3>
              <p className="text-gray-600 dark:text-gray-400">
                To be the most trusted financial advisory firm, recognized for our commitment to excellence, innovation, and the financial well-being of our clients, creating a positive impact on society.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold mb-6 bg-gradient-to-r from-emerald-600 to-emerald-400 bg-clip-text text-transparent"
            >
              Our Core Values
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-gray-600 dark:text-gray-400"
            >
              At MVR Info, our values guide every decision we make and every interaction we have with our clients.
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                icon: Shield, 
                title: "Integrity", 
                description: "We operate with honesty, transparency, and ethical principles in all our dealings." 
              },
              { 
                icon: Users, 
                title: "Client-Centricity", 
                description: "We place our clients' interests at the heart of everything we do." 
              },
              { 
                icon: CheckCircle, 
                title: "Excellence", 
                description: "We strive for the highest standards of quality and continuous improvement." 
              },
            ].map((value, index) => (
              <motion.div 
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="mx-auto bg-emerald-100 dark:bg-emerald-900/50 p-4 rounded-full inline-flex mb-6">
                  <value.icon className="h-8 w-8 text-emerald-600 dark:text-emerald-400" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">{value.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones */}
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
              Our Milestones
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-gray-600 dark:text-gray-400"
            >
              A journey of growth, innovation, and excellence in financial advisory services.
            </motion.p>
          </div>
          
          <div className="relative max-w-4xl mx-auto">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-emerald-200 dark:bg-emerald-900"></div>
            
            {[
              { 
                year: "2005", 
                title: "Foundation", 
                description: "MVR Info was established with a vision to provide transparent financial advice.",
                position: "left"
              },
              { 
                year: "2010", 
                title: "Expansion", 
                description: "Opened offices in 5 major cities across India, expanding our client base.",
                position: "right"
              },
              { 
                year: "2015", 
                title: "Digital Transformation", 
                description: "Launched our digital platform to make financial planning more accessible.",
                position: "left"
              },
              { 
                year: "2020", 
                title: "Excellence Award", 
                description: "Recognized as one of the top financial advisory firms in the country.",
                position: "right"
              },
              { 
                year: "2023", 
                title: "Sustainability Initiative", 
                description: "Introduced eco-friendly investment options and sustainable financial practices.",
                position: "left"
              }
            ].map((milestone, index) => (
              <motion.div 
                key={milestone.year}
                initial={{ opacity: 0, x: milestone.position === "left" ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative mb-12 ${
                  milestone.position === "left" 
                    ? "md:ml-0 md:mr-auto md:pr-12 text-right" 
                    : "md:ml-auto md:mr-0 md:pl-12 text-left"
                } md:w-1/2 z-10`}
              >
                <div className={`flex items-center ${
                  milestone.position === "left" ? "justify-end" : "justify-start"
                }`}>
                  <div className={`${
                    milestone.position === "left" ? "order-first" : "order-last"
                  } bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 relative`}>
                    <div className="absolute top-6 bg-emerald-600 text-white px-3 py-1 rounded text-sm font-semibold -mt-10">
                      <Calendar className="inline-block h-4 w-4 mr-1" />
                      {milestone.year}
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white mt-2">{milestone.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400">{milestone.description}</p>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-5 h-5 bg-emerald-600 rounded-full border-4 border-white dark:border-gray-900"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}