import { Outlet } from "react-router-dom"

import { Layout } from "antd"

const { Header, Content } = Layout

export function LandingLayout() {
  return (
    <>
      <Header className="sticky top-0" color="transparent">
        i am a header
      </Header>
      <Content>
        <Outlet />
      </Content>
    </>
  )
}
