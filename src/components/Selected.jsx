import { useState } from 'react'
import { StyledSelected, InputButton } from './styles/Modal.styled'


function Selected({ minPledgeValue, closeModal, setThanksModal }) {

    const [value, setValue] = useState('')
    // const [gotItBtn, setGotItBtn] = useState(true)

    const handleInputChange = (e) => {
        const inputValue = e.target.value;
        // Use a regular expression to keep only the numbers
        const numericValue = inputValue.replace(/[^0-9]/g, "");
        setValue(numericValue ? "$ " + numericValue : "")
    }

    const handleContinueBtn = () => {
        const parsedValue = parseInt(value.replace(/[^0-9]/g, ''), 10); // Convert value to number
        const parsedMinPledgeValue = parseInt(minPledgeValue.replace(/[^0-9]/g, ''), 10); // Convert minPledgeValue to number
        if (parsedValue >= parsedMinPledgeValue) {
            closeModal()
            // setGotItBtn(!gotItBtn)
        } else {
            alert(`Please enter a pledge greater than or equal to ${minPledgeValue}`)
        }
    }

    return (
        <StyledSelected>
            <small>Enter your pledge</small>
            <InputButton>
                <input
                    type="text"
                    value={value}
                    onChange={handleInputChange}
                    // onBlur={handleInputBlur}
                    placeholder={minPledgeValue ? minPledgeValue : minPledgeValue = '$ 0'}
                />
                <button onClick={() => {
                    handleContinueBtn()
                }}>Continue</button>
            </InputButton>
        </StyledSelected>
    );
}

export default Selected
