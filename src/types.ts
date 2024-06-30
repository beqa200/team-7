export interface PersonalProps{
  general: {
    name: string;
    last_name: string;
    bio: string;
    email: string;
    number: string;
},
setGeneral: React.Dispatch<React.SetStateAction<{
  name: string;
  last_name: string;
  bio: string;
  email: string;
  number: string;
}>>,
  photo: string | null,
  setPhoto: React.Dispatch<React.SetStateAction<string | null>>,
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
experience: {
  position: string;
  employer: string;
  start_date: string;
  end_date: string;
  info: string;
}[],
  education: {
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
  general: {
    name: string;
    last_name: string;
    bio: string;
    email: string;
    number: string;
},setGeneral: React.Dispatch<React.SetStateAction<{
  name: string;
  last_name: string;
  bio: string;
  email: string;
  number: string;
}>>,
photo: string | null,
setPhoto: React.Dispatch<React.SetStateAction<string | null>>,
experience: {
  position: string;
  employer: string;
  start_date: string;
  end_date: string;
  info: string;
}[],
setExperience: React.Dispatch<React.SetStateAction<{
  position: string;
  employer: string;
  start_date: string;
  end_date: string;
  info: string;
}[]>>,
education: {
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
  general: PersonalProps['general'];
  setGeneral: PersonalProps['setGeneral'];
  photo: PersonalProps['photo'];
  setPhoto: PersonalProps['setPhoto'];
  education: {
    education: string;
    degree: string;
    end_date: string;
    info: string;
  }[],
  setEducation: React.Dispatch<React.SetStateAction<{
    education: string;
    degree: string;
    end_date: string;
    info: string;
}[]>>,
  experience:{
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