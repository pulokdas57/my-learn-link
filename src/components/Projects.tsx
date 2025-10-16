import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with real-time inventory management and secure payment processing.",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      github: "#",
      demo: "#",
    },
    {
      title: "Task Management App",
      description: "Collaborative task management tool with real-time updates and team communication features.",
      tags: ["TypeScript", "React", "Firebase", "Tailwind"],
      github: "#",
      demo: "#",
    },
    {
      title: "Portfolio Generator",
      description: "AI-powered tool to help developers create beautiful portfolio websites in minutes.",
      tags: ["Next.js", "OpenAI", "PostgreSQL", "Vercel"],
      github: "#",
      demo: "#",
    },
    {
      title: "Weather Dashboard",
      description: "Real-time weather tracking application with interactive maps and forecast analytics.",
      tags: ["React", "API Integration", "Charts.js", "CSS"],
      github: "#",
      demo: "#",
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-gradient-to-br from-background to-accent/5">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Projects</h2>
        <p className="text-center text-muted-foreground mb-12 text-lg">
          A selection of my recent work and side projects
        </p>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="border-2 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col">
              <CardHeader>
                <CardTitle className="text-2xl">{project.title}</CardTitle>
                <CardDescription className="text-base">{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col justify-between">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary">{tag}</Badge>
                  ))}
                </div>
                <div className="flex gap-4">
                  <Button variant="outline" className="flex-1 gap-2">
                    <Github className="h-4 w-4" />
                    Code
                  </Button>
                  <Button className="flex-1 gap-2">
                    <ExternalLink className="h-4 w-4" />
                    Live Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
