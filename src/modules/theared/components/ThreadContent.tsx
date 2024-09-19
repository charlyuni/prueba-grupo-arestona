import React from 'react';
import '../styles/ThreadContent.scss';
import DOMPurify from 'dompurify';

interface ThreadContentProps {
  content: string;
}

const ThreadContent: React.FC<ThreadContentProps> = ({ content }) => {
  return (
    <div className="thread-content">
      <h2 className="thread-content__title">Contenido</h2>
      <div
        className="thread-content__body"
        dangerouslySetInnerHTML={{
          __html: DOMPurify.sanitize(content),
        }}
      />
    </div>
  );
};

export default ThreadContent;
