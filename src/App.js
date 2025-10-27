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
        The Interface Board is an add-on module for the Raspberry Pi Compute
        Module 5 (RPi CM5) that is designed to provide plug and play
        functionality for sensors and actuators across a wide variety of
        robotics applications. It is built and tested by researchers at the
        University of Michigan's Neurobionics Lab.
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

          <h3>Input</h3>
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
                <td></td>
                <td>26.5</td>
              </tr>
            </tbody>
          </table>

          <div
            style={{ marginTop: "0.5em", fontStyle: "italic", color: "#666" }}
          >
            *Do not use J7 or J8 USB-C ports for power input. These are for high
            speed data transfer only.
          </div>

          <h3>Output</h3>
          <p>
            {" "}
            The peripheral connectors can provide a combined power output of 1 W
            at 3.3 V.
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
                <td>
                  <a
                    href="https://www.digikey.com/en/products/detail/molex/5013300400/1531501"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    5013300400
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <strong>SPI-1</strong>
                </td>
                <td>SPI-1 (CS0, CS1, CS2)</td>
                <td>Molex PicoClasp, 8-Pin</td>
                <td>
                  <a
                    href="https://www.digikey.com/en/products/detail/molex/5013300800/1531505"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    5013300800
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <strong>UART-1,2</strong>
                </td>
                <td>UART-1, UART-2</td>
                <td>Molex PicoClasp, 4-Pin</td>
                <td>
                  <a
                    href="https://www.digikey.com/en/products/detail/molex/5013300400/1531501"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    5013300400
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <strong>CAN-1</strong>
                </td>
                <td>CAN-0 (on SPI-0, CS0)</td>
                <td>Molex PicoClasp, 3-Pin</td>
                <td>
                  <a
                    href="https://www.digikey.com/en/products/detail/molex/5013300300/1531500"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    5013300300
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <strong>FAN-1</strong>
                </td>
                <td>Fan PWM, Fan Tacho</td>
                <td>JST PH 4-pin</td>
                <td>
                  <a
                    href="https://www.digikey.com/en/products/detail/jst-sales-america-inc/SHR-04V-S-B/759868"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    SHR-04V-S-B
                  </a>
                </td>
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
            Overlays in <code>/boot/firmware/config.txt</code>. For more
            details, refer to this{" "}
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
  const [selectedFeature, setSelectedFeature] = useState(null);

  const handleExpand = (isExpanded) => {
    setExpanded(isExpanded);
    if (isExpanded && !selectedFeature && features.length > 0) {
      setSelectedFeature(features[0]);
    }
  };

  const features = [
    {
      id: "shutdown",
      title: "Safe RPi Shutdown",
      icon: "⚡",
      description: {
        type: "simple",
        content: "Pushbutton to safely shutdown and power on the Pi",
      },
    },
    {
      id: "status-leds",
      title: "Status LEDs",
      icon: "💡",
      description: {
        type: "list",
        content: [
          { label: "5V", desc: "Indicates power on the 5V rail" },
          { label: "3V3", desc: "Indicates power on the 3.3V rail" },
          {
            label: "PWR",
            desc: "The CM5 is receiving sufficient power and is turned on",
          },
          {
            label: "ACT",
            desc: "The flashing green light indicates the CM5 is running and/or accessing the OS",
          },
        ],
      },
    },
    {
      id: "rgb-led",
      title: "Programmable RGB LED",
      icon: "🌈",
      description: {
        type: "specs",
        content: [
          { label: "Part Number", value: "WS2812B-2020" },
          { label: "Protocol", value: "Single-wire SPI (GPIO 2)" },
          { label: "Example Implementation", value: "[insert link here]" },
        ],
      },
    },
    {
      id: "imu",
      title: "IMU",
      icon: "🔄",
      description: {
        type: "specs",
        content: [
          { label: "Part Number", value: "BHI260AP" },
          { label: "Protocol", value: "SPI (SPI-0, CS-2)" },
        ],
      },
    },
    {
      id: "sd-card",
      title: "SD Card Slot",
      icon: "💾",
      description: {
        type: "simple",
        content: 'To be used with CM5 "lite" module (without onboard storage)',
      },
    },
    {
      id: "rtc",
      title: "Real-Time Clock",
      icon: "🕒",
      description: {
        type: "simple",
        content: "Enables RTC on-board the RPi CM5.",
      },
    },
  ];

  return (
    <section className="section osl-card" id="features">
      <div className="quickstart-header">
        <h2>Features</h2>
        <button
          className="expand-button"
          onClick={() => handleExpand(!expanded)}
          aria-expanded={expanded}
        >
          <span className={`expand-icon ${expanded ? "expanded" : ""}`}>▼</span>
        </button>
      </div>

      {expanded && (
        <div className="features-container">
          <div className="features-list">
            {features.map((feature) => (
              <button
                key={feature.id}
                className={`feature-button ${
                  selectedFeature?.id === feature.id ? "active" : ""
                }`}
                onClick={() => setSelectedFeature(feature)}
              >
                <span className="feature-icon">{feature.icon}</span>
                {feature.title}
              </button>
            ))}
          </div>

          {selectedFeature && (
            <div className="feature-details">
              <h3>
                <span className="feature-icon">{selectedFeature.icon}</span>
                {selectedFeature.title}
              </h3>

              {selectedFeature.description.type === "simple" && (
                <p>{selectedFeature.description.content}</p>
              )}

              {selectedFeature.description.type === "list" && (
                <ul>
                  {selectedFeature.description.content.map((item, index) => (
                    <li key={index}>
                      <strong>{item.label}:</strong> {item.desc}
                    </li>
                  ))}
                </ul>
              )}

              {selectedFeature.description.type === "specs" && (
                <dl className="specs-list">
                  {selectedFeature.description.content.map((spec, index) => (
                    <div key={index} className="spec-item">
                      <dt>{spec.label}:</dt>
                      <dd>{spec.value}</dd>
                    </div>
                  ))}
                </dl>
              )}
            </div>
          )}
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
            <li>Jump the J3 header pins to put the CM5 into storage mode</li>
            <li>
              Set up your host device (personal computer) and install{" "}
              <code>rpiboot</code> to detect the CM5 as a storage device by
              following these{" "}
              <a
                href="https://www.raspberrypi.com/documentation/computers/compute-module.html#set-up-the-host-device"
                target="_blank"
                rel="noopener noreferrer"
              >
                these instructions
              </a>
            </li>
            <li>
              Install the CM5 on the interface board and connect to the host
              device using USB J2.
            </li>
            <li>
              Run rpiboot following{" "}
              <a
                href="https://www.raspberrypi.com/documentation/computers/compute-module.html#set-up-the-host-device"
                target="_blank"
                rel="noopener noreferrer"
              >
                these instructions
              </a>{" "}
              and after a few seconds, the CM5 should be detected as a
              mass-storage device.
            </li>
            <li>
              Flash an operating system image using an imaging tool like{" "}
              <a
                href="https://www.raspberrypi.com/software/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Raspberry Pi Imager
              </a>
              . We highly recommend using the{" "}
              <a
                href="https://github.com/neurobionics/robot-ci"
                target="_blank"
                rel="noopener noreferrer"
              >
                Robot-CI image
              </a>{" "}
              by the Neurobionics Lab that auto-configures the peripheral ports
              to function with the interface board. Please follow the
              instructions in the repository descriptions to generate this
              image, and make sure to check the <em>Are you using the Neurobionics
              Interface Board</em> checkbox.
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
              <h3>Cooling</h3>
              <p>
                Since the RPi CM5 tends to run hotter than the standard RPi 5,
                we strongly recommend using active cooling (via the FAN-1 port)
                or a passive heatsink, along with ensuring adequate ventilation.
              </p>

              <h3>Grounding</h3>
              <p>
                For improved noise immunity in high-interference environments,
                use shielded cables for sensors and ground the interface board
                to the hardware chassis.
              </p>

              <h3>Strain Relieving</h3>
              <p>
                Provide adequate strain relief on all wiring to reduce
                mechanical stress and maintain signal integrity.
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default App;
