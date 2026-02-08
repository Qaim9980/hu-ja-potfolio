import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaArrowRight, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import FeaturedProjects from '../components/FeaturedProjects';

export default function Home() {
  return (
    <>
      <Head>
        <title>Portfolio - Your Name</title>
        <meta name="description" content="Professional portfolio showcasing projects and skills" />
      </Head>

      {/* Hero Section */}
      <section className="min-h-screen bg-gradient-to-br from-dark via-dark to-primary/20 flex items-center justify-center px-4 pt-20">
        <motion.div
          className="text-center max-w-4xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-6">
            Welcome to My <span className="text-secondary">Portfolio</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Fullstack Developer | Web Designer | Automation Enthusiast
          </p>
          <p className="text-lg text-gray-400 mb-12 leading-relaxed">
            I build beautiful, scalable web applications with modern technologies and automate workflows using n8n for maximum efficiency.
          </p>
          
          <div className="flex gap-4 justify-center mb-12 flex-wrap">
            <Link
              href="/portfolio"
              className="bg-secondary hover:bg-blue-400 text-dark font-bold py-3 px-8 rounded-lg flex items-center gap-2 transition"
            >
              View My Work <FaArrowRight />
            </Link>
            <Link
              href="/contact"
              className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-dark font-bold py-3 px-8 rounded-lg transition"
            >
              Get In Touch
            </Link>
          </div>

          {/* Social Links */}
          <div className="flex gap-6 justify-center">
            <a href="https://github.com" className="text-gray-400 hover:text-secondary transition text-2xl">
              <FaGithub />
            </a>
            <a href="https://linkedin.com" className="text-gray-400 hover:text-secondary transition text-2xl">
              <FaLinkedin />
            </a>
            <a href="https://twitter.com" className="text-gray-400 hover:text-secondary transition text-2xl">
              <FaTwitter />
            </a>
          </div>
        </motion.div>
      </section>

      {/* Featured Projects */}
      <FeaturedProjects />

      {/* CTA Section */}
      <section className="bg-primary/10 py-20 px-4">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Start a Project?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's collaborate and build something amazing together.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-secondary hover:bg-blue-400 text-dark font-bold py-3 px-8 rounded-lg transition"
          >
            Contact Me Today
          </Link>
        </motion.div>
      </section>
    </>
  );
}
