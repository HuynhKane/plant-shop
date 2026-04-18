import Breadcrumb from '../../components/common/Breadcrumb/Breadcrumb'
import ProjectCard from '../../components/project/ProjectCard/ProjectCard'
import ProjectGrid from '../../components/project/ProjectGrid/ProjectGrid'
import SectionTitle from '../../components/common/SectionTitle/SectionTitle'
import { useProjects } from '../../hooks/useProjects'
import { buildBreadcrumb } from '../../utils/buildBreadcrumb'

export default function ProjectPage() {
  const projects = useProjects()
  const crumbs = buildBreadcrumb({
    pathname: '/projects',
    labels: { projects: 'Dự án' },
  })

  return (
    <section>
      <Breadcrumb items={crumbs} />
      <SectionTitle title="Dự án tiêu biểu" subtitle="Một số không gian đã được SoiL Gardening đồng hành." />
      <ProjectGrid>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </ProjectGrid>
    </section>
  )
}
