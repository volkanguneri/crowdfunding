import { StyledNumberOfBackers, ParagraphOne, Divider, ParagraphTwo, ParagraphThree } from './styles/NumberOfBackers.styled'
import ProgressBar from './ProgressBar'

function NumberOfBackers() {

    return (
        <StyledNumberOfBackers>
            <ParagraphOne>
                <span>$89,914</span> <br />
                of <span>$100,000</span> backed
            </ParagraphOne>
            <Divider />
            <ParagraphTwo>
                <span>5,007</span> <br />
                total backers
            </ParagraphTwo>
            <Divider />
            <ParagraphThree>
                <span>56</span> <br />
                days left
            </ParagraphThree>
            <ProgressBar />
        </StyledNumberOfBackers >

    )
}

export default NumberOfBackers
