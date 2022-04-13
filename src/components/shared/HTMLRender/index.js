import React from 'react';
import DOMPurify from 'dompurify';

export default function HtmlRender({ content }) {
  return (
    <div
      dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(content) }}></div>
  );
}
