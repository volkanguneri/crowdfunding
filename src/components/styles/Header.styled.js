import styled from 'styled-components'

export const StyledHeader = styled.header`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:top;
    gap:1.25em;
    background:url('public/images/image-hero-mobile.jpg') top center/ cover no-repeat;
    margin-left:auto;
    margin-right:auto;
    color:white;


@media screen and (min-width:700px) {
    background:url('public/images/image-hero-desktop.jpg') top center/ cover no-repeat;
    width:100%;
    height:100%;
    padding-bottom:9.5em;
}
`


