import { FC } from 'react'
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Twitter, Mail } from 'lucide-react'

const Connect: FC = () => {
  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-background/80 border border-border/40 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50 rounded-full shadow-lg">
      <div className="flex items-center justify-between px-4 py-2 space-x-2">
        <Button variant="ghost" size="sm" className="rounded-full p-1" asChild>
          <a href="https://github.com/harshsharma1712" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <Github className="h-4 w-4" />
          </a>
        </Button>
        <Button variant="ghost" size="sm" className="rounded-full p-1" asChild>
          <a href="https://linkedin.com/in/harshsharma0017" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <Linkedin className="h-4 w-4" />
          </a>
        </Button>
        <Button variant="ghost" size="sm" className="rounded-full p-1" asChild>
          <a href="https://twitter.com/sharmahs017" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <Twitter className="h-4 w-4" />
          </a>
        </Button>
        <Button variant="ghost" size="sm" className="rounded-full p-1" asChild>
          <a href="mailto:harshsharma17122005@gmail.com" aria-label="Email">
            <Mail className="h-4 w-4" />
          </a>
        </Button>
      </div>
    </div>
  )
}

export default Connect

