import React from "react"
import styled from "styled-components"

export const StyledPageContainer = styled.div`
  position: absolute;
  display: flex;
  top: 0;
  left: 0;
  min-width: 100%;
  width: 100%;
  flex-grow: 1;
  min-height: 100%;
  height: 100%;
  font-size: 12px;
`

// TODO properly type this
export const StyledInput = styled.input`
  height: 100%;
  background-color: ${({ theme }) => theme.color.lightGrey};
  color: white;
  border: 3px solid black;
  text-align: center;
`

// TODO merge Input and Label...
export const StyledLabel = styled.span`
  display: flex;
  align-items: center;
`

export interface StyledPaddingProps {
  size: string
  children?: React.ReactNode
}

type StyledPaddingSingle = Omit<StyledPaddingProps, "children">

const StyledRowPaddingSingle = styled.div<StyledPaddingSingle>`
  height: ${({ size }) => size};
`
export const StyledRowPadding = ({ children, size }: StyledPaddingProps) =>
  children ? (
    <>
      <StyledRowPaddingSingle size={size} />
      {children}
      <StyledRowPaddingSingle size={size} />
    </>
  ) : (
    <StyledRowPaddingSingle size={size} />
  )

export const StyledColumnPaddingSingle = styled.div<StyledPaddingSingle>`
  width: ${({ size }) => size};
`

export const StyledColumnPadding = ({ children, size }: StyledPaddingProps) =>
  children ? (
    <>
      <StyledColumnPaddingSingle size={size} />
      {children}
      <StyledColumnPaddingSingle size={size} />
    </>
  ) : (
    <StyledColumnPaddingSingle size={size} />
  )

export const StyledPixelatedDiv = styled.div`
  image-rendering: -moz-crisp-edges;
  image-rendering: -webkit-crisp-edges;
  image-rendering: pixelated;
`

export const StyledFlexRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const StyledFlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const StyledImage = styled(StyledPixelatedDiv)<{
  width: number
  height: number
  imageSize: number
  imagePath: string
}>`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  background-image: url(${(props) => props.imagePath});
  background-size: ${(props) => props.imageSize}px
    ${(props) => props.imageSize}px;
  background-position: ${(props) => props.width / 2 - props.imageSize / 2}px
    ${(props) => props.height / 2 - props.imageSize / 2}px;
  background-repeat: no-repeat;
`
