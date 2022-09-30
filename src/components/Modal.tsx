import { useCallback, useEffect, useRef, Dispatch, SetStateAction } from "react"
import styled from "styled-components"

const StyledOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgb(0, 0, 0, 0.9);
  z-index: 2;
`
export const StyledModalContentContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

interface ModalProps {
  isVisible: boolean
  handleVisibility: Dispatch<SetStateAction<boolean>>
  children: React.ReactNode
}

// TODO re-do this... too much passing functions & variables
export const Modal = ({
  children,
  isVisible,
  handleVisibility,
}: ModalProps) => {
  const overlayRef = useRef<HTMLDivElement>(null)

  const handleOutsideClick = useCallback(
    (e: MouseEvent) => {
      if ((e.target as Node).contains(overlayRef.current))
        handleVisibility((currentState) => !currentState)
    },
    [handleVisibility]
  )

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick)
    return () => {
      document.addEventListener("click", handleOutsideClick)
    }
  }, [handleOutsideClick])

  if (!isVisible) {
    return null
  }

  return (
    // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
    <StyledOverlay role="alert" ref={overlayRef}>
      <StyledModalContentContainer>{children}</StyledModalContentContainer>
    </StyledOverlay>
  )
}
