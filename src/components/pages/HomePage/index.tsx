import React from 'react'
import LowerSection from '../../organisms/LowerSection'
import HeroSection from '../../organisms/HeroSection'
import birdsVideo from '../../../assets/video/birdsVideo.mp4'
import HeroText from '../../molecules/HeroText'

const HomePage: React.FC = () => (
  <div className="flex flex-col">
    <div>
      <HeroSection url={birdsVideo}>
        <HeroText title="LOREM IPSUM">
          <div className="font-exo text-[45px] font-medium leading-[57px] tracking-tight text-left text-grey-600">
            <p>
              <span className="text-linear-gradient-primary font-semibold">
                Lorem Ipsum Dolor Sit amet
              </span>{' '}
            </p>
            <div className="text-white font-bold">
              <p>Donec cursus ligula diam, nec congue</p>
              <p>augue ultrices nec.</p>
            </div>
          </div>
        </HeroText>
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
