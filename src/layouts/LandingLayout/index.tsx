import { Outlet } from "react-router-dom"

import { Layout } from "antd"

const { Header, Content } = Layout

export function LandingLayout() {
  return (
    <>
      <Header className="sticky"></Header>
      <Content>
        <Outlet />
      </Content>
    </>
  )
}
