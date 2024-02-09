import React from 'react'
import Card from './Card'
import skillCardData from "./skillCardData"
function page() {
  return (
    <div className="bg-black h-screen w-full p-12">
      <div className='flex flex-col justify-center items-center mx-auto md:max-w-3xl'>
      <div className="grid grid-cols-3 lg:grid-cols-6 gap-8 md:gap-4">
        {skillCardData.map((card, index) => (
          <Card
            key={index}
            borderColor={card.borderColor}
            gradientColors={card.gradientColors}
            textColor={card.textColor}
            shadowColor={card.shadowColor}
            title={card.title}
            content={card.content}
          />
        ))}
      </div>
      </div>
    </div>
  )
}

export default page