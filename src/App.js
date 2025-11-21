import { useState } from "react";
import woods from "./woods.png";
import wave from "./wave.png";
import architecture from "./architecture.jpeg";
import both from "./both.jpg";
import analyze from "./analyze.jpg";
import upload from "./upload.jpg";
import jobs from "./jobs.jpg";

function GlobalStyles() {
  return (
    <style>{`
      :root { --page-pad: 1in; --gap: 1.5rem; --nav-height: 60px; }
      @media (max-width: 900px) { :root { --page-pad: 20px; --gap: 1rem; --nav-height: 70px; } }

      /* Layout helpers */
      .page { min-height: 100vh; background:#000; color:#fff; }
      .main { padding: var(--page-pad); margin:0; font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, Noto Sans, sans-serif; padding-top: calc(var(--nav-height) + var(--page-pad)); }
      .two-col { display:grid; grid-template-columns: 1fr 1fr; gap: var(--gap); align-items: start; }
      @media (max-width: 900px){ .two-col { grid-template-columns: 1fr; } }

      .hero { display:grid; grid-template-columns: 1fr 1fr; gap: var(--gap); align-items:center; }
      @media (max-width: 900px){ .hero { grid-template-columns: 1fr; } }

      .img-round { border-radius: 12px; display:block; width:100%; height:auto; }

      .gallery { display:grid; grid-template-columns: repeat(3, 1fr); gap: var(--gap); }
      @media (max-width: 900px){ .gallery { grid-template-columns: repeat(auto-fit, minmax(140px, 1fr)); } }

      .heading { line-height: 1.2; margin:0; }
      .h1 { font-size: clamp(28px, 4vw, 48px); }
      .h2 { font-size: clamp(20px, 2.6vw, 34px); color:#90EE90; margin:0; }
      .h3 { font-size: clamp(18px, 2.2vw, 28px); color:#90EE90; margin:0; }
      .para, .list { font-size: clamp(16px, 1.6vw, 20px); line-height: 1.7; }
      .list { padding-left: 1.2rem; margin-top: .5rem; }

      /* Fixed Navigation Strip */
      .nav-strip { 
        position: fixed; 
        top: 0; 
        left: 0; 
        right: 0; 
        height: var(--nav-height);
        background: #000; 
        border-bottom: 1px solid #333;
        display: flex; 
        align-items: center; 
        justify-content: center;
        z-index: 1000;
        box-shadow: 0 2px 10px rgba(0,0,0,0.3);
      }
      
      .tabs { 
        display: flex; 
        gap: 10px; 
        align-items: center;
      }
      
      .tab { 
        padding: 8px 16px; 
        background: transparent; 
        color: #fff; 
        border: 1px solid #ffffff55; 
        border-radius: 999px; 
        cursor: pointer; 
        font-size: 14px;
        transition: all 0.2s ease;
      }
      
      .tab:hover {
        border-color: #ffffff88;
        background: #ffffff11;
      }
      
      .tab.active { 
        border-color: #90EE90; 
        color: #90EE90; 
        background: #90EE9011;
      }
      
      @media (max-width: 480px) { 
        .nav-strip { 
          justify-content: flex-start; 
          padding: 0 12px; 
        }
        .tabs { 
          flex-wrap: wrap; 
          gap: 8px; 
          width: 100%;
        } 
        .tab { 
          padding: 6px 12px; 
          font-size: 13px; 
        } 
      }

      /* Images */
      .arch-img { max-height: 70vh; object-fit: contain; }

      /* Wave positioning adjustment for fixed nav */
      .wave-container {
        margin-top: calc(-2rem - var(--nav-height));
        margin-left: calc(-1 * var(--page-pad));
        margin-right: calc(-1 * var(--page-pad));
        padding-top: var(--nav-height);
        overflow: hidden;
      }
    `}</style>
  );
}

function Tabs({ view, setView }) {
  return (
    <div className="nav-strip">
      <div className="tabs">
        <button onClick={() => setView("home")} className={`tab ${view === "home" ? "active" : ""}`} aria-label="Go to Home">Home</button>
        <button onClick={() => setView("approach")} className={`tab ${view === "approach" ? "active" : ""}`} aria-label="Go to Approach">Approach</button>
        <button onClick={() => setView("results")} className={`tab ${view === "results" ? "active" : ""}`} aria-label="Go to Results">Results</button>
        <button onClick={() => setView("team")} className={`tab ${view === "team" ? "active" : ""}`} aria-label="Go to Team">Team</button>
      </div>
    </div>
  );
}

export default function Page() {
  const [view, setView] = useState("home");

  // ---------- APPROACH PAGE ----------
  if (view === "approach") {
    return (
      <div className="page">
        <GlobalStyles />
        <Tabs view={view} setView={setView} />
        <main className="main" style={{ maxWidth: 1400, marginInline: "auto" }}>
          <div className="wave-container">
            <img src={wave} alt="Wave design divider" style={{ width: "100%", height: 80, objectFit: "cover" }} />
          </div>

          <h1 className="heading h1" style={{ marginTop: "1.25rem" }}>Approach</h1>

          {/* Side-by-side: Network text and Architecture image */}
          <section className="two-col" style={{ marginTop: "1.25rem" }}>
            <div>
              <section style={{ marginTop: "1.25rem" }}>
                <h2 className="h2">Network Considerations</h2>
                <ul className="list">
                  <li>Acoustic sensing produces too much data to use MeshTastic or LoRa.</li>
                  <li>We require more range than WiFi or Bluetooth provide.</li>
                  <li>Satellite &amp; cellular are too costly and require too much power.</li>
                  <li>We need to limit the number of infrastructure nodes.</li>
                </ul>
              </section>
            </div>
            <div>
              <img src={architecture} alt="System architecture" className="img-round arch-img" />
            </div>
          </section>

          {/* Solution header */}
          <h2 className="h2" style={{ marginTop: "1.75rem", marginBottom: ".25rem" }}>Solution</h2>

          {/* Side-by-side: Listener vs Aggregator (stacks on mobile) */}
          <section className="two-col" style={{ marginTop: "1.25rem" }}>
            <div>
              <h3 className="h3">Listener</h3>
              <ul className="list">
                <li>Built with ESP32S3, AudioMoth Dev MEMS mic, WiFi HaLow, and solar power system to meet power budget of 0.75 W.</li>
                <li>Streaming is configurable.</li>
                <li>For tests, we use 48KHz 16bit (768 kbps).</li>
              </ul>
            </div>
            <div>
              <h3 className="h3">Aggregator</h3>
              <ul className="list">
                <li>Built with Raspberry Pi 5 and WiFi HaLow Router.</li>
                <li>Designed for 25 concurrent Listeners, running BirdNET for analysis on all streams.</li>
                <li>Uploads raw data, analysis results, metrics &amp; logs to Chameleon KVM and object store.</li>
                <li>Chameleon side can be scaled to handle hundreds of Aggregators, thousands of Listeners.</li>
              </ul>
            </div>
          </section>
        </main>
      </div>
    );
  }

  // ---------- RESULTS PAGE ----------
  if (view === "results") {
    return (
      <div className="page">
        <GlobalStyles />
        <Tabs view={view} setView={setView} />
        <main className="main">
          <div className="wave-container">
            <img src={wave} alt="Wave design divider" style={{ width: "110%", height: 80, objectFit: "cover" }} />
          </div>
          <h1 className="heading h1" style={{ marginTop: "1.25rem" }}>Results</h1>
          <section style={{ marginTop: "1.25rem" }}>
            <h2 className="h2">Prototype Specs</h2>
            <ul className="list">
              <li>Affordable: Each Listener costs $375, compared to $1000 for comparison device.</li>
              <li>Low power: Listener average current is 129 mA and can be cut in half. Aggregator average power is 6 W.</li>
              <li>Aggregator multitasking: Tests show success with 25 concurrent Listeners.</li>
              <li>Reliability &amp; Accuracy: Tests show success at keeping up with 25 concurrent Listeners.</li>
              <li>Robust to failures: Onboard 512GB MicroSD on Listener is used for buffer when network or Aggregator are down, with catch-up logic. Seamlessly handles up to 1 week of downtime.</li>
              <li>Manual effort saved: No manual data retrieval, no expert maintenance, hugely reduces overall cost because experts do not have to spend months on location tending to devices.</li>
            </ul>
          </section>
          <section style={{ marginTop: "1.25rem" }}>
            <h2 className="h2">Aggregator Testing</h2>
            <ul className="list">
              <li>TWe tested simulated Listeners with the Raspberry Pi Aggregator to benchmark Aggregator 
              performance as measured by CPU utilization and Redis Job Queue Depth. </li>
              <li>Three simulated scenarios were tested: 1, 15, and 25 Listener streams. </li>
              <li> For each number of simulated Listeners, we test the Uploader and Analyser simultaneously, 
              the Uploader alone, and the Analyser alone, 
              each for 10 minutes, with readings captured every 5 seconds.</li>
            </ul>
          </section>
          <section className="two-col" style={{ marginTop: "1.25rem" }}>
            <div>
              <section style={{ marginTop: "1.25rem" }}>
                <h2 className="h2">CPU Utilization</h2>
                <ul className="list">
                  <li>The average CPU utilization for 1, 15 and 25 simulated listeners in the simultaneous upload and analyze task 
                  was 3.5%, 45.1% and 81.0%, respectively </li>
                  <li>For analyze alone, the average CPU utilization was 2.9%, 41.7%, and 69.9%, respectively </li>
                  <li>For upload alone, the average CPU utilization was 1.3%, 9.2%, and 13.9%, respectively </li>
                </ul>
              </section>
            </div>
            <div>
              <img src={both} alt="both" className="img-round" />
            </div>
          </section>
          <section className="two-col" style={{ marginTop: "1.25rem" }}>
            <div>
              <img src={analyze} alt="analyze" className="img-round" />
            </div>
            <div>
              <img src={upload} alt="upload" className="img-round" />
            </div>
          </section>
          <section className="two-col" style={{ marginTop: "1.25rem" }}>
            <div>
              <section style={{ marginTop: "1.25rem" }}>
                <h2 className="h2">Redis Job Queue Depth</h2>
                <ul className="list">
                  <li>The average job queue depth for 1, 15 and 25 simulated listeners in the upload task 
                  was 1, 15.6, and 25.8, respectively </li>
                  <li>For the analyze task, the average job queue depth was 1, 15.6, and 25.7, respectively </li>
                </ul>
              </section>
            </div>
            <div>
              <img src={jobs} alt="both" className="img-round" />
            </div>
          </section>
        </main>
      </div>
    );
  }

  // ---------- TEAM PAGE ----------
  if (view === "team") {
    return (
      <div className="page">
        <GlobalStyles />
        <Tabs view={view} setView={setView} />
        <main className="main">
          <div className="wave-container">
            <img src={wave} alt="Wave design divider" style={{ width: "110%", height: 80, objectFit: "cover" }} />
          </div>
          <h1 className="heading h1" style={{ marginTop: "1.25rem" }}>Team</h1>

          <section style={{ marginTop: "1.25rem" }}>
            <h3 className="h3">Hudson Reynolds</h3>
            <p className="para" style={{ marginTop: ".25rem", marginBottom: ".25rem" }}>
              Student Researcher, Boston University<br />
              Computer Engineering, Class of 2025
            </p>
            <p className="para" style={{ fontSize: "clamp(14px, 1.4vw, 18px)" }}>
              Email: hudsonre@bu.edu | {" "}
              <a href="https://github.com/HudsonReynolds2" target="_blank" rel="noopener noreferrer" style={{ color: "#90EE90", textDecoration: "none" }}>GitHub</a>
              {" | "}
              <a href="https://www.linkedin.com/in/hudson-m-reynolds/" target="_blank" rel="noopener noreferrer" style={{ color: "#90EE90", textDecoration: "none" }}>LinkedIn</a>
            </p>
          </section>

          <section style={{ marginTop: "1.25rem" }}>
            <h3 className="h3">Alex Tuecke</h3>
            <p className="para" style={{ marginTop: ".25rem", marginBottom: ".25rem" }}>
              Student Researcher, Worcester Polytechnic Institute (WPI)<br />
              Computer Science, Robotics, Class of 2028
            </p>
            <p className="para" style={{ fontSize: "clamp(14px, 1.4vw, 18px)" }}>
              Email: ahtuecke@wpi.edu | {" "}
              <a href="https://github.com/atuecke" target="_blank" rel="noopener noreferrer" style={{ color: "#90EE90", textDecoration: "none" }}>GitHub</a>
              {" | "}
              <a href="https://www.linkedin.com/in/alex-tuecke-06ab6b291/" target="_blank" rel="noopener noreferrer" style={{ color: "#90EE90", textDecoration: "none" }}>LinkedIn</a>
            </p>
          </section>

          <section style={{ marginTop: "1.75rem" }}>
            <h2 className="h2">Advisors</h2>
            <ul className="list" style={{ marginTop: ".5rem" }}>
              <li><strong>Mike Sherman</strong> — University of Chicago</li>
              <li><strong>Kate Keahey</strong> — University of Chicago / Argonne National Laboratory</li>
            </ul>
          </section>

          <section style={{ marginTop: "2rem" }}>
            <h2 className="h2">Acknowledgements</h2>
            <p className="para" style={{ marginTop: ".5rem" }}>
              This work is supported in part by the National Science Foundation OAC-2150500 award.
            </p>
          </section>
        </main>
      </div>
    );
  }

  // ---------- HOME PAGE ----------
  return (
    <div className="page">
      <GlobalStyles />
      <Tabs view={view} setView={setView} />
      <main className="main">
        <div className="hero">
          <img src={woods} alt="Ecological forest" className="img-round" />
          <div style={{ textAlign: "left" }}>
            <h1 className="heading" style={{ fontSize: "clamp(32px, 4.5vw, 60px)", lineHeight: 1.25, fontWeight: 700, letterSpacing: "-0.01em", margin: 0 }}>Echoes of the Earth</h1>
            <h2 style={{ fontSize: "clamp(20px, 2.5vw, 36px)", fontWeight: 400, marginTop: "1rem", lineHeight: 1.35 }}>
              Real-Time Acoustic Sensing Supercomputer at Scale with Chameleon
            </h2>
          </div>
        </div>

        <div style={{ marginTop: "2rem", maxWidth: 1200, marginInline: "auto" }}>
          <section>
            <h2 className="h2">Acoustic Sensing</h2>
            <p className="para" style={{ marginTop: ".5rem" }}>
              Listening devices are deployed to record wildlife sounds, allowing researchers to non-intrusively study animal behavior and assess habitat health through the analysis of soundscapes. Such data can involve petabytes of data from thousands of sensors.
            </p>
          </section>

          <section style={{ marginTop: "1.25rem" }}>
            <h2 className="h2">Current technology: Not real-time, limited scalability</h2>
            <ul className="list">
              <li>Existing recorders are not real-time, don't communicate status, and are expensive.</li>
              <li>Experts are required to manually retrieve data by opening up each sensor.</li>
              <li>This cost and effort greatly limits scalability, with about 5% of recordings lost.</li>
            </ul>
          </section>

          <section style={{ marginTop: "1.25rem" }}>
            <h2 className="h2">Real-Time</h2>
            <p className="para" style={{ marginTop: ".5rem" }}>
              Real-time, continuous data is far more useful for soundscapes than low duty cycle, compressed, or stale data: you can act on insights in real time!
            </p>
          </section>

          <section style={{ marginTop: "1.25rem" }}>
            <h2 className="h2">Goal</h2>
            <p className="para" style={{ marginTop: ".5rem" }}>
              To reliably stream and analyze real-time, continuous raw audio data from thousands of Listeners for years at a time at low power and low cost, and to enable easy deployment, visualization, storage, and management. To increase scalability, our system will not require manual data retrieval or regular maintenance, and will be usable by non-experts.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}