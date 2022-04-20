import React from 'react'
import Footer from '../Footer'
import Header from '../Header'
import FAQ from './FAQ'
import GdHeroBanner from './GdHeroBanner'

function GD() {
  return (
    <>
      <Header />
      <GdHeroBanner />

      <section>
        <div className="container">
          <h1 className='main-heading '>What is Group Discussion?</h1>
          <p>Group Discussion or GD is a type of discussion that involves people sharing ideas or activities. People in the group discussion are connected with one basic idea. Based on that idea, everyone in the group represents his/her perspective.</p>
          <p>GD is a discussion that tests the candidate's skills, such as leadership skills, communication skills, social skills and behaviour, politeness, teamwork, listening ability, General awareness, confidence, problem-solving skills, etc.</p>
          <p>The Group Discussion is generally the next level after the entrance exam to pursue a professional degree. In the case of recruitments, Group Discussion can be the starting or at the end, depending on different companies or organizations.</p>
          <p>It is not fixed that the group discussion is always performed around the table. People can sit in any arrangement, but everyone should be able to see every face. It is not only the usual discussion, but it is also a discussion with knowledge and facts.</p>
          <h2 className='main-heading text-start'>Process of Group Discussion</h2>
          <ol>
            <li><p>The process of a Group Discussion starts with the announcement of the topic. The given topic could be technical, factual, or case study.</p></li>
            <li><p>Before beginning the discussion, a preparation time of 3 minutes is given. The time can also extend in the case of a long case statement.</p></li>
            <li><p>Any participant in the group can initiate the discussion. After the lead participant, anyone in the group can continue the discussion. Similarly, everyone gets the chance to speak. One after another, participants in the group express their views on the given topic.</p></li>
            <li><p>It ends when the panellist stops the discussion or may ask one or more than one participant to summarize the GD. Whenever you are asked for the summary, remember to cover the discussed points. The summary cannot include the words that were not part of the discussion. The participants that were quite among the discussion are generally asked to summarize it, which is a good opportunity to present their views. But, it does not mean that everyone should be quiet. The summary should include the essential discussed points and the conclusion of the discussion.</p></li>
            <li><p>The final scores are calculated. Based on the performance of each participant, the panellist gives the scores. The panellists are usually four to five to judge the performance of candidates in the Group Discussion.</p></li>
          </ol>
          <h2 className='main-heading text-start'>Current GD topics</h2>
          <ol>
            <li><p>Russia Ukraine War: Reasons for Conflict & Impact on India</p></li>
            <li><p>Facebook rebrands to Meta: Is Metaverse a revolutionary technology, or just hype?</p></li>
            <li><p>Central Bank Digital Currency (CBDC): Impact on Indian Financial System & Cryptocurrency</p></li>
            <li><p>Air India Disinvestment by BJP Government & Acquisition by TATAs: Selling Family Silver or Saving Taxpayer’s Money</p></li>
            <li><p>Economic Survey 2022 – Top Highlights</p></li>
            <li><p>CryptoCurrency and Regulation of Official Digital Currency Bill 2021</p></li>
            <li><p>Crises and Emergencies – Triggers for big reforms?</p></li>
            <li><p>Farm Bills 2020: Will it Break the Glass Ceiling?</p></li>
            <li><p>Atmanirbhar Bharat: Will the Mission make India Self Reliant?</p></li>
            <li><p>Are Stock Market and Economy not co-related?</p></li>
            <li><p>Coronavirus third Wave: 'Black Swan' of Global Economy; How it Impacts India?</p></li>
            <li><p>Bad Bank in India: Is it a good solution to wipe off NPAs?</p></li>
            <li><p>Union Budget 2022: Key Highlights, Analysis, Pros & Cons</p></li>
            <li><p>Gig Economy: Statistics, Why is it growing, Pros & Cons, Impact of Covid 19</p></li>
            <li><p>CryptoCurrency: A bright future or just a fad?</p></li>
            <li><p>Facebook Reliance Jio Deal: Will it help to Boost Business Growth in India?</p></li>
            <li><p>Telecom Sector Trouble in India: Good or Bad for Economy</p></li>
            <li><p>5 Trillion Economy: The Vision, Challenges and Roadmap for India</p></li>
            <li><p>Union Budget of India: What is “Budget” and Key Features of Budget</p></li>
            <li><p>Impact of Technology on Jobs: Will Automation & Artificial Intelligence reduce or increase Jobs?</p></li>
            <li><p>Globalization: An Opportunity or a Threat?</p></li>
            <li><p>The IT Industry in India -Will it create more jobs in the future?</p></li>
            <li><p>Banks Merger in India: Is it good for the Indian Economy?</p></li>
            <li><p>Farm Laws Repealed: PM MODI withdraws the three farm laws.</p></li>

          </ol>
          <h2 className="main-heading text-start">Past GD topics</h2>
          <ul>
            <li><p>Poverty in India: Facts, Causes, Effects, Solution -- IIMs</p></li>
            <li><p>Performance & Policies of Modi Regime -- IIMs</p></li>
            <li><p>Agriculture Role in India and Subsidies: Problems & Challenges -- IIMs</p></li>
            <li><p>Women Empowerment & Gender Justice: Addressing the Equality Challenges -- IIMs</p></li>
            <li><p>End of Globalization/ De-Globalization/ Nationalization -- IIM Bangalore, MDI Gurgaon, IIM Lucknow</p></li>
            <li><p>Climate Change/Pollution -- IIM Bangalore, IIM Trichy, TISS Mumbai</p></li>
            <li><p>Retirement Homes: Do the advantages of living in them outweigh the disadvantages? -- TAPMI, IIM Indore</p></li>
            <li><p>Social Media: Impact on human behaviour and society -- IIM Ranchi, IIM Ahmedabad</p></li>
            <li><p>Impact of technology on Jobs -- MDI Gurgaon, CAP process for New IIMs</p></li>
            <li><p>#Me too campaign -- IIM Ahmedabad, IIM Calcutta,</p></li>
            <li><p>CryptoCurrency/ Bitcoin -- IMI Delhi</p></li>
            <li><p>Mars Mission for India Justified?-- MDI Gurgaon</p></li>
            <li><p>Shortage of Open Spaces and Playgrounds Lead to Negative Tendencies in Children --IIM Ahmedabad</p></li>
            <li><p>Knowledge is the biggest asset you can accumulate -- IIM Lucknow</p></li>
            <li><p>Is India ready for a cashless economy? -- IIFT</p></li>
            <li><p>Travelling: Helps in Generating Ideas and Experiential Learning -- CAP process for New IIMs</p></li>
            <li><p>Zero -- XLRI</p></li>
            <li><p>Death penalties for perpetrators of crime against women. Is it Justified? -- IIM Indore</p></li>
          </ul>
        </div>
      </section>
      <section className='pb-3 sample-video'>
        <div className="container">
          <h1 className='main-heading'>Sample Video</h1>
          <div className='video-container sample-video'>
            <iframe className='video' src="https://www.youtube.com/embed/kT7KU1dM6Ps" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
        </div>
      </section>
      <FAQ />
      <Footer />
    </>
  )
}

export default GD