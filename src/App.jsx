import { useState } from 'react'
import GlobalStyles from './components/styles/Global'
import Header from './components/Header'
import Container from './components/Container'
import About from './components/About'
import Modal from './components/Modal'
import ThanksComponent from './components/ThanksComponent.jsx'
import { StyledOverlay } from './components/styles/Nav.styled.js'

// import { Container } from './components/styles/Container.styled'
import './reset.css'
import NumberOfBackers from './components/NumberOfBackers'

function App() {

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [thanksModal, setThanksModal] = useState(false)
  const [open, setOpen] = useState(false)




  const handleOpenModal = () => {
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  const handleGotItBtn = () => {
    setThanksModal(false)
  }

  return (
    <StyledOverlay open={open} isModalOpen={isModalOpen} thanksModal={thanksModal}>
      <GlobalStyles open={open} />
      <Header open={open} setOpen={setOpen} />
      <Container handleOpenModal={() => handleOpenModal()} />
      <NumberOfBackers />
      {!isModalOpen && <About handleOpenModal={() => handleOpenModal()} />}
      {isModalOpen && !thanksModal ? <Modal handleCloseModal={handleCloseModal} thanksModal={thanksModal} setThanksModal={() => setThanksModal(true)} /> : null}
      {thanksModal && <ThanksComponent handleGotItBtn={handleGotItBtn} />}
    </StyledOverlay>
  )
}

export default App
