import './App.css';
import dragonImage from './dra.png';

function App() {
  const handleReload = () => {
    window.location.reload();
  };

  return (
    <div className="App">
      <div className="dragon-scene">
        <div className="sparkles" aria-hidden="true">
          <span className="spark s1" />
          <span className="spark s2" />
          <span className="spark s3" />
          <span className="spark s4" />
          <span className="spark s5" />
          <span className="spark s6" />
          <span className="spark s7" />
          <span className="spark s8" />
        </div>

        <div className="glow glow-one" />
        <div className="glow glow-two" />

        <header className="topbar">
          <div className="brand">
            <span className="brand-mark">✦</span>
            <span>Obsidian Vale</span>
          </div>
          <nav className="nav">
            <a href="#about">Realm</a>
            <a href="#covenant">Covenant</a>
            <a href="#archive">Archive</a>
          </nav>
        </header>

        <main className="hero">
          <section className="hero-copy">
            <p className="eyebrow">Ancient bloodline</p>
            <h1>Midnight Valley</h1>
            <p className="tagline">
              A darker, older magic stirs beneath the violet sky — where crimson petals
              fall over a kingdom bound to the last dragon lord.
            </p>

            <div className="cta-group">
              <button type="button" onClick={handleReload}>
                Enter the Vale
              </button>
              <a href="#archive" className="secondary-link">
                View archive
              </a>
            </div>
          </section>

          <section className="dragon-panel" aria-label="dragon image">
            <img className="dragon-image" src={dragonImage} alt="Dragon artwork" />
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;
