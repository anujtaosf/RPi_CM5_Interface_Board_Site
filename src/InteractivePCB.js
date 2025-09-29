import React, { useState } from 'react';
import './InteractivePCB.css';
import pcbImage from './pcb-layout.png';

const InteractivePCB = () => {
  const [selectedComponent, setSelectedComponent] = useState(null);
  const [hoveredComponent, setHoveredComponent] = useState(null);

  const components = {
    // Communication
    'i2c2': {
      name: 'I2C-2',
      description: 'I2C bus 2 with Molex Picoclasp connector',
      position: { top: '17%', left: '55%' },
      boxArea: { top: '10%', left: '49%', width: '11%', height: '12%' },
      category: 'communication'
    },
    'i2c3': {
      name: 'I2C-3',
      description: 'I2C bus 3 with Molex Picoclasp connector',
      position: { top: '31%', left: '59%' },
      boxArea: { top: '25%', left: '53.5%', width: '11%', height: '12%' },
      category: 'communication'
    },
    'spi': {
      name: 'SPI-1',
      description: 'SPI bus with SCLK, MISO, MOSI, and 3 chip select lines',
      position: { top: '17%', left: '69%' },
      boxArea: { top: '10%', left: '60%', width: '17%', height: '14%' },
      category: 'communication'
    },
    'uart1': {
      name: 'UART-1',
      description: 'UART port 1 with Molex Picoclasp connector',
      position: { top: '17%', left: '42%' },
      boxArea: { top: '10%', left: '36%', width: '11%', height: '12%' },
      category: 'communication'
    },
    'uart2': {
      name: 'UART-2',
      description: 'UART port 2 with Molex Picoclasp connector',
      position: { top: '31%', left: '49%' },
      boxArea: { top: '25%', left: '43%', width: '11%', height: '12%' },
      category: 'communication'
    },
    'can-module': {
      name: 'CAN Module',
      description: 'MCP2512 CAN controller chip for CAN bus communication',
      position: { top: '30%', left: '38%' },
      boxArea: { top: '22%', left: '23.5%', width: '20%', height: '17%' },
      category: 'communication'
    },

    // PSU (Power Supply Units)
    'power-input': {
      name: '15-60V Input',
      description: 'XT30 connector for 15-60V input power from battery',
      position: { top: '36%', left: '80%' },
      boxArea: { top: '25%', left: '64%', width: '22%', height: '22%' },
      category: 'psu'
    },

    // Features
    'signal-leds': {
      name: 'Signal LEDs',
      description: 'Status LEDs: 5V, 3V3, PWR, ACT, and programmable LED',
      position: { top: '72%', left: '39%' },
      boxArea: { top: '68%', left: '35.5%', width: '6%', height: '18%' },
      category: 'features'
    },
    'fan-port': {
      name: 'Fan Port',
      description: 'Cooling fan connector',
      position: { top: '83%', left: '48%' },
      boxArea: { top: '75%', left: '42%', width: '11%', height: '12%' },
      category: 'features'
    },
    'test-pad': {
      name: 'Test Pads',
      description: 'Test pads for 5V and 3.3V outputs',
      position: { top: '59%', left: '48%' },
      boxArea: { top: '54%', left: '44%', width: '9%', height: '12%' },
      category: 'features'
    },
    'rpi-boot-jumper': {
      name: 'RPi Boot Jumper',
      description: 'Puts RPi CM5 into eMMC storage mode for flashing',
      position: { top: '82%', left: '75%' },
      boxArea: { top: '76%', left: '71%', width: '6%', height: '11%' },
      category: 'features'
    },
    'rpi-power-button': {
      name: 'RPi Power Button',
      description: 'Power on/off toggle switch for safe RPi shutdown',
      position: { top: '82%', left: '58.5%' },
      boxArea: { top: '75%', left: '53%', width: '11%', height: '12%' },
      category: 'features'
    },
    'gpio-headers': {
      name: 'GPIO Headers',
      description: '6x GPIO pins for general purpose I/O connections and testing',
      position: { top: '17%', left: '29%' },
      boxArea: { top: '10%', left: '21%', width: '15.5%', height: '13%' },
      category: 'features'
    },

    // Components
    'imu': {
      name: 'IMU',
      description: 'Inertial Measurement Unit for motion and orientation sensing',
      position: { top: '57%', left: '56%' },
      boxArea: { top: '51%', left: '52%', width: '7%', height: '14%' },
      category: 'components'
    },
    'usb-c': {
      name: 'USB-C Port',
      description: 'USB-C connector',
      position: { top: '35%', left: '18%' },
      boxArea: { top: '22%', left: '11%', width: '12%', height: '50%' },
      category: 'components'
    }
  };

  const getCategoryColor = (category) => {
    // All components use the same Vista Blue color
    return '#8594E8'; // Vista Blue
  };

  const handleComponentClick = (componentId, e) => {
    e.stopPropagation(); // Prevent background click from firing
    setSelectedComponent(componentId === selectedComponent ? null : componentId);
  };

  const handleComponentHover = (componentId) => {
    if (selectedComponent === componentId) {
      // If this component is selected and we hover over it, dismiss the selection
      setSelectedComponent(null);
    }
    setHoveredComponent(componentId);
  };

  const handleComponentLeave = () => {
    setHoveredComponent(null);
  };

  const handleBackgroundClick = (e) => {
    // Only dismiss if clicking directly on the PCB image or container (not on hotspots)
    if (e.target.classList.contains('pcb-image') || e.target.classList.contains('pcb-container')) {
      setSelectedComponent(null);
    }
  };

  const activeComponent = selectedComponent || hoveredComponent;

  // Calculate smart popup position to avoid covering the component
  const getPopupPosition = (component) => {
    if (!component.boxArea) return { top: '20px', left: '20px' };

    const boxTop = parseFloat(component.boxArea.top);
    const boxLeft = parseFloat(component.boxArea.left);
    const boxWidth = parseFloat(component.boxArea.width);
    const boxHeight = parseFloat(component.boxArea.height);
    const componentPosition = component.position;
    const markerTop = parseFloat(componentPosition.top);
    const markerLeft = parseFloat(componentPosition.left);

    let position = { top: '20px', left: '20px' };


    // Special positioning for other bottom-right components
    if (markerTop > 50 && markerLeft > 50) {
      // For components in bottom-right area, place popup to the left
      position.top = `${Math.max(5, boxTop - 10)}%`;
      position.left = `${Math.max(5, boxLeft - 35)}%`;
      return position;
    }

    // If component is in the top half, place popup below it
    if (boxTop < 50) {
      position.top = `${boxTop + boxHeight + 5}%`;
    } else {
      // If component is in bottom half, place popup above it
      position.top = `${Math.max(5, boxTop - 25)}%`;
    }

    // If component is on the left side, place popup to the right
    if (boxLeft < 50) {
      position.left = `${Math.min(70, boxLeft + boxWidth + 5)}%`;
    } else {
      // If component is on the right side, place popup to the left
      position.left = `${Math.max(5, boxLeft - 25)}%`;
    }

    return position;
  };

  return (
    <div className="interactive-pcb" onClick={handleBackgroundClick}>
      <div className="pcb-container" onClick={handleBackgroundClick}>
        <img
          src={pcbImage}
          alt="RPi CM5 Interface Board PCB Layout"
          className="pcb-image"
          onClick={handleBackgroundClick}
        />

        {/* Hover boxes */}
        {Object.entries(components).map(([id, component]) => (
          <div
            key={`box-${id}`}
            className={`component-box ${(hoveredComponent === id || selectedComponent === id) ? 'visible' : ''}`}
            style={{
              top: component.boxArea.top,
              left: component.boxArea.left,
              width: component.boxArea.width,
              height: component.boxArea.height,
              '--category-color': getCategoryColor(component.category)
            }}
          />
        ))}

        {/* Interactive hotspots */}
        {Object.entries(components).map(([id, component]) => (
          <div
            key={id}
            className={`hotspot ${activeComponent === id ? 'active' : ''}`}
            style={{
              top: component.position.top,
              left: component.position.left,
              '--category-color': getCategoryColor(component.category)
            }}
            onClick={(e) => handleComponentClick(id, e)}
            onMouseEnter={() => handleComponentHover(id)}
            onMouseLeave={handleComponentLeave}
            title={component.name}
          >
            <div className="hotspot-dot"></div>
            <div className="hotspot-pulse"></div>
          </div>
        ))}

        {/* Component info panel */}
        {activeComponent && (
          <div
            className="component-info"
            style={getPopupPosition(components[activeComponent])}
          >
            <h3 style={{ color: getCategoryColor(components[activeComponent].category) }}>
              {components[activeComponent].name}
            </h3>
            <p>{components[activeComponent].description}</p>
            <span className="component-category">
              {components[activeComponent].category.toUpperCase()}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default InteractivePCB;