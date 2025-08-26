'use client';

import { Skeleton } from '@/components/ui/skeleton';
import { fetchPinnedRepos } from '@/lib/github';
import { useQuery } from '@tanstack/react-query';
import { ProjectCard } from './project-card';

function ProjectsSection() {
  const { data: repos, isLoading } = useQuery({
    queryKey: ['pinned-repos'],
    queryFn: fetchPinnedRepos,
  });

  return (
    <section id="projects" className="container py-24 sm:py-32">
      <h2 className="text-3xl font-bold text-center mb-8 tracking-tighter">Creative Showcase</h2>
      {isLoading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Array.from({ length: 6 }).map((_, i) => (
            <Skeleton key={i} className="h-48" />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {repos?.map((repo: any) => (
            <ProjectCard key={repo.name} repo={repo} />
          ))}
        </div>
      )}
    </section>
  );
}

export default ProjectsSection;
