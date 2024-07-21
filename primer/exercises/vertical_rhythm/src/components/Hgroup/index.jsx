import React from 'react';

export default function Hgroup({ heading, title, content }) {
  const headingTag = heading;
  
  return (
    <hgroup>
      {React.createElement(heading, null, title)}
      {content && <p>{content}</p>}
    </hgroup>
  );
}
