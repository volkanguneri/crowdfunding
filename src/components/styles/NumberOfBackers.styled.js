import styled from "styled-components"

export const StyledNumberOfBackers = styled.section`
    display:block;
    background-color: white;
    margin-inline:auto;
    text-align:center;
    width:clamp(325px, 80vw, 45.55em);

    border-radius:8px;
    padding:2.3em;
    margin-bottom:1em;
    
    
    @media screen and (min-width:950px) {
        display:flex;
        flex-wrap:wrap;
        justify-content:flex-start;
        width:45.55em;
        padding-left:2.97em;
        padding-top:3.3em;
        gap: 0 3.2em;
        margin-bottom:1.5em;
        
    }
`

export const ParagraphOne = styled.p`
  font-size: 0.86rem;
  margin-bottom:1.9em;

  @media screen and (min-width:950px) {
      font-size: 0.98rem;
      margin-right:-.55em;
      text-align:left;

  }

  span:first-child{
    font-weight: 700;
    font-size: 1.98rem;
//   @media screen and (min-width:950px) {
//     padding-top:-1em;
//   }
}

br {
      margin-bottom:1.1em;

  @media screen and (min-width:950px) {
    margin:.9em;
  }
  }

  span:last-child {
    font-size: 0.9rem;
  }
`;


export const Divider = styled.div`
  border-bottom: 0.1em solid;
  width: 5em;
  margin-inline: auto;
  margin-bottom: 1.8em;

  @media screen and (min-width:950px) {
    border-bottom:none;
    border-right:.1em solid;
    margin:0;
    padding:0;
    width:0em;
    height:4em;
    margin-top:-.35em;
  }
`;

export const ParagraphTwo = styled.p`
  font-size: 0.86rem;
  margin-bottom:1.8em;

  @media screen and (min-width:950px) {
    font-size: .93rem;
    margin-left:-.25em;
    margin-right:2.75em;
    text-align:left;
  }

  span {
    font-weight: 700;
    font-size: 1.98rem;
  }

  br {
    margin-bottom:1.2em;
  @media screen and (min-width:1439px) {
    margin-bottom:1em;
  }
}
`;

export const ParagraphThree = styled.p`
  font-size: 0.86rem;
  margin-bottom: 2.5em;

  @media screen and (min-width:950px) {
    font-size: .95rem;
    text-align:left;
    margin-left:-.3em;

  }

  span {
    font-weight: 700;
    font-size: 1.98rem;
  }
  br {
    margin-bottom:1.2em;
    @media screen and (min-width:950px) {
        margin-bottom:1em;
      }
}
`;

export const StyledProgressBar = styled.div`
    background-color: hsl(0, 0%, 85%);
    height: .74em;
    width:16.5em;
    border-radius: 10px;
    margin-inline:auto;

@media screen and (min-width:950px) {
    height: .75em;
    width:39em;
    margin-bottom:.8em;
  }
`

export const StyledProgressBarFill = styled.div`
    background-color: hsl(176, 50%, 47%);
    height: .74em;
    width:13.6em;
    border-radius: 10px;
    text-align:left;
    padding-left:0;
    margin-left:-.8em;

@media screen and (min-width:950px) {
    height:.75em;
    width:31em;
    margin-left:-.6em;
    margin-bottom:.8em;
  }
`

