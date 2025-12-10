import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100vw;
    height: 100dvh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Card = styled.div`
    width: 100%;
    max-width: 420px;
    padding: 30px;
    border-radius: 16px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
`;

export const Label = styled.label`
    font-size: 14px;
    font-weight: 600;
    margin-bottom: 4px;
    display: block;
`;
export const Input = styled.input`
    width: 100%;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 8px;
    margin-bottom: 14px;
    font-size: 15px;

    &:focus {
        outline: none;
        border-color: ${({ theme }) => theme.primary};
    }
`;

//props = {
//    theme: {
//        primary: "#aaaaaa"
//    }
//}
//
//props => props.theme.primary              ===       (props) => props.theme.primary
//                                                    ({ theme }) => theme.primary
//                                                    ({ theme: { primary } }) => primary

export const Button = styled.button`
    width: 100%;
    padding: 14px;
    border: none;
    border-radius: 8px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    margin-top: 10px;
    background-color: ${({ theme: { primary } }) => primary};
    color: #ffffff;
    
    &:hover {
        opacity: 0.9;
    }
`;
