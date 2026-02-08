// This endpoint fetches projects data
// Can be connected to Google Sheets, Airtable, or a database

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      // Sample projects data - replace with actual data source
      const projects = [
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
      ];

      return res.status(200).json(projects);
    } catch (error) {
      console.error('Error fetching projects:', error);
      return res.status(500).json({ error: 'Failed to fetch projects' });
    }
  } else if (req.method === 'POST') {
    // Add new project (for n8n webhook integration)
    const { title, description, image, tags, github, live } = req.body;

    if (!title || !description) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    try {
      // Save project to database/Google Sheets/Airtable
      // console.log('New project added:', { title, description, image, tags, github, live });

      return res.status(201).json({ success: true, message: 'Project added successfully' });
    } catch (error) {
      console.error('Error adding project:', error);
      return res.status(500).json({ error: 'Failed to add project' });
    }
  } else {
    return res.status(405).json({ error: 'Method not allowed' });
  }
}
