import React, { useState } from "react"
import styled from "styled-components"
import { Section, Container } from "../../components/global"
import { TitleRes } from "../../components/TitleRes"
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import { withStyles } from '@material-ui/core/styles';

import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
const Accordion = withStyles({
  root: {
    border: '1px solid rgba(0, 0, 0, .125)',
    boxShadow: 'none',
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
    '&$expanded': {
      margin: 'auto',
    },
  },
  expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
  root: {
    backgroundColor: 'rgba(0, 0, 0, .03)',
    borderBottom: '1px solid rgba(0, 0, 0, .125)',
    marginBottom: -1,
    minHeight: 56,
    '&$expanded': {
      minHeight: 56,
    },
  },
  content: {
    '&$expanded': {
      margin: '12px 0',
    },
  },
  expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiAccordionDetails);


const FAQ = () => {
  const qs = [
    { qs: "How can I check my remaining balance? ", ans: "Dial *102*01# to see your basic balance, extra balance, bonuses and bundle balance." },
    { qs: "Is there any bundle for International destinations?", ans: "Yes, dial *148*66# then choose “International”    " },
    { qs: "Can I borrow airtime if I run out?     ", ans: "Yes you can, dial *149*63*1#    " },
    { qs: "Why can't I see my university offer?    ", ans: "To register University Offer you should have a University SIM card then dial *148*55#    " },
    { qs: "How can I cancel Halo quiz service?     ", ans: "Dial 0901221111 listen to IVR, press 9 to cancel and then press 1 to confirm if the service is cancelled    " },
    { qs: "How can I buy bundle for my friend by using my number?     ", ans: "Dial *148*66# then choose number 9 (gift to friend).    " },
    { qs: "How can I subscribe to Halotel bundles?     ", ans: "Dial *148*66# to subscribe    " },
    { qs: "What are Halotel service codes?     ", ans: "Check basic balance: *102#, Check promotion balance: *102*01#, Recharge: *104*pin#, Check register information: *106#, Halotel Services: *148*66# Activate promotion for handset: *148*28# Activate roaming service: *15042*1# Disable roaming service: *15042*2#    " },
    { qs: "How can I register while I don't have fingerprint?     ", ans: "You have to visit our Halotel shop/office, where you will fill form and take it to NIDA where it will be signed and your information will be filled in NIDA'S database. Then you will come back and we will update your information." },
    { qs: "Can I subscribe to Roaming Services?     ", ans: "Yes you can, dial *150*42*1# before departure.    " },
    { qs: "How can I configure internet for the first time?     ", ans: "Go to Access point names Fill the followings; Name - Halotel APN - Internet APN type - default Authentication type: PAP or CHAP and then save.    " },
    { qs: "How can I upgrade my Simcard to 4G?     ", ans: "Visit our Halotel shops, agents and or Office near you for more assistance, and when you upgrade your Simcard Halotel will give you 4G Free to use for 7 days.    " },
    { qs: "What I need to register new Simcard?     ", ans: "Visit Halotel agent/shop or office with your NIDA ID card for registration    " },
    { qs: "Can I use my passport to update my information by NIDA?     ", ans: "Yes you can, visit our Halotel shops or offices near you for more assistance    " },
    { qs: "I scratched my voucher wrongly, what can I do?     ", ans: "For bad scratched voucher customer should visit Halotel shop or our offices." }
  ]
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <Section>
      <StyledContainer>
        <TitleRes
          name="Frequently Asked Question"
          des='How may we help you answer your questions?'
        />
        <div>
          {qs.map((x, i) => {
            return (
              <AccordionFAQ key={i+1} expanded={expanded} handleChange={handleChange}i={i} qs={x.qs} ans={x.ans} />
            )
          })}
        </div>
      </StyledContainer>
    </Section>
  )
}

export default FAQ

const AccordionFAQ = ({ handleChange, expanded, qs, ans,  i }) => {
  return (
    <Accordion className='mt-2 border' expanded={expanded === `panel${i}`} onChange={handleChange(`panel${i}`)}>
      <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
        <Typography>{qs}</Typography>
      </AccordionSummary>
      <AccordionDetails className='border-active'>
        <Typography>{ans}</Typography>
      </AccordionDetails>
    </Accordion>
  )
}
const StyledContainer = styled(Container)`
  .border-active { 
    border-left: 4.5px solid #FB741C;
  }
`
