import styled from "styled-components"

interface TextProps {
    fontWeight: string 
    fontSize: string 
    color?: string
    alignSelf?: string
}

export const Typography = styled.text<TextProps>`
 font-weight: ${props => props.fontWeight};
 font-size: ${props => props.fontSize};
 ${props=> props.alignSelf?`align-self: ${props.alignSelf}` : undefined};
 ${props => props.color ? `color:${props.color}`: undefined }
`