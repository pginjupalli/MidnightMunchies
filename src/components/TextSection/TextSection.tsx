import SectionTitle from "../SectionTitle/SectionTitle"
import "./TextSection.css"

interface TextSectionProp {
  name: string,
  paragraph: string,
}

const TextSection = ({name, paragraph}: TextSectionProp) => {
  return (
    <div className="flex items-center justify-center">
      <SectionTitle title = {name}/>
      <h2 className="font text-white text-sm">{paragraph}</h2>
    </div>

  )
}

export default TextSection