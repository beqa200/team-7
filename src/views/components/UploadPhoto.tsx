import { useRef } from 'react';
import styled from 'styled-components';

interface UploadInputProps {
    onFileChange: (file: File) => void;
}

const UploadPhoto = ({ onFileChange }: UploadInputProps) => {
    const fileInputRef = useRef<HTMLInputElement | null>(null);

    const handleClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (onFileChange && event.target.files && event.target.files[0]) {
            onFileChange(event.target.files[0]);
        }
    };

    return (
        <StyledUpload>
            <h3>პირადი ფოტოს ატვირთვა</h3>
            <button className="file-upload-button" onClick={handleClick}>ატვირთვა</button>
            <input
                type="file"
                accept="image/*"
                ref={fileInputRef}
                className="file-upload-input"
                onChange={handleChange}
            />
        </StyledUpload>
    );
};

const StyledUpload = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    gap: 19px;
    margin: 46px 0 41px;

    & > h3 {
        font-size: 18px;
        font-weight: 500;
        color: #1a1a1a;
    }

    & > button {
        padding: 4px 19px 6px;
        border-radius: 4px;
        background-color: #0e80bf;
        border: none;
        font-size: 14px;
        font-weight: normal;
        color: #fff;
        cursor: pointer;
    }

    & > input {
        position: absolute;
        top: 50%;
        left: 251px;
        transform: translateY(-50%);
        width: 107px;
        height: 27px;
        opacity: 0;
        cursor: pointer;
    }
`;

export default UploadPhoto;
