import { Outlet, Link } from "react-router-dom"

import { Button, Layout } from "antd"
import { DeploymentUnitOutlined, UserOutlined } from "@ant-design/icons"

const { Header, Content } = Layout

interface Props {
  simple?: boolean
}

export function LandingLayout({ simple = false }: Props) {
  return (
    <>
      <Header className="sticky bg-transparent p-0 ">
        <div className="mx-auto flex h-full max-w-6xl items-center justify-between px-8">
          <Link to="/" className="inline-flex">
            <DeploymentUnitOutlined className="text-4xl" />
          </Link>
          {!simple && (
            <Link to="/auth">
              <Button type="primary" shape="round" icon={<UserOutlined />}>
                Sign in
              </Button>
            </Link>
          )}
        </div>
      </Header>
      <Content className="mx-auto max-w-6xl p-8">
        <Outlet />
      </Content>
    </>
  )
}
