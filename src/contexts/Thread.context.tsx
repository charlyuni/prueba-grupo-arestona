import React, { createContext, useContext, useState, useMemo } from 'react';
import {
  Form,
  HistoryEntry,
  Status,
  ThreadResponse,
} from '../types/theared.types';

interface ThreadContextType {
  threadData: ThreadResponse | null;
  setThreadData: (data: ThreadResponse) => void;
  sender: string;
  recipient: string;
  status?: Status;
  cfscode: string;
  content: string;
  forms: Form[];
  buttonLabel: string;
  history: HistoryEntry[];
  isClose: boolean;
  linkPublic: string;
}

const ThreadContext = createContext<ThreadContextType | undefined>(undefined);

export const useThreadContext = () => {
  const context = useContext(ThreadContext);
  if (!context) {
    throw new Error('useThreadContext debe usarse dentro de ThreadProvider');
  }
  return context;
};

export const ThreadProvider = ({ children }: { children: React.ReactNode }) => {
  const [threadData, setThreadData] = useState<ThreadResponse | null>(null);

  const derivedData = useMemo(() => {
    return {
      sender: threadData?.sender?.user || '',
      recipient: threadData?.recipient?.address || '',
      status: threadData?.status,
      cfscode: threadData?.cfscode || '',
      content: threadData?.content || '',
      forms: threadData?.agreement?.forms || [],
      buttonLabel: threadData?.agreement?.accept_button_text || '',
      history: threadData?.history || [],
      isClose: threadData?.closed || false,
      linkPublic: threadData?.public || '',
    };
  }, [threadData]);

  return (
    <ThreadContext.Provider
      value={{ threadData, setThreadData, ...derivedData }}
    >
      {children}
    </ThreadContext.Provider>
  );
};
