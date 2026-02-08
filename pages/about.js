import Head from 'next/head';
import { motion } from 'framer-motion';
import { FaCode, FaLightbulb, FaRocket, FaUsers } from 'react-icons/fa';

export default function About() {
  const skills = [
    { category: 'Frontend', items: ['React', 'Next.js', 'Tailwind CSS', 'TypeScript'] },
    { category: 'Backend', items: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL'] },
    { category: 'Automation', items: ['n8n', 'Zapier', 'Google Sheets API', 'Webhooks'] },
    { category: 'Tools', items: ['Git', 'Docker', 'AWS', 'Vercel'] },
  ];

  const values = [
    { icon: FaCode, title: 'Clean Code', description: 'I write maintainable, well-documented code.' },
    { icon: FaLightbulb, title: 'Innovation', description: 'Always exploring new technologies and solutions.' },
    { icon: FaRocket, title: 'Performance', description: 'Building fast, scalable applications.' },
    { icon: FaUsers, title: 'Collaboration', description: 'Working effectively with teams and clients.' },
  ];

  return (
    <>
      <Head>
        <title>About Me - Portfolio</title>
        <meta name="description" content="Learn more about my background, skills, and experience" />
      </Head>

      {/* Hero */}
      <section className="bg-gradient-to-br from-dark to-primary/20 py-20 px-4 pt-32">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl font-bold text-white mb-6">About Me</h1>
          <p className="text-xl text-gray-300">Passionate developer with expertise in full-stack development and automation</p>
        </motion.div>
      </section>

      {/* Background */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Professional Background</h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              With over 5 years of experience in web development and automation, I've worked with startups and enterprises
              to build scalable solutions that drive business growth. My passion lies in creating elegant, efficient code
              and automating repetitive processes to save time and resources.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              I specialize in modern web technologies and have recently become proficient in n8n, enabling me to architect
              sophisticated automation workflows that integrate various tools and platforms seamlessly.
            </p>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-8">Skills & Expertise</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {skills.map((skillGroup, idx) => (
                <motion.div
                  key={idx}
                  className="bg-primary/10 p-6 rounded-lg"
                  whileHover={{ scale: 1.05 }}
                >
                  <h3 className="text-xl font-bold text-secondary mb-4">{skillGroup.category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill, i) => (
                      <span key={i} className="bg-secondary/20 text-secondary px-3 py-1 rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Values */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-8">Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((value, idx) => {
                const Icon = value.icon;
                return (
                  <motion.div
                    key={idx}
                    className="flex gap-4"
                    whileHover={{ x: 10 }}
                  >
                    <div className="text-secondary text-3xl mt-2">
                      <Icon />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">{value.title}</h3>
                      <p className="text-gray-300">{value.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
