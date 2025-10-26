import React, { useState } from "react";
import "./App.css";
import InteractivePCB from "./InteractivePCB";
import mechanicalSpecs from "./mechanical_specs.png";

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
        <MechanicalSpecifications />
        <HardwareRecommendations />
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
          Breakout board for the Raspberry Pi Compute Module 5
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
        the Raspberry Pi Compute Module 5 (RPi CM5). It is built and tested by
        researchers at the University of Michigan's Neurobionics Lab, and
        provides plug and play functionality for sensors and acuators across a
        wide variety of robotics applications.
      </p>
    </section>
  );
}

function SystemOverview() {
  return (
    <section className="section osl-card" id="system-overview">
      <h2>Interactive PCB Layout</h2>
      <p className="pcb-version">v1.0.0</p>
      <p>
        Click on the individual components to learn more their functionality:
      </p>
      <InteractivePCB />
    </section>
  );
}

function PowerSection() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="section osl-card" id="power">
      <div className="quickstart-header">
        <h2>Power</h2>
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
          <p>Input and output power specifications:</p>

          <h3>Input Power</h3>
          <table className="power-table">
            <thead>
              <tr>
                <th>Designator</th>
                <th>Connector</th>
                <th>Voltage (V)</th>
                <th>Power (W)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <strong>J1</strong>
                </td>
                <td>
                  <strong>XT30</strong>
                </td>
                <td>15 - 60</td>
                <td>26.3 - 27.8</td>
              </tr>
              <tr>
                <td>
                  <strong>
                    J2<sup style={{ fontSize: "0.8em" }}>*</sup>
                  </strong>
                </td>
                <td>
                  <strong>USB-C</strong>
                </td>
                <td>5</td>
                <td>3.5 - 6</td>
              </tr>
            </tbody>
          </table>

          <div
            style={{ marginTop: "0.5em", fontStyle: "italic", color: "#666" }}
          >
            *Do not use J7 or J8 for power input. These are for high speed data
            transfer only.
          </div>

          <h3>Output Power</h3>
          <p>
            {" "}
            The combined output power across all connectors is 3.3 V at 1 W.
          </p>
        </>
      )}
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
          <table className="io-table">
            <thead>
              <tr>
                <th>Designator</th>
                <th>Bus Details</th>
                <th>Connector</th>
                <th>Mating Part No.</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <strong>I2C-2,3</strong>
                </td>
                <td>I2C-2, I2C-3</td>
                <td>Molex PicoClasp, 4-Pin</td>
                <td><a href="https://www.digikey.com/en/products/detail/molex/5013300400/1531501" target="_blank" rel="noopener noreferrer">5013300400</a></td>
              </tr>
              <tr>
                <td>
                  <strong>SPI-1</strong>
                </td>
                <td>SPI-1 (CS0, CS1, CS2)</td>
                <td>Molex PicoClasp, 8-Pin</td>
                <td><a href="https://www.digikey.com/en/products/detail/molex/5013300800/1531505" target="_blank" rel="noopener noreferrer">5013300800</a></td>
              </tr>
              <tr>
                <td>
                  <strong>UART-1,2</strong>
                </td>
                <td>UART-1, UART-2</td>
                <td>Molex PicoClasp, 4-Pin</td>
                <td><a href="https://www.digikey.com/en/products/detail/molex/5013300400/1531501" target="_blank" rel="noopener noreferrer">5013300400</a></td>
              </tr>
              <tr>
                <td>
                  <strong>CAN-1</strong>
                </td>
                <td>CAN-0 (on SPI-0, CS0)</td>
                <td>Molex PicoClasp, 3-Pin</td>
                <td><a href="https://www.digikey.com/en/products/detail/molex/5013300300/1531500" target="_blank" rel="noopener noreferrer">5013300300</a></td>
              </tr>
              <tr>
                <td>
                  <strong>FAN-1</strong>
                </td>
                <td>Fan PWM, Fan Tacho</td>
                <td>JST PH 4-pin</td>
                <td><a href="https://www.digikey.com/en/products/detail/jst-sales-america-inc/SHR-04V-S-B/759868" target="_blank" rel="noopener noreferrer">SHR-04V-S-B</a></td>
              </tr>
              <tr>
                <td>
                  <strong>J6</strong>
                </td>
                <td>GPIO 7, 22, 23, 24, 25, 27</td>
                <td>Header Pins, 8-Pin, 2.54 mm pitch</td>
              </tr>
            </tbody>
          </table>

          <p className="io-note">
            <strong>Note:</strong> Pins can be remapped using RPi Device Tree
            Overlays in <code>/boot/config.txt</code>. For more details follow{" "}
            <a
              href="https://github.com/raspberrypi/firmware/blob/master/boot/overlays/README"
              target="_blank"
              rel="noopener noreferrer"
            >
              this link
            </a>
            .
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
                    <li>Pushbutton to safely shutdown and power on the Pi</li>
                  </ul>
                </div>
                <div className="feature-item">
                  <h3>Status LEDs</h3>
                  <ul>
                    <li>
                      <strong>5V:</strong> Indicates power on 5V line (RPi)
                    </li>
                    <li>
                      <strong>3V3:</strong> Indicates power on 3v3 Line
                      (Sensors)
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
                  <h3>Programmable RGB LED</h3>
                  <ul>
                    <li>
                      <strong>Part Number:</strong> WS2812B-2020
                    </li>
                    <li>
                      <strong>Protocol:</strong> Single-wire SPI, GPIO 2
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
                      <strong>Part Number:</strong> BHI260AP
                    </li>
                    <li>
                      <strong>Protocol:</strong> SPI, SPI-0, CS-2
                    </li>
                  </ul>
                </div>
                <div className="feature-item">
                  <h3>SD Card Slot</h3>
                  <ul>
                    <li>
                      <strong>Functionality:</strong> To be used with CM5 "lite"
                      module (without onboard storage)
                    </li>
                  </ul>
                </div>
                <div className="feature-item">
                  <h3>Real-Time Clock</h3>
                  <ul>
                    <li>Enables RTC on-board CM5.</li>
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
        <h2>Flashing the CM5</h2>
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
          <ol className="numbered-step-list">
            <li>
              Jump the J3 header pins to put the CM5 into storage mode
            </li>
            <li>
              Set up your host device (personal computer) and install rpiboot to detect the CM5 as a storage device by following{' '}
              <a
                href="https://www.raspberrypi.com/documentation/computers/compute-module.html#set-up-the-host-device"
                target="_blank"
                rel="noopener noreferrer"
              >
                these instructions
              </a>
            </li>
            <li>
              Install the CM5 on the interface board and connect to the host device using USB J2.
            </li>
            <li>
              Run rpiboot following{' '}
              <a
                href="https://www.raspberrypi.com/documentation/computers/compute-module.html#set-up-the-host-device"
                target="_blank"
                rel="noopener noreferrer"
              >
                these instructions
              </a>{' '}
              and after a few seconds, the CM5 should be detected as a mass-storage device.
            </li>
            <li>
              Flash an operating system image using an imaging tool like{' '}
              <a
                href="https://www.raspberrypi.com/software/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Raspberry Pi Imager
              </a>.
              We highly recommend using the{' '}
              <a
                href="https://github.com/neurobionics/robot-ci"
                target="_blank"
                rel="noopener noreferrer"
              >
                Robot-CI image
              </a>{' '}
              by the Neurobionics Lab that auto-configures the peripheral ports to function with the interface board. Please follow the instructions in the repository descriptions to generate this image, and make sure to check the Are you using the Neurobionics Interface Board checkbox.
            </li>
          </ol>
        </div>
      )}
    </section>
  );
}

function MechanicalSpecifications() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="section osl-card" id="mechanical-specs">
      <div className="quickstart-header">
        <h2>Mechanical Specifications</h2>
        <button
          className="expand-button"
          onClick={() => setExpanded(!expanded)}
          aria-expanded={expanded}
        >
          <span className={`expand-icon ${expanded ? "expanded" : ""}`}>▼</span>
        </button>
      </div>

      {expanded && (
        <div className="mechanical-specs-content">
          <p>
            Mechanical dimensions and mounting specifications for the interface
            board:
          </p>
          <div className="specs-image-container">
            <img
              src={mechanicalSpecs}
              alt="Mechanical Specifications"
              className="specs-image"
            />
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
                <li>
                  <strong>Active cooling (fan):</strong> Use the 2-pin JST PH
                  connector for fan cooling via PWM. Recommended for continuous
                  operation or high ambient temperatures.
                </li>
                <li>
                  <strong>Passive cooling (heatsinks):</strong> Install
                  heatsinks on the CM5 processor and power management ICs for
                  improved thermal performance.
                </li>
                <li>
                  <strong>Airflow consideration:</strong> Ensure adequate
                  ventilation around the board, especially near heat-generating
                  components.
                </li>
              </ul>

              <h3>Grounding Your Board</h3>
              <ul>
                <li>
                  <strong>PCB grounding:</strong> Use metal screws through
                  mounting holes for grounding of PCB to chassis.
                </li>
                <li>
                  <strong>Power supply grounding:</strong> Ensure proper
                  grounding of both XT30 and USB-C power sources.
                </li>
                <li>
                  <strong>Cable shielding:</strong> Use shielded cables for
                  communication lines in high-noise environments.
                </li>
              </ul>

              <h3>Strain-Relieving Your Wires</h3>
              <ul>
                <li>
                  <strong>Grouping Wires:</strong>Use appropriate strain relief
                  cable ties or electrical tape to group 1mm wires connected to
                  Molex PicoClasp connectors. Proper strain relieving of
                  connector wires will ensure signal continuity and integrity.
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default App;
