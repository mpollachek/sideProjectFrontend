import {
  Row,
  Col,
  Container,
  List,
  Table
} from 'reactstrap';
import DisplayCard from '../display/DisplayCard';
import CBOchart1 from '../assets/CBO_wealth_chart_1.png';
import CBOchart2 from '../assets/wealth_increase_distribution.png'
import wageGroup from '../assets/EPI_wage_group.png';
import productivity from '../assets/EPI_productivity.png';

const Issues = () => {

  return(
    <Container className="full-width">
      <Row>
        <Col  className='text-center my-4 lrmargin'>
      <h2>On a macro scale, we believe that there are two primary issues that must be resolved for our population to be strong and happy again</h2>
      <h3>First, we must strengthen workers rights and fairly compensate them for their labor, thereby reducing wealth and income inequality and building a strong economy that works for the majority rather than the few</h3>
      <h3>Second, we must push for a change in government and laws in such a way that legislation is not controlled by wealth</h3>
      </Col>
      </Row>

                {/* First Row of charts */}
    <Row >
      <Col className='col-12 col-lg-6 my-3' style={{color: 'black'}}>
    <DisplayCard
      title="Worker compensation no longer reflects productivity improvements"
      subtitle="Average worker's compensation increased with productivity until early 1980s"
      image={productivity}
      text="Workers' compensation has stagnated for the past 40 years and productivity increases have gone to the top"
      alt="Productivity Pay Gap"
      link="https://www.epi.org/productivity-pay-gap/"
      linksource="Economic Policy Institute"
      linkname="The Productivity Pay Gap"
      />
      </Col>
      <Col className='col-12 col-lg-6 my-3' style={{color: 'black'}}>
    <DisplayCard
      title="Wage increases have been concentrated in the top 1% of earners and the top 0.1% are hoarding profits at the expense of workers"
      subtitle="Why are not all employees' wages tied to corporate profits?"
      image={wageGroup}
      text="The increase of income inequality coincides with a reduction in quality of life for Americans. 90% of workers getting no growth in wages while 0.1% see a parabolic increase is indefensible."
      link="https://www.epi.org/data/#?subject=wagegroup"
      linksource="Economic Policy Institute"
      linkname="Annual wages by wage group"
      />
      </Col>
      </Row>

      {/* Second Row of charts */}
      <Row className='mb-3' >
      <Col className='col-12 col-lg-6 my-3' style={{color: 'black'}}>
    <DisplayCard
      title="Ever increasing worker exploitation has devastated the bottom 50%"
      subtitle="Since 1989 the wealth of the top 10% has almost quadrupled and is around 40 times that of the bottom 50%"
      image={CBOchart1}
      text="Insatiable greed has resulted in the bottom 50% having their wealth cut in half since 1989"
      alt="Total Family Wealth by Wealth Group"
      link="https://www.cbo.gov/publication/57598"
      linksource="Congressional Budget Office"
      linkname="Trends in the Distribution of Family Wealth, 1989 to 2019"
      />
      </Col>
      <Col className='col-12 col-lg-6 my-3' style={{color: 'black'}}>
    <DisplayCard
      title="The top 1% holds 34% of the wealth in the USA, a 7% increase since 1989"
      subtitle="The bottom 50% hold 2% of wealth, half as much as in 1989"
      image={CBOchart2}
      text="For decades, the wealthy have been paying politicians to erode our rights and transfer wealth to the top. 72% of all wealth in the USA is held by 9% of the population"
      alt="Total Family Wealth by Wealth Group"
      link="https://www.cbo.gov/publication/57598"
      linksource="Congressional Budget Office"
      linkname="Trends in the Distribution of Family Wealth, 1989 to 2019"
      />
      </Col>
      </Row>

      {/* End of charts */}

      <Row>
        <Col  className='text-center my-4 lrmargin'>
      <h2>The charts above detail a major shift in wealth and income between the top 1% and bottom 90% of earners. Billionaire owned media want us believe this is normal and political leaders pretend to fight for our interests while passing bills that only benefit the wealthy</h2>
      {/* <h3>Decades of propaganda has turned much of America against workers and workers' rights. People vote for politicians who promise to eradicate our ability to negotiate with employers by eliminating our power to unionize.</h3> */}
      <h2>Below is a somewhat random selection of top S&P 500 corporations</h2>
      <h3>Many top companies have CEO compensation over 1,000 times that of their workers. At a worker to CEO pay ratio of 1:1,000, a <b>worker would need to work for 1,000 years to earn what the CEO receives in 1 year</b>. To put this another way, <em>the worker would need to work for 3 years to receive what the CEO gets in 1 day</em></h3>
      <h3>With approximately <em>64% of workers living paycheck to paycheck<sup><a href='#sources'>1</a></sup></em> this hoarding of wealth is creating an inexcusable stress on workers and the economy. Many workers lack the ability to seek proper medical care or purchase necessaties for their families. Wealth inequality is literally killing people and the trendlines show now sign of improving.</h3>
      </Col>
      </Row>

      {/* Executive vs worker pay chart */}
      <Row className='bg-light text-center'>
        <Col>
          <Table striped bordered size='sm'>
            <thead>
              <tr style={{backgroundColor: 'rgb(221, 143, 17)'}}>
                <th>Ticker</th>
                <th>Company</th>
                <th>Median Worker Pay ($)</th>
                <th>CEO Pay ($)</th>
                <th>CEO to worker Pay Ratio</th>
                <th>2021 Corporate Profits ($)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>AAPL</td>
                <td>Apple Inc</td>
                <td>68,254</td>
                <td>98,734,394</td>
                <td>1 <b>:</b> 1,447</td>
                <td>57,411,000,000</td>
              </tr>
              <tr>
                <td>AMZN</td>
                <td>Amazon.com, Inc</td>
                <td>32,855</td>
                <td>212,701,169</td>
                <td>1 <b>:</b> 6,474</td>
                <td>21,331,000,000</td>                
              </tr>              
              <tr>
                <td>BKNG</td>
                <td>Booking Holdings, Inc</td>
                <td>58,005</td>
                <td>53,982,195</td>
                <td>1 <b>:</b> 931</td>
                <td>10,958,000,000</td>
              </tr>
              <tr>
                <td>EL</td>
                <td>The Estee Lauder Companies, Inc</td>
                <td>33,586</td>
                <td>65,996,985</td>
                <td>1 <b>:</b> 1,965</td>
                <td>17,737,000,000</td>
              </tr>
              <tr>
                <td>EXPE</td>
                <td>Expedia Group, Inc</td>
                <td>102,270</td>
                <td>296,247,749</td>
                <td>1 <b>:</b> 2,897</td>
                <td>7,076,000,000</td>
              </tr>
              <tr>
                <td>FLT</td>
                <td>FleetCor Technologies, Inc</td>
                <td>41,265</td>
                <td>57,923,473</td>
                <td>1 <b>:</b> 1,404</td>
                <td>2,834,000,000</td>              
              </tr>
              <tr>
                <td>INTC</td>
                <td>Intel Corporation</td>
                <td>104,400</td>
                <td>178,590,400</td>
                <td>1 <b>:</b> 1,711</td>
                <td>20,899,000,000</td>
              </tr>
              <tr>
                <td>JPM</td>
                <td>JPMorgan Chase & Co</td>
                <td>92,112</td>
                <td>84,428,145</td>
                <td>1 <b>:</b> 917</td>
                <td>29,131,000,000</td>
              </tr>
              <tr>
                <td>KO</td>
                <td>The Coca-Cola Company</td>
                <td>13,894</td>
                <td>24,883,878</td>
                <td>1 <b>:</b> 1,791</td>
                <td>7,747,000,000</td>
              </tr>
              <tr>
                <td>LIN</td>
                <td>Linde Plc</td>
                <td>40,659</td>
                <td>31,426,032</td>
                <td>1 <b>:</b> 773</td>
                <td>13,250,000,000</td>
              </tr>
              <tr>
                <td>LOW</td>
                <td>Lowes Companies, Inc</td>
                <td>22,697</td>
                <td>17,871,715</td>
                <td>1 <b>:</b> 787</td>
                <td>5,835,000,000</td>
              </tr>
              <tr>
                <td>LVS</td>
                <td>Las Vegas Sands Corp</td>
                <td>35,879</td>
                <td>31,204,900</td>
                <td>1 <b>:</b> 866</td>
                <td>1,608,000,000</td>
              </tr>
              <tr>
                <td>MCD</td>
                <td>McDonald's Corporation</td>
                <td>8,897</td>
                <td>20,028,132</td>
                <td>1 <b>:</b> 2,251</td>
                <td>12,580,000,000</td>
              </tr>
              <tr>
                <td>NKE</td>
                <td>Nike, Inc</td>
                <td>36,077</td>
                <td>32,920,708</td>
                <td>1 <b>:</b> 913</td>
                <td>19,962,000,000</td>
              </tr>
              <tr>
                <td>PENN</td>
                <td>Penn National Gaming</td>
                <td>33,930</td>
                <td>65,887,214</td>
                <td>1 <b>:</b> 1,942</td>
                <td>2,757,000,000</td>
              </tr>
              <tr>
                <td>SBUX</td>
                <td>Starbucks Corporation</td>
                <td>12,935</td>
                <td>20,425,162</td>
                <td>1 <b>:</b> 1,579</td>
                <td>20,322,000,000</td>
              </tr>
              <tr>
                <td>TJX</td>
                <td>The TJX Companies, Inc</td>
                <td>14,139</td>
                <td>31,802,000</td>
                <td>1 <b>:</b> 2,249</td>
                <td>7,603,000,000</td>
              </tr>
              <tr>
                <td>WBA</td>
                <td>Walgreens Boots Alliance, Inc</td>
                <td>26,255</td>
                <td>28,333,498</td>
                <td>1 <b>:</b> 1,084</td>
                <td>28,067,000,000</td>
              </tr>
              <tr>
                <td>WMT</td>
                <td>Walmart Inc</td>
                <td>25,335</td>
                <td>25,670,673</td>
                <td>1 <b>:</b> 1,013</td>
                <td>13,510,000,000</td>
              </tr>
              <tr>
                <td>YUM</td>
                <td>Yum! Brands, Inc</td> 
                <td>13,082</td> 
                <td>27,578,659</td>  
                <td>1 <b>:</b> 2,108</td> 
                <td>6,584,000,000</td> 
              </tr>
              <tr>
                <td>Data Sources:</td> 
                <td><a href='https://aflcio.org/paywatch/company-pay-ratios'>aflcio</a></td>
                <td><a href='https://tipalti.com/profit-per-second/'>tipalti</a></td>
                <td><a href='http://www.macrotrends.net/'>macrotrends</a></td>
                </tr>
            </tbody>
          </Table>        
        </Col>
      </Row>
      <Row>
        <Col  className='text-center my-4 lrmargin'>
      <h2>Many fortune 500 companies make <b>BILLIONS</b> in profits, pay little to no taxes thanks to a myriad of tax law loopholes and keep their workers in poverty with sublivable compensation. Taxpayers are forced to pay these workers wages through welfare programs such as Snap benefits</h2>
      <h3>The massive profits going to shareholders and executives is wealth essentially removed from our economy by being stored in long term investment accounts or moved offshore. If workers were fairly compensated for the profits they produce for their employers, we would see higher spending, an increase in the number of small businesses in operation and a happier population by removing the great stresses of financial insecurity.</h3>
      </Col>
      </Row>


      <Row id="sources" className='my-5'>
        <Col className='lrmargin10'>
          <p style={{textShadow: '0 0 1px #000000, 0 0 2px #000000'}} ><a href="https://ir.lendingclub.com/news/news-details/2022/48-Percent-of-Americans-with-Annual-Incomes-over-100000-Live-Paycheck-to-Paycheck-9-percentage-points-higher-than-first-reported-in-June-2021/default.aspx"><sup>1</sup>48 percent of Americans with annual incomes over $100,000 live paycheck to paycheck, 9 percentage points higher than first reported in June 2021. Corporate Profile. (n.d.). Retrieved November 1, 2022, from https://ir.lendingclub.com/news/news-details/2022/48-Percent-of-Americans-with-Annual-Incomes-over-100000-Live-Paycheck-to-Paycheck-9-percentage-points-higher-than-first-reported-in-June-2021/default.aspx  </a></p>
        </Col>
      </Row>

    </Container>
  );
}

export default Issues;