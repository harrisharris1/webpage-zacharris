import './App.css';
import nightwatch from './images/nightwatchlogo.png'
import northcutt from './images/northcutt.svg'
import nacho from './images/nacho.svg'
import spyfu from './images/spyfu.svg'
import copyai from './images/copycopylogo.svg'

function App() {
  return (
    <div className="App">
       <h1 className="company_name">Rankd</h1>
      <header className="header_cta">
       <h2>B2B CONTENT STRATEGY & <br>
       </br>SEO THAT GENERATES <br>
       </br>PIPELINE, NOT JUST PAGEVIEWS.</h2>
       <div className="cta_button">
       <a href="mailto:zac.t.harris@gmail.com"> <button>Schedule a 1:1</button></a>
       </div>
      </header>
      <section className="brands_logos_section">
        <div className="brands_logos_paragraph">
          <p>BRANDS WE’VE CREATED PIPELINE FOR</p>
        </div>
        <div className="logos_grid">
  <div><img src={northcutt}alt=""/></div>
  <div><img src={nacho} alt=""/></div>
  <div><img className="spy_size" src={spyfu}alt=""/></div>
  <div><img className="copy_size" src={copyai} alt=""/></div>
  <div><img className="colorfilter" src={nightwatch} alt=""/></div>
</div>
      </section>

      <section className="about_section">
        <p>We provide clear, actionable strategies for B2B technology<br>
        </br> businesses and investment funds to use content and search as a <br>
        </br>platform for thought leadership, product marketing, and demand <br>
        </br>generation.</p>
        <div className="cta_button">
       <a href="mailto:zac.t.harris@gmail.com"> <button>Schedule a 1:1</button></a>
       </div>

       <div className="content_boxes">
       
       <div className="box">
        <h3>Content strategy</h3>
        <p> Website content strategies designed to map to complex buyer journeys.</p>
       </div>

       <div className="box">
        <h3>Seo</h3>
        <p> SEO, fueled by machine learning, baked into every step of the offering.</p>
       </div>

       <div className="box">
        <h3>Playbooks</h3>
        <p> No giant PDFs, just intuitive playbooks that marketing teams can run with.</p>
       </div>
       </div>
      </section>
    </div>
  );
}

export default App;
