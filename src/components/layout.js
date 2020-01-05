import React from "react"
import styled from "styled-components"

import { rhythm, scale } from "../utils/typography"

import ScrollUpButton from '@/components/goto-top'
import Header from '@/components/header';
import 'antd/dist/antd.css';

class Layout extends React.Component {
  render() {
    const { children } = this.props

    return (
      <Wrapper>
        <Header />
        <div
          style={{
            marginLeft: `auto`,
            marginRight: `auto`,
            maxWidth: rhythm(24),
            padding: `${rhythm(1.8)} ${rhythm(3 / 4)}`,
          }}
        >
          <main>{children}</main>
        </div>
        <ScrollUpButton />
        <Footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </Footer>
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  min-height: 100vh;
`

const Footer = styled.footer`
  text-align: center;
  margin: 24px;
`

export default Layout
