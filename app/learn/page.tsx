"use client"

import { motion } from '@/components/motion';
import { 
  LineChart, 
  TrendingUp, 
  TrendingDown, 
  Percent, 
  DollarSign, 
  Shield, 
  BarChart2,
  Clock,
  AlertCircle
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';

export default function LearnPage() {
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
              How to Invest?
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl mb-8"
            >
              Learn the essentials of smart investing to secure your financial future
            </motion.p>
          </div>
        </div>
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-20"></div>
          <div className="absolute -bottom-6 left-0 right-0 h-16 bg-white dark:bg-gray-900 transform -skew-y-3"></div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-emerald-600 to-emerald-400 bg-clip-text text-transparent">Understanding Investment Basics</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Investing is the act of allocating resources, usually money, with the expectation of generating income or profit over time. Unlike saving, which means setting aside money for future use, investing involves putting your money to work in one or more types of investment vehicles in the hopes of growing it over time.
              </p>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Whether you're saving for retirement, a child's education, or simply want to grow your wealth, understanding the basics of investing is essential for making informed financial decisions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-emerald-600 hover:bg-emerald-700">
                  <Link href="#investment-types">Explore Investment Types</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-emerald-600 text-emerald-600 hover:bg-emerald-50 dark:border-emerald-400 dark:text-emerald-400 dark:hover:bg-emerald-900/20">
                  <Link href="/contact">Get Expert Advice</Link>
                </Button>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="https://images.pexels.com/photos/6802042/pexels-photo-6802042.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Investment Planning"
                  width={600}
                  height={400}
                  className="object-cover rounded-lg"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Investment Fundamentals */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900" id="investment-fundamentals">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold mb-6 bg-gradient-to-r from-emerald-600 to-emerald-400 bg-clip-text text-transparent"
            >
              Investment Fundamentals
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-gray-600 dark:text-gray-400"
            >
              Before diving into specific investment types, it's important to understand these key investment concepts.
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                icon: TrendingUp, 
                title: "Risk vs. Return", 
                description: "Higher potential returns typically come with higher risk. Lower-risk investments generally offer more modest returns." 
              },
              { 
                icon: Clock, 
                title: "Time Horizon", 
                description: "The length of time you plan to hold an investment before needing the money impacts your investment strategy." 
              },
              { 
                icon: BarChart2, 
                title: "Diversification", 
                description: "Spreading investments across different asset classes can help manage risk and potentially improve returns." 
              },
              { 
                icon: Percent, 
                title: "Compound Interest", 
                description: "The snowball effect where your investment returns generate their own returns over time." 
              },
            ].map((concept, index) => (
              <motion.div 
                key={concept.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="bg-emerald-100 dark:bg-emerald-900/50 p-4 rounded-full inline-flex mb-6">
                  <concept.icon className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">{concept.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{concept.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Types */}
      <section className="py-20" id="investment-types">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold mb-6 bg-gradient-to-r from-emerald-600 to-emerald-400 bg-clip-text text-transparent"
            >
              Types of Investments
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-gray-600 dark:text-gray-400"
            >
              Explore different investment vehicles and understand their characteristics, risks, and potential returns.
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { 
                title: "Mutual Funds", 
                description: "Professionally managed investment vehicles that pool money from multiple investors to purchase securities like stocks and bonds.",
                risk: "Low to High (depending on fund type)",
                returnPotential: "Varies based on fund type and market conditions",
                timeHorizon: "Medium to Long-term",
                image: "https://images.pexels.com/photos/7876438/pexels-photo-7876438.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              },
              { 
                title: "Stocks", 
                description: "Ownership shares in a company that can appreciate in value and may pay dividends.",
                risk: "Moderate to High",
                returnPotential: "High potential for growth",
                timeHorizon: "Long-term",
                image: "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              },
              { 
                title: "Bonds", 
                description: "Debt securities where you lend money to an entity (corporation or government) in exchange for regular interest payments.",
                risk: "Low to Moderate",
                returnPotential: "Generally lower than stocks",
                timeHorizon: "Medium-term",
                image: "https://images.pexels.com/photos/7788009/pexels-photo-7788009.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              },
              { 
                title: "Fixed Deposits", 
                description: "Time deposits at banks that offer guaranteed returns at a fixed interest rate for a specified period.",
                risk: "Very Low",
                returnPotential: "Low but guaranteed",
                timeHorizon: "Short to Medium-term",
                image: "https://images.pexels.com/photos/3943716/pexels-photo-3943716.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              },
            ].map((investment, index) => (
              <motion.div 
                key={investment.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden"
              >
                <div className="md:flex">
                  <div className="md:w-1/3 relative h-64 md:h-auto">
                    <Image
                      src={investment.image}
                      alt={investment.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6 md:w-2/3">
                    <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">{investment.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">{investment.description}</p>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <AlertCircle className="h-5 w-5 text-amber-500 mr-2" />
                        <span className="text-sm"><strong>Risk Level:</strong> {investment.risk}</span>
                      </div>
                      <div className="flex items-center">
                        <TrendingUp className="h-5 w-5 text-emerald-500 mr-2" />
                        <span className="text-sm"><strong>Return Potential:</strong> {investment.returnPotential}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-5 w-5 text-blue-500 mr-2" />
                        <span className="text-sm"><strong>Time Horizon:</strong> {investment.timeHorizon}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Strategy */}
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
              Building Your Investment Strategy
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-gray-600 dark:text-gray-400"
            >
              Follow these steps to create an investment strategy that aligns with your financial goals.
            </motion.p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            {[
              { 
                number: "01", 
                title: "Define Your Financial Goals", 
                description: "Identify what you're saving for, whether it's retirement, a home purchase, education, or building wealth." 
              },
              { 
                number: "02", 
                title: "Assess Your Risk Tolerance", 
                description: "Understand how much volatility you can handle emotionally and financially. This will help determine your asset allocation." 
              },
              { 
                number: "03", 
                title: "Determine Your Time Horizon", 
                description: "Consider when you'll need to access your investment funds, as this impacts the types of investments that are appropriate." 
              },
              { 
                number: "04", 
                title: "Diversify Your Portfolio", 
                description: "Spread your investments across different asset classes to manage risk and potentially improve returns." 
              },
              { 
                number: "05", 
                title: "Monitor and Rebalance", 
                description: "Regularly review your portfolio and adjust as needed to maintain your desired asset allocation." 
              },
            ].map((step, index) => (
              <motion.div 
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start mb-8 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
              >
                <div className="bg-emerald-600 text-white text-2xl font-bold w-16 h-16 flex items-center justify-center rounded-full flex-shrink-0 mr-6">
                  {step.number}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{step.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{step.description}</p>
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
              Ready to Start Your Investment Journey?
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg mb-8"
            >
              Our financial experts are here to guide you through every step of your investment journey. Get personalized advice tailored to your financial goals and risk tolerance.
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
                <Link href="/services/investment-advice">Explore Investment Services</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}