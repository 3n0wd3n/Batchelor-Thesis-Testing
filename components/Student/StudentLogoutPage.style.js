import styled from 'styled-components'
import { CommonDisplayFlexColumn, CommonDisplayFlex } from '../CommonStyles'


// little help ->  ``; 

export const StudentLogoutContainer = styled(CommonDisplayFlex)`
    height: 100vh;
`;

export const StudentMainContent = styled(CommonDisplayFlexColumn)`
    padding: 6em 8.5em 6em 8.5em;
    border-radius: 25px;
    border-radius: 15px;
    box-shadow: -4px 4px 6px rgba(155, 155, 155, 0.25);
    transition: 0.7s;
    border: 1px solid rgba(155, 155, 155, 0.05);
    @media (max-width: 666px) {
        padding: 2em 4em 2em 4em;
    }
`;

export const StudentContentContainer = styled.div`
    margin-top: 2em;
    display: flex;
    flex-direction: row;
    gap: 4em;
    transition: 0.7s;
    @media (max-width: 666px) {
        gap: 2em;
    }
`;

export const StudentButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    border-radius: 15px;
    box-shadow: -2px 2px 6px rgba(155, 155, 155, 0.25);
    padding: 1em;
    transition: 0.7s;
    gap: .5rem;
    @media (max-width: 666px) {
        padding: 0.5em;
    }
    :hover{
        box-shadow: -2px 2px 6px rgba(155, 155, 155, 0.9);
    }
`;