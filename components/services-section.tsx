"use client"

import { ChevronRight, BarChart2, Briefcase, LineChart, Lightbulb, ArrowUpRight, Sparkles } from 'lucide-react';
import { useState } from 'react';

const services = [
  {
    id: 1,
    title: "Portfolio Management",
    description: "Professional management of your investment portfolio to maximize returns while managing risk.",
    icon: BarChart2,
    link: "/services/portfolio-management",
    color: "from-emerald-600 to-emerald-400",
    bgPattern: "emerald",
    stats: "15% avg returns"
  },
  {
    id: 2,
    title: "Investment Advice",
    description: "Personalized investment strategies based on your financial goals and risk tolerance.",
    icon: LineChart,
    link: "/services/investment-advice",
    color: "from-teal-600 to-teal-400",
    bgPattern: "teal",
    stats: "500+ clients"
  },
  {
    id: 3,
    title: "Financial Consultant",
    description: "Comprehensive financial planning and advice for all aspects of your financial life.",
    icon: Briefcase,
    link: "/services/financial-consultant",
    color: "from-cyan-600 to-cyan-400",
    bgPattern: "cyan",
    stats: "24/7 support"
  },
  {
    id: 4,
    title: "How to Invest?",
    description: "Educational resources and guidance to help you make informed investment decisions.",
    icon: Lightbulb,
    link: "/services/how-to-invest",
    color: "from-blue-600 to-blue-400",
    bgPattern: "blue",
    stats: "Free resources"
  }
];

export default function ServicesSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  return (
    <section className="relative py-24 bg-gradient-to-br from-slate-50 via-white to-emerald-50/30 dark:from-gray-900 dark:via-gray-800 dark:to-emerald-900/20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-gradient-to-br from-emerald-400/20 to-teal-400/20 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-gradient-to-br from-blue-400/20 to-cyan-400/20 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Enhanced header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            Financial Excellence
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-600 via-teal-600 to-blue-600 bg-clip-text text-transparent leading-tight">
            Our Premium Services
          </h2>
          
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We offer a comprehensive suite of financial services designed to help you achieve your goals and secure your future with confidence.
          </p>
        </div>

        {/* Enhanced services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="group relative"
              onMouseEnter={() => setHoveredCard(service.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Card */}
              <div className={`
                relative h-full bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl 
                border border-gray-200/50 dark:border-gray-700/50
                transition-all duration-500 ease-out
                ${hoveredCard === service.id ? 'shadow-2xl shadow-emerald-500/20 scale-105 -translate-y-2' : 'shadow-lg hover:shadow-xl'}
              `}>
                {/* Gradient overlay on hover */}
                <div className={`
                  absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500
                  bg-gradient-to-br ${service.color}
                  ${hoveredCard === service.id ? 'opacity-5' : ''}
                `}></div>

                {/* Content */}
                <div className="relative p-8">
                  {/* Icon with enhanced styling */}
                  <div className="relative mb-6">
                    <div className={`
                      relative bg-gradient-to-br ${service.color} w-16 h-16 rounded-2xl 
                      flex items-center justify-center mb-4 
                      transition-all duration-500 ease-out
                      ${hoveredCard === service.id ? 'scale-110 rotate-6 shadow-lg' : 'group-hover:scale-105'}
                    `}>
                      <service.icon className="h-8 w-8 text-white" />
                      
                      {/* Glow effect */}
                      <div className={`
                        absolute inset-0 rounded-2xl bg-gradient-to-br ${service.color} opacity-0 blur-xl 
                        transition-opacity duration-500
                        ${hoveredCard === service.id ? 'opacity-30' : ''}
                      `}></div>
                    </div>
                    
                    {/* Stats badge */}
                    <div className="absolute -top-2 -right-2">
                      <span className={`
                        inline-block px-3 py-1 text-xs font-semibold rounded-full
                        bg-gradient-to-r ${service.color} text-white shadow-lg
                        transform transition-all duration-300
                        ${hoveredCard === service.id ? 'scale-110' : 'scale-0 group-hover:scale-100'}
                      `}>
                        {service.stats}
                      </span>
                    </div>
                  </div>

                  {/* Text content */}
                  <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Enhanced CTA */}
                  <div className="flex items-center justify-between">
                    <button className={`
                      inline-flex items-center gap-2 text-sm font-semibold
                      px-4 py-2 rounded-xl transition-all duration-300
                      ${hoveredCard === service.id 
                        ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-lg' 
                        : 'text-emerald-600 dark:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-900/20'
                      }
                    `}>
                      Learn more 
                      <ChevronRight className={`w-4 h-4 transition-transform duration-300 ${hoveredCard === service.id ? 'translate-x-1' : ''}`} />
                    </button>
                    
                    <ArrowUpRight className={`
                      w-5 h-5 text-gray-400 transition-all duration-300
                      ${hoveredCard === service.id ? 'text-emerald-500 scale-110 rotate-12' : ''}
                    `} />
                  </div>
                </div>

                {/* Animated border */}
                <div className={`
                  absolute inset-0 rounded-2xl transition-opacity duration-500
                  bg-gradient-to-r ${service.color} p-[1px]
                  ${hoveredCard === service.id ? 'opacity-20' : 'opacity-0'}
                `}>
                  <div className="w-full h-full rounded-2xl bg-white dark:bg-gray-800"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced CTA section */}
        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4">
            <button className="group relative px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-2xl font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <span className="relative z-10 flex items-center gap-2">
                View All Services
                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
              </span>
              
              {/* Button glow effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300"></div>
            </button>
            
            <button className="px-8 py-4 border-2 border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-300 rounded-2xl font-semibold text-lg hover:bg-emerald-50 dark:hover:bg-emerald-900/20 transition-all duration-300 hover:border-emerald-300 dark:hover:border-emerald-700">
              Schedule Consultation
            </button>
          </div>
          
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
            Trusted by 10,000+ clients worldwide
          </p>
        </div>
      </div>
    </section>
  );
}