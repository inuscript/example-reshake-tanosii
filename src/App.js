import React, { Component } from "react"
import { Face } from "./Face"
import styled from "styled-components"
import { Shake } from "reshake"

const Container = styled.div`
  padding: 2em;
  text-align: center;
`
class App extends Component {
  render() {
    return (
      <Container>
        マウスを置いてね
        <Shake h={80} v={60} r={50} dur={300} int={6} max={100}>
          <Face />
        </Shake>
      </Container>
    )
  }
}

export default App
