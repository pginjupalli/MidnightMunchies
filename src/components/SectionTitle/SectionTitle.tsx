import "./SectionTitle.css"

interface SectionTitleProp {
    title: string
}

const SectionTitle = ({title}: SectionTitleProp) => {
  
  return (
    <h1 className="title"><strong>{title}</strong></h1>
  )
}

export default SectionTitle