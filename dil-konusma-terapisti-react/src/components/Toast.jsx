import React from 'react';

export default function Toast({ message, visible }) {
  return (
    <div className={`toast-notification ${visible ? 'show' : ''}`}>
      <span style={{ fontSize: '1.25rem' }}>✅</span>
      <span>{message}</span>
    </div>
  );
}
