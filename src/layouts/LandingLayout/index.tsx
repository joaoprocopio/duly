import { Outlet, Link } from "react-router-dom"

import { Layout } from "antd"
import { DeploymentUnitOutlined } from "@ant-design/icons"

const { Header, Content } = Layout

export function LandingLayout() {
  return (
    <>
      <Header className="sticky bg-transparent p-0 ">
        <div className="mx-auto flex h-full max-w-6xl items-center px-8">
          <Link to="/" className="inline-flex">
            <DeploymentUnitOutlined className="text text-4xl text-black opacity-80" />
          </Link>
        </div>
      </Header>
      <Content className="mx-auto max-w-6xl p-8">
        <Outlet />
      </Content>
    </>
  )
}
