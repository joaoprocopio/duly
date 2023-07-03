import { Outlet, Link } from "react-router-dom"

import { Layout } from "antd"
import { DeploymentUnitOutlined } from "@ant-design/icons"

const { Header, Content } = Layout

export function LandingLayout() {
  return (
    <>
      <Header className="sticky bg-transparent p-0 ">
        <div className="mx-auto flex h-full max-w-4xl items-center px-8">
          <Link to="/" className="inline-flex text-black opacity-80">
            <DeploymentUnitOutlined className="text text-4xl" />
          </Link>
        </div>
      </Header>
      <Content className="mx-auto max-w-4xl p-8">
        <Outlet />
      </Content>
    </>
  )
}
