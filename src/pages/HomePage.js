import {
  Col,
  Container,
  Row,
  List,
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
  UncontrolledAccordion,
} from 'reactstrap';
import { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import { Link } from 'react-router-dom';
import './HomePage.css';
import DisplayCard from '../display/DisplayCard';
import statue from '../assets/workers1.jpg';
import FDR from '../assets/FDR_nobiz.jpg';
import hand from '../assets/the_hand_that_will_rule_the_world.jpg';
import CBOchart1 from '../assets/CBO_wealth_chart_1.png';
import CBOchart2 from '../assets/wealth_increase_distribution.png'
import profits from '../assets/profits_vs_labor_costs_EPI.png';
import { motion, } from 'framer-motion';

const HomePage = () => {
  const [toggle, setToggle] = useState(false);
  const animatedStyle = useSpring({
    opacity: toggle ? 1 : 0,
    transform: toggle ? 'scale(1,1)' : 'scale(1,0)',
    config: { duration: 500 }
  });
  useEffect(() => {
    setToggle(true);
  }, []);

  useEffect(() => {
    window.scrollTo(0,0);
  }, []);

  const springDown = {
    init: { y: -500 },
    animate: {y: [-500, 0, -75, 0, -25, 0], times: [null, .7, .8, .9, .95, 1] ,
    transition: { delay: .75, duration: 2, type: "spring" } },
    viewport: { once: true }
  };
  const pullUp = {
    hidden: { y: "200px", opacity: 0 },
    visible: { y: "0", opacity: 1, transition: { delay: .5, duration: 1 } },
    viewport: { once: true }
  };
  const pullLeft = {
    hidden: { x: "60vw", opacity: 0 },
    visible: { x: "0", opacity: 1, transition: { delay: 1, duration: 1 } },
    viewport: { once: true }
  };
  const pullRight = {
    hidden: { x: "-60vw", opacity: 0 },
    visible: { x: "0", opacity: 1, transition: { delay: .75, duration: 1 } },
    viewport: { once: true }
  };
  const pullTowards = {
    init: { scale: 0, opacity: 0 },
    animate: { scale: [0, 1.5, 1], times: [null, .7, 1 ],
    opacity: 1, transition: { delay: 1.25, duration: 2 }},
    viewport: { once: true }
  };
  const pullAway = {
    init: { scale: 0, opacity: 0 },
    animate: { scale: [0, 10, .4, 1], times: [null, .01, .7, 1 ],
    opacity: 1, transition: { delay: 1.25, duration: 2 }},
    viewport: { once: true }
  };
  
  return(
    
    <Container className="container-bg full-width" style={{color: 'black', overflowX: 'hidden' }} >
      <Row className='py-4'>
      <motion.div
      variants={pullTowards}
      animate="animate"
      initial="init"
      // animate={{ scale: [0, 1.5, 1], times: [null, .7, 1 ]}}
      // transition={{ delay: 2, duration: 2}}
      >
      <h1 className='display-1 text-center lead'>All Workers Union</h1>
      </motion.div>
      </Row>
      <motion.div
      variants={springDown}
      animate="animate"
      initial="init"
      // animate={{ y: [-500, 0, -75, 0, -25, 0], times: [null, .8, .87, .94, .97, 1] }}
      // transition={{ delay: 1, duration: 1.5, type: "spring" }}
      >
      <Row className='banner1 text-center'>
        <h1><Link to='/GetInvolved'>Join Our Movement</Link></h1>
        <h3>We Are Organizing a <b>Million Man Strike</b> to Negotiate with the Government</h3>
        <h3>Together we have the Power to Demand Fair Compensation for our Labor</h3>
      </Row>
      </motion.div>

      {/* change image to a column so that text can be vertically aligned */}
      <animated.div style={animatedStyle}>
      <Row className='firstImage justify-content-center mt-3'>
      {/* <img src={statue} alt='Statue of Workers' style={{maxWidth: '100%'}}/> */}
      
      <Col className='imageText my-auto'>
      <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 1, duration: 5 }}
      viewport={{ once: true }}
      >
        <h1 className='display-4 imageTextProps1'>We Are Not Left<span className='imageTextProps2'>We Are Not Right</span></h1> 
        </motion.div>
      </Col>
      
      </Row>
      </animated.div>

      {/* Beneath primary Banner */}
      <Row>
        <motion.div
        variants={pullUp}
        initial="hidden"
        whileInView='visible'
        >
        <h1 className='display-4 text-center'>We Fight for the Benefit of All Workers</h1>
        </motion.div>
        <motion.div
        variants={pullRight}
        initial="hidden"
        whileInView='visible'
        >
        <h2 className='text-center'>Politicians and the Media are Working to Divide Us </h2>
        </motion.div>
        <motion.div
        variants={pullLeft}
        initial="hidden"
        whileInView='visible'
        >
        <h2 className='text-center'>They want the Left and Right at War so that Nobody Looks Up
        </h2>
        </motion.div>
        <motion.div
        whileInView={{ scale: [0, 0, 1.5, 1], times: [null, 0.01, .7, 1 ], opacity: [0, 0, .7, 1]}}
        transition={{ delay: 1.5, duration: 2}}
        >
        <h3 className='text-center'>Greed and a lack of empathy should not be rewarded characteristics in an ethical society
        </h3>
        </motion.div>
      </Row>

      <motion.div
      variants={pullAway}
      whileInView="animate"
      initial="init"
      >
      <Row className='banner2 text-center mt-4'>      
        <h1>Our Solutions</h1>
      </Row>
      </motion.div>
      <Row className='mt-5 lrmargin'>
        <Col md={4} className='order-last order-md-first'>
        <motion.div
      whileInView={{ y: [0, -200, 0, -75, 0, -25, 0], times: [null, .01, .8, .87, .94, .97, 1], opacity: [0, 0, .5, .75, .9, .95, 1] }}
      transition={{ delay: 1, duration: 1.5, type: "spring" }}
      viewport={{ once: true }}
      >
          <img className='mb-5' href='/' src={FDR} style={{maxWidth: '100%'}} alt='FDR Quote' />
        </motion.div>
        <motion.div
          whileInView={{ x: [0, -200, 0], opacity: [0, 0, 1], times: [0, .01, 1] }}
          transition={{ delay: .5, duration: 1.5, bounce: 0.1 }}
          viewport={{ once: true }}
        // hidden: { x: "-60vw", opacity: 0 },
        // visible: { x: "0", opacity: 1, transition: { delay: .75, duration: 1 } },
        // viewport: { once: true }
        >
          <img className='mb-5' href='/' src={hand} style={{maxWidth: '100%'}} alt='the hand that will rule the world' />
          </motion.div>  
        </Col>

        {/* Accordian */}
        <Col className='solutions justify-content-end ms-2'>
        <motion.div
        variants={pullLeft}
        initial="hidden"
        whileInView='visible'
        >
  <UncontrolledAccordion defaultOpen="1" style={{whiteSpace: 'pre-wrap'}} 
  className='order-first order-md-last'
  >
  <AccordionItem>
    <AccordionHeader targetId="1">
      Balanced Wage Ratio for Employees
    </AccordionHeader>
    <AccordionBody accordionId="1">
      <strong>
        The total compensation for the highest paid employee can be a maximum of 20 times higher than the total compensation for the lowest paid employee. 
      </strong>
      {' '}CEOs at large corporations currently earn in one year what it would take the majority of their employees hundreds or thousands of years to earn. More money in the hands of the general population means more money circulating within the economy. The wealthy taking more is equal to burning money, since it is hoarded in a bank account or moved offshore and will never be spent. Increasing employee wages will also provide additional revenue for the government to produce more jobs and increase their compensation as well.
      {'\n\n'}
      The low wages currently paid to employees of large corporations equate to theft from the middle class. These wages are so low that the employees require government assistance to survive; this assistance is paid for by taxpayers. Corporations earning billions in profit each year should not have their employees' wages subsidized by taxpayers - they should pay a living wage.
      {'\n\n'}
      Employers would be responsible to ensure that contractors meet the wage ratio for the employers company. This would close the loophole of hiring out certain staff in an attempt to keep wages low and would negate the benefit of hiring foreign workers. 
    </AccordionBody>
  </AccordionItem>
  <AccordionItem>
    <AccordionHeader targetId="2">
      32 Hour Work week
    </AccordionHeader>
    <AccordionBody accordionId="2">
      <strong>
        Any work performed over 32 hours will be considered overtime and employees earning less than half the maximum compensation at the company must be paid 1.5 times their base pay.
      </strong>
      {' '}The 40 hour work week was negotiated for at a time where one worker supported a family. With two workers in each family we do not have the time and energy to perform all of life's other necessary tasks such as properly raising children and cooking healthy meals. Technology advancements have increased productivity in all occupations over the last century and this should be used to benefit all people, not only the wealthy. Studies have shown little to no productivity loss in this reduction of hours in a work week. A reduction in work hours will lead to increased happiness and health in a population. We are not living to work, we are working to live.
    </AccordionBody>
  </AccordionItem>
  <AccordionItem>
    <AccordionHeader targetId="3">
      Tie Employee Compensation to Profits and Stock Buybacks
    </AccordionHeader>
    <AccordionBody accordionId="3">
      <strong>
        A company cannot purchase stock worth more than the total compensation to all employees in a fiscal year. A company may not profit (not including stock buybacks) more in a fiscal year than the total compensation to all employees.
      </strong>
      {' '}Employees generate revenue and profits for corporations. They deserve to be adequately compensated for the revenue they produce. This solution would allow companies to disburse an equal amount towards stock buybacks, profit savings and employee compensation, essentially providing employees as a whole with 1/3 of all profits before payroll expenses. 
    </AccordionBody>
  </AccordionItem>
  <AccordionItem>
    <AccordionHeader targetId="4">
      Paid Time Off
    </AccordionHeader>
    <AccordionBody accordionId="4">
      <strong>
        Each employee must receive a minimum of 4 weeks paid time off each year.  
      </strong>
      {' '}Constantly working is not just physically and mentally exhausing, it is unsustainable. Humans need rest and time away from work. We are not on this planet to simply make others wealthy. We wish to have fulfilling lives and spend time with friends and family.
    </AccordionBody>
  </AccordionItem>
  <AccordionItem>
    <AccordionHeader targetId="5">
      Severance Payments
    </AccordionHeader>
    <AccordionBody accordionId="5">
      <strong>
        Severance requirements (months worked/months severance): 
        {'\n'}3/1, 6/3, 12/6, 36/12 
      </strong>
      {'\n'}Companies have little to no empathy for the well-being of their employees. Workers deserve dignity and corporations should not be allowed to throw us away like unwanted refuse. Providing adequate severance for employees gives them time to find new positions commensurate with their skillset rather than needing to take the first available job just to pay their bills. Additionally, this would result in less people being paid by the government for unemployment, thus shifting the responsibility of the injured party's wellbeing to their employer rather than the taxpayers.
    </AccordionBody>
  </AccordionItem>
  <AccordionItem>
    <AccordionHeader targetId="6">
      Healthcare Overhaul
    </AccordionHeader>
    <AccordionBody accordionId="6">
      <strong>
        Healthcare should not be tied to employers and needs to be affordable to all citizens.
      </strong>
      {' '}The current healthcare system provides large corporations a major advantage over small businesses who cannot afford insurance companies' outrageous rates. In addition, employees should not be beholden to employers for healthcare, as it forces them to stay in a position regardless of whether it is an abusive environment. Healthcare is a human necessity and should be treated as such. It needs to be affordable and outside of employers' reach.
      {'\n\n'}
      With low wages, high premiums and daunting deductibles, many workers are unable to afford healthcare and we are one accident or serious illness away from medical bankruptcy. As the wealthiest country in the world this is simply unacceptable.  Only the poor, wealthy and elderly have access to affordable medical care and many with long term illness choose not to work so that they may afford their medicine.
    </AccordionBody>
  </AccordionItem>
  <AccordionItem>
    <AccordionHeader targetId="7">
      Adequate Penalties for Employers Breaking Labor Laws
    </AccordionHeader>
    <AccordionBody accordionId="7">
      <strong>
        Increased corporate penalties for wage theft, excessively unsafe working conditions and union busting. Responsible executives face personal financial penalties, felony convictions with a mandatory minimum of 1 year prison sentences and will be barred from leadership positions for a minimum of 5 years.
      </strong>
      {' '}Currently much of the labor law in the USA is little more than mere suggestions. It is excessively costly, time consuming and risky for individuals to bring a lawsuit against employers. Corporations found to violate these laws receive a slap on the wrist in the form of a small fine, a fine which is less than the profit they made by violating the laws in the first place. Not only should these laws have teeth, but the executives responsible need to face penalties to discourage violation.
    </AccordionBody>
  </AccordionItem>
  <AccordionItem>
    <AccordionHeader targetId="8">
      Remove Dark Money from Politics and have Strict Contribution Caps
    </AccordionHeader>
    <AccordionBody accordionId="8">
      <strong>
        The amount any organization or person can contribute to a political campaign should be capped at $2,000 and, in the case of an organization donating, all individuals' names and how much they have donated to that organization must be public information.
      </strong>
      {' '}Politicians are beholden to those who fund their campaign and work to get them elected. It is no secret that policies are heavily skewed to represent the interest of these individuals and groups. The fact that this money can come from any individual, corporation or foreign entity is antithetical with a transparent government "of the people, by the people, for the people". 
    </AccordionBody>
  </AccordionItem>
  <AccordionItem>
    <AccordionHeader targetId="9">
      Politicians and their Immediate Families must not have investments
    </AccordionHeader>
    <AccordionBody accordionId="9">
      <strong>
        Politicians are known to trade on insider information and they receive no penalties from the toothless ethics commitee. They and their immediate families should be barred from holding or making any investments while in office.  
      </strong>
      {' '}While there are countless examples of fraudulant trading, a glaringly apparent one would be immediately preceding the pandemic. Politicians were advised of the coming pandemic before the public had knowledge of it. Many divested from their holdings and purchased stock in pharmaceutical corporations. Those pharmaceutical corporations then received billions in government funding to develop vaccines. Laws and funding should not be determined by which stocks the voting politicians own.
    </AccordionBody>
  </AccordionItem>
  <AccordionItem>
    <AccordionHeader targetId="10">
      Politicians should receive equal pay and healthcare to the Americans they represent
    </AccordionHeader>
    <AccordionBody accordionId="10">
      <strong>
      Politicians are "public servants" and should recieve salary and healthcare equivalent to the median salary and healthcare plans of the Americans they "serve". 
      </strong>
      {' '}With lifetime healthcare plans better than any working class American and inflated salaries putting them in the top 10% of income earners, it is no wonder our politicians are so out of touch with the struggles of the American public. To understand us, they must live like us and experience the same hardships we do. While in office, they should be forced to live on the resources of average Americans.
    </AccordionBody>
  </AccordionItem>
  {/* prison slave labor, measure of poverty, monopolies, parental leave */}
</UncontrolledAccordion>
</motion.div>
        </Col>
      </Row>

      <Row className='my-3'>      
      <Col className='text-center align-middle' style={{height: "100%"}}
      lg={{
        offset: 1,
        size: 5
      }}
      >
      <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: .5, duration: 3.5 }}
      >
        <h3>Corporations are blaming rising wages and production costs for inflation</h3>
        <h4>The reality is that their profits and executive pay are soaring</h4>
        <h4>Govt is no help - they are raising interest rates in hopes to increase unemployment to curb "excessively high wages"</h4>
        <h4>This is an attempt to create a recession to please their corporate overlords who believe workers are gaining too much power</h4>
        </motion.div>
      </Col>
      <Col className='text-center'
      lg={{
        size: 5
      }}
      >
        <motion.div
        variants={pullRight}
        initial="hidden"
        whileInView='visible'
        >
        <img src={profits} alt="Normal and recent growth in unit prices" className='img-fluid'/>
        <a href='https://www.epi.org/blog/corporate-profits-have-contributed-disproportionately-to-inflation-how-should-policymakers-respond/' >Source: Economic Policy Institute</a>
        </motion.div>
      </Col>
      </Row>

      <Row>
        <h4 className='text-center justify-content-center mt-3'>The Problem is not that there are not Enough Resources to Provide Workers with Decent Wages</h4>
        <h4 className='text-center justify-content-center my-3'>The Problem is that there are not Enough Resources to Satisfy Executives and Shareholders</h4>
      </Row>
      <Row>
        <Col className='lrmargin'>
        <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: .5, duration: 3 }}
      viewport={{ once: true }}
      >
          <p>
            Throughout the Industrial revolution our ancestors fought to end child labor, implement the 8 hour work day and negotiate for better pay. Strike-breaking tactics resulted in the deaths of workers, but still they fought on to ensure better lives for their children and grandchildren. Now decades of anti-union propaganda has overcome critical thinking and workers are giving their rights away, working 60 hour weeks and settling for sublivable wages.
          </p>
          </motion.div>
          <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: .5, duration: 3 }}
      viewport={{ once: true }}
      >
          <p>
          With <b><em>approximately $4 billion spent each year<sup><a href="#sources">1</a></sup> on political lobbying and legalized bribery</em></b> in the form of campaign donations and Super PACs, workers have collectively lost power in the United States of America. Politicians represent less than 5% of the population and for decades the quality of life has consistently deteriorated for the majority. Workers do not have the resources to effectively lobby government the way corporations and the wealthy can, but we have <b>strength in numbers</b>.  For this reason we are creating the ALL WORKERS UNION to represent the interests of the majority.
          </p>
          </motion.div>
          <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: .5, duration: 3 }}
      viewport={{ once: true }}
      >
          <p>
          Imagine if the people could negotiate fair contracts that see them compensated for revenue they produce at a corporation instead of seeing the majority of profits distributed to executives and shareholders.  By uniting, we can see this change.  Together we will bring the USA back to the days of progress, innovation and a high standard of living admired by the rest of the world.
          </p>
          </motion.div>
          <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: .5, duration: 3 }}
      viewport={{ once: true }}
      >
          <p>
          Increasing wages for the bottom would increase wages for the majority of the population and provide government with the ability to lower taxes or bring much needed tax revenue for underfunded programs such as education and infrastructure. <b><em>When workers get a wage hike, it means more money circulating in the economy and it helps the nation.</em></b> When the wealthy take more for themselves, it means more funds hoarded in a bank account or offshore, never to be spent. 
          </p>
          </motion.div>
        </Col>
      </Row>

      <Row id="sources" className='my-5'>
        <Col className='lrmargin10'>
          <p><a href="https://www.statista.com/statistics/257337/total-lobbying-spending-in-the-us/"><sup>1</sup>Published by Statista Research Department, &amp; 30, S. (2022, September 30). Total lobbying spending U.S. 2021. Statista. Retrieved November 1, 2022, from https://www.statista.com/statistics/257337/total-lobbying-spending-in-the-us/ </a></p>
        </Col>
      </Row>
      
    </Container>


  );
}

export default HomePage;