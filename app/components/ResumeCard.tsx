// import Navbar from "~/components/Navbar";
// import ResumeCard from "~/components/ResumeCard";
// import {usePuterStore} from "~/lib/puter";
// import {Link, useNavigate} from "react-router";
// import {useEffect, useState} from "react";
//
// import type { MetaArgs } from "react-router";
//
//
//
//
// export function meta({}: MetaArgs) {
//   return [
//     { title: "Resumind" },
//     { name: "description", content: "Smart feedback for your dream job!" }
//   ];
// }
//
// export default function Home() {
//   const { auth, kv } = usePuterStore();
//   const navigate = useNavigate();
//   const [resumes, setResumes] = useState<Resume[]>([]);
//   const [loadingResumes, setLoadingResumes] = useState(false);
//
//   useEffect(() => {
//     if(!auth.isAuthenticated) navigate('/auth?next=/');
//   }, [auth.isAuthenticated])
//
//   useEffect(() => {
//     const loadResumes = async () => {
//       setLoadingResumes(true);
//
//       const resumes = (await kv.list('resume:*', true)) as KVItem[];
//
//       const parsedResumes = resumes?.map((resume) => (
//         JSON.parse(resume.value) as Resume
//       ))
//
//       setResumes(parsedResumes || []);
//       setLoadingResumes(false);
//     }
//
//     loadResumes()
//   }, []);
//
//   return <main className="bg-[url('/images/bg-main.svg')] bg-cover">
//     <Navbar />
//
//     <section className="main-section">
//       <div className="page-heading py-16">
//         <h1>Track Your Applications & Resume Ratings</h1>
//         {!loadingResumes && resumes?.length === 0 ? (
//           <h2>No resumes found. Upload your first resume to get feedback.</h2>
//         ): (
//           <h2>Review your submissions and check AI-powered feedback.</h2>
//         )}
//       </div>
//       {loadingResumes && (
//         <div className="flex flex-col items-center justify-center">
//           <img src="/images/resume-scan-2.gif" className="w-[200px]" />
//         </div>
//       )}
//
//       {!loadingResumes && resumes.length > 0 && (
//         <div className="resumes-section">
//           {resumes.map((resume) => (
//             <ResumeCard key={resume.id} resume={resume} />
//           ))}
//         </div>
//       )}
//
//       {!loadingResumes && resumes?.length === 0 && (
//         <div className="flex flex-col items-center justify-center mt-10 gap-4">
//           <Link to="/upload" className="primary-button w-fit text-xl font-semibold">
//             Upload Resume
//           </Link>
//         </div>
//       )}
//     </section>
//   </main>
// }
import {Link} from "react-router";
import ScoreCircle from "~/components/ScoreCircle";
import {useEffect, useState} from "react";
import {usePuterStore} from "~/lib/puter";

const ResumeCard = ({ resume: { id, companyName, jobTitle, feedback, imagePath } }: { resume: Resume }) => {
  const { fs } = usePuterStore();
  const [resumeUrl, setResumeUrl] = useState('');

  useEffect(() => {
    const loadResume = async () => {
      const blob = await fs.read(imagePath);
      if(!blob) return;
      let url = URL.createObjectURL(blob);
      setResumeUrl(url);
    }

    loadResume();
  }, [imagePath]);

  return (
    <Link to={`/resume/${id}`} className="resume-card animate-in fade-in duration-1000">
      <div className="resume-card-header">
        <div className="flex flex-col gap-2">
          {companyName && <h2 className="!text-black font-bold break-words">{companyName}</h2>}
          {jobTitle && <h3 className="text-lg break-words text-gray-500">{jobTitle}</h3>}
          {!companyName && !jobTitle && <h2 className="!text-black font-bold">Resume</h2>}
        </div>
        <div className="flex-shrink-0">
          <ScoreCircle score={feedback.overallScore} />
        </div>
      </div>
      {resumeUrl && (
        <div className="gradient-border animate-in fade-in duration-1000">
          <div className="w-full h-full">
            <img
              src={resumeUrl}
              alt="resume"
              className="w-full h-[350px] max-sm:h-[200px] object-cover object-top"
            />
          </div>
        </div>
      )}
    </Link>
  )
}
export default ResumeCard