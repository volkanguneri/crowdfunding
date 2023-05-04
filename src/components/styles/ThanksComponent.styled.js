import styled from 'styled-components'

export const StyledThanksComponent = styled.div`
    display:flex;
    background-color:white;
    width:20.5em;
    margin-inline:auto;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    padding:2em 1em 2.6em;
    gap:1em;
    margin-top:-9.8em;
    border-radius:10px;
    z-index:100000;
    position:absolute;
    top:18.7em;
    left:0;
    right:0;

    @media all and (min-width:1440px) {
        margin-top:10em;
        padding:3.1em 1em 3.1em;
        width:33.8em;
    }

    img {
        width:4em;
        height:4em;
        margin-bottom:.6em;
    @media all and (min-width:1440px) {
        width:5.6em;
        height:5.6em;
        margin-bottom:2.1em;
    }
    }

    h2 {
        font-size:1.13rem;
        margin-bottom:.6em;

        @media all and (min-width:1440px) {
        font-size:1.5rem;
        margin-bottom:.1em;
        }
    }

    p {
        font-size:.88rem;
        text-align:center;
        line-height:1.69;
        margin-bottom:1.1em;
    @media all and (min-width:1440px) {
        font-size:1rem;
        padding-inline:2em;
        line-height:1.9em;
        margin-bottom:.93em;
    }
    }

button {
    color:#fff;
    font-size:.8rem;
    font-weight:700;
    outline:0;
    border:none;
    background-color: hsl(176, 50%, 47%);
    cursor:pointer;
    padding:1.2em 2.5em;
    border-radius:25px;
}

button:hover {
    background-color: hsl(176, 72%, 28%);
    }

`

