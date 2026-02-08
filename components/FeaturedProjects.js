import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { FaArrowRight } from 'react-icons/fa';

export default function FeaturedProjects() {
  const featuredProjects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with payment integration and inventory management.',
      image: 'https://via.placeholder.com/500x300?text=E-Commerce',
      tags: ['React', 'Node.js', 'MongoDB'],
    },
    {
      id: 2,
      title: 'n8n Automation Suite',
      description: 'Advanced automation workflows for business process optimization and data sync.',
      image: 'https://via.placeholder.com/500x300?text=n8n+Automation',
      tags: ['n8n', 'Google Sheets', 'Webhooks'],
    },
    {
      id: 3,
      title: 'Project Management App',
      description: 'Collaborative project management tool with real-time updates and team features.',
      image: 'https://via.placeholder.com/500x300?text=Project+Manager',
      tags: ['Next.js', 'Firebase', 'Tailwind'],
    },
  ];

  return (
    <section className="py-20 px-4 bg-primary/5">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Featured Projects</h2>
          <p className="text-xl text-gray-300">Showcase of recent work across different domains</p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {featuredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              className="group relative overflow-hidden rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden bg-gray-800 rounded-lg">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition duration-300"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/70 transition duration-300"></div>
              </div>

              {/* Content */}
              <div className="relative -mt-32 p-6 bg-gradient-to-t from-dark to-transparent pt-20 group-hover:from-dark/90">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-300 text-sm mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="bg-secondary/20 text-secondary px-2 py-1 rounded text-xs">
                      {tag}
                    </span>
                  ))}
                </div>

                <Link
                  href="/portfolio"
                  className="inline-flex items-center gap-2 text-secondary hover:text-blue-400 font-semibold transition"
                >
                  View Project <FaArrowRight className="group-hover:translate-x-1 transition" />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Link
            href="/portfolio"
            className="inline-block bg-secondary hover:bg-blue-400 text-dark font-bold py-3 px-8 rounded-lg transition"
          >
            View All Projects
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
