import React from 'react'
import { abilities } from '../constants/index.js'
import SpotlightCard from '../components/SpotlightCard.jsx'

const FeatureCards = () => {
  return (
    <div className="w-full padding-x-lg">
      <div className="mx-auto grid-3-cols">
        {abilities.map(({ imgPath, title, desc }) => (
          <SpotlightCard
            key={title}
            spotlightColor="rgba(0, 229, 255, 0.2)"
            className="card-border rounded-xl p-8 flex flex-col gap-4"
          >
            <div className="size-14 flex items-center justify-center">
              <img src={imgPath} alt={title} />
            </div>
            <h3 className="text-white text-2xl font-semibold mt-2">{title}</h3>
            <p className="text-white-50 text-lg">{desc}</p>
          </SpotlightCard>
        ))}
      </div>
    </div>
  )
}

export default FeatureCards