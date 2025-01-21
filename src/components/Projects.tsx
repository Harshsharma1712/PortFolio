import { FC } from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../components/ui/card"
import { Badge } from "../components/ui/badge"
import { Button } from "../components/ui/button"
import { Github } from 'lucide-react'

interface Project {
  title: string
  description: string
  tags: string[]
  // liveLink: string
  githubLink: string
}

const projects: Project[] = [
  {
    title: "File Converter",
    description: "A file converter that effertless convert your jpg and word file into pdf formate.",
    tags: ["Node.js", "Express.js", "JavaScript", "EJS"],
    // liveLink: "https://example-ecommerce.com",
    githubLink: "https://github.com/Harshsharma1712/File-converter"
  },
  {
    title: "AI Content Generator",
    description: "A Responsive AI chatbox build with Gemini API which give answer to the user prompt.",
    tags: ["React.js", "TypeScript", "TailwindCss", "Gemini"],
    // liveLink: "https://example-taskmanager.com",
    githubLink: "https://github.com/Harshsharma1712/AI-Content-Generator"
  },

  {
    title: "E Commerce Store",
    description: "A Responsive Frontend E Commerce Store in which user can go through various collections and add their items in their cart. ",
    tags: ["React.js", "JavaScript", "TailwindCss"],
    // liveLink: "https://example-taskmanager.com",
    githubLink: "https://github.com/Harshsharma1712/E-Commerce-Store"
  },
]

const Projects: FC = () => {
  return (
    <section id="projects" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Here are my latest works</h2>
        <p className="text-muted-foreground mb-4 text-center">
        I've worked on a variety of projects, from simple websites to complex web applications. Here are a few of my favorites.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="flex flex-col">
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary">{tag}</Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" asChild>
                  {/* <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                  </a> */}
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

