import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
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
    { name: "" },
    { name: "Send Money" },
    { name: "Airtime & Bundle" },
    { name: "Withdraw" },
    { name: "Bills Payment" },
    { name: "QR Scan" },
    { name: "Bank Transaction" },
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
        <Flex className="flex-row d-flex mt-4">
          <div className="col-6 col-md-4">
            <CardServices name="Send Money" fluid={serviceBrief.sendmoney.childImageSharp.fluid} text="HaloPesa corporates with all Mobile Financial Service Providers (MFSP) and Banks in Tanzania. Therefore HaloPesa customers can easily send to and receive money from MFSPs (as TigoPesa, M-Pesa, Airtel Money) and Banks (as CRDB, NMB, FINCA). " />
            <CardServices name="Withdraw" className="mb-3 mt-3" fluid={serviceBrief.withdraw.childImageSharp.fluid} text="HaloPesa corporates with all Mobile Financial Service Providers (MFSP) and Banks in Tanzania. Therefore HaloPesa customers can easily send to and receive money from MFSPs (as TigoPesa, M-Pesa, Airtel Money) and Banks (as CRDB, NMB, FINCA). " />
            <CardServices name="QR Scan" fluid={serviceBrief.qrscan.childImageSharp.fluid} text="HaloPesa corporates with all Mobile Financial Service Providers (MFSP) and Banks in Tanzania. Therefore HaloPesa customers can easily send to and receive money from MFSPs (as TigoPesa, M-Pesa, Airtel Money) and Banks (as CRDB, NMB, FINCA). " />
          </div>
          <div className="col-6  col-md-4 justify-content-center align-items-center d-none d-md-flex flex-column">
            <Image fluid={serviceBrief.serviceBrief.childImageSharp.fluid} width="280px" />
            <Button name="Tariff" />
            <div style={{ marginTop: 40 }}>
              <a href="/">How to use</a>
            </div>
          </div>
          <div className="col-6 col-md-4">
            <CardServices name="Airtime & Bundle" fluid={serviceBrief.airtime.childImageSharp.fluid} text="HaloPesa corporates with all Mobile Financial Service Providers (MFSP) and Banks in Tanzania. Therefore HaloPesa customers can easily send to and receive money from MFSPs (as TigoPesa, M-Pesa, Airtel Money) and Banks (as CRDB, NMB, FINCA). " />
            <CardServices name="Bills Payment" className="mb-3 mt-3" fluid={serviceBrief.bill.childImageSharp.fluid} text="HaloPesa corporates with all Mobile Financial Service Providers (MFSP) and Banks in Tanzania. Therefore HaloPesa customers can easily send to and receive money from MFSPs (as TigoPesa, M-Pesa, Airtel Money) and Banks (as CRDB, NMB, FINCA). " />
            <CardServices name="Bank Transaction" fluid={serviceBrief.bank.childImageSharp.fluid} text="HaloPesa corporates with all Mobile Financial Service Providers (MFSP) and Banks in Tanzania. Therefore HaloPesa customers can easily send to and receive money from MFSPs (as TigoPesa, M-Pesa, Airtel Money) and Banks (as CRDB, NMB, FINCA). " />
          </div>
        </Flex>
        <div className="acordion">
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
                    <Typography>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt magni, voluptas debitis
                      similique porro a molestias consequuntur earum odio officiis natus, amet hic, iste sed
                      dignissimos esse fuga! Minus, alias.
                      </Typography>
                  </AccordionDetails>
                </Accordion>
              )
            })
          }
        </div>
        <div className="d-flex justify-content-center align-items-center flex-column mt-4 d-md-none">
          <div className="mb-2">
            <a href="/">How to use</a>
          </div>
          <Button name="Tariff" />
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

const Flex = styled.div`
  display: grid;
  justify-content: space-between;
  align-content: center;
  grid-template-columns: 1fr 1fr;
  @media (max-width: ${props => props.theme.screen.md}) {
    grid-template-columns: 1fr;
    grid-gap: 64px;
  }
  @media (max-width: ${props => props.theme.screen.xs}) {
    display: none!important
  }
`
const H5 = styled.div`
    color: #090909;
    font-size: 18px;
    font-weight: 600
`