
import { useEffect } from 'react';
import Resume from './components/Resume';
import { PersonalProps } from '../types';

interface ExperienceProps {
  resumeInfo: PersonalProps['resumeInfo'];
  setResumeInfo: PersonalProps['setResumeInfo'];
  preview: PersonalProps['preview'];
  setPreview: PersonalProps['setPreview'];
}

const Experience: React.FC<ExperienceProps> = ({ resumeInfo, setResumeInfo,  preview, setPreview}) => {


  useEffect(() => {
    const savedResumeInfo = localStorage.getItem('resumeInfo');
    const savedPreview = localStorage.getItem('photoPreview');

    if (savedResumeInfo) {
      setResumeInfo(JSON.parse(savedResumeInfo));
    }
    if (savedPreview) {
      setPreview(savedPreview);
    }
  }, []);


  return (
    <div>
      <Resume
        resumeInfo={resumeInfo}
        preview={preview}
      />
    </div>
  );
};

export default Experience;
