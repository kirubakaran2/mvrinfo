"use client"

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send,
  CheckCircle
} from 'lucide-react';

export default function ContactPage() {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    // Simulate form submission
    setTimeout(() => {
      setFormStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    }, 1500);
  };

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
              Contact Us
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl mb-8"
            >
              We're here to answer your questions and provide the financial guidance you need
            </motion.p>
          </div>
        </div>
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-20"></div>
          <div className="absolute -bottom-6 left-0 right-0 h-16 bg-white dark:bg-gray-900 transform -skew-y-3"></div>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8"
            >
              <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-emerald-600 to-emerald-400 bg-clip-text text-transparent">Send Us a Message</h2>
              
              {formStatus === 'success' ? (
                <div className="text-center py-12">
                  <div className="mx-auto bg-emerald-100 dark:bg-emerald-900/50 p-4 rounded-full inline-flex mb-6">
                    <CheckCircle className="h-12 w-12 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">Message Sent Successfully</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">Thank you for reaching out to us. Our team will get back to you shortly.</p>
                  <Button onClick={() => setFormStatus('idle')} className="bg-emerald-600 hover:bg-emerald-700">
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Your Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-emerald-600 dark:focus:ring-emerald-400 focus:border-transparent bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-emerald-600 dark:focus:ring-emerald-400 focus:border-transparent bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
                        placeholder="+91 98765 43210"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-emerald-600 dark:focus:ring-emerald-400 focus:border-transparent bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
                      placeholder="john@example.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Subject</label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-emerald-600 dark:focus:ring-emerald-400 focus:border-transparent bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
                    >
                      <option value="">Select a subject</option>
                      <option value="insurance">Insurance Inquiry</option>
                      <option value="investment">Investment Planning</option>
                      <option value="consultation">Request for Consultation</option>
                      <option value="feedback">Feedback</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Your Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-emerald-600 dark:focus:ring-emerald-400 focus:border-transparent bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
                      placeholder="How can we help you?"
                    ></textarea>
                  </div>
                  
                  <Button 
                    type="submit" 
                    disabled={formStatus === 'submitting'} 
                    className="w-full bg-emerald-600 hover:bg-emerald-700 flex items-center justify-center"
                  >
                    {formStatus === 'submitting' ? (
                      <>
                        <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              )}
            </motion.div>
            
            {/* Contact Information */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-emerald-600 to-emerald-400 bg-clip-text text-transparent">Get in Touch</h2>
              
              <div className="space-y-6 mb-10">
                <div className="flex items-start">
                  <div className="bg-emerald-100 dark:bg-emerald-900/50 p-3 rounded-full mr-4">
                    <MapPin className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">Our Location</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      123 Financial Street, Bandra West<br />
                      Mumbai, Maharashtra 400050<br />
                      India
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-emerald-100 dark:bg-emerald-900/50 p-3 rounded-full mr-4">
                    <Phone className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">Phone</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-1">
                      <a href="tel:+919876543210" className="hover:text-emerald-600 dark:hover:text-emerald-400">+91 98765 43210</a> (Main)
                    </p>
                    <p className="text-gray-600 dark:text-gray-400">
                      <a href="tel:+919988776655" className="hover:text-emerald-600 dark:hover:text-emerald-400">+91 99887 76655</a> (Customer Support)
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-emerald-100 dark:bg-emerald-900/50 p-3 rounded-full mr-4">
                    <Mail className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">Email</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-1">
                      <a href="mailto:info@mvrinfo.com" className="hover:text-emerald-600 dark:hover:text-emerald-400">info@mvrinfo.com</a> (General Inquiries)
                    </p>
                    <p className="text-gray-600 dark:text-gray-400">
                      <a href="mailto:support@mvrinfo.com" className="hover:text-emerald-600 dark:hover:text-emerald-400">support@mvrinfo.com</a> (Support)
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-emerald-100 dark:bg-emerald-900/50 p-3 rounded-full mr-4">
                    <Clock className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">Business Hours</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-1">Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p className="text-gray-600 dark:text-gray-400">Saturday: 10:00 AM - 2:00 PM</p>
                    <p className="text-gray-600 dark:text-gray-400">Sunday: Closed</p>
                  </div>
                </div>
              </div>
              
              {/* Google Maps */}
              <div className="rounded-lg overflow-hidden shadow-lg h-80 mt-8">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30169.04862188532!2d72.81651770999644!3d19.05989299470648!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c8e123f8d2fb%3A0xc1cd5d1e1ab63b2!2sBandra%20West%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1686647896840!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={true}
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="MVR Info Office Location"
                ></iframe>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}