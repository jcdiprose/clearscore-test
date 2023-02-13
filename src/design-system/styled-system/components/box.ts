import styled from '@emotion/styled'

import {
  background,
  BackgroundProps,
  border,
  BorderProps,
  color,
  ColorProps,
  flex,
  flexbox,
  FlexboxProps,
  FlexProps,
  grid,
  gridGap,
  GridGapProps,
  GridProps,
  layout,
  LayoutProps,
  position,
  PositionProps,
  shadow,
  ShadowProps,
  space,
  SpaceProps,
  system,
  typography,
  TypographyProps,
} from 'styled-system'

type Gap = { gap?: number }

interface BoxProps
  extends ColorProps,
    LayoutProps,
    SpaceProps,
    PositionProps,
    FlexProps,
    ShadowProps,
    FlexboxProps,
    BorderProps,
    GridProps,
    GridGapProps,
    BackgroundProps,
    TypographyProps,
    Gap {
  children?: React.ReactNode
}

export const Box = styled.div<BoxProps>`
  ${system({
    gap: {
      property: 'gap',
      scale: 'space',
    },
  })}
  ${position}
  ${color}
  ${layout}
  ${space}
  ${shadow}
  ${flexbox}
  ${flex}
  ${border}
  ${grid}
  ${gridGap}
  ${background}
  ${typography}
`
