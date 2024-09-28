import React from 'react'
import Container from './Container'
import Ad from "../assets/Ad_1.png"
import Ad1 from "../assets/Ad_2.png"
import Ad2 from "../assets/Ad_3.png"

const Ads = () => {
  return (
    <section className="lg:py-[118px] py-[0]">
      <Container>
        <div className="flex justify-between">
          <div className="w-[48%]">
            <img src={Ad} alt="" />
          </div>
          <div className="w-[48%]">
            <div className="">
              <img src={Ad1} alt="" />
            </div>
            <div className="lg:mt-[40px] mt-[10px]">
              <img src={Ad2} alt="" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Ads
