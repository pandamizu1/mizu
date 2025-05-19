import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Download, Award, Briefcase, GraduationCap, Users, Globe2 } from 'lucide-react';

const CVPage = () => {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative py-20 main-gradient text-white">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row items-center gap-8"
          >
            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="w-48 h-48 rounded-full overflow-hidden border-4 border-white/20 shadow-xl"
            >
              <img
                src="https://i.imgur.com/dKHsWNQ.png"
                alt="Pandu Tirta Buana"
                className="w-full h-full object-cover"
              />
            </motion.div>

            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Pandu Tirta Buana</h1>
              <p className="text-xl text-white/80 mb-4">Multimedia Designer & Content Creator</p>
              
              {/* Contact Info in Hero */}
              <div className="flex flex-col gap-2 text-white/80">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>Gunung Kidul, DI Yogyakarta</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span>0877-3778-3462</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span>pandutirta25@gmail.com</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CV Content */}
      <section className="py-16 bg-gray-50">
        <div className="section-container">
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
            {/* Summary Section */}
            <div className="p-8 border-b border-gray-100">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-2xl font-bold mb-4">Professional Summary</h2>
                <p className="text-gray-700 leading-relaxed">
                  Creative multimedia designer and recent Information Technology graduate specializing in 3D visualization, 
                  video production, and graphic design. Proficient in industry-standard creative tools with a proven track 
                  record of delivering engaging visual content. Combines technical expertise with artistic vision to create 
                  compelling digital experiences that captivate audiences and elevate brands.
                </p>
              </motion.div>
            </div>

            {/* Experience Section */}
            <div className="p-8 border-b border-gray-100">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Briefcase className="w-6 h-6 text-indigo-600" />
                Professional Experience
              </h2>
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-semibold">Freelance Multimedia Designer</h3>
                    <span className="text-sm text-gray-600">2021 - 2023</span>
                  </div>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                    <li>Designed and produced visually compelling food packaging labels, enhancing brand visibility and market appeal</li>
                    <li>Created engaging social media content that increased client engagement rates by 40%</li>
                    <li>Developed custom invitation designs for various events, receiving consistent positive client feedback</li>
                    <li>Executed promotional campaigns for herbal products, contributing to increased digital presence</li>
                  </ul>
                </motion.div>
              </div>
            </div>

            {/* Education Section */}
            <div className="p-8 border-b border-gray-100">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <GraduationCap className="w-6 h-6 text-indigo-600" />
                Education
              </h2>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-semibold">Bachelor's Degree in Information Technology</h3>
                  <span className="text-sm text-gray-600">2019 - 2023</span>
                </div>
                <p className="text-gray-700 mb-2">Amikom University Yogyakarta</p>
                <p className="text-gray-700 mb-2">GPA: 3.61</p>
                <p className="text-gray-700 italic">
                  Thesis: "3D Model Environment Design for the 3D Animation Film 'Unidentified Flying Object'"
                </p>
              </motion.div>
            </div>

            {/* Projects Section */}
            <div className="p-8 border-b border-gray-100">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Award className="w-6 h-6 text-indigo-600" />
                Notable Projects
              </h2>
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-semibold">3D Animated Short Film - IT Exhibition</h3>
                    <span className="text-sm text-gray-600">2021 - 2022</span>
                  </div>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                    <li>Developed detailed 3D environments using advanced modeling techniques</li>
                    <li>Implemented complex texturing and lighting systems</li>
                    <li>Managed complete production pipeline from concept to final render</li>
                  </ul>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-semibold">Educational Content Creator</h3>
                    <span className="text-sm text-gray-600">2024 - Present</span>
                  </div>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                    <li>Create and edit educational video content</li>
                    <li>Develop engaging narratives and visual storytelling</li>
                    <li>Manage complete video production workflow</li>
                  </ul>
                </motion.div>
              </div>
            </div>

            {/* Skills Section */}
            <div className="p-8 border-b border-gray-100">
              <h2 className="text-2xl font-bold mb-6">Technical Proficiency</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { name: "Adobe Premiere Pro", level: 95 },
                  { name: "Adobe Photoshop", level: 90 },
                  { name: "Computer Literacy", level: 90 },
                  { name: "MS Office", level: 85 },
                  { name: "Canva", level: 85 },
                  { name: "Capcut", level: 80 },
                  { name: "Blender", level: 75 },
                  { name: "Adobe Illustrator", level: 70 }
                ].map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="space-y-2"
                  >
                    <div className="flex justify-between">
                      <span className="text-gray-700 font-medium">{skill.name}</span>
                      <span className="text-indigo-600">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-indigo-600 rounded-full"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Languages Section */}
            <div className="p-8">
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Globe2 className="w-5 h-5 text-indigo-600" />
                Languages
              </h2>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Indonesian</span>
                    <span className="text-indigo-600">Native</span>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">English</span>
                    <span className="text-indigo-600">Intermediate</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Download CV Button */}
          <div className="mt-8 text-center">
            <a 
              href="https://www.mediafire.com/file/o0b707j34c2dc3v/CV_Pandu.pdf/file"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2"
            >
              <Download className="w-5 h-5" />
              Download CV
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CVPage;
