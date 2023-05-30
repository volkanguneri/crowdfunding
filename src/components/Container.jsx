import { useState, useEffect } from "react"
import { StyledContainer, LogoMastercraft, StyledBackBotton, StyledBookmarkBotton, BottonDiv } from './styles/Container.styled'

function Container({ handleOpenModal }) {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [isBookmarked, setIsBookmarked] = useState(false);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isSmallScreen = screenWidth < 800;

  const handleClick = (e) => {
    e.preventDefault()
    handleOpenModal()
  }

  const bookMarked = (e) => {
    e.preventDefault()
    setIsBookmarked(!isBookmarked);
  }

  return (
    <StyledContainer>
      <LogoMastercraft src="/crowdfunding/images/logo-mastercraft.svg" alt="logo Mastercraft" />
      <h1>Mastercraft Bamboo Monitor Riser</h1>
      <p>{isSmallScreen ? "A beautifully handcrafted monitor stand to reduce neck and eye strain." : "A beautiful & handcrafted monitor stand to reduce neck and eye strain."}</p>
      <BottonDiv>
        <StyledBackBotton onClick={(e) => handleClick(e)}>Back this project</StyledBackBotton>
        <StyledBookmarkBotton onClick={(e) => bookMarked(e)} isBookmarked={isBookmarked}><img src="/crowdfunding/images/icon-bookmark.svg" alt="bookmark button" />{isBookmarked && !isSmallScreen ? "Bookmarked" : isSmallScreen ? "" : "Bookmark"}</StyledBookmarkBotton>
      </BottonDiv>
    </StyledContainer>
  )
}

export default Container
