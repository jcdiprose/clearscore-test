// @ts-nocheck

import styled from '@emotion/styled'
import React from 'react'
import {
  background,
  BackgroundProps,
  borderRadius,
  BorderRadiusProps,
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
  variant,
} from 'styled-system'

type TextTransform = { textTransform?: 'none' | 'capitalize' | 'uppercase' | 'lowercase' }

interface PillDOMElProps
  extends ColorProps,
    LayoutProps,
    SpaceProps,
    PositionProps,
    BackgroundProps,
    TypographyProps,
    TextTransform,
    BorderRadiusProps {
  children?: React.ReactNode
  variant: 'green' | 'orange' | 'gray'
}

const PillDOMEl = styled.div<PillDOMElProps>`
  ${color}
  ${layout}
  ${space}
  ${position}
  ${background}
  ${typography}
  ${borderRadius}
  ${system({
    textTransform: true,
  })}
  ${variant({
    variants: {
      green: {
        color: '#15693B',
        bg: '#DDF9EA',
      },
      orange: {
        color: '#764C25',
        bg: '#FDEFE2',
      },
      gray: {
        bg: '#EEEFF1',
      },
    },
  })}

  + .pill {
    margin-left: ${({ theme }) => theme.space[4]};
  }
`

PillDOMEl.defaultProps = {
  color: 'midnight',
  fontFamily: 'sans-serif',
}

interface Props {
  variant: 'green' | 'orange' | 'gray'
  text: string
  fillOnMobile?: boolean
}

const Pill = ({ variant, text, fillOnMobile }: Props) => {
  return (
    <PillDOMEl
      className="pill"
      variant={variant}
      width={fillOnMobile ? [null, null, 'fit-content'] : 'fit-content'}
      p={2}
      textTransform="uppercase"
      textAlign={fillOnMobile ? ['center', null, 'left'] : 'left'}
      letterSpacing={1.75}
      fontSize={0}
      borderRadius={0}
    >
      {text}
    </PillDOMEl>
  )
}

export default Pill
