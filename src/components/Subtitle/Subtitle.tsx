interface SubtitleProp {
    title: string,
}

const Subtitle = ({title}: SubtitleProp) => {
  return (
    <h3 className="font text-white text-5xl text-center">{title}</h3>
  )
}

export default Subtitle