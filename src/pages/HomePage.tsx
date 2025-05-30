import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Box, Workflow, Video, Monitor, ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import EducationSection from '../components/EducationSection';
import SkillsSection from '../components/SkillsSection';

const HomePage = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const [currentText, setCurrentText] = useState(0);
  const texts = [
    t.home.roles.graphicDesigner,
    t.home.roles.videoEditor,
    t.home.roles.productDesigner
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % texts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [texts.length]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
      },
    },
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center">
        <div className="absolute inset-0 main-gradient -z-10"></div>
        <div className="absolute inset-0 bg-black/10 -z-10"></div>
        
        <div className="section-container">
          <motion.div 
            className="max-w-3xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm mb-6">
              {t.home.welcome}
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              {t.home.greeting} <span className="text-white/90">Pandu</span>
            </h1>
            
            <div className="h-16 md:h-20 mb-6">
              <motion.h2 
                key={currentText}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-2xl md:text-4xl text-white/90"
              >
                {texts[currentText]}
              </motion.h2>
            </div>
            
            <p className="text-white/80 text-lg mb-8 max-w-xl">
              {t.home.description}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/portfolio" className="btn-primary">
                {t.home.viewWork}
              </Link>
              <Link to="/contact" className="btn-secondary">
                {t.home.getInTouch}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <AboutSection />

      {/* Education Section */}
      <EducationSection />

      {/* Skills Section */}
      <SkillsSection />

      {/* Featured Work Section */}
      <section className="py-20 bg-gray-50">
        <div className="section-container">
          <div className="text-center mb-16">
            <span className="text-sm font-medium text-indigo-600 tracking-wider uppercase">
              Selected Projects
            </span>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold">Featured Work</h2>
          </div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {featuredWorks.map((work, index) => (
              <motion.div 
                key={index}
                className="card bg-white group"
                variants={itemVariants}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={work.image} 
                    alt={work.title} 
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-6">
                      <p className="text-white font-medium">{work.category}</p>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{work.title}</h3>
                  <p className="text-gray-600 mb-4">{work.description}</p>
                  <div className="flex items-center text-indigo-600 font-medium">
                    <Link to="/portfolio" className="flex items-center hover:underline">
                      {t.home.viewWork} <ArrowRight size={16} className="ml-1" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div className="text-center mt-12">
            <Link to="/portfolio" className="btn-primary inline-flex items-center">
              {t.home.viewWork} <ArrowRight size={18} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <ServicesSection />
      
      {/* CTA Section */}
      <section className="py-20 main-gradient text-white">
        <div className="section-container text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            {t.home.readyToStart}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-white/80 max-w-2xl mx-auto mb-8"
          >
            {t.home.letWork}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Link to="/contact" className="btn-secondary bg-white/10 backdrop-blur-md text-white border-white/30 hover:bg-white/20">
              {t.home.contactMe}
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

const featuredWorks = [
  {
    title: "Modern Perfume Bottle",
    description: "3D visualization of elegant perfume packaging with realistic glass material and lighting.",
    category: "Product Visualization",
    image: "https://images.pexels.com/photos/3910071/pexels-photo-3910071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    title: "Fashion Brand Social Content",
    description: "Engaging social media content for a premium fashion brand's summer collection.",
    category: "Social Media Content",
    image: "https://images.pexels.com/photos/6347888/pexels-photo-6347888.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    title: "Fitness App Promo",
    description: "Dynamic video showcasing features and benefits of a fitness tracking application.",
    category: "Video Editing",
    image: "https://images.pexels.com/photos/4062467/pexels-photo-4062467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  }
];

export default HomePage;