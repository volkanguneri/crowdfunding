import styled from "styled-components"

export const StyledAbout = styled.div`

    display:block;
    width:clamp(20.2em, 80vw, 45.6em);
    
    background-color:#fff;
    border-radius:10px;
    margin-inline:auto;
    padding-block:3.6em 1.5em;
    padding-left:clamp(1.4em, 3vw, 3em);
    padding-right:1.4em;
    margin-bottom:4em;


    @media screen and (min-width:1439px) {
        width:45.6em;
        padding-left:3em;
    }

    h2{
        font-size:1.125rem;
        margin-bottom:1.5em;

    @media screen and (min-width:1439px) {
            font-size:1.25rem;
            margin-top:-.15em;
        }
    }

`

export const FirstParagraph = styled.p`
    font-size:.875rem;
    line-height:1.7;
    margin-bottom:1.87em;

    @media screen and (min-width:1439px) {
        margin-top:2.2em;
        font-size:1rem;
        width:40em;
        line-height:1.9;
    }

`

export const LastParagraph = styled.p`
    font-size:.875rem;
    line-height:1.7;
    margin-bottom:2.5em;

    @media screen and (min-width:1439px) {
        margin-top:1.8em;
        font-size:1rem;
        width:40em;
        line-height:1.9;
        margin-bottom:2.5em;
    }
`

export const StyledProjects = styled.section`

    border:1px solid hsl(0, 0%, 48%);
    margin-bottom:1.5em;
    border-radius: 10px;
    padding: 1.5em 1.4em;
    line-height:1;
    opacity:${({ projectLeft }) => projectLeft === '0' ? .5 : 1};


    @media screen and (min-width:1439px) {
        padding-top:2.56em;
        padding-left:1.9em;
        width:39.6em;
    }

    h2 {
        font-size:.88rem;
        margin-bottom:.8em;
        cursor: ${({ projectLeft }) => projectLeft === '0' ? 'default' : 'pointer'};

    @media screen and (min-width:1439px) {
        font-size:1.12rem;
    }
}

h2:hover {
    color: ${({ projectLeft }) => projectLeft === '0' ? '#000' : 'hsl(176, 72%, 28%)'};
}
`

export const StyledPledge = styled.p`
    
    color:hsl(176, 72%, 28%);
    color: ${({ projectLeft }) => projectLeft === '0' ? '#000' : '(176, 72%, 28%)'};

    font-size:.87rem;
    font-weight:500;
    margin-bottom:1.9em;

    @media screen and (min-width:1439px) {
        font-size:.93rem;
        text-align:right;
        margin-top:-2.1em;
        margin-right:.7em; 
`

export const StyledSpan = styled.span`
font-size: 1em;
margin-right: -.03em;

`

export const StyledDescription = styled.p`
    font-size:.875rem;
    line-height:1.7;
    margin-bottom:2em;

@media screen and (min-width:1439px) {
    font-size:1rem;
    line-height:1.9em;
}
`

export const StyledSpanTwo = styled.span`
    font-size:2rem;
    font-weight:500;
    margin-right:.35em;
`
export const LeftAndBotton = styled.div`
    @media screen and (min-width:900px) {
        display:flex;
        justify-content:space-between;
        margin-bottom:0.45em;
    }

    p {
        display:flex;
        align-items:center;
        margin-bottom:1em;

    @media screen and (min-width:900px) {
    margin-bottom:0em;
}
    }

    button {
        border:none;
        background-color: ${({ projectLeft }) => projectLeft === '0' ? '#000' : 'hsl(176, 50%, 47%)'};
        padding:1.2em 2.5em;
        color:white;
        font-weight:700;
        font-size:.8rem;
        cursor:pointer;
        cursor: ${({ projectLeft }) => projectLeft === '0' ? 'default' : 'pointer'};
        border-radius:30px;
        width:12.35em;
        transition:.2s;

    @media screen and (min-width:1439px) {
        margin-right:.6em;
        margin-top:-.6em;
        height:3.7em;;
    }   
    }

    button:hover{
        background-color:${({ projectLeft }) => projectLeft === '0' ? '#000' : 'hsl(176, 72%, 28%)'};

    } 
`
