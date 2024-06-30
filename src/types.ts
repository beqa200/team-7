export interface PersonalProps{
  resumeInfo: {
    name: string;
    last_name: string;
    bio: string;
    email: string;
    number: string;
},
setResumeInfo: React.Dispatch<React.SetStateAction<{
  name: string;
  last_name: string;
  bio: string;
  email: string;
  number: string;
}>>,
  preview: string | null,
  setPreview: React.Dispatch<React.SetStateAction<string | null>>,
  touched: {
    name: boolean;
    last_name: boolean;
    email: boolean;
    number: boolean;
    bio: boolean;
},expTouched: {
  position: boolean;
  employer: boolean;
  start_date: boolean;
  end_date: boolean;
  info: boolean;
},
eduTouched: {
  education: boolean;
  degree: boolean;
  end_date: boolean;
  info: boolean;
},setTouched: React.Dispatch<React.SetStateAction<{
  name: boolean;
  last_name: boolean;
  email: boolean;
  number: boolean;
  bio: boolean;
}>>,
experienceList: {
  position: string;
  employer: string;
  start_date: string;
  end_date: string;
  info: string;
}[],
  eduList: {
    education: string;
    degree: string;
    end_date: string;
    info: string;
  }[],

}


  export interface ExpInfoProps{
    expInfo: {
      position: string;
      employer: string;
      start_date: string;
      end_date: string;
      info: string;
    },
    setExpInfo: React.Dispatch<React.SetStateAction<{
      position: string;
      employer: string;
      start_date: string;
      end_date: string;
      info: string;
  }>>
}


export interface ExperienceProps {
  resumeInfo: {
    name: string;
    last_name: string;
    bio: string;
    email: string;
    number: string;
},setResumeInfo: React.Dispatch<React.SetStateAction<{
  name: string;
  last_name: string;
  bio: string;
  email: string;
  number: string;
}>>,
preview: string | null,
setPreview: React.Dispatch<React.SetStateAction<string | null>>,
experienceList: {
  position: string;
  employer: string;
  start_date: string;
  end_date: string;
  info: string;
}[],
setExperienceList: React.Dispatch<React.SetStateAction<{
  position: string;
  employer: string;
  start_date: string;
  end_date: string;
  info: string;
}[]>>,
eduList: {
  education: string;
  degree: string;
  end_date: string;
  info: string;
}[],
touched: {
  name: boolean;
  last_name: boolean;
  email: boolean;
  number: boolean;
  bio: boolean;
},
expTouched: {
  position: boolean;
  employer: boolean;
  start_date: boolean;
  end_date: boolean;
  info: boolean;
},
eduTouched: {
  education: boolean;
  degree: boolean;
  end_date: boolean;
  info: boolean;
},
setExpTouched: React.Dispatch<React.SetStateAction<{
  position: boolean;
  employer: boolean;
  start_date: boolean;
  end_date: boolean;
  info: boolean;
}>>
}

export interface EducationProps {
  resumeInfo: PersonalProps['resumeInfo'];
  setResumeInfo: PersonalProps['setResumeInfo'];
  preview: PersonalProps['preview'];
  setPreview: PersonalProps['setPreview'];
  eduList: {
    education: string;
    degree: string;
    end_date: string;
    info: string;
  }[],
  setEduList: React.Dispatch<React.SetStateAction<{
    education: string;
    degree: string;
    end_date: string;
    info: string;
}[]>>,
  experienceList:{
    position: string;
    employer: string;
    start_date: string;
    end_date: string;
    info: string;
  }[],
  touched: {
    name: boolean;
    last_name: boolean;
    email: boolean;
    number: boolean;
    bio: boolean;
},
expTouched: {
  position: boolean;
  employer: boolean;
  start_date: boolean;
  end_date: boolean;
  info: boolean;
},
setEduTouched: React.Dispatch<React.SetStateAction<{
  education: boolean;
  degree: boolean;
  end_date: boolean;
  info: boolean;
}>>,
eduTouched: {
  education: boolean;
  degree: boolean;
  end_date: boolean;
  info: boolean;
}
}