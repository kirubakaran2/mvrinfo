"use client"

import { Shield, Heart, Users, Clock, ArrowUpRight, Sparkles, Star, CheckCircle } from 'lucide-react';
import { useState } from 'react';
const homeinsurance = "https://res.cloudinary.com/dy2gwtbjb/image/upload/v1748417985/homeinsurance_awmjul.jpg"
const products = [
  {
    id: 1,
    title: "Life Insurance",
    description: "Secure your family's financial future with our comprehensive life insurance plans.",
    icon: Shield,
    image: "https://images.pexels.com/photos/6348118/pexels-photo-6348118.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    link: "/products/life-insurance",
    color: "from-emerald-600 to-teal-500",
    badge: "Most Popular",
    features: ["Up to ₹2 Cr coverage", "Tax benefits", "24/7 support"],
    price: "₹500/month"
  },
  {
    id: 2,
    title: "Health Insurance",
    description: "Protection against medical expenses with our flexible health insurance policies.",
    icon: Heart,
    image: "https://images.pexels.com/photos/4482900/pexels-photo-4482900.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    link: "/products/health-insurance",
    color: "from-rose-600 to-pink-500",
    badge: "Family Care",
    features: ["Cashless treatment", "No claim bonus", "Pre-existing coverage"],
    price: "₹800/month"
  },
  {
    id: 3,
    title: "Family Insurance",
    description: "Comprehensive coverage for your entire family under a single policy.",
    icon: Users,
    image: homeinsurance,
    link: "/products/family-insurance",
    color: "from-blue-600 to-indigo-500",
    badge: "Best Value",
    features: ["Covers 6 members", "Shared benefits", "Maternity cover"],
    price: "₹1,200/month"
  },
  {
    id: 4,
    title: "Term Insurance",
    description: "High coverage at affordable premiums for a specific period of time.",
    icon: Clock,
    image: "https://images.pexels.com/photos/7176026/pexels-photo-7176026.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    link: "/products/term-insurance",
    color: "from-purple-600 to-violet-500",
    badge: "Affordable",
    features: ["High coverage", "Low premium", "Flexible tenure"],
    price: "₹300/month"
  }
];

export default function ProductsSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section className="relative py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50/30 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900/20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-80 h-80 rounded-full bg-gradient-to-br from-blue-400/20 to-purple-400/20 blur-3xl"></div>
        <div className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full bg-gradient-to-br from-emerald-400/20 to-teal-400/20 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Enhanced header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium mb-6">
            <Shield className="w-4 h-4" />
            Insurance Solutions
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent leading-tight">
            Our Premium Products
          </h2>
          
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We offer a comprehensive range of insurance products designed to provide security and peace of mind for you and your loved ones.
          </p>
        </div>

        {/* Enhanced products grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="group relative"
              onMouseEnter={() => setHoveredCard(product.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Card */}
              <div className={`
                relative h-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl 
                border border-gray-200/50 dark:border-gray-700/50 overflow-hidden
                transition-all duration-700 ease-out
                ${hoveredCard === product.id ? 'shadow-2xl shadow-blue-500/20 scale-[1.02] -translate-y-2' : 'shadow-xl hover:shadow-2xl'}
              `}>
                {/* Gradient overlay on hover */}
                <div className={`
                  absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-700
                  bg-gradient-to-br ${product.color}
                  ${hoveredCard === product.id ? 'opacity-5' : ''}
                `}></div>

                <div className="flex flex-col lg:flex-row h-full">
                  {/* Image section */}
                  <div className="relative lg:w-2/5 h-64 lg:h-auto overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.title}
                      className={`
                        w-full h-full object-cover transition-all duration-700 ease-out
                        ${hoveredCard === product.id ? 'scale-110 brightness-110' : 'scale-100'}
                      `}
                    />
                    
                    {/* Image overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                    
                    {/* Badge */}
                    <div className="absolute top-4 left-4">
                      <span className={`
                        inline-flex items-center gap-1 px-3 py-1 text-xs font-bold rounded-full text-white shadow-lg
                        bg-gradient-to-r ${product.color}
                        transform transition-all duration-300
                        ${hoveredCard === product.id ? 'scale-110' : ''}
                      `}>
                        <Star className="w-3 h-3" />
                        {product.badge}
                      </span>
                    </div>

                    {/* Price badge */}
                    <div className="absolute bottom-4 right-4">
                      <span className="bg-white/90 backdrop-blur-sm text-gray-900 px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                        {product.price}
                      </span>
                    </div>
                  </div>

                  {/* Content section */}
                  <div className="flex-1 p-8">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-center gap-3">
                        <div className={`
                          p-3 rounded-2xl bg-gradient-to-br ${product.color} shadow-lg
                          transition-all duration-500 ease-out
                          ${hoveredCard === product.id ? 'scale-110 rotate-6 shadow-xl' : 'group-hover:scale-105'}
                        `}>
                          <product.icon className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                            {product.title}
                          </h3>
                        </div>
                      </div>
                      
                      <ArrowUpRight className={`
                        w-6 h-6 text-gray-400 transition-all duration-300
                        ${hoveredCard === product.id ? 'text-blue-500 scale-110 rotate-12' : ''}
                      `} />
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                      {product.description}
                    </p>

                    {/* Features */}
                    <div className="space-y-2 mb-8">
                      {product.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-emerald-500" />
                          <span className="text-gray-600 dark:text-gray-400">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* CTA */}
                    <div className="flex items-center gap-4">
                      <button className={`
                        flex items-center gap-2 px-6 py-3 rounded-2xl font-semibold transition-all duration-300
                        ${hoveredCard === product.id 
                          ? `bg-gradient-to-r ${product.color} text-white shadow-lg scale-105` 
                          : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                        }
                      `}>
                        Learn More
                        <ArrowUpRight className={`w-4 h-4 transition-transform duration-300 ${hoveredCard === product.id ? 'translate-x-1 -translate-y-1' : ''}`} />
                      </button>
                      
                      <button className="px-6 py-3 border-2 border-gray-200 dark:border-gray-600 rounded-2xl font-semibold text-gray-700 dark:text-gray-300 hover:border-blue-300 dark:hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-300">
                        Get Quote
                      </button>
                    </div>
                  </div>
                </div>

                {/* Animated border */}
                <div className={`
                  absolute inset-0 rounded-3xl transition-opacity duration-700
                  bg-gradient-to-r ${product.color} p-[1px]
                  ${hoveredCard === product.id ? 'opacity-20' : 'opacity-0'}
                `}>
                  <div className="w-full h-full rounded-3xl bg-white dark:bg-gray-800"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced CTA section */}
        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4">
            <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <span className="relative z-10 flex items-center gap-2">
                View All Products
                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
              </span>
              
              {/* Button glow effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300"></div>
            </button>
            
            <button className="px-8 py-4 border-2 border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300 rounded-2xl font-semibold text-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-300 hover:border-blue-300 dark:hover:border-blue-600">
              Compare Plans
            </button>
          </div>
          
          <div className="flex items-center justify-center gap-6 mt-6 text-sm text-gray-600 dark:text-gray-400">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-yellow-500" />
              <span>4.9/5 Rating</span>
            </div>
            <div className="w-px h-4 bg-gray-300 dark:bg-gray-600"></div>
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-emerald-500" />
              <span>50,000+ Protected</span>
            </div>
            <div className="w-px h-4 bg-gray-300 dark:bg-gray-600"></div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-blue-500" />
              <span>IRDAI Approved</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}