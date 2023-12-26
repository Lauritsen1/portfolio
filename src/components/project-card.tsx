import {
  Card,
  CardHeader,
  CardContent,
  CardDescription,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";

import { GitHubIcon } from "../components/icons/GitHubIcon";

interface Props {
  title: string;
  description: string;
  tags: readonly string[];
  link?: {
    github: string;
    href: string;
  };
}

export function ProjectCard({ title, description, tags, link }: Props) {
  return (
    <Card className="flex flex-col overflow-hidden border border-muted p-3">
      <CardHeader>
        <div className="space-y-1">
          <div className="flex items-center justify-between">
            <CardTitle className="text-base">
              {link ? (
                <a
                  href={link?.href}
                  target="_blank"
                  className="inline-flex items-center gap-1 hover:underline"
                >
                  {title}
                  <span className="h-1 w-1 rounded-full bg-green-500"></span>
                </a>
              ) : (
                title
              )}
            </CardTitle>
            <a href={link?.github} target="_blank">
              <GitHubIcon className="h-4 w-4 hover:opacity-50 print:hidden" />
            </a>
          </div>
          <div className="hidden font-mono text-xs underline print:visible">
            {link?.href
              .replace("https://", "")
              .replace("www.", "")
              .replace("/", "")}
          </div>
          <CardDescription className="font-mono text-xs">
            {description}
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent className="mt-auto flex">
        <div className="mt-2 flex flex-wrap gap-1">
          {tags.map((tag) => (
            <Badge
              className="px-1 py-0 text-[10px]"
              variant="secondary"
              key={tag}
            >
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
