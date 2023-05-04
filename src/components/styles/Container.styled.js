import styled from "styled-components"

export const StyledContainer = styled.main`

    display:block;
    width:clamp(326.05px, 80vw, 730px);
    max-width:100%;
    padding: 0 10px;
    margin: -3.451em auto;
    text-align:center;
    background-color:white;
    border-radius:8px;
    margin-bottom:1.5em;

    @media screen and (min-width:1439px) {
        margin-top:-10em;
        margin-bottom:2em;
    }
h1 {
    font-size:clamp(1.25rem, 1.9vw, 1.76rem);
    width:clamp(10em,50vw, 25em);
    margin-right:auto;
    margin-left:auto;
    line-height:1.2;
    margin-bottom:.8em;

@media screen and (min-width:1439px) {
    font-size:1.76rem;
    margin-bottom:.5em;
    }
}

p {
    font-size:clamp(.875rem, 1vw, 1.01em);
    line-height:1.67;
@media screen and (min-width:1439px) {
    margin-bottom:.7em;
}
}



`
export const LogoMastercraft = styled.img`
    margin-top:-1.8em;
    margin-bottom:1.5em;
@media screen and (min-width:1439px) {
    margin-bottom:1.6em;
}
`

export const StyledBackBotton = styled.button`
    background-color: hsl(176, 50%, 47%);
    cursor:pointer;
    border:none;
    color:white;
    font-size:.91rem;
    font-weight:700;
    padding:1.3em 3.05em;
    margin-bottom:2.65em;
    border-radius:1.9em;
    margin-top:1.7em;
    margin-left:.4em;

    &:hover, &:focus {
    background-color: hsl(176, 72%, 28%);
    }

@media screen and (min-width:1439px) {
    padding:1.3em 2.68em;
    margin-left:.8em;
}
`
export const StyledBookmarkBotton = styled.button`
    background-color:transparent;
    border:none;
    cursor:pointer;
    height:100%;
    margin-top:1.8em;
    margin-left:.4em;
    outline:none;
    
  
@media screen and (min-width:800px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 0 1.1em;
    font-size:.94rem;
    font-weight:700;
    letter-spacing:.1px;
    background-color: ${({ isBookmarked }) => isBookmarked ? 'hsl(176, 72%, 28%)' : 'hsl(0, 0%, 90%)'};
    color: ${({ isBookmarked }) => isBookmarked ? '#fff' : 'hsl(0, 0%, 48%)'};
    margin-right:.7em;
    margin-top:1.6em;
    padding-right:1.6em;
    padding-left:0;
    border-radius: 30px;
}
    
    img{
        background-color:transparent;
    }
`

export const BottonDiv = styled.div`
display:flex;
justify-content: space-between; 
padding-left:clamp(0em, 2vw, 2em);
padding-right:clamp(0em, 2vw, 2em);
`
