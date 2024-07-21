import React from 'react';

export default function Hgroup({ heading, title, subtitle }) {
  const headingTag = heading;
  
  return (
    <hgroup className="h-24 border-black m-4 border-4">
      {React.createElement(heading, {className="title"}, title)}
      {subtitle && <p className="subtitle">{subtitle}</p>}
    </hgroup>
  );
}
