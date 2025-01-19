import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface Job {
  title: string;
  company: string;
  period: string;
  description: string[];
  skills: string[];
}

const jobs: Job[] = [
  {
    title: "Senior Frontend Developer",
    company: "Tech Innovators Inc.",
    period: "Jan 2022 - Present",
    description: [
      "Led the development of a high-traffic e-commerce platform, improving load times by 40%",
      "Mentored junior developers and conducted code reviews to ensure high code quality",
      "Implemented new React features and optimized existing components for better performance"
    ],
    skills: ["React", "TypeScript", "Next.js", "Redux", "GraphQL"]
  },
  {
    title: "Full Stack Developer",
    company: "Digital Solutions Ltd.",
    period: "Mar 2019 - Dec 2021",
    description: [
      "Developed and maintained multiple client websites using React and Node.js",
      "Designed and implemented RESTful APIs for various web applications",
      "Collaborated with UX designers to implement responsive and accessible user interfaces"
    ],
    skills: ["React", "Node.js", "Express", "MongoDB", "REST API"]
  },
  {
    title: "Junior Web Developer",
    company: "WebCraft Agency",
    period: "Jun 2017 - Feb 2019",
    description: [
      "Assisted in the development of client websites using HTML, CSS, and JavaScript",
      "Learned and applied modern web development practices and frameworks",
      "Participated in daily stand-ups and sprint planning meetings"
    ],
    skills: ["HTML", "CSS", "JavaScript", "jQuery", "Bootstrap"]
  }
]

const WorkExperience: React.FC = () => {
  return (
    <section id="experience" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Work Experience</h2>
        <div className="space-y-6">
          {jobs.map((job, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>{job.title}</CardTitle>
                    <CardDescription>{job.company}</CardDescription>
                  </div>
                  <Badge variant="secondary">{job.period}</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 mb-4 space-y-2">
                  {job.description.map((item, i) => (
                    <li key={i} className="text-sm text-muted-foreground">{item}</li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {job.skills.map((skill, i) => (
                    <Badge key={i} variant="outline">{skill}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WorkExperience

