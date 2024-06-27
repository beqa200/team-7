export interface PersonalProps{
    resumeInfo: {
        name: string;
        surname: string;
        about: string;
        email: string;
        number: string;
        photo: File | null;
    },
    setResumeInfo: React.Dispatch<React.SetStateAction<{
      name: string;
      surname: string;
      about: string;
      email: string;
      number: string;
      photo: File | null;
  }>>,
    preview: string | null,
    setPreview: React.Dispatch<React.SetStateAction<string | null>>,
  }