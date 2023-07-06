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
      <Header className="bg-transparent px-8">
        <div className="flex h-full items-center justify-between">
          <Link to="/" className="inline-flex">
            <DeploymentUnitOutlined className="text-4xl" />
          </Link>
          {!simple && (
            <Link to="/auth" className="inline-flex">
              <Button type="primary" shape="round" icon={<UserOutlined />}>
                Sign in
              </Button>
            </Link>
          )}
        </div>
      </Header>
      <Content className="p-8">
        <Outlet />
      </Content>
    </>
  )
}
