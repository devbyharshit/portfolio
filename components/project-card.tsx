import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { FaStar } from 'react-icons/fa';

interface ProjectCardProps {
  repo: {
    name: string;
    description: string;
    url: string;
    stargazers: {
      totalCount: number;
    };
    primaryLanguage: {
      name: string;
      color: string;
    } | null;
  };
}

export function ProjectCard({ repo }: ProjectCardProps) {
  return (
    <a href={repo.url} target="_blank" rel="noopener noreferrer">
      <Card className="h-full hover:border-primary transition">
        <CardHeader>
          <CardTitle>{repo.name}</CardTitle>
          <CardDescription>{repo.description}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-1">
              <FaStar className="text-yellow-400" />
              <span>{repo.stargazers.totalCount}</span>
            </div>
            {repo.primaryLanguage && (
              <div className="flex items-center gap-2">
                <span
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: repo.primaryLanguage.color }}
                />
                <span>{repo.primaryLanguage.name}</span>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </a>
  );
}
