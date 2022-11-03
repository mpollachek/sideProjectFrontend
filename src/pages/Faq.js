import { maxWidth } from "@mui/system";
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
  CardSubtitle,
  CardLink,
  Card,
  CardBody,
  CardTitle,
  CardText,
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
} from "reactstrap";
import socialism from "../assets/socialism_definition_merriam-webster.png";
import "./Faq.css";
import sunset1 from '../assets/sunset1.jpg';

const Faq = () => {
  return (
    <Container className="full-width">
      <Row
        className='bgfaqdark'
        style={{backgroundImage: `url(${sunset1})`, backgroundSize: "cover"}}
      >
      <Row>
        <Col className="offset-md-1 col-md-10"
        style={{textShadow: '0 0 2px rgb(0, 0, 0), 0 0 5px rgb(0, 0, 0)'}}
        >
          <h1 className="text-center">Frequently Asked Questions</h1>
          <h4 className="text-center">
            In addition to FAQs, we will pre-emptively respond to the common
            backlash against any policy reccommendations to help workers
          </h4>
          <h4 className="text-center">
            {" "}
            Please keep in mind that{" "}
            <b>
              the majority of media is comprised of millionaires paid by
              billionaires to keep the money flowing up
            </b>
            . This is why major news organizations focus on social points of
            contention; they wish to keep us divided so that we do not organize
            and demand our fair share.
          </h4>
        </Col>
      </Row>

      <Row>
        <Col className="justify-content-end offset-md-1 col-md-10">
          <UncontrolledAccordion style={{ whiteSpace: "pre-wrap" }}>
            <AccordionItem>
              <AccordionHeader targetId="1">
                But...that's socialist!
              </AccordionHeader>
              <AccordionBody accordionId="1">
                <h4>
                  <b>Merriam-Webster Dictionary:</b>
                </h4>
                <img
                  src={socialism}
                  alt="Definition of Socialism"
                  className="accordionIMG"
                />
                {"\n"}
                <strong>
                  False. Tying profits and executive compensation to general
                  employee compensation has nothing to do with governmental
                  ownership or the administration of production and distribution
                  of goods. Nobody is threatening the right to own private
                  property or assets.
                </strong>{" "}
                The term "socialism" has become a term used as a scare tactic
                and often has no relevance to what it is being projected at.
                Demanding that workers are fairly compensated for the profits
                they generate for their employer is not socialism. What is
                socialism is public education, public roadways, police and fire
                departments, public sewer and water systems, medicare, social
                security, etc. The purveyors of such language are banking on the
                general public not educating themselves on true definitions and
                believing falsehoods specifically designed to keep us poor and
                divided.
              </AccordionBody>
            </AccordionItem>
            <AccordionItem>
              <AccordionHeader targetId="2">
                Do you support (name of) politician or political party?
              </AccordionHeader>
              <AccordionBody accordionId="2">
                <strong>
                  No. The majority of politicians are oligarch puppets whose
                  primary goal is to keep us divided so that they can continue
                  moving the wealth upwards.
                </strong>
                {"\n"}While there are a few politicians who are interested in
                helping workers, there is enough false propaganda disseminated
                by both sides that allying our group with anyone would
                inevitably alienate a large percentage of workers. If
                politicians wish to support us, we wholeheartedly accept the
                endorsement and we may be willing to endorse worker-friendly
                candidates in the future if they support our goals.
              </AccordionBody>
            </AccordionItem>
            <AccordionItem>
              <AccordionHeader targetId="3">
                How can I ally myself with people who support (group or
                political party) when they did (XYZ)?
              </AccordionHeader>
              <AccordionBody accordionId="3">
                <strong>
                  While there are bad people in this nation, such as racists or
                  those who cause destruction during protests, the vast majority
                  of Americans are good people who simply wish to live a happy
                  life and provide for their families.
                </strong>{" "}
                The majority of media we consume is owned by billionaires who
                profit off keeping workers' wages and rights suppressed. While
                most of the population are amiable and kind, the media displays
                extremes to make "the other side" appear to be terrible people.
                Additionally, any minor difference in opinion is manufactured
                into a major crisis to keep the public at each others' throats.
                It is highly likely that organizers of extremist groups are
                funded to keep tension high. Fear is a powerful tactic to gain
                and maintain control and has been utilized since the dawn of
                man.
              </AccordionBody>
            </AccordionItem>
            <AccordionItem>
              <AccordionHeader targetId="4">
                Aren't the (name of political party) good since they almost
                passed (XYZ law) to help workers?
              </AccordionHeader>
              <AccordionBody accordionId="4">
                <strong>
                  Laws that will help the general public with better wages or
                  increased quality of life inevitably fail by just a few votes.
                  Every. Single. Time. Those politicians voting against their
                  party's wishes are the scapegoats "taking one for the team"
                  and if they are voted out for their inhumane actions they have
                  multi-million dollar lobbying positions waiting as payment.
                </strong>{" "}
                If the wealthy want a law passed, it will be passed. If the
                general public clamor enough for a law that billionaires are
                against, it will take years to be written, debated and come to a
                vote. When voting time comes, it will fail and the blame will
                fall on a few people. Soon all will be forgotten due to the next
                apocalyptic event hitting the news cycle.
              </AccordionBody>
            </AccordionItem>
            <AccordionItem>
              <AccordionHeader targetId="5">
                Is the All Workers Union movement class warfare?
              </AccordionHeader>
              <AccordionBody accordionId="5">
                <strong>
                  For decades, the wealthy have been fighting a class war and
                  workers are losing.
                </strong>
                {"\n\n"}Examples of this are as follows: {"\n"}
                <List>
                  <li>Wage stagnation for the bottom 90% of earners</li>
                  <li>Mandatory overtime for most workers</li>
                  <li>
                    Redistribution of tax dollars to the wealthy. We were told
                    that Bank bailouts and PPP "loans" were necessary. Much of
                    the funds were used for executive bonuses and stock buybacks
                    to benefit wealthy investors.
                  </li>
                  <li>
                    Record profits every quarter while keeping wages stagnant
                  </li>
                  <li>
                    Impossible productivity expectations, often 1 person is now
                    expected to do the job of 2 or more people
                  </li>
                  <li>Decrease in employer coverage for health insurance</li>
                  <li>
                    Defunding of essential services the bottom 90% rely on such
                    as public education, roadways and bridges
                  </li>
                  <li>
                    Purposeful underfunding and neglect of essential services
                    such as social security so that the programs are doomed to
                    fail
                  </li>
                </List>
              </AccordionBody>
            </AccordionItem>
            <AccordionItem>
              <AccordionHeader targetId="6">
                If you don't like your job or are underpaid why don't you just
                get another job?
              </AccordionHeader>
              <AccordionBody accordionId="6">
                <strong>
                  Monopolized industries and seemingly coordinated wage
                  suppression have made this unfeasible for the majority of
                  Americans. If there were enough decent paying jobs, nobody
                  would work a low wage position.
                </strong>
                {"\n\n"}This frequently heard trope is blaming the poor for
                being poor. Opportunities are no longer abundant and employers'
                primary goal is to keep us too destitute and exhausted to do
                anything about it. In fact, even considering a strike likely has
                you wondering if you can afford to take a day off work. This is
                the sad state for the majority of Americans and if we don't
                stand up for ourselves it will only get worse.
              </AccordionBody>
            </AccordionItem>
            <AccordionItem>
              <AccordionHeader targetId="7">
                Why should I join the AWU? I'm proud of working 60 hours each
                week!
              </AccordionHeader>
              <AccordionBody accordionId="7">
                <strong>
                  Workers have been oppressed and exploited for so long that
                  many of us have developed a form of Stockholm Syndrome for our
                  employers.
                </strong>{" "}
                We see people defending corporations paying unlivable wages to
                the majority of employees while paying CEOs $10M+ each year.
                They will defend companies firing people who gain a chronic
                illness or become pregnant. Billionaire owned media has
                influenced America's mentality for far too long. They have
                convinced people to be proud of their exploitation and believe
                that overwork and burnout are badges of honor.
              </AccordionBody>
            </AccordionItem>
            <AccordionItem>
              <AccordionHeader targetId="8">
                I'm afraid of losing my job, what should I do?
              </AccordionHeader>
              <AccordionBody accordionId="8">
                <strong>
                  Corporations instill fear in us to keep us complacent. They
                  want us to believe that if we stand up to them we will be
                  unemployed.
                </strong>{" "}
                The truth is that they need us. no employees equals no profits.
                The key to getting power back in the hands of workers is uniting
                and doing this together.
              </AccordionBody>
            </AccordionItem>
            <AccordionItem>
              <AccordionHeader targetId="9">
                The idea that media and politicians are trying to divide us
                sounds like a conspiracy theory. Have you any proof?
              </AccordionHeader>
              <AccordionBody accordionId="9">
                <strong>
                  The proof is basically screaming in your face each and every
                  day if you watch the news or listen to a politician.
                </strong>{" "}
                It is not debateable that after decades of mergers and
                acquisitions, there are only 6 major media companies, Comcast,
                Walt Disney, AT&T, Paramount Global, Sony and Fox, who are
                responsible for all the news over 90% of the US population
                hears. Each news network under these umbrella corps is clearly
                biased towards republicans or democrats, and blames the majority
                of problems in this country on the other party. Our politicians
                behave similarly. Now, step back and think, who benefits from
                keeping the population divided? The answer is also fairly
                obvious, it's those in Power who know that current soci-economic
                conditions are a powder keg just waiting for a spark in the form
                of a united population. As long as we fight each other, we will
                worry about issues that the billionaires couldn't care less
                about, and sell our lives away to them for the scraps they
                scrape out from under their boots.
                {"\n\n"}
                At this point politicians and news hosts are glorified actors.
                They play their parts in keeping our attention off the movement
                of wealth and convince as many as possible that we want to
                defund programs like education and social security and that we
                want to give up our rights. As a population we could love our
                neightbors and get along peacefully if they weren't stirring the
                pot each and every day. They have created extremists out of our
                friends and family and yet, nobody lifts a finger to stop it.
              </AccordionBody>
            </AccordionItem>

            {/* prison slave labor, measure of poverty */}
          </UncontrolledAccordion>
        </Col>
      </Row>
      </Row>
    </Container>
  );
};

export default Faq;
