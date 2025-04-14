// ToggleSwitch.jsx
import React, { useState } from 'react';
import './Toggle.css';

export default function Toggle({ 
  initial = false, 
  onToggle = (value:boolean) => {} 
}) {
  const [on, setOn] = useState(initial);
  const handleChange = () => {
    const next = !on;
    setOn(next);
    onToggle(next);
  };

  return (
    <label className="toggle-switch">
      <input 
        type="checkbox" 
        checked={on} 
        onChange={handleChange} 
      />
      <span className="slider" />
    </label>
  );
}
