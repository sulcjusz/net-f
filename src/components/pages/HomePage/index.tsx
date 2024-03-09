import React from 'react'
import LowerSection from '../../organisms/LowerSection'
import HeroSection from '../../organisms/HeroSection'
import birdsVideo from '../../../assets/video/birdsVideo.mp4'

const HomePage: React.FC = () => (
  <div className="flex flex-col">
    <div>
      <HeroSection url={birdsVideo}>
        <p>STH</p>
      </HeroSection>
    </div>
    <div>
      <LowerSection
        title="EXAMPLE SECTION"
        onSeeMoreClick={() => {
          /* Empty placeholder*/
        }}
      >
        <div className="font-exo text-[32px] font-medium leading-10 tracking-tight text-center text-grey-600">
          <p>
            Lorem{' '}
            <span className="font-exo text-linear-gradient-primary font-bold">
              ipsum dolor sit amet consectetur adipiscing elit etiam molestie ex
              vel
            </span>{' '}
            massa lacinia ultricies.
          </p>
          <p>
            Suspendisse lobortis vehicula eros, sed sodales eros mollis eget.
            Morbi vitae libero in nunc sodales.
          </p>
        </div>
      </LowerSection>
    </div>
  </div>
)

export default HomePage
