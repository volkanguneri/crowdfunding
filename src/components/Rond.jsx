import { StyledRondButton, StyledInnerRond } from './styles/Modal.styled.js'
// import { useState } from 'react'

function RondButton({ id, handleActiveProject, projectActiveId, projectLeftZero }) {


    return (
        <StyledRondButton projectLeftZero={projectLeftZero} onClick={() => {
            if (projectLeftZero !== '0') {
                handleActiveProject(id);
            }
        }}>
            {projectActiveId === id.toString() && <StyledInnerRond />}
        </StyledRondButton >
    )
}

export default RondButton

