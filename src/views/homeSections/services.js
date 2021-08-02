import React from "react"
import styled from "styled-components"
import { graphql, navigate, useStaticQuery } from "gatsby"
import { Section, Container } from "../../components/global"
// import Img from "gatsby-image"
import { CardServices } from '../../components/CardServices'
import { Button } from '../../components/Button'
import { Image } from '../../components/common/image'
import { TitleRes } from '../../components/TitleRes'
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const Services = () => {
  const serviceBrief = useStaticQuery(graphql`
    query {
      serviceBrief: file(sourceInstanceName: { eq: "product" }, name: { eq: "ipx" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      sendmoney: file(sourceInstanceName: { eq: "product" }, name: { eq: "sendmoney" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      withdraw: file(sourceInstanceName: { eq: "product" }, name: { eq: "withdraw" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      qrscan: file(sourceInstanceName: { eq: "product" }, name: { eq: "qrscan" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      airtime: file(sourceInstanceName: { eq: "product" }, name: { eq: "airtime" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      bill: file(sourceInstanceName: { eq: "product" }, name: { eq: "bill" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      bank: file(sourceInstanceName: { eq: "product" }, name: { eq: "bank" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)
  const data = [
    { name: "",},
    { name: "Send Money",  text: "HaloPesa corporates with all Mobile Financial Service Providers (MFSP) and Banks in Tanzania. Therefore HaloPesa customers can easily send to and receive money from MFSPs (as TigoPesa, M-Pesa, Airtel Money) and Banks (as CRDB, NMB, FINCA). "  },
    { name: "Airtime & Bundle", text: "- Top up airtime at anytime from anywhere with discount up to 5% \n- Buy bundle with the best promotion for voice, sms and data which only have on HaloPesa." },
    { name: "Withdraw", text: "Customers can withdraw quickly and conveniently at more than 20.000  our Agent around Tanzania but also through HaloPesa you can withdraw through Umoja ATM and rest assured to have easy access to money anywhere you are."  },
    { name: "Bills Payment", text: "Pay your recurring bills (as electricity, government service, TV subscription,betting…)  with the ease and convenience via HaloPesa. "  },
    { name: "HaloYako", text: "HaloYako is a digital finance product designed by FINCA Microfinance Bank in partnership with Halotel for mobile customers. HaloYako enables users to save their money safely and enjoy instant access to small loans."  },
    { name: "Bank Transaction", text: "HaloPesa customers can now send money to the bank and withdraw money from the bank without the actual visit to the bank branch or ATM, it is very convenient and reliable. But also it gives you the control of your accounts in the comfort of your own home."  },
  ]

  return (

    <StyledSection>
      <StyledContainer>
        <TitleRes
          name="Services"
          des="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
        />
        <div className="d-flex justify-content-center align-items-center ">
          <a href="/" className="mt-md-3 mb-md-3 mt-2 mb-2">Learn more</a>
        </div>
        <div className="flex-row d-none d-md-flex d-lg-flex row mt-4">
          <div className="col-6 col-md-6 col-lg-4">
            <CardServices name="Send Money" fluid={serviceBrief.sendmoney.childImageSharp.fluid} text="HaloPesa corporates with all Mobile Financial Service Providers (MFSP) and Banks in Tanzania. Therefore HaloPesa customers can easily send to and receive money from MFSPs (as TigoPesa, M-Pesa, Airtel Money) and Banks (as CRDB, NMB, FINCA). " />
            <CardServices name="Withdraw" className="mb-3 mt-3" fluid={serviceBrief.withdraw.childImageSharp.fluid} text="Customers can withdraw quickly and conveniently at more than 20.000  our Agent around Tanzania but also through HaloPesa you can withdraw through Umoja ATM and rest assured to have easy access to money anywhere you are." />
            <CardServices name="HaloYako" fluid={serviceBrief.qrscan.childImageSharp.fluid} text="HaloYako is a digital finance product designed by FINCA Microfinance Bank in partnership with Halotel for mobile customers. HaloYako enables users to save their money safely and enjoy instant access to small loans." />
          </div>
          <div className="col-6  col-md-4 justify-content-center align-items-center d-none d-md-none d-lg-flex flex-column">
            <Image fluid={serviceBrief.serviceBrief.childImageSharp.fluid} width="280px" />
            <Button name="Tariff" onClick={() => {
            navigate("/blog/tariff")
          }} />
            <div style={{ marginTop: 40 }}>
              <a href="/" onClick={(e) => {
                e.preventDefault();
                navigate("/blog/how-to-send")
              }}>How to use</a>
            </div>
          </div>
          <div className="col-6 col-md-6 col-lg-4">
            <CardServices name="Airtime & Bundle" fluid={serviceBrief.airtime.childImageSharp.fluid} text="- Top up airtime at anytime from anywhere with discount up to 5% - Buy bundle with the best promotion for voice, sms and data which only have on HaloPesa. " />
            <CardServices name="Bills Payment" className="mb-3 mt-3" fluid={serviceBrief.bill.childImageSharp.fluid} text="Pay your recurring bills (as electricity, government service, TV subscription,betting…)  with the ease and convenience via HaloPesa. " />
            <CardServices name="Bank Transaction" fluid={serviceBrief.bank.childImageSharp.fluid} text="HaloPesa customers can now send money to the bank and withdraw money from the bank without the actual visit to the bank branch or ATM, it is very convenient and reliable. But also it gives you the control of your accounts in the comfort of your own home. " />
          </div>
        </div>
        <div className="acordion d-fex d-md-none d-lg-none">
          {
            data.map((x, i) => {
              return (
                <Accordion className={`${i === 0 && `d-none`}`} key={i.toString()}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <H5 >{x.name}</H5>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>{x.text}
                      </Typography>
                  </AccordionDetails>
                </Accordion>
              )
            })
          }
        </div>
        <div className="d-flex justify-content-center align-items-center flex-column mt-4 d-md-flex d-lg-none">
          <div className="mb-2">
            <a href="/" onClick={(e) => {
                e.preventDefault();
                navigate("/blog/how-to-send")
              }}>How to use</a>
          </div>
          <Button name="Tariff" onClick={() => {
            navigate("/blog/tariff")
          }} />
        </div>
      </StyledContainer>
    </StyledSection>)
}

export default Services

const StyledSection = styled(Section)`
  background-color: ${props => props.theme.color.background.light};
`
const StyledContainer = styled(Container)`
  @media (min-width: ${props => props.theme.screen.md}) {
    .acordion {
      display: none!important
    }
  }
`

// const Flex = styled.div`
//   display: grid;
//   justify-content: space-between;
//   align-content: center;
//   grid-template-columns: 1fr 1fr;
//   @media (max-width: ${props => props.theme.screen.md}) {
//     grid-template-columns: 1fr;
//     grid-gap: 64px;
//   }
//   @media (max-width: ${props => props.theme.screen.xs}) {
//     display: none!important
//   }
// `
const H5 = styled.div`
    color: #090909;
    font-size: 18px;
    font-weight: 600
`