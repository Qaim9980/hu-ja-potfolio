import Head from 'next/head';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import Image from 'next/image';

export default function Portfolio() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch projects from API
    fetch('/api/projects')
      .then((res) => res.json())
      .then((data) => {
        setProjects(data);
        setLoading(false);
      })
      .catch(() => {
        // Set default projects if API fails
        setProjects([
          {
            id: 1,
            title: 'E-Commerce Platform',
            description: 'Full-stack e-commerce solution with payment integration and inventory management.',
            image: 'https://via.placeholder.com/500x300?text=E-Commerce',
            tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
            github: 'https://github.com',
            live: 'https://example.com',
          },
          {
            id: 2,
            title: 'Project Management App',
            description: 'Collaborative project management tool with real-time updates and team features.',
            image: 'https://via.placeholder.com/500x300?text=Project+Manager',
            tags: ['Next.js', 'Firebase', 'Tailwind CSS'],
            github: 'https://github.com',
            live: 'https://example.com',
          },
          {
            id: 3,
            title: 'n8n Automation Suite',
            description: 'Advanced automation workflows for business process optimization and data sync.',
            image: 'https://via.placeholder.com/500x300?text=n8n+Automation',
            tags: ['n8n', 'Google Sheets', 'Slack', 'Webhooks'],
            github: 'https://github.com',
            live: 'https://example.com',
          },
          {
            id: 4,
            title: 'Analytics Dashboard',
            description: 'Real-time data visualization dashboard with interactive charts and reports.',
            image: 'https://via.placeholder.com/500x300?text=Analytics',
            tags: ['React', 'Chart.js', 'PostgreSQL', 'Express'],
            github: 'https://github.com',
            live: 'https://example.com',
          },
          {
            id: 5,
            title: 'Mobile App',
            description: 'Cross-platform mobile application for task management and productivity.',
            image: 'https://via.placeholder.com/500x300?text=Mobile+App',
            tags: ['React Native', 'Firebase', 'Redux'],
            github: 'https://github.com',
            live: 'https://example.com',
          },
          {
            id: 6,
            title: 'API Integration Service',
            description: 'Microservice for integrating multiple third-party APIs with caching and monitoring.',
            image: 'https://via.placeholder.com/500x300?text=API+Service',
            tags: ['Node.js', 'Express', 'Redis', 'Docker'],
            github: 'https://github.com',
            live: 'https://example.com',
          },
        ]);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <Head>
        <title>Portfolio - My Projects</title>
        <meta name="description" content="View my portfolio of projects and work samples" />
      </Head>

      {/* Hero */}
      <section className="bg-gradient-to-br from-dark to-primary/20 py-20 px-4 pt-32">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl font-bold text-white mb-6">My Portfolio</h1>
          <p className="text-xl text-gray-300">Showcase of projects built with modern technologies and best practices</p>
        </motion.div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          {loading ? (
            <div className="text-center text-gray-300">Loading projects...</div>
          ) : (
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              {projects.map((project, idx) => (
                <motion.div
                  key={project.id}
                  className="bg-primary/10 rounded-lg overflow-hidden hover:shadow-lg transition group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="relative h-48 overflow-hidden bg-gray-800">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-110 transition"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-gray-300 mb-4 text-sm">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, i) => (
                        <span key={i} className="bg-secondary/20 text-secondary px-2 py-1 rounded text-xs">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-4">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-secondary hover:text-blue-400 transition"
                      >
                        <FaGithub /> Code
                      </a>
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-secondary hover:text-blue-400 transition"
                      >
                        <FaExternalLinkAlt /> Live
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </section>
    </>
  );
}
