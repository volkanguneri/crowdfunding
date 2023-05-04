import styled from 'styled-components';

export const StyledNavBar = styled.nav`
    position:relative;
    display:flex;
    justify-content:space-between;
    flex-direction:row;
    color:white;
    margin-inline:auto;
    margin-top:2em;
    width:100%;
    padding-bottom:13.8em;
    // padding-inline:clamp(0, 2vw, 3em);

    @media screen and (min-width:600px) {
        align-items:center;
    }
`;

export const StyledNavContent = styled.ul`
    display:${({ open }) => open ? 'flex' : 'none'};
    position:absolute;
    top:5.5em;
    right:0;
    left:0;
    bottom:0;
    color:#fff;
    margin-inline:auto;
    flex-direction:column;
    width:327px;
    z-index:100000;
    height:2em;

    li {
        background-color:white;
        padding:1.6em 1.5em;
    }

    li:hover {
        text-decoration:underline;
    }

    li:not(:last-child) {
        border-bottom:.1px solid gray;
    }

    li:first-child {
        border-radius:10px 10px 0 0;
    }

    li:last-child {
        border-radius:0 0 10px 10px;
    }

    a {
        font-size:1.16rem;
        color:black;
    }

    @media screen and (min-width:600px) {
        display:flex;
        flex-direction:row;
        position:absolute;
        top:1em;
        right:.5em;
        left:auto;
        width:17em;

        li {
            background-color:transparent;
            padding:1em 1.07em;
        }

        li:not(:last-child) {
            border-bottom:none;
        }

        a {
            color:white;
            font-size:.8rem;
        }
    }
    @media screen and (min-width:800px) {
        right:8.2em;
        top:2em;
    }
`;

export const StyledLogo = styled.div`
    font-size:clamp(1.59rem, 1.7vw, 1.61rem);
    font-weight:700;
    margin-top:-.15em;

    margin-bottom:1em;
    margin-left:.95em;
    height:100%;

    @media screen and (min-width:800px) {
        margin-top:.45em;
        margin-left:6.5em;
        font-size:1.61rem;
    }
`;

export const StyledBurgerMenu = styled.div`
    display:flex;
    flex-direction:column;
    gap:0.19em;
    margin-top:.2em;
    margin-left:2em;
    cursor:pointer;
    height:100%;
    margin-right:1.5em;

    div {
        width:1em;
        border-bottom:.2em solid #fff;
        transition:transform 0.3s ease-in-out;
        transform-origin:-.45px;

        &:first-child {
            transform:${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
        }

        &:nth-child(2) {
            transform:${({ open }) => open ? 'scale(0)' : 'scale(1)'};
        }

        &:nth-child(3) {
            transform:${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
        }
    }

    @media screen and (min-width:600px) {
        display:none;
    }
`;

export const StyledOverlay = styled.div`
    opacity:${({ open, isModalOpen, thanksModal }) => open || isModalOpen || thanksModal ? .5 : 1};
`
