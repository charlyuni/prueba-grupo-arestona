import React from 'react';
import FormTheared from './form/Form';
import { History } from './components/History';
import ThreadContent from './components/ThreadContent';
import { useThreadContext } from '../../contexts/Thread.context';
import { Modal } from '../../components';
import './styles/Theared.scss';

const Theared: React.FC = () => {
  const { content, forms, buttonLabel, isClose, history, linkPublic } =
    useThreadContext();

  return (
    <div className="theared">
      <div className="theared__main">
        <ThreadContent content={content} />
        <FormTheared
          forms={forms}
          buttonLabel={buttonLabel}
          isClose={isClose}
          linkPublic={linkPublic}
        />
        <Modal>
          <History history={history} />
        </Modal>
      </div>
    </div>
  );
};

export default Theared;
