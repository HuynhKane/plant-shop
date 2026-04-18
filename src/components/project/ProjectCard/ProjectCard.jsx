import './ProjectCard.css'

export default function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <img src={project.imageUrl} alt="" className="project-card__image" />
      <div className="project-card__body">
        <h3 className="project-card__title">{project.title}</h3>
        <p className="project-card__summary">{project.summary}</p>
      </div>
    </article>
  )
}
