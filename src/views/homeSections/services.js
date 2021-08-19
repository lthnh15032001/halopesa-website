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

      undo: file(sourceInstanceName: { eq: "product" }, name: { eq: "undo" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }

      file: file(sourceInstanceName: { eq: "product" }, name: { eq: "file" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }

    }
  `)
  const data = [
    { name: "", },
    { name: "Send and receive money", text: "HaloPesa corporates with all Mobile Financial Service Providers (MFSP) and Banks in Tanzania. Therefore HaloPesa customers can easily send to and receive money from MFSPs (as TigoPesa, M-Pesa, Airtel Money) and Banks (as CRDB, NMB, FINCA). " },
    { name: "Buy airtime and bundles", text: "- Top up airtime at anytime from anywhere with discount up to 5% \n- Buy bundle with the best promotion for voice, sms and data which only have on HaloPesa." },
    { name: "Cash out money from agents", text: "Customers can withdraw quickly and conveniently at more than 20.000  our Agent around Tanzania but also through HaloPesa you can withdraw through Umoja ATM and rest assured to have easy access to money anywhere you are." },
    { name: "Pay bills such as LUKU", text: "Pay your recurring bills (as electricity, government service, TV subscription,betting…)  with the ease and convenience via HaloPesa. " },
    { name: "Bank Transaction", text: "HaloPesa customers can now send money to the bank and withdraw money from the bank without the actual visit to the bank branch or ATM, it is very convenient and reliable. But also it gives you the control of your accounts in the comfort of your own home." },
    { name: "MiniStatement", text: "This service enables a customer to reverse a wrong transaction as soon as they realize the mistake. It is very easy you can now reverse a wrong transaction on your own by following the simple steps below. Feel free, Feel safe with HaloPesa self-service" },
    { name: "Self-Reversal", text: "HaloPesa enables you to access your transactional statement and balances of your HaloPesa account at any time you want. It is convenient and reliable no need to visit a HaloPesa branch From purchasing bundles and airtime to Paying bills HaloPesa gives you a wide range of products and services to choose from.    " }
  ]

  return (

    <StyledSection>
      <StyledContainer>
        <TitleRes
          name="HALOPESA FOR YOU"
          des="HaloPesa is determined to make your life easier and simple by giving you control just at the tip of your fingerprints. HaloPesa allows its customer to send and receive money quickly and safely and in the comfort of your own home 24/7. HaloPesa has the affordable prices for transaction, it’s a wide spread network and it is easy and safe to use."
        />
        <div className="d-flex justify-content-center align-items-center ">
          <a href="/" className="mt-md-3 mb-md-3 mt-2 mb-2"
            onClick={(e) => {
              e.preventDefault();
              navigate("/services");
            }}
          >Learn more</a>
        </div>
        <div className="flex-row d-none d-md-flex d-lg-flex row mt-4">
          <div className="col-6 col-md-6 col-lg-4">
            <CardServices link="/blog/send-and-receive-money" name="Send and receive money" fluid={serviceBrief.sendmoney.childImageSharp.fluid} text="HaloPesa corporates with all Mobile Financial Service Providers (MFSP) and Banks in Tanzania. Therefore HaloPesa customers can easily send to and receive money from MFSPs (as TigoPesa, M-Pesa, Airtel Money) and Banks (as CRDB, NMB, FINCA). " />
            <CardServices link="" name="Cash out money from agents" className="mb-3 mt-3" fluid={serviceBrief.withdraw.childImageSharp.fluid} text="Customers can withdraw quickly and conveniently at more than 20.000  our Agent around Tanzania but also through HaloPesa you can withdraw through Umoja ATM and rest assured to have easy access to money anywhere you are." />
            <CardServices link="/blog/self-reveal" name="Self-Reversal" fluid={serviceBrief.undo.childImageSharp.fluid} text="This service enables a customer to reverse a wrong transaction as soon as they realize the mistake. It is very easy you can now reverse a wrong transaction on your own by following the simple steps below. Feel free, Feel safe with HaloPesa self-service" />
          </div>
          <div className="col-6  col-md-4 justify-content-center align-items-center d-none d-md-none d-lg-flex flex-column">
            <Image fluid={serviceBrief.serviceBrief.childImageSharp.fluid} width="280px" />
            <Button name="Tariff" onClick={() => {
              navigate("/blog/tariff")
            }} />

          </div>
          <div className="col-6 col-md-6 col-lg-4">
            <CardServices link="/blog/how-to-buy-airtime" name="Buy airtime and bundles" fluid={serviceBrief.airtime.childImageSharp.fluid} text="- Top up airtime at anytime from anywhere with discount up to 5% - Buy bundle with the best promotion for voice, sms and data which only have on HaloPesa. " />
            <CardServices link="/blog/pay-bill" name="Pay bills such as LUKU" className="mb-3 mt-3" fluid={serviceBrief.bill.childImageSharp.fluid} text="Pay your recurring bills (as electricity, government service, TV subscription,betting…)  with the ease and convenience via HaloPesa. " />
            <CardServices link="/blog/bank-transaction" name="Bank Transaction" fluid={serviceBrief.bank.childImageSharp.fluid} text="HaloPesa customers can now send money to the bank and withdraw money from the bank without the actual visit to the bank branch or ATM, it is very convenient and reliable. But also it gives you the control of your accounts in the comfort of your own home. " />
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
                  <AccordionDetails onClick={() => navigate("/blog/how-to-send")}>
                    <Typography>{x.text}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              )
            })
          }
        </div>
        <div className="d-flex justify-content-center align-items-center flex-column mt-4 d-md-flex d-lg-none">

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