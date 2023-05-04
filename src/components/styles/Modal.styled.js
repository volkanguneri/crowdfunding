import styled from 'styled-components'

export const StyledModal = styled.div`
background-color:#fff;
position:absolute;
top:7.55em;
left:1.5em;
right:1.5em;
padding:2.13em 1.5em;
border-radius:10px;
z-index:500;
opacity:1;
max-width:45.5em;
margin-inline:auto;


@media all and (min-width:1439px) {
    width:45.5em;
    margin-right:auto;
    margin-left:auto;
    margin-top:4em;
    padding:1.85em 2em 1em 3em;
    margin-bottom:2em;
}

h2 {
    font-size:1.13rem;
    margin-bottom:1.5em;

@media all and (min-width:1439px) {
    font-size:1.5rem;
    margin-top:.86em;
    margin-bottom:.8em;
    }
}


h3 {
    transition:.2s;
}

h3:hover {
    color:${({ projectLeftZero }) => projectLeftZero === '0' ? 'black' : 'hsl(176, 50%, 47%)'};
}

p {
    font-size:.88rem;
    line-height:1.7;
    margin-bottom:1.7em;

@media all and (min-width:1439px) {
        font-size:1rem;
        margin-bottom:2.1em;
    }
}

// button {
//     display:block;
//     padding:3em;
//     margin-inline:auto;
// }
`

export const StyledTopComponent = styled.div`
    display:flex;
    justify-content:space-between;
    gap:1.4em;
    
   
    h3 {
        margin-right:3em;
        font-size:.88rem;
        margin-bottom:2.8em;
        color:black;
    }
`

export const CloseModalBtn = styled.button`
    padding: 0;
    margin: 0.1em .1em 0 0;
    border: none;
    background-color: transparent;
    cursor: pointer;
    height: .9em;
    width: .9em;
    
`

export const StyledProjectsModal = styled.div`
    display:flex;
    justify-content:flex-start;
    gap:6.3em;
    align-items:center;
    margin-left:.42em;
    margin-bottom:1.3em;
    

    h3 {
        font-size:.88rem;
        margin-bottom:2.8em;
    }
`
export const ModalSections = styled.section`
    position:relative;
    padding:1.3em 0 1em;
    border: ${({ idMatch }) => idMatch ? '2px solid hsl(176, 50%, 47%)' : '1px solid hsl(0, 0%, 48%)'};
    border-radius:10px;
    margin-bottom:1.5em; 
    opacity:${({ projectLeftZero }) => projectLeftZero === '0' ? .5 : 1};
    margin-inline:auto;
    max-width:40em;


    @media all and (min-width:1439px) {
        width:39.5em;
        padding-top: 2em;
        padding-left: .2em;
        padding-bottom: 0em;
        margin-left:0;
}

h3 {
    @media all and (min-width:1439px) {
        font-size:1rem;
        margin-left:.5em;
    }
}

p {
    padding:1em 1.6em;

    @media all and (min-width:800px) {
        font-size:.943rem;
        margin-left:3.1em;
        margin-top:-.8em;
        padding:0em 1.6em;

        line-height:1.8;
    }
}
`

export const StyledLeftDiv = styled.div`
    display: flex;
    gap:0.5em;
    padding:0 1.3em 0 1.5em;
    margin-bottom:.5em;
    
    @media all and (min-width:800px) {
        margin-bottom:.5em;
        position:absolute;
        top:1.95em;
        right:.3em;
    }

`

export const StyledSelected = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    color: hsl(0, 0%, 48%);
    border-top:1px solid hsl(0, 0%, 48%);
    margin-top:1.9em;
    padding:3.9em 0em 3.5em;
    height:6.5em;

    @media all and (min-width:800px) {
        flex-direction:row;
        margin-top:-1.8em;
        margin-bottom:-.45em;
        gap:14.7em;
        padding:0;
    }
    
    small {

    @media all and (min-width:800px) {
        font-size:.94rem;
        margin:0;
    }
        font-size:.875rem;
        margin-bottom:1.58em;
        margin-right:.2em;
    }


    input[type=text] {
        font-weight:700;
        border:1px solid hsl(0, 0%, 48%);
        border-radius: 25px;
        width:7.4em;
        height:3.6em;
        text-align:center;
        outline:0;
        cursor:pointer;
        -moz-appearance: textfield;
        caret-color: #000;
    }
    
    // input::-webkit-outer-spin-button,
    // input::-webkit-inner-spin-button {
    // -webkit-appearance: none;
    // margin: 0;
    // }

    button {
        background-color:hsl(176, 50%, 47%);
        color:#fff;
        font-weight:700;
        border:none;
        padding: 0 2.1em;
        height:3.6em;
        border-radius:25px;
        cursor:pointer;

    @media all and (min-width:800px) {
        padding: 0 1.8em;
    }
    }

    button:hover {
        background-color:hsl(176, 72%, 28%);
    }

    input[type=text]:hover, input[type=text]:focus {
        border-color:hsl(176, 72%, 28%);
    }
    
`
export const InputButton = styled.div`
    display:flex;
    flex-direction:row;
    gap:1.1em;
    margin-right:.2em;
`

export const ProjectModalTitle = styled.div`
    display:flex;
    flex-direction:column;
    padding:.2em 0em;
    margin-left:-6em;
    gap:.2em;

    @media all and (min-width:800px) {
    flex-direction:row;
    gap:.55em;
    margin-top:-.05em;
    }

    h3 {
        margin-bottom:.5em;
        cursor:${({ projectLeftZero }) => projectLeftZero === '0' ? 'default' : 'pointer'};

    }

    h3:hover {
        color:${({ projectLeftZero }) => projectLeftZero === '0' ? 'black' : 'hsl(176, 50%, 47%)'};
    }

    p {
        margin:0;
    }
`
export const StyledPledge = styled.h3`
    color:${({ projectLeftZero }) => projectLeftZero === '0' ? 'black' : 'hsl(176, 50%, 47%)'};
    font-size:.85rem;
    margin-bottom:2.8em;
    padding:0 -2em 0 1.5em;
`

export const StyledRondButton = styled.div`
   display:flex;
   align-items:center;
   justify-content:center;
   border:1px solid hsl(0, 0%, 48%);
   border-radius:50%;
   width:1.46em;
   height:1.46em;
   cursor:pointer;

   cursor:${({ projectLeftZero }) => projectLeftZero === '0' ? 'default' : 'pointer'};

   margin:0 .8em 0 1em;

`
export const StyledLeft = styled.div`
    font-size:1.1rem;
    font-weight:700;
`

export const StyledInnerRond = styled.div`
background-color: hsl(176, 72%, 28%);
width:.75em;
height:.75em;
border-radius:50%;
`

