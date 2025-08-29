// Shared Tip Types
interface SimpleTip {
  type: "good" | "improve";
  tip: string;
}

interface DetailedTip extends SimpleTip {
  explanation: string;
}

// Feedback type
interface Feedback {
  overallScore: number;
  ATS: {
    score: number;
    tips: SimpleTip[];
  };
  toneAndStyle: {
    score: number;
    tips: DetailedTip[];
  };
  content: {
    score: number;
    tips: DetailedTip[];
  };
  structure: {
    score: number;
    tips: DetailedTip[];
  };
  skills: {
    score: number;
    tips: DetailedTip[];
  };
}

// ResumeId type
interface Resume {
  id: string;
  companyName?: string;
  jobTitle?: string;
  imagePath: string;
  resumePath: string;
  feedback: Feedback;
}

// Job type
interface Job {
  title: string;
  description: string;
  location: string;
  requiredSkills: string[];
}
