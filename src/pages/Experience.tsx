import TechStack from '@/components/reusable/tech-stack';
import { Helmet } from 'react-helmet-async';

interface Experience {
  companyLogo: string;
  companyName: string;
  role: string;
  period: string;
  location: string;
  description: string;
  techStack: Array<{
    name: string;
    customIcon?: string;
  }>;
  achievements: string[];
}

const experiences: Experience[] = [
  {
    companyLogo: '/company-logo.png',
    companyName: 'Company Name',
    role: 'Backend Developer',
    period: 'June 2022 - Present',
    location: 'Jakarta, Indonesia',
    description:
      'Working as a backend developer responsible for developing and maintaining web applications, APIs, and database systems.',
    techStack: [
      { name: 'Laravel' },
      { name: 'Vuejs' },
      { name: 'Mysql' },
      {
        name: 'Express',
        customIcon:
          'https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/express.png',
      },
      { name: 'Redis' },
    ],
    achievements: [
      'Reduced API response time by 40% through implementation of Redis caching',
      'Developed and maintained 5+ microservices using Laravel and Express',
      'Implemented automated testing that improved code coverage by 60%',
      'Successfully migrated legacy systems to modern tech stack',
    ],
  },
  {
    companyLogo: '/company-logo.png',
    companyName: 'Company Name',
    role: 'Backend Developer',
    period: 'June 2022 - Present',
    location: 'Jakarta, Indonesia',
    description:
      'Working as a backend developer responsible for developing and maintaining web applications, APIs, and database systems.',
    techStack: [
      { name: 'Laravel' },
      { name: 'Vuejs' },
      { name: 'Mysql' },
      {
        name: 'Express',
        customIcon:
          'https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/express.png',
      },
      { name: 'Redis' },
    ],
    achievements: [
      'Reduced API response time by 40% through implementation of Redis caching',
      'Developed and maintained 5+ microservices using Laravel and Express',
      'Implemented automated testing that improved code coverage by 60%',
      'Successfully migrated legacy systems to modern tech stack',
    ],
  },
  {
    companyLogo: '/company-logo.png',
    companyName: 'Company Name',
    role: 'Backend Developer',
    period: 'June 2022 - Present',
    location: 'Jakarta, Indonesia',
    description:
      'Working as a backend developer responsible for developing and maintaining web applications, APIs, and database systems.',
    techStack: [
      { name: 'Laravel' },
      { name: 'Vuejs' },
      { name: 'Mysql' },
      {
        name: 'Express',
        customIcon:
          'https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/express.png',
      },
      { name: 'Redis' },
    ],
    achievements: [
      'Reduced API response time by 40% through implementation of Redis caching',
      'Developed and maintained 5+ microservices using Laravel and Express',
      'Implemented automated testing that improved code coverage by 60%',
      'Successfully migrated legacy systems to modern tech stack',
    ],
  },
];

const ExperienceCard = ({ experience }: { experience: Experience }) => (
  <div className="bg-card rounded-lg border p-4 sm:p-6 hover:shadow-lg transition-all space-y-4">
    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
      <div className="flex gap-3 sm:gap-4">
        <div className="relative h-12 w-12 shrink-0 rounded-lg border bg-background p-2 flex items-center justify-center">
          <img
            src={experience.companyLogo}
            alt={experience.companyName}
            className="object-contain"
          />
        </div>
        <div className="min-w-0">
          {' '}
          {/* Prevent text overflow */}
          <h3 className="font-semibold text-lg truncate">
            {experience.companyName}
          </h3>
          <p className="text-muted-foreground">{experience.role}</p>
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-muted-foreground mt-1">
            <span className="truncate">{experience.period}</span>
            <span className="hidden sm:inline">•</span>
            <span className="truncate">{experience.location}</span>
          </div>
        </div>
      </div>
    </div>

    <div className="space-y-4">
      <div>
        <p className="text-muted-foreground text-sm sm:text-base">
          {experience.description}
        </p>
      </div>

      <div>
        <h4 className="font-medium mb-2 text-sm sm:text-base">Tech Stack</h4>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-1">
          {experience.techStack.map((tech) => (
            <TechStack
              key={tech.name}
              name={tech.name}
              customIcon={tech.customIcon}
            />
          ))}
        </div>
      </div>

      <div>
        <h4 className="font-medium mb-2 text-sm sm:text-base">
          Key Achievements
        </h4>
        <ul className="space-y-2">
          {experience.achievements.map((achievement, index) => (
            <li
              key={index}
              className="flex items-start gap-2 text-muted-foreground text-sm sm:text-base"
            >
              <span className="mt-1.5 shrink-0">
                <svg
                  className="h-2 w-2 text-primary"
                  fill="currentColor"
                  viewBox="0 0 8 8"
                >
                  <circle cx="4" cy="4" r="3" />
                </svg>
              </span>
              <span className="break-words">{achievement}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

const Experience = () => {
  return (
    <>
      <Helmet>
        <title>Experience | Irsyad Portfolio</title>
      </Helmet>
      <div className="min-h-[80vh] py-6 sm:py-8 px-4">
        <div className="max-w-3xl mx-auto space-y-4 sm:space-y-6">
          <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_100%] animate-gradient-flow bg-clip-text text-transparent">
            Experience
          </h1>

          <p className="text-muted-foreground text-sm sm:text-base">
            My professional journey as a developer, showcasing my growth and
            achievements along the way.
          </p>

          <div className="space-y-4 sm:space-y-6">
            {experiences.map((experience, index) => (
              <ExperienceCard key={index} experience={experience} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Experience;
