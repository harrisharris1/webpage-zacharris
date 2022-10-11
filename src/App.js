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
