import React, { useState } from "react";
import "./App.css";
import InteractivePCB from "./InteractivePCB";

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main-content">
        <About />
        <SystemOverview />
        <PowerSection />
        <IOPinsSection />
        <FeaturesSection />
        <QuickStart />
        <HardwareRecommendations />
        <WhereToBuyComponents />
      </main>
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <h1>Raspberry Pi Compute Module 5 Interface Board</h1>
        <p className="header-subtitle">
          Compatible PCB for the Raspberry Pi Compute Module 5
        </p>
      </div>
    </header>
  );
}

function About() {
  return (
    <section className="section osl-card" id="about">
      <h2>About</h2>
      <p>
        The Interface Board is an add-on module designed to fit onto and power
        the Raspberry Pi Compute Module 5. It is built and tested by researchers
        at the University of Michigan's Neurobionics Lab, and is compliant with
        all sensors and peripherals on the Open Source Leg.
      </p>
    </section>
  );
}

function SystemOverview() {
  return (
    <section className="section osl-card" id="system-overview">
      <h2>Interactive PCB Layout</h2>
      <p>
        Click on the components below to learn more about each part of the
        interface board:
      </p>
      <InteractivePCB />
    </section>
  );
}

function PowerSection() {
  return (
    <section className="section osl-card" id="power">
      <h2>Power</h2>
      <p>Power specifications and requirements for the interface board:</p>

      <table className="power-table">
        <thead>
          <tr>
            <th>Identifier</th>
            <th>Connector</th>
            <th>Input Power</th>
            <th>Output Power</th>
            <th>Purpose</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>J1</strong></td>
            <td><strong>XT30</strong></td>
            <td>15-60V</td>
            <td>5V</td>
            <td>Motor Power</td>
          </tr>
          <tr>
            <td><strong>J2</strong></td>
            <td><strong>USB-C</strong></td>
            <td>-</td>
            <td>5V @ 5A</td>
            <td>RPi and Sensor Power</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}

function IOPinsSection() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="section osl-card" id="io-pins">
      <div className="quickstart-header">
        <h2>I/O Pins</h2>
        <button
          className="expand-button"
          onClick={() => setExpanded(!expanded)}
          aria-expanded={expanded}
        >
          <span className={`expand-icon ${expanded ? "expanded" : ""}`}>▼</span>
        </button>
      </div>

      {expanded && (
        <>
          <p>
            Communication protocols and I/O connections available on the interface board.
            All connections use Molex PicoClasp connectors unless otherwise noted.
          </p>

          <table className="io-table">
            <thead>
              <tr>
                <th>Protocol/Function</th>
                <th>Connector</th>
                <th>Bus/Pins</th>
                <th>Pin Count</th>
                <th>Purpose</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>I2C</strong></td>
                <td>Molex PicoClasp</td>
                <td>I2C-2, I2C-3</td>
                <td>4-pin</td>
                <td>Serial communication</td>
              </tr>
              <tr>
                <td><strong>SPI</strong></td>
                <td>Molex PicoClasp</td>
                <td>SPI-1 (CS0, CS1, CS2)</td>
                <td>8-pin</td>
                <td>Serial communication</td>
              </tr>
              <tr>
                <td><strong>UART</strong></td>
                <td>Molex PicoClasp</td>
                <td>UART-1, UART-2</td>
                <td>4-pin</td>
                <td>Serial communication</td>
              </tr>
              <tr>
                <td><strong>CAN Bus</strong></td>
                <td>Molex PicoClasp</td>
                <td>CAN-0 via SPI-0 (CS0)</td>
                <td>3-pin</td>
                <td>Serial communication</td>
              </tr>
              <tr>
                <td><strong>GPIO Headers</strong></td>
                <td>Pin Headers</td>
                <td>GPIO 7, 22, 23, 24, 25, 27</td>
                <td>8-pin</td>
                <td>General-purpose I/O for debugging</td>
              </tr>
              <tr>
                <td><strong>Fan Port</strong></td>
                <td>JST PH 2-pin</td>
                <td>PWM controlled</td>
                <td>2-pin</td>
                <td>Cooling fan for RPi CM5</td>
              </tr>
            </tbody>
          </table>

          <p className="io-note">
            <strong>Note:</strong> Pins may be remapped using RPi Device Tree Overlays
            (typically in <code>/boot/config.txt</code>) to customize protocol parameters
            and enable/disable specific chip selects.
          </p>
        </>
      )}
    </section>
  );
}


function FeaturesSection() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="section osl-card" id="features">
      <div className="quickstart-header">
        <h2>Features</h2>
        <button
          className="expand-button"
          onClick={() => setExpanded(!expanded)}
          aria-expanded={expanded}
        >
          <span className={`expand-icon ${expanded ? "expanded" : ""}`}>▼</span>
        </button>
      </div>

      {expanded && (
        <div className="quickstart-steps">
          <div className="quickstart-step no-numbers">
            <div className="step-content">
              <div className="features-grid">
                <div className="feature-item">
                  <h3>Safe RPi Shutdown</h3>
                  <ul>
                    <li>ON/OFF latching switch triggers safe OS shutdown</li>
                    <li>Cuts power to the RPi only after shutdown signal</li>
                    <li>Sensors remain powered (always-on) ?</li>
                  </ul>
                </div>
                <div className="feature-item">
                  <h3>Status LEDs</h3>
                  <ul>
                    <li>
                      <strong>5V:</strong> RPi is powered
                    </li>
                    <li>
                      <strong>3V3:</strong> Sensors are powered
                    </li>
                    <li>
                      <strong>PWR:</strong> Power is being supplied to the
                      interface board
                    </li>
                    <li>
                      <strong>ACT:</strong> Activity indicator (flashes during
                      access)
                    </li>
                  </ul>
                </div>
                <div className="feature-item">
                  <h3>Programmable LED</h3>
                  <ul>
                    <li>
                      <strong>Description:</strong> Addressable RGB LED for
                      custom signals and status indication
                    </li>
                    <li>
                      <strong>Part Number:</strong> WS2812B-2020
                    </li>
                    <li>
                      <strong>Control:</strong> Single-wire SPI
                    </li>
                    <li>
                      <strong>Pin Number:</strong> GPIO 2
                    </li>
                    <li>
                      <strong>Example Implementation:</strong> [insert link
                      here]
                    </li>
                  </ul>
                </div>
                <div className="feature-item">
                  <h3>IMU</h3>
                  <ul>
                    <li>
                      <strong>Description:</strong> Inertial Measurement Unit
                    </li>
                    <li>
                      <strong>Functionality:</strong> Motion/orientation sensing
                    </li>
                    <li>
                      <strong>Part Number:</strong> BHI260AP
                    </li>
                    <li>
                      <strong>Communication:</strong> SPI Bus 0, Chip Select 2
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

function QuickStart() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="section osl-card" id="quick-start">
      <div className="quickstart-header">
        <h2>Quick Start</h2>
        <button
          className="expand-button"
          onClick={() => setExpanded(!expanded)}
          aria-expanded={expanded}
        >
          <span className={`expand-icon ${expanded ? "expanded" : ""}`}>▼</span>
        </button>
      </div>

      {expanded && (
        <div className="quickstart-steps">
          <div className="quickstart-step no-numbers">
            <div className="step-content">
              <h3>Software Setup Steps</h3>
            </div>
          </div>

          <div className="quickstart-step">
            <div className="step-number">1</div>
            <div className="step-content">
              <h3>Flashing</h3>
              <p>
                A build needs to be flashed onto the compute module by jumping
                the J3 headers. This will put the board into storage mode, so you can
                flash the eMMC. Here is the{" "}
                <a
                  href="https://github.com/neurobionics/neurobionicspi"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  current Neurobionics Pi documentation.
                </a>
                .
              </p>
              <p>
                Make sure to check the box <em>"Are you using the Neurobionics interface
                board? If so, please check this box."</em> when flashing the image.
              </p>
            </div>
          </div>

          <div className="quickstart-step">
            <div className="step-number">2</div>
            <div className="step-content">
              <h3>Turning On</h3>
              <ol>
                <li>
                  Connect interface board to the compute module and plug in power
                  <ul>
                    <li>The boards should overlap perfectly</li>
                    <li>
                      The "5V" LED near the toggle switch should light up, followed by the "PWR" LED
                    </li>
                  </ul>
                </li>
                <li>
                  After a minute or two, you should receive an email with the RPi IP address
                  <ul>
                    <li>If you do not, check that you have correctly configured the build</li>
                  </ul>
                </li>
                <li>Log into the Pi with the IP address using a serial terminal tool.</li>
              </ol>
            </div>
          </div>

          <div className="quickstart-step">
            <div className="step-number">3</div>
            <div className="step-content">
              <h3>First Time Configuration</h3>
              <p>
                The first time the RPi boots, the user will need to run an included bash
                script in order to set up the <em>config.txt</em>. This script will automatically
                restart the board upon completion.
              </p>
            </div>
          </div>

        </div>
      )}
    </section>
  );
}


function HardwareRecommendations() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="section osl-card" id="hardware-recommendations">
      <div className="quickstart-header">
        <h2>Hardware Recommendations</h2>
        <button
          className="expand-button"
          onClick={() => setExpanded(!expanded)}
          aria-expanded={expanded}
        >
          <span className={`expand-icon ${expanded ? "expanded" : ""}`}>▼</span>
        </button>
      </div>

      {expanded && (
        <div className="quickstart-steps">
          <div className="quickstart-step no-numbers">
            <div className="step-content">
              <h3>Cooling Your Board</h3>
              <ul>
                <li><strong>Active cooling (fan):</strong> Use the 2-pin JST PH fan connector for PWM-controlled cooling. Recommended for continuous operation or high ambient temperatures.</li>
                <li><strong>Passive cooling (heatsinks):</strong> Install heatsinks on the CM5 processor and power management ICs for improved thermal performance.</li>
                <li><strong>Airflow consideration:</strong> Ensure adequate ventilation around the board, especially near heat-generating components.</li>
              </ul>

              <h3>Grounding Your Board</h3>
              <ul>
                <li><strong>Chassis grounding:</strong> Connect the board ground to your system chassis or enclosure for EMI reduction and safety.</li>
                <li><strong>Power supply grounding:</strong> Ensure proper grounding of both XT30 and USB-C power sources.</li>
                <li><strong>Cable shielding:</strong> Use shielded cables for communication lines in high-noise environments.</li>
              </ul>

              <h3>Strain-Relieving Your Wires</h3>
              <ul>
                <li><strong>Connector retention:</strong> Use appropriate strain relief boots or cable ties near Molex PicoClasp connectors.</li>
                <li><strong>Service loops:</strong> Provide adequate cable slack to prevent stress on solder joints during movement or vibration.</li>
                <li><strong>Cable management:</strong> Route cables away from heat sources and moving parts. Use cable ties or clips to secure routing.</li>
                <li><strong>Power cable protection:</strong> Ensure XT30 and USB-C power cables are properly secured to prevent disconnection.</li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

function WhereToBuyComponents() {
  return (
    <section className="section osl-card" id="where-to-buy">
      <h2>Where to Buy Components</h2>
      <p>
        Essential components and connectors needed for your RPi CM5 Interface
        Board:
      </p>

      <h3>Molex PicoClasp Connectors</h3>
      <p>
        The interface board uses Molex PicoClasp connectors for reliable
        communication connections. You'll need the following configurations:
      </p>

      <div className="component-grid">
        <div className="component-item">
          <h4>3-Pin Connector</h4>
          <p>
            <strong>Part Number:</strong> 5013300300
          </p>
          <p>
            <strong>Use:</strong> CAN connection
          </p>
          <a
            href="https://www.digikey.com/en/products/detail/molex/5013300300/1531500?s=N4IgTCBcDaIDoBcAEBWADARgMxbW3aIAugL5A"
            target="_blank"
            rel="noopener noreferrer"
            className="buy-button"
            title="Buy on DigiKey"
          >
            🛒
          </a>
        </div>

        <div className="component-item">
          <h4>4-Pin Connector</h4>
          <p>
            <strong>Part Number:</strong> 5013300400
          </p>
          <p>
            <strong>Use:</strong> I2C and UART connections
          </p>
          <a
            href="https://www.digikey.com/en/products/detail/molex/5013300400/1531501?so=93491445&content=productdetail_US&mkt_tok=MDI4LVNYSy01MDcAAAGbe6wHzXiLLv4S4Tt8PSEnMJq4DEhLzRDmfzXk-usiogIoSKjuLDcc6_YReTEPQoQmsjvgytnIQU0H6iG3zLlGYPc5dNVZZqZCuwsbcn_-E"
            target="_blank"
            rel="noopener noreferrer"
            className="buy-button"
            title="Buy on DigiKey"
          >
            🛒
          </a>
        </div>

        <div className="component-item">
          <h4>8-Pin Connector</h4>
          <p>
            <strong>Part Number:</strong> 5013300800
          </p>
          <p>
            <strong>Use:</strong> SPI communication
          </p>
          <a
            href="https://www.digikey.com/en/products/detail/molex/5013300800/1531505?s=N4IgTCBcDaIDoBcAEBWADARgMxbWgHHiALoC%2BQA"
            target="_blank"
            rel="noopener noreferrer"
            className="buy-button"
            title="Buy on DigiKey"
          >
            🛒
          </a>
        </div>

        <div className="component-item">
          <h4>4-Pin JST Connector</h4>
          <p>
            <strong>Part Number:</strong> SHR-04V-S-B
          </p>
          <p>
            <strong>Use:</strong> Cooling fan connector
          </p>
          <a
            href="https://www.digikey.com/en/products/detail/jst-sales-america-inc/SHR-04V-S-B/759868"
            target="_blank"
            rel="noopener noreferrer"
            className="buy-button"
            title="Buy on DigiKey"
          >
            🛒
          </a>
        </div>
      </div>
    </section>
  );
}

export default App;
