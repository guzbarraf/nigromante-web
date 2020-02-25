import React, { Fragment } from 'react'
import { Svg } from './styles'

export const IcoRight = props => (
  <Fragment>
    <Svg
      aria-hidden="true"
      data-prefix="fal"
      data-icon="chevron-right"
      viewBox="0 0 256 512"
      className="prefix__svg-inline--fa prefix__fa-chevron-right prefix__fa-w-8 prefix__fa-9x"
      {...props}
    >
      <path
        fill="currentColor"
        d="M17.525 36.465l-7.071 7.07c-4.686 4.686-4.686 12.284 0 16.971L205.947 256 10.454 451.494c-4.686 4.686-4.686 12.284 0 16.971l7.071 7.07c4.686 4.686 12.284 4.686 16.97 0l211.051-211.05c4.686-4.686 4.686-12.284 0-16.971L34.495 36.465c-4.686-4.687-12.284-4.687-16.97 0z"
      />
    </Svg>
  </Fragment>
)