import { FC } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card"
import { Badge } from "../components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar"
import profilPic from "@/assets/profilePic.jpg"

const About: FC = () => {
  const skills = [
    "React", "TypeScript", "Next.js", "Node.js", "Express", "MongoDB", 
    "PostgreSQL", "GraphQL", "REST APIs", "Git",
    "Bash"
  ]

  return (
    <section id="about" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Hi, I am Harsh</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="col-span-1">
            <CardHeader>
              <CardTitle></CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-center">
              <Avatar className="w-32 h-32 mb-4">
                <AvatarImage src={profilPic} alt="Profile picture" />
                <AvatarFallback>HS</AvatarFallback>
              </Avatar>
              <h3 className="text-xl font-semibold mb-2">Harsh Sharma</h3>
              <p className="text-muted-foreground mb-2">Full Stack Developer</p>
              <p className="text-sm text-center text-muted-foreground">
                Based in Jaipur, Rajasthan, India
              </p>
            </CardContent>
          </Card>
          <Card className="col-span-1 md:col-span-2">
            <CardHeader>
              <CardTitle>About Me</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                I'm a passionate Full Stack Developer with years of experience in building web applications. 
                I love creating efficient, scalable, and user-friendly solutions to complex problems. 
                My expertise spans both front-end and back-end technologies, and I'm always eager to learn and adopt new tools and frameworks.
              </p>
              <p className="text-muted-foreground mb-4">
                I am currently a computer science student and
                I believe in continuous learning and giving back to the developer community through open-source contributions and mentoring aspiring developers.
              </p>
              <p className="text-muted-foreground mb-4">
              Want to chat? Just shoot me a DM with a direct question on X and I'll respond whenever I can. I will ignore all soliciting.
              </p>
            </CardContent>
          </Card>
          <Card className="col-span-1 md:col-span-3">
            <CardHeader>
              <CardTitle>Skills</CardTitle>
              <CardDescription>Technologies and tools I work with</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <Badge key={index} variant="secondary">{skill}</Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default About

