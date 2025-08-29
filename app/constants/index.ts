export const resumes: Resume[] = [
  {
    id: "1",
    companyName: "Google",
    jobTitle: "Frontend Developer",
    imagePath: "/images/resume_01.png",
    resumePath: "/resumes/resume-1.pdf",
    feedback: {
      overallScore: 85,
      ATS: {
        score: 90,
        tips: [],
      },
      toneAndStyle: {
        score: 90,
        tips: [],
      },
      content: {
        score: 90,
        tips: [],
      },
      structure: {
        score: 90,
        tips: [],
      },
      skills: {
        score: 90,
        tips: [],
      },
    },
  },
  {
    id: "2",
    companyName: "Microsoft",
    jobTitle: "Cloud Engineer",
    imagePath: "/images/resume_02.png",
    resumePath: "/resumes/resume-2.pdf",
    feedback: {
      overallScore: 55,
      ATS: {
        score: 90,
        tips: [],
      },
      toneAndStyle: {
        score: 90,
        tips: [],
      },
      content: {
        score: 90,
        tips: [],
      },
      structure: {
        score: 90,
        tips: [],
      },
      skills: {
        score: 90,
        tips: [],
      },
    },
  },
  {
    id: "3",
    companyName: "Apple",
    jobTitle: "iOS Developer",
    imagePath: "/images/resume_03.png",
    resumePath: "/resumes/resume-3.pdf",
    feedback: {
      overallScore: 75,
      ATS: {
        score: 90,
        tips: [],
      },
      toneAndStyle: {
        score: 90,
        tips: [],
      },
      content: {
        score: 90,
        tips: [],
      },
      structure: {
        score: 90,
        tips: [],
      },
      skills: {
        score: 90,
        tips: [],
      },
    },
  },
  {
    id: "4",
    companyName: "Google",
    jobTitle: "Frontend Developer",
    imagePath: "/images/resume_01.png",
    resumePath: "/resumes/resume-1.pdf",
    feedback: {
      overallScore: 85,
      ATS: {
        score: 90,
        tips: [],
      },
      toneAndStyle: {
        score: 90,
        tips: [],
      },
      content: {
        score: 90,
        tips: [],
      },
      structure: {
        score: 90,
        tips: [],
      },
      skills: {
        score: 90,
        tips: [],
      },
    },
  },
  {
    id: "5",
    companyName: "Microsoft",
    jobTitle: "Cloud Engineer",
    imagePath: "/images/resume_02.png",
    resumePath: "/resumes/resume-2.pdf",
    feedback: {
      overallScore: 55,
      ATS: {
        score: 90,
        tips: [],
      },
      toneAndStyle: {
        score: 90,
        tips: [],
      },
      content: {
        score: 90,
        tips: [],
      },
      structure: {
        score: 90,
        tips: [],
      },
      skills: {
        score: 90,
        tips: [],
      },
    },
  },
  {
    id: "6",
    companyName: "Apple",
    jobTitle: "iOS Developer",
    imagePath: "/images/resume_03.png",
    resumePath: "/resumes/resume-3.pdf",
    feedback: {
      overallScore: 75,
      ATS: {
        score: 90,
        tips: [],
      },
      toneAndStyle: {
        score: 90,
        tips: [],
      },
      content: {
        score: 90,
        tips: [],
      },
      structure: {
        score: 90,
        tips: [],
      },
      skills: {
        score: 90,
        tips: [],
      },
    },
  },
];

// ===============================
// constants/index.ts
// ===============================

// Ye AI ko follow karne ka JSON format hai
export const AIResponseFormat = `{
  "overallScore": number, //max 100
  "ATS": {
    "score": number, //rate based on ATS suitability
    "tips": [
      {
        "type": "good" | "improve",
        "tip": string, //give 3-4 tips
      }
    ]
  },
  "toneAndStyle": {
    "score": number, //max 100
    "tips": [
      {
        "type": "good" | "improve",
        "tip": string, //short title
        "explanation": string //detailed explanation
      }
    ] //give 3-4 tips
  },
  "content": {
    "score": number, //max 100
    "tips": [
      {
        "type": "good" | "improve",
        "tip": string,
        "explanation": string
      }
    ]
  },
  "structure": {
    "score": number, //max 100
    "tips": [
      {
        "type": "good" | "improve",
        "tip": string,
        "explanation": string
      }
    ]
  },
  "skills": {
    "score": number, //max 100
    "tips": [
      {
        "type": "good" | "improve",
        "tip": string,
        "explanation": string
      }
    ]
  }
}`;

// Ye function AI ko instructions deta hai
export const prepareInstructions = ({
                                      jobTitle,
                                      jobDescription,
                                    }: {
  jobTitle: string;
  jobDescription: string;
}) =>
  `You are an expert in ATS (Applicant Tracking System) and resume analysis.
   Please analyze and rate this resume and suggest how to improve it.
   The rating can be low if the resume is bad.
   Be thorough and detailed. Don't be afraid to point out any mistakes or areas for improvement.
   If there is a lot to improve, don't hesitate to give low scores. This is to help the user to improve their resume.

   The job title is: ${jobTitle}
   The job description is: ${jobDescription}

   Provide the feedback using the following format:
   ${AIResponseFormat}

   Return the analysis strictly as a JSON object (valid JSON), 
   without any extra text, markdown, comments, or backticks.`;
