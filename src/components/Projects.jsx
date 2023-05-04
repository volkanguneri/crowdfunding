import { StyledProjects, StyledSpan, StyledSpanTwo, LeftAndBotton, StyledPledge, StyledDescription } from './styles/About.styled'

import projects from '../data/projects.json'


function Projects({ handleOpenModal }) {

    return (
        <>
            {projects && projects.map(project => {
                if (project.pledge !== '') {
                    return (
                        <StyledProjects key={project.id} projectLeft={project.left}>
                            <h2 projectLeft={project.left} onClick={() => {
                                if (project.left !== '0') {
                                    handleOpenModal();
                                }
                            }}>{project.title}</h2>
                            <StyledPledge projectLeft={project.left}>Pledge <StyledSpan>{project.pledge}</StyledSpan> or more
                            </StyledPledge>
                            <StyledDescription>{project.description}</StyledDescription>
                            <LeftAndBotton projectLeft={project.left}>
                                <p><StyledSpanTwo>{project.left}</StyledSpanTwo> left</p>
                                <button
                                    onClick={() => {
                                        if (project.left !== '0') {
                                            handleOpenModal();
                                        }
                                    }}
                                >
                                    {project.left === '0' ? 'Out of stock' : 'Select Reward'}
                                </button>
                            </LeftAndBotton>
                        </StyledProjects>
                    );
                } else {
                    return null;
                }
            })}

        </>
    )
}


export default Projects
