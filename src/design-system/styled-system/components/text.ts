import styled from '@emotion/styled'

import {
  color,
  ColorProps,
  layout,
  LayoutProps,
  position,
  PositionProps,
  space,
  SpaceProps,
  system,
  typography,
  TypographyProps,
} from 'styled-system'

type TextTransform = { textTransform?: 'none' | 'capitalize' | 'uppercase' | 'lowercase' }
interface TextProps
  extends PositionProps,
    LayoutProps,
    ColorProps,
    TypographyProps,
    SpaceProps,
    TextTransform {
  children?: React.ReactNode
}

export const Text = styled.p<TextProps>`
  ${system({
    textTransform: true,
  })}
  ${position}
  ${layout}
  ${color}
  ${typography}
  ${space}
`

Text.defaultProps = {
  color: 'midnight',
  fontFamily: 'sans-serif',
}
