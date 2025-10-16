import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import profileImage from "@/assets/profile-hero.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 bg-gradient-to-br from-background to-primary/5">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
              Hi, I'm <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Your Name</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground">
              Software Developer & Creative Problem Solver
            </p>
            <p className="text-lg text-muted-foreground">
              Passionate about building elegant solutions to complex problems. 
              Specializing in full-stack development and modern web technologies.
            </p>
            <div className="flex gap-4 pt-4">
              <Button asChild variant="default" size="lg" className="gap-2">
                <a href="mailto:your.email@example.com">
                  <Mail className="h-5 w-5" />
                  Contact Me
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="gap-2">
                <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                  GitHub
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="gap-2">
                <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                  LinkedIn
                </a>
              </Button>
            </div>
          </div>
          <div className="flex justify-center animate-fade-in-delay">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full blur-2xl opacity-20 animate-pulse"></div>
              <img 
                src={profileImage} 
                alt="Profile" 
                className="relative rounded-full w-80 h-80 object-cover shadow-2xl border-4 border-background"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
