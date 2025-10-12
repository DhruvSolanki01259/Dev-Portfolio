import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Section } from "./section"
import { profile } from "@/lib/portfolio-data"

export function Projects() {
  return (
    <Section id="projects" title="Projects" className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        {profile.projects.map((p) => (
          <Card key={p.title} className="overflow-hidden bg-card/50 border-border">
            <div className="relative aspect-[16/10]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={p.image || "/placeholder.svg"}
                alt={p.imageAlt}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
            <CardHeader>
              <CardTitle>{p.title}</CardTitle>
              <CardDescription>{p.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <Badge key={t} variant="outline">
                    {t}
                  </Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter className="gap-2">
              {p.links.live && (
                <Button asChild size="sm">
                  <Link
                    href={p.links.live}
                    rel="noopener noreferrer"
                    target="_blank"
                    aria-label={`Open ${p.title} live`}
                  >
                    Live
                  </Link>
                </Button>
              )}
              {p.links.repo && (
                <Button asChild size="sm" variant="secondary">
                  <Link
                    href={p.links.repo}
                    rel="noopener noreferrer"
                    target="_blank"
                    aria-label={`Open ${p.title} repository`}
                  >
                    Code
                  </Link>
                </Button>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
    </Section>
  )
}
