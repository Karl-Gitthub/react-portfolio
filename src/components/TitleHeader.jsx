import GradientText from './GradientText.jsx'

const TitleHeader = ({ title, sub }) => {
  return (
    <div className="flex flex-col items-center gap-5">
        <div className="hero-badge">
            <p>{sub}</p>
        </div>
        <GradientText
        colors={["#fff, #8660fa, #a855f7, #8400ff, #a855f7, #fff"]}
        animationSpeed={6}
        showBorder={false}
        className="font-semibold md:text-5xl text-3xl text-center"
        >
            {title}
        </GradientText>
    </div>
  )
}

export default TitleHeader
{/*import ShinyText from './ShinyText.jsx';
    
    <ShinyText
        text={title}
        speed={8}
        className="font-semibold md:text-5xl text-3xl text-center"
        />*/}