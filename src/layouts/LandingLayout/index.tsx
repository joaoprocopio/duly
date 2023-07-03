import { Outlet, Link } from "react-router-dom"

import { Layout } from "antd"

import { DeploymentUnitOutlined } from "@ant-design/icons"

const { Header, Content } = Layout

export function LandingLayout() {
  return (
    <>
      <Header className="sticky p-0">
        <div className="mx-auto flex h-full max-w-4xl items-center px-8">
          <Link to="/" className="inline-flex">
            <DeploymentUnitOutlined className="text-4xl text-white" />
          </Link>
        </div>
      </Header>
      <Content className="mx-auto max-w-4xl p-8">
        <Outlet />
      </Content>
    </>
  )
}
