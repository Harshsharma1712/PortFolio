import { FC } from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../components/ui/card"
import { Badge } from "../components/ui/badge"
import { Button } from "../components/ui/button"
import { ExternalLink, Github } from 'lucide-react'

interface Project {
  title: string
  description: string
  image: string
  tags: string[]
  liveLink: string
  githubLink: string
}

const projects: Project[] = [
  {
    title: "E-commerce Platform",
    description: "A full-stack e-commerce solution with user authentication, product management, and payment integration.",
    image: "/placeholder.svg?height=200&width=300",
    tags: ["React", "Node.js", "Express", "MongoDB", "Stripe"],
    liveLink: "https://example-ecommerce.com",
    githubLink: "https://github.com/yourusername/ecommerce-platform"
  },
  {
    title: "Task Management App",
    description: "A responsive web application for managing tasks and projects with real-time updates.",
    image: "/placeholder.svg?height=200&width=300",
    tags: ["React", "Firebase", "Material-UI", "Redux"],
    liveLink: "https://example-taskmanager.com",
    githubLink: "https://github.com/yourusername/task-manager"
  },
  {
    title: "Weather Dashboard",
    description: "An interactive weather dashboard that provides real-time weather information and forecasts.",
    image: "/placeholder.svg?height=200&width=300",
    tags: ["React", "TypeScript", "OpenWeather API", "Chart.js"],
    liveLink: "https://example-weather.com",
    githubLink: "https://github.com/yourusername/weather-dashboard"
  }
]

const Projects: FC = () => {
  return (
    <section id="projects" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Here are my latest works</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="flex flex-col">
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <img 
                  src={project.image || "/placeholder.svg"} 
                  alt={project.title} 
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary">{tag}</Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" asChild>
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" /> GitHub
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects

