export interface Recipient {
  name: string;
  address: string;
  channels: {
    name: string;
  }[];
}

export interface Status {
  sid: number;
  status: string;
  date: string;
  gmt: string;
  ip: string;
  OS: string;
  browser: string;
  agent: string;
  new: boolean;
  description: string;
  final: boolean;
  cfscode: string;
  lang: string;
}

export interface Notification {
  nid: number;
  text: string;
  date: string;
  type: string;
  scope: string;
}

export interface Task {
  tid: number;
  type: string;
  status: string;
  date: string;
  gmt: string;
  cfscode: string;
  'gmt-provided': string;
  'gmt-initial': string;
}

export interface QuestionOption {
  oid: number;
  label: string;
  order: number;
  default: boolean;
  input?: {
    allowed: boolean;
    min: number;
    max: number;
  };
}

export interface Question {
  qid: number;
  label: string;
  required: boolean;
  type: 'CHECK' | 'TEXT';
  options?: QuestionOption[];
}

export interface Form {
  fid: string;
  title: string;
  required: boolean;
  answered: boolean;
  questions: Question[];
}

export interface Agreement {
  must_accept_terms: boolean;
  accept_button_text: string;
  decline_button_text: string;
  buttons_style: string;
  agreement_deadline_fixed: string;
  agreement_deadline_from_first_read: number;
  agreement_deadline: string;
  agreement_condition: string;
  forms: Form[];
  signed_by_sender: boolean;
}

// Tipado para la historia del hilo
export interface HistoryEntry {
  sid: number;
  status: string;
  date: string;
  gmt: string;
  ip: string;
  OS: string;
  browser: string;
  agent: string;
  new: boolean;
  description: string;
  final: boolean;
  cfscode: string;
  lang: string;
}

export interface ThreadResponse {
  cfscode: string;
  cfsdata: string;
  print: string;
  thid: number;
  date: string;
  subject: string;
  summary: string;
  recipient: Recipient;
  status: Status;
  tags: string[];
  opened: boolean;
  draft: boolean;
  closed: boolean;
  archived: boolean;
  notifications: Notification[];
  attachments: string[];
  tasks: Task[];
  language: string;
  private: string;
  thread_type: string;
  sender: {
    operator: number;
    client: string;
    user: string;
    version: {
      oid: number;
      name: string;
      version: string;
      domain: {
        did: number;
        name: string;
        domain: string;
        gateway: string;
        url: string;
      };
    };
  };
  content: string;
  external_id: string;
  public: string;
  template: {
    tid: number;
    name: string;
    description: string;
    type: number;
    flags: string[];
    aid: number;
  };
  notification_channel: {
    email: {
      sender_email: string;
      sender_name: string;
      receiver_email: string;
      receiver_name: string;
      notification_template: number;
      notification_text: string;
      reiterations: {
        reiterations: string[];
      };
    };
  };
  agreement: Agreement;
  otp_protection: string[];
  history: HistoryEntry[];
  tickets: {
    tid: number;
    title: string;
    date: string;
    cost: number;
  }[];
  response_text_allowed: boolean;
  response_files_allowed: boolean;
  verify: {
    qr: string;
    url: string;
    keys: {
      recipient: string;
    };
  };
  multisign: boolean;
  core: string;
}
