"use client"

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { 
  Shield, 
  Heart, 
  Clock, 
  Users, 
  Link2, 
  Briefcase,
  ChevronRight
} from 'lucide-react';
import Image from 'next/image';

const products = [
  {
    id: 1,
    title: "Life Insurance",
    description: "Secure your family's financial future with our comprehensive life insurance plans that provide protection and peace of mind.",
    icon: Shield,
    image: "https://images.pexels.com/photos/6348118/pexels-photo-6348118.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    link: "/products/life-insurance",
    featured: true
  },
  {
    id: 2,
    title: "Whole Life Insurance Policy",
    description: "Lifetime coverage with cash value accumulation that offers both protection and investment opportunities.",
    icon: Briefcase,
    image: "https://images.pexels.com/photos/4386442/pexels-photo-4386442.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    link: "/products/whole-life-insurance",
    featured: false
  },
  {
    id: 3,
    title: "Unit Linked Insurance Plan",
    description: "Combine insurance protection with investment returns to meet your long-term financial goals.",
    icon: Link2,
    image: "https://images.pexels.com/photos/7681118/pexels-photo-7681118.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    link: "/products/unit-linked-insurance",
    featured: false
  },
  {
    id: 4,
    title: "Term Insurance",
    description: "High coverage at affordable premiums for a specific period, providing maximum protection for your family.",
    icon: Clock,
    image: "https://images.pexels.com/photos/7176026/pexels-photo-7176026.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    link: "/products/term-insurance",
    featured: true
  },
  {
    id: 5,
    title: "Health Insurance",
    description: "Comprehensive health coverage to protect you and your family from unexpected medical expenses.",
    icon: Heart,
    image: "https://images.pexels.com/photos/4482900/pexels-photo-4482900.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    link: "/products/health-insurance",
    featured: true
  },
  {
    id: 6,
    title: "Individual Insurance",
    description: "Tailored insurance solutions designed to meet your specific needs and financial goals.",
    icon: Shield,
    image: "https://images.pexels.com/photos/6348120/pexels-photo-6348120.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    link: "/products/individual-insurance",
    featured: false
  },
  {
    id: 7,
    title: "Family Insurance",
    description: "Comprehensive coverage for your entire family under a single policy, offering convenience and value.",
    icon: Users,
    image: "https://images.pexels.com/photos/3877534/pexels-photo-3877534.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    link: "/products/family-insurance",
    featured: true
  },
  {
    id: 8,
    title: "Group Insurance",
    description: "Cost-effective insurance solutions for businesses to provide coverage for their employees.",
    icon: Users,
    image: "https://images.pexels.com/photos/3184398/pexels-photo-3184398.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    link: "/products/group-insurance",
    featured: false
  }
];

export default function ProductsPage() {
  const featuredProducts = products.filter(product => product.featured);
  const otherProducts = products.filter(product => !product.featured);

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
              Our Insurance Products
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl mb-8"
            >
              Comprehensive insurance solutions to protect what matters most
            </motion.p>
          </div>
        </div>
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-20"></div>
          <div className="absolute -bottom-6 left-0 right-0 h-16 bg-white dark:bg-gray-900 transform -skew-y-3"></div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-emerald-600 to-emerald-400 bg-clip-text text-transparent"
          >
            Featured Products
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden group"
              >
                <div className="flex flex-col md:flex-row">
                  <div className="relative md:w-1/3 h-48 md:h-auto">
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6 md:w-2/3">
                    <div className="flex items-center mb-4">
                      <product.icon className="h-6 w-6 text-emerald-600 dark:text-emerald-400 mr-2" />
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{product.title}</h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">{product.description}</p>
                    <Button asChild className="bg-emerald-600 hover:bg-emerald-700">
                      <Link href={product.link}>Learn More</Link>
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* All Products */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-emerald-600 to-emerald-400 bg-clip-text text-transparent"
          >
            All Insurance Products
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="relative h-48">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-6">
                    <h3 className="text-xl font-bold text-white mb-1">{product.title}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 dark:text-gray-400 mb-4">{product.description}</p>
                  <Link
                    href={product.link}
                    className="inline-flex items-center text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 font-medium"
                  >
                    Learn more <ChevronRight className="h-4 w-4 ml-1" />
                  </Link>
                </div>
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
              Not Sure Which Product is Right for You?
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg mb-8"
            >
              Our insurance experts can help you find the perfect coverage to meet your specific needs and budget. Get in touch for personalized advice.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button asChild size="lg" className="bg-white text-emerald-700 hover:bg-gray-100">
                <Link href="/contact">Speak with an Expert</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                <Link href="/services">Explore Our Services</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}