import './SectionTitle.css'

export default function SectionTitle({ title, subtitle, as: Tag = 'h2' }) {
  return (
    <div className="section-heading section-title">
      <Tag className="section-title__heading">{title}</Tag>
      {subtitle ? <p className="section-title__subtitle">{subtitle}</p> : null}
    </div>
  )
}
