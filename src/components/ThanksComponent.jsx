import ReactDom from 'react-dom'
import { StyledThanksComponent } from './styles/ThanksComponent.styled'

function ThanksComponent({ handleGotItBtn }) {

    return ReactDom.createPortal(
        <StyledThanksComponent>
            <img src="/crowdfunding/images/icon-check.svg" alt="check icon" />
            <h2>Thanks for your support!</h2>
            <p>Your pledge brings us one step closer to sharing Mastercraft Bamboo Monitor Riser worldwide. You will get an email once our campaign is completed</p>
            <button onClick={handleGotItBtn}>Got it!</button>
        </StyledThanksComponent>,
        document.getElementById('portal')
    )
}

export default ThanksComponent
