import React from 'react'

import Button from '../../atoms/Button'
import IconButton from '../../atoms/IconButton'
import BasketIcon from '../../atoms/Icon/Basket'
import PersonIcon from '../../atoms/Icon/Person'
import SearchIcon from '../../atoms/Icon/Search'
import ButtonGroup from '../../molecules/ButtonGroup'
import NavBar from '../../molecules/NavBar'
import LogoIcon from '../../atoms/Icon/Logo'
import AdvertBar from '../../atoms/AdvertBar'
import TextLink from '../../atoms/TextLink'

const PageHeader: React.FC = () => (
  <>
    <div className="sticky top-0 w-full z-10">
      <AdvertBar>
        <p className="font-inter text-base font-normal text-grey-700 leading-[16.94px] tracking-[0.07em] text-left">
          NEW CUSTOMERS GET 15% OFF! USE CODE{' '}
          <TextLink
            text="WELCOME15"
            onClick={() => {
              /* Empty placeholder */
            }}
          />
        </p>
      </AdvertBar>
      <NavBar
        leftSlot={
          <ButtonGroup>
            <Button
              size="small"
              disabled={true}
              onClick={() => {
                /* Empty placeholder */
              }}
            >
              HOME
            </Button>
            <Button
              size="small"
              onClick={() => {
                /* Empty placeholder */
              }}
            >
              ABOUT
            </Button>
            <Button
              size="small"
              onClick={() => {
                /* Empty placeholder */
              }}
            >
              PRODUCTS
            </Button>
          </ButtonGroup>
        }
        centerSlot={<LogoIcon />}
        rightSlot={
          <ButtonGroup>
            <IconButton
              icon={<BasketIcon />}
              size="small"
              className="w-[43px] h-[43px]"
            />
            <IconButton
              icon={<PersonIcon />}
              size="small"
              className="w-[43px] h-[43px]"
            />
            <IconButton
              icon={<SearchIcon />}
              size="small"
              className="w-[43px] h-[43px]"
            />
          </ButtonGroup>
        }
      />
    </div>
  </>
)
export default PageHeader
