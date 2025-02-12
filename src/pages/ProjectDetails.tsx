import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { Link, useParams } from 'react-router-dom';
import { TechStack } from './Projects'; // Import TechStack from Projects
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

interface Project {
  id: string;
  name: string;
  description: string;
  image: string;
  link: string;
  techStack: Array<{
    name: string;
    customIcon?: string;
  }>;
  features?: string[];
  challenges?: string[];
  solution?: string;
  liveDemo?: string;
  githubLink?: string;
}

const projects: Project[] = [
  {
    id: 'e-commerce-platform',
    name: 'E-commerce Platform',
    description:
      'A full-featured e-commerce platform with user authentication, product management, and payment integration.',
    image: '/project1.png',
    link: 'https://project1.com',
    techStack: [
      { name: 'Laravel' },
      { name: 'Vue' },
      { name: 'Mysql' },
      { name: 'Redis' },
    ],
    features: [
      'User authentication and authorization',
      'Product catalog with search and filtering',
      'Shopping cart functionality',
      'Payment integration with multiple providers',
      'Order management system',
    ],
    challenges: [
      'Implementing real-time inventory updates',
      'Handling concurrent user sessions',
      'Optimizing database queries for large catalogs',
    ],
    solution:
      'Implemented Redis caching for improved performance and used WebSocket for real-time updates.',
    liveDemo: 'https://demo.project1.com',
    githubLink: 'https://github.com/yourusername/project1',
  },
  // Add more projects...
];

const ProjectDetails = () => {
  const location = useLocation();

  useEffect(() => {
    console.log(location);
  }, [location]);
  const { projectId } = useParams();
  const project = projects.find((p) => p.id === projectId);

  if (!project) {
    return (
      <>
        <Helmet>
          <title>Project Details | Irsyad Portfolio</title>
        </Helmet>
        <div className="min-h-[80vh] flex items-center justify-center">
          <div className="text-center space-y-4">
            <h2 className="text-2xl font-bold">Project Not Found</h2>
            <p className="text-muted-foreground">
              The project you're looking for doesn't exist.
            </p>
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80"
            >
              ← Back to Projects
            </Link>
          </div>
        </div>
      </>
    );
  }

  return (
    <div className="min-h-[80vh] py-6 sm:py-8 px-4">
      <div className="max-w-4xl mx-auto space-y-6">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to="/">Home</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to="/projects">Projects</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{project.name}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <article className="space-y-8">
          {/* Project Header */}
          <div className="space-y-4">
            <h1 className="text-3xl sm:text-4xl font-bold">{project.name}</h1>
            <p className="text-lg text-muted-foreground">
              {project.description}
            </p>
          </div>

          {/* Project Image */}
          <div className="relative aspect-video rounded-lg overflow-hidden border bg-card">
            <img
              src={project.image}
              alt={project.name}
              className="object-cover w-full h-full"
            />
          </div>

          {/* Tech Stack */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Technologies Used</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
              {project.techStack.map((tech) => (
                <TechStack
                  key={tech.name}
                  name={tech.name}
                  customIcon={tech.customIcon}
                />
              ))}
            </div>
          </section>

          {/* Features */}
          {project.features && (
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">Key Features</h2>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                {project.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </section>
          )}

          {/* Challenges & Solutions */}
          {(project.challenges || project.solution) && (
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">Challenges & Solutions</h2>
              {project.challenges && (
                <div className="space-y-2">
                  <h3 className="text-lg font-medium">Challenges:</h3>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    {project.challenges.map((challenge, index) => (
                      <li key={index}>{challenge}</li>
                    ))}
                  </ul>
                </div>
              )}
              {project.solution && (
                <div className="space-y-2">
                  <h3 className="text-lg font-medium">Solution:</h3>
                  <p className="text-muted-foreground">{project.solution}</p>
                </div>
              )}
            </section>
          )}

          {/* Links */}
          <section className="flex flex-wrap gap-4">
            {project.liveDemo && (
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity"
              >
                View Live Demo
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            )}
            {project.githubLink && (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-secondary text-secondary-foreground rounded-lg hover:opacity-90 transition-opacity"
              >
                View Source Code
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.137 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            )}
          </section>
        </article>
      </div>
    </div>
  );
};

export default ProjectDetails;
