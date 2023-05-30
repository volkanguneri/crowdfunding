import { useState } from 'react'
import { StyledModal, StyledTopComponent, StyledPledge, CloseModalBtn, StyledLeftDiv, ProjectModalTitle, StyledProjectsModal, ModalSections, StyledLeft } from './styles/Modal.styled.js'
import Selected from './Selected'
import RondButton from './Rond'
import projects from '../data/projects.json'
import ReactDom from 'react-dom'

function Modal({ handleCloseModal, setThanksModal }) {

    const [projectActiveId, setProjectActiveId] = useState([])


    const closeModal = (e) => {
        handleCloseModal()
        setThanksModal(true)
    }

    const handleActiveProject = (projectId) => {
        if (projectId.toString() === projectActiveId) {
            setProjectActiveId(null);
        } else {
            setProjectActiveId(projectId.toString());
        }
    }

    return ReactDom.createPortal(
        <>
            <StyledModal >
                <StyledTopComponent >
                    <h2>Back this project</h2>
                    <CloseModalBtn onClick={() => handleCloseModal()}><img src="/crowdfunding/images/icon-close-modal.svg" alt="" /></CloseModalBtn>
                </StyledTopComponent>
                <p>Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?</p>

                {
                    projects && projects.map((project, id = project.id) => (
                        <ModalSections key={id} idMatch={projectActiveId === project.id} projectLeftZero={project.left}>
                            <StyledProjectsModal>
                                <RondButton projectLeftZero={project.left} projectActiveId={projectActiveId} id={id} handleActiveProject={handleActiveProject} />
                                <ProjectModalTitle projectLeftZero={project.left}>

                                    <h3 projectLeftZero={project.left} onClick={() => {
                                        if (project.left !== '0') { handleActiveProject(id) }
                                    }}>{project.title}</h3>

                                    {project.pledge !== '' && (
                                        <StyledPledge projectLeftZero={project.left}>Pledge {project.pledge} or more</StyledPledge>
                                    )}

                                </ProjectModalTitle>
                            </StyledProjectsModal>
                            <p>{project.description}</p>
                            {
                                project.left !== '' && (
                                    <StyledLeftDiv><StyledLeft>{project.left}</StyledLeft> left</StyledLeftDiv>
                                )
                            }
                            {projectActiveId === project.id && project.left !== '0' && (<Selected minPledgeValue={project.pledge} closeModal={() => closeModal()} setThanksModal={setThanksModal} />)}
                        </ModalSections>

                    ))
                }
            </StyledModal >
        </>,
        document.getElementById('portal')
    )
}

export default Modal