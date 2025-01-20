import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card"
import { Badge } from "../components/ui/badge"

interface Job {
  title: string;
  company: string;
  period: string;
  description: string[];
  skills: string[];
}

const jobs: Job[] = [
  {
    title: "Frontend Developer",
    company: "Cognifiyz",
    period: "Dec 2024 - Jan 2025",
    description: [
      "Increased mobile user engagement by 15% through development and maintenance of responsive web pages using HTML5 and JavaScript, ensuring a seamless cross-platform design (desktop, tablet, and mobile).",
      "Utilized version control systems (like Git) to effectively manage code changes and maintain project history, resulting in a 10% reduction in code review time for fellow developers."
    ],
    skills: ["HTML/CSS", "TypeScript/JavaScript", "React", "Git"]
  },
  {
    title: "AI Trainer",
    company: "Soul AI",
    period: "Jan 2025 - Present",
    description: [
      "Enhanced the natural language processing capabilities of AI models, improving their contextual understanding and response accuracy by 20%.",
      "Developed and implemented training programs for AI models, achieving an average accuracy improvement of 90%.",
    ],
    skills: ["Python", "Prompt technique"]
  },
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

