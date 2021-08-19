import React from 'react'
import styled from 'styled-components';
import { Container, Section } from "../../components/global"
import { CardServices } from '../../components/CardServices'
import { graphql, useStaticQuery } from "gatsby"
import { TitleRes } from '../../components/TitleRes'
const AllServices = () => {
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
      iconpromote: file(sourceInstanceName: { eq: "product" }, name: { eq: "iconpromote" }) {
        childImageSharp {
            fluid(maxWidth: 1000) {
                ...GatsbyImageSharpFluid_tracedSVG
            }
        }
    }
    }
  `)
  return (
    <Section>
      <Container>
        <TitleRes
        className="m-md-3"
          name="Halopesa For You"
          des="HaloPesa is determined to make your life easier and simple by giving you control just at the tip of your fingerprints. HaloPesa allows its customer to send and receive money quickly and safely and in the comfort of your own home 24/7. HaloPesa has the affordable prices for transaction, it’s a wide spread network and it is easy and safe to use.
          "
        />
        <Flex>
          <div>
            <CardServices link="/blog/send-and-receive-money" vertical={true} className="text-center" imgWidth="80px" name="Send and receive money" fluid={serviceBrief.sendmoney.childImageSharp.fluid} text="HaloPesa corporates with all Mobile Financial Service Providers (MFSP) and Banks in Tanzania. Therefore HaloPesa customers can easily send to and receive money from MFSPs (as TigoPesa, M-Pesa, Airtel Money) and Banks (as CRDB, NMB, FINCA). "/>
            <CardServices link="" vertical={true} className="text-center mt-3 mb-3" imgWidth="80px" name="Cash out money from agents" fluid={serviceBrief.withdraw.childImageSharp.fluid} text="Customers can withdraw quickly and conveniently at more than 20.000  our Agent around Tanzania but also through HaloPesa you can withdraw through Umoja ATM and rest assured to have easy access to money anywhere you are."  />
            <CardServices link="/blog/self-reveal" vertical={true} className="text-center" imgWidth="80px" name="Self-Reversal" fluid={serviceBrief.undo.childImageSharp.fluid} text="This service enables a customer to reverse a wrong transaction as soon as they realize the mistake. It is very easy you can now reverse a wrong transaction on your own by following the simple steps below. Feel free, Feel safe with HaloPesa self-service" />
            <CardServices link="" vertical={true} className="text-center mt-3 mb-3" imgWidth="80px" name="Royal Bundle" fluid={serviceBrief.iconpromote.childImageSharp.fluid} text="This is a monthly bundle that provides our customers the comfort ability of enjoying with HaloPesa through the whole month with 7GB + 150Min (All Networks) + 400Min (Halotel) for 10,000Tsh and 15GB + 300Min (All Networks) + 800Min (Halotel) for 30,000Tsh"  />
          </div>
          <div>
            <CardServices link="/blog/how-to-buy-airtime" vertical={true} className="text-center" imgWidth="80px" name="Buy airtime and bundles" fluid={serviceBrief.airtime.childImageSharp.fluid} text="- Top up airtime at anytime from anywhere with discount up to 5% - Buy bundle with the best promotion for voice, sms and data which only have on HaloPesa. " />
            <CardServices link="/blog/pay-bill" vertical={true} className="text-center mt-3 mb-3" imgWidth="80px" name="Pay bills such as LUKU" fluid={serviceBrief.bill.childImageSharp.fluid} text="Pay your recurring bills (as electricity, government service, TV subscription,betting…)  with the ease and convenience via HaloPesa. " />
            <CardServices link="/blog/ministatement" vertical={true} className="text-center" imgWidth="80px" name="MiniStatement" fluid={serviceBrief.file.childImageSharp.fluid} text="HaloPesa enables you to access your transactional statement and balances of your HaloPesa account at any time you want. It is convenient and reliable no need to visit a HaloPesa branch From purchasing bundles and airtime to Paying bills HaloPesa gives you a wide range of products and services to choose from. " />
          </div>
          <div>
            <CardServices link="/blog/bank-transaction" vertical={true} className="text-center" imgWidth="80px"  name="Bank Transaction" fluid={serviceBrief.bank.childImageSharp.fluid} text="HaloPesa customers can now send money to the bank and withdraw money from the bank without the actual visit to the bank branch or ATM, it is very convenient and reliable. But also it gives you the control of your accounts in the comfort of your own home. "  />
            <CardServices link="" vertical={true} className="text-center mt-3 mb-3" imgWidth="80px" name="HaloPesa Visa on mobile" fluid={serviceBrief.bank.childImageSharp.fluid} text="Pay your invoice at a large of our Merchant Network (as HaloPesa Merchant, M-Pesa Merchant, Tigo Pesa Merchant, Visa and Masterpass Agent)"  />
            <CardServices link="" vertical={true} className="text-center mt-3 mb-3" imgWidth="80px" name="Mega Bundle" fluid={serviceBrief.iconpromote.childImageSharp.fluid} text="This is a weekly bundle that provides our customers the comfort ability of enjoying with HaloPesa through the whole week with 1GB + 10Min (Halotel)for 1000Tsh and 3GB + 30Min (All Networks) for 3000Tsh."  />
          </div>
        </Flex>
      </Container>
    </Section>
  )
}

{/* <Card className="shadow border-0 mt-4">
                        <Image display smWidth="340px" fluid={img.news.childImageSharp.fluid} width="368px" />
                        <CardBody className="pt-0">
                            <CardText className="text-center"><strong>Mega Bundle</strong> </CardText>
                            <div className="text-center">This is a weekly bundle that provides our customers the comfort ability of enjoying with HaloPesa through the whole week with <strong>1GB + 10Min (Halotel)</strong>  for <strong>1000Tsh and 3GB + 30Min (All Networks)</strong>  for 3000Tsh.</div>
                        </CardBody>
                    </Card>
                    <Card className="shadow border-0 mt-4">
                        <Image display smWidth="340px" fluid={img.news.childImageSharp.fluid} width="368px" />
                        <CardBody className="pt-0">
                            <CardText className="text-center"><strong>Royal Bundle</strong></CardText>
                            <div className="text-center">This is a monthly bundle that provides our customers the comfort ability of enjoying with HaloPesa through the whole month with <strong>7GB + 150Min (All Networks) + 400Min (Halotel)</strong> for 10,000Tsh and <strong>15GB + 300Min (All Networks) + 800Min (Halotel)</strong> for 30,000Tsh.</div>
                        </CardBody>
                    </Card> */}

export default AllServices;


const Flex = styled.div`
    display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 32px;
  justify-content: start;
  padding-top: 20px;
  @media (max-width: ${props => props.theme.screen.sm}) {
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 32px;
  }
  
`