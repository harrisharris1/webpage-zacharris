import './App.css';
import nightwatch from './images/nightwatchlogo.png'
import nacho from './images/nacho.svg'
import spyfu from './images/spyfu.svg'
import copyai from './images/copycopylogo.svg'

function App() {
  return (
    <div className="App">
       <h1 className="company_name">Rankd</h1>
      <header className="header_cta">
       <h2>WE HELP COMPANIES BUILD<br>
       </br>COMPOUNDING ORGANIC<br>
       </br> GROWTH & PIPELINE.</h2>
       <div className="sub_header">
<h3>We help companies go beyond traffic<br>
</br> and turn organic into a channel that compunds,<br>
</br>producing revenuew month-over-month.<br>
</br>No jargon, no 1,000 row spreadsheets, just results.</h3>
       </div>
       <div className="cta_button">
       <a href="mailto:zac.t.harris@gmail.com"> <button>Schedule a 1:1</button></a>
       </div>
      </header>
      <section className="brands_logos_section">
        <div className="brands_logos_paragraph">
          <p>BRANDS WE’VE CREATED PIPELINE FOR</p>
        </div>
        <div className="logos_grid">
  <div><img src={nacho} alt=""/></div>
  <div><img className="spy_size" src={spyfu}alt=""/></div>
  <div><img className="copy_size" src={copyai} alt=""/></div>
  <div><img className="colorfilter" src={nightwatch} alt=""/></div>
</div>
      </section>
      
    <section className="testimonials_section">
      <h3 className="testimonial_heading">What companies are saying about Rankd</h3>

    <div className="testimonials">
    <div className="card">
        <div className="layer"></div>
        <div className="name">
                    <h2>Chris Lu</h2>
                    <span className="job">Co-founder @ Copy.ai </span>
                </div>
                <div className="testimonial_content">
            <p>
            I had the pleasure of working with Zac Harris on a few projects since December 2021, and I can't recommend him highly enough. 
            <br>
          
            </br>Not only is Zac an expert in his field, but he's also a great communicator—he's always available when you need him, and he's got a ton of experience.<br>
            </br>
            Zac was brought in to help migrate our blog over the holidays, and he made sure everything was done properly. Zac tracked every single step of the process and followed up above and beyond what he needed to do. I highly recommend the opportunity to work with him!</p>
            </div>
      </div>
   
      <div className="card">
        <div className="layer"></div>
        <div className="name">
                    <h2>Hiba Amin</h2>
                    <span className="job">Demand Generation @ TestBox</span>
                </div>
                <div className="testimonial_content">
            <p>
            Zac has been a consistent mentor for me these past 3 years. From a career and growth & development perspective, to offering a lot of support and advice with SEO and CRO initiatives we’ve run at Hypercontext. <br>
            </br>
When building out an asset for Hypercontext that drives almost 30% of our acquisition numbers, Zac was a key advisor in helping me develop the overall strategy on how to build out an SEO-focused initiative. <br>
</br>Beyond that, Zac has continued to be an incredible human to have in my network. From being a great sounding board to offering meaningful and human-centric advice, I’ve been so thankful to have Zac in my corner and attribute a lot of the success I’ve achieved in the past 3 years to him!<br>
</br>
I can wholeheartedly say that anyone would be lucky to work alongside or for Zac!</p>
            </div>
      </div>

      <div className="card">
        <div className="layer"></div>
        <div className="name">
                    <h2>Joel Klettke</h2>
                    <span className="job">Founder @ Case Study Buddy</span>
                </div>
                <div className="testimonial_content">
            <p>
            Zac cares deeply about getting things right -- not only with SEO, but with marketing, user experience, and conversion too. I worked directly with Zac on an audit of SpyFu. He approached it with an open mind and a sincere desire to find the right path forward. 
He was extremely communicative and on top of things; his experience was very valuable to me as I worked to understand the company and opportunities they had. He opened doors for me to get what I needed, collected the data, and advocated for doing things right. 
I would recommend Zac whole-heartedly to anyone - company, freelancer, client, or otherwise - who cares about working with good, sharp people.</p>
            </div>
      </div>

      <div className="card">
        <div className="layer"></div>
        <div className="name">
                    <h2>Taylor Coil</h2>
                    <span className="job">Product Strategist @ New Haircut</span>
                </div>
                <div className="testimonial_content">
            <p>Zac knows his stuff when it comes to SEO. He's highly skilled technically, but Zac's true superpower is cutting through the noise to choose priorities that will actually impact a domain's search performance. He'll never recommend a time-suck tactic when theres a quicker, more-impactful way to improve performance. He approaches SEO like he approaches sales -- like a strategic problem-solver.
All that technical expertise is paired with Zac's magical ability to explain complex topics simply, so everyone in an organization can understand and act on his recommendations. Veteran and newbie SEOs both learn from Zac just by existing in the same space. 
Zac is a natural people person and a joy to work with. He's the kind of person who makes work more fun -- all while bringing the brilliance every day. Big Zac fan.
            </p>
            </div>
      </div>

      <div className="card">
        <div className="layer"></div>
        <div className="name">
                    <h2>Suganthan Mohanadasan</h2>
                    <span className="job">PCo-founder @ Snippet Consulting</span>
                </div>
                <div className="testimonial_content">
            <p>I have worked with Zac for a short time on an SEO project for SpyFu, and I quickly found out that he is exceptionally well versed with SEO. He can execute massive campaigns at scale, and he is not afraid to take on difficult challenges. We have encountered some challenges along the way, and he was able to find creative ways to solve them. I can highly recommend him.
            </p>
            </div>
      </div>
   
   
   
   
   </div>
</section> 

      <section className="bottom_cta_section">
        <p>Interested in <br>
        </br>working together?</p>
        <div className="cta_button_bottom">
       <a href="mailto:zac.t.harris@gmail.com"> <button>Schedule a 1:1</button></a>
       </div>
      </section>

      <footer>
        <p className="copywrite">© Rankd. gorankd.com</p>
      </footer>
    </div>
  );
}

export default App;
