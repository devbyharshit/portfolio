import { fetchPinnedRepos } from '@/lib/github';
import { ProjectCard } from './project-card';

interface Repository {
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
}

async function ProjectsSection() {
  const repos = await fetchPinnedRepos();

  return (
    <section id="projects" className="container py-24 sm:py-32">
      <h2 className="text-3xl font-bold text-center mb-8 tracking-tighter">Creative Showcase</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {repos?.map((repo: Repository) => (
          <ProjectCard key={repo.name} repo={repo} />
        ))}
      </div>
    </section>
  );
}

export default ProjectsSection;
