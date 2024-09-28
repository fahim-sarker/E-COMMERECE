import React from 'react'
import Container from './Container'
import Ad from "../assets/ad2.png"

const Ads2 = () => {
  return (
    <>
      <Container>
        <div className="lg:py-[50px] py-[0px]">
            <img src={Ad}alt="ads" />
        </div>
      </Container>
    </>
  )
}

export default Ads2
