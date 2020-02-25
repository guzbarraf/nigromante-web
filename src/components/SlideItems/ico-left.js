import React, { Fragment } from 'react'
import { Svg } from './styles'

export const IcoLeft = props => (
  <Fragment>
    <Svg
      aria-hidden="true"
      data-prefix="fal"
      data-icon="chevron-left"
      viewBox="0 0 256 512"
      className="prefix__svg-inline--fa prefix__fa-chevron-left prefix__fa-w-8 prefix__fa-9x"
      {...props}
    >
      <path
        fill="currentColor"
        d="M238.475 475.535l7.071-7.07c4.686-4.686 4.686-12.284 0-16.971L50.053 256 245.546 60.506c4.686-4.686 4.686-12.284 0-16.971l-7.071-7.07c-4.686-4.686-12.284-4.686-16.97 0L10.454 247.515c-4.686 4.686-4.686 12.284 0 16.971l211.051 211.05c4.686 4.686 12.284 4.686 16.97-.001z"
      />
    </Svg>
  </Fragment>
)