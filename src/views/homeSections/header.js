import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
// import Img from "gatsby-image"
import { Image } from '../../components/common/image'
import { Container } from "../../components/global"
import { LogoHalopesa } from "../../components/common/navigation/LogoHalopesa"
import { useTranslation } from 'react-i18next';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import i18next from 'i18next'
// import { changeLocalize } from '../../utils/localize'
import Slider from "react-slick";
const Header = () => {
  const { t } = useTranslation();
  const data = useStaticQuery(graphql`
    query {
      greenSkew: file(sourceInstanceName: { eq: "product" }, name: { eq: "HeaderPic" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      appstore: file(sourceInstanceName: { eq: "product" }, name: { eq: "appstore" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      ggplay: file(sourceInstanceName: { eq: "product" }, name: { eq: "ggplay" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    autoplay: true
  };
  return (
    <HeaderWrapper id="top">
      <Container>
        <Flex className="flex-lg-row-reverse flex-column flex-md-column d-flex ">
          <HeaderTextGroup className="d-flex flex-column justify-content-center">
            <div className="d-lg-block d-md-none d-none">
              <LogoHalopesa styles={{
                marginBottom: "22px",
                width: "100%",
                justifyContent: "end",
              }}
              />
            </div>
            <div className="introduce d-block d-md-block d-lg-none">
              Introducing halopesa website
            </div>
            <h1 className="text1 ">
              {t('Stay cool')}
            </h1>
            <h1 className="text1 ">
              {t('stay convenient')}
            </h1>
            <Slider {...settings} className="slick">
              <div className="w-100">
                <div className="h2">
                  Welcome and Enjoy the digital payments transformation with HaloPesa.
                </div>
              </div>
              <div className="w-100">
                <h2 className="h2">
                  Our customers can access the HaloPesa service through the USSD code *150*88# OR the Android/iOs Application namely the HaloPesa App and enjoy the HaloPesa service to the fullest.
                </h2>
              </div>
              <div className="w-100">
                <h2 className="h2">
                  The HaloPesa App brings to our customers one of its kind and the best user experience with  bundles of services including Send Money , withdraw , Pay for goods & Services,  Personal Savings, Transfers to Bank accounts etc.</h2>
              </div>
              <div className="w-100">
                <h2 className="h2">
                  The HaloPesa customers are in for a treat due for easier, better and safer and affordable services. </h2>
              </div>
            </Slider>
            <div className="flex-row d-flex img-res pt-md-5 pt-4">
              <Image display smWidth='142px' width="170px" fluid={data.appstore.childImageSharp.fluid} />
              <Image display smWidth='142px' width="170px" fluid={data.ggplay.childImageSharp.fluid} />
            </div>
          </HeaderTextGroup>
          <Image display width="680px" smWidth="360px" fluid={data.greenSkew.childImageSharp.fluid} />

        </Flex>
      </Container>
    </HeaderWrapper>
  )
}

export default Header

const HeaderWrapper = styled.header`
  background-color: #f8f8f8;
  padding: 100px 0 80px 0;
  position: relative;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - 5vw));
  @media (max-width: ${props => props.theme.screen.xs}) {
    padding: 85px 0 0px 0;
  }
`


const HeaderTextGroup = styled.div`
  margin: 0;
  .introduce { 
    display: none
  }
  .slick {
    width: 408px
  }
  .h2 {
    font-size: 15px;
    margin-bottom: 0;
    color: #7A7A7A;
  }

  .introduce { 
        padding: 0 0 15px 0;
        text-align: center;
        color: #747474;
        font-size: 18px;
        font-weight: 500;
        display: block
    }
  @media (max-width: ${props => props.theme.screen.xs}) {
    .slick {
      width: 102%
    }
    .h2 {
      font-size: 15px;
    }
      align-items: center;
      .img-res {
        justify-content: center
      }

      .text1 { 
        font-size: 30px;
        line-height: 30px;
        font-weight: bold;
      }
      h2 { 
        text-align: center;
        color: #747474;
        padding-top: 13px;
      }
    }
    > div {
      width: 120%;
      margin-bottom: -4.5%;

      @media (max-width: ${props => props.theme.screen.md}) {
        margin: 0 16px;
      }
    }

    h1 {
      color: ${props => props.theme.color.primary};
      text-transform: uppercase;
    }

    h2 {
      margin-bottom: 24px;
      ${props => props.theme.font_size.regular}
    }

    p {
      margin-bottom: 48px;
    }

  }
  @media (min-width: ${props => props.theme.screen.xs}) and (max-width: ${props => props.theme.screen.md}) {
    align-items: center;
    .img-res {
        justify-content: center
      }
`

const Flex = styled.div`
  display: grid;
  justify-content: space-between;
  align-content: center;
  grid-template-columns: 1fr 1fr;
  @media (min-width: ${props => props.theme.screen.lg}) {
    grid-template-columns: 1fr;
    grid-gap: 40px;
  }
  @media (max-width: ${props => props.theme.screen.xs}) {
    grid-template-columns: 1fr;
    grid-gap: 0px;
  }
`
