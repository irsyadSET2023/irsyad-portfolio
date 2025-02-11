import TechStack from '@/components/reusable/tech-stack';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { useEffect } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';

interface Project {
  id: number;
  name: string;
  description: string;
  image: string;
  link: string;
  techStack: Array<{
    name: string;
    customIcon?: string;
  }>;
}

const projects: Project[] = [
  {
    id: 1,
    name: 'E-commerce Platform',
    description:
      'A full-featured e-commerce platform with user authentication, product management, and payment integration.',
    image: '/project1.png', // Add your project image
    link: '/projects/1',
    techStack: [
      { name: 'Laravel' },
      { name: 'Vuejs' },
      { name: 'Mysql' },
      { name: 'Redis' },
    ],
  },
  // Add more projects as needed
];

const ProjectCard = ({ project }: { project: Project }) => (
  <div className="group bg-card rounded-lg border overflow-hidden hover:shadow-lg transition-all">
    <div className="relative aspect-video overflow-hidden">
      <img
        src={project.image}
        alt={project.name}
        className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
    </div>

    <div className="p-4 space-y-3">
      <div className="space-y-1">
        <h3 className="font-semibold text-lg line-clamp-1">{project.name}</h3>
        <p className="text-muted-foreground text-sm line-clamp-2">
          {project.description}
        </p>
      </div>

      <div className="space-y-2">
        <h4 className="text-sm font-medium">Tech Stack</h4>
        <div className="flex flex-wrap gap-1">
          {project.techStack.map((tech) => (
            <TechStack
              key={tech.name}
              name={tech.name}
              customIcon={tech.customIcon}
            />
          ))}
        </div>
      </div>

      <Link
        to={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors"
      >
        View Project
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
            d="M14 5l7 7m0 0l-7 7m7-7H3"
          />
        </svg>
      </Link>
    </div>
  </div>
);

const Projects = () => {
  const location = useLocation();
  const pathSegments = location.pathname.split('/').filter(Boolean);

  useEffect(() => {
    console.log(location);
  }, [location]);

  return (
    <div className="min-h-[80vh] py-6 sm:py-8 px-4">
      <div className="max-w-6xl mx-auto space-y-4 sm:space-y-6">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            {pathSegments.map((segment, index) => {
              const isLast = index === pathSegments.length - 1;
              return (
                <BreadcrumbItem key={segment}>
                  {isLast ? (
                    <BreadcrumbPage>{segment}</BreadcrumbPage>
                  ) : (
                    <>
                      <BreadcrumbLink
                        href={`/${pathSegments.slice(0, index + 1).join('/')}`}
                      >
                        {segment}
                      </BreadcrumbLink>
                      <BreadcrumbSeparator />
                    </>
                  )}
                </BreadcrumbItem>
              );
            })}
          </BreadcrumbList>
        </Breadcrumb>

        <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_100%] animate-gradient-flow bg-clip-text text-transparent">
          Projects
        </h1>

        <p className="text-muted-foreground text-sm sm:text-base">
          A showcase of my projects, demonstrating my skills and experience in
          web development.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

const ProjectDetail = () => {
  const { projectId } = useParams();
  const project = projects.find((p) => p.id === Number(projectId));

  if (!project) return <div>Project not found</div>;

  return (
    <div className="min-h-[80vh] py-6 sm:py-8 px-4">
      <div className="max-w-6xl mx-auto space-y-4 sm:space-y-6">
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

        <div className="space-y-6">
          <div className="relative aspect-video rounded-lg overflow-hidden">
            <img
              src={project.image}
              alt={project.name}
              className="object-cover w-full h-full"
            />
          </div>

          <div className="space-y-4">
            <h1 className="text-3xl font-bold">{project.name}</h1>
            <p className="text-muted-foreground">{project.description}</p>

            <div className="space-y-2">
              <h2 className="text-xl font-semibold">Tech Stack</h2>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <TechStack
                    key={tech.name}
                    name={tech.name}
                    customIcon={tech.customIcon}
                  />
                ))}
              </div>
            </div>

            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity"
            >
              View Live Project
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
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Projects, ProjectDetail, TechStack };
