import TechStack from '@/components/reusable/tech-stack';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home | Irsyad Portfolio</title>
      </Helmet>
      <div className="min-h-[80vh] flex flex-col justify-center space-y-8 px-4">
        <div className="space-y-6 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_100%] animate-gradient-flow bg-clip-text text-transparent">
            Hi, I'm Irsyad Murtadha
          </h1>

          <div className="relative bg-card p-6 rounded-lg animate-float">
            <div className="absolute inset-0 bg-gradient-shine bg-shine animate-shine rounded-lg opacity-50"></div>
            <div className="relative z-10 space-y-4">
              <p className="text-xl font-medium">
                Junior Fullstack Developer with Backend Focus
              </p>
              <p className="text-lg text-muted-foreground">
                With 1.5 years of hands-on experience, I'm passionate about
                building robust backend systems while continuously expanding my
                full-stack capabilities. I'm dedicated to learning and growing
                in the ever-evolving world of web development.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-card p-6 rounded-lg border hover:shadow-lg transition-all">
              <h2 className="text-xl font-semibold mb-4">Development Stack</h2>
              <div className="space-y-1">
                <TechStack name="Laravel" />
                <TechStack name="Vuejs" />
                <TechStack
                  name="Strapi"
                  customIcon="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/strapi.png"
                />
                <TechStack
                  name="Express"
                  customIcon="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/express.png"
                />
                <TechStack name="Nestjs" />
                <TechStack name="Nextjs" />
              </div>
            </div>

            <div className="bg-card p-6 rounded-lg border hover:shadow-lg transition-all">
              <h2 className="text-xl font-semibold mb-4">Database Stack</h2>
              <div className="space-y-1">
                <TechStack name="Mysql" />
                <TechStack name="Postgresql" />
                <TechStack name="Redis" />
                <TechStack name="Mongodb" />
              </div>
            </div>

            <div className="bg-card p-6 rounded-lg border hover:shadow-lg transition-all">
              <h2 className="text-xl font-semibold mb-4">Deployment Tools</h2>
              <div className="space-y-1">
                <TechStack name="Cloudflare" />
                <TechStack name="Digitalocean" />
                <TechStack name="Render" />
                <TechStack
                  name="Nginx"
                  customIcon="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/nginx.png"
                />
              </div>
            </div>

            <div className="bg-card p-6 rounded-lg border hover:shadow-lg transition-all md:col-span-3">
              <h2 className="text-xl font-semibold mb-3">My Journey So Far</h2>
              <p className="text-muted-foreground">
                In my 1.5 years as a developer, I've gained experience with a
                diverse tech stack, ranging from PHP frameworks like Laravel to
                modern JavaScript frameworks such as Vue.js and Next.js. I've
                worked with various database systems, from traditional SQL
                databases to NoSQL solutions, and I'm comfortable with different
                deployment platforms and server configurations. This broad
                exposure has given me a solid foundation in both frontend and
                backend development, while maintaining a focus on backend
                architecture and system design.
              </p>
            </div>

            <div className="bg-card p-6 rounded-lg border hover:shadow-lg transition-all md:col-span-3">
              <h2 className="text-xl font-semibold mb-3">
                Professional Growth
              </h2>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  • Building full-stack applications using Laravel and Vue.js
                </li>
                <li>• Implementing headless CMS solutions with Strapi</li>
                <li>
                  • Developing Node.js applications with Express and NestJS
                </li>
                <li>• Managing deployments across various cloud platforms</li>
              </ul>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 justify-center md:justify-center">
            <Link
              to="/projects"
              className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity"
            >
              View My Projects
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center px-6 py-3 bg-secondary text-secondary-foreground rounded-lg hover:opacity-90 transition-opacity"
            >
              Let's Connect
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
