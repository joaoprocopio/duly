import { Link, useLocation } from "react-router-dom"

import { Typography } from "antd"
import { ExclamationCircleOutlined } from "@ant-design/icons"

const { Title, Paragraph, Text } = Typography

export function ErrorPage() {
  const { pathname } = useLocation()

  return (
    <div className="flex flex-col items-center gap-16 sm:flex-row">
      <ExclamationCircleOutlined className="text-8xl" />
      <div>
        <Title>Page not found</Title>
        <Paragraph className="mb-8">
          Sorry, the page <Text code>{pathname}</Text> that you have requested
          could not be found.
        </Paragraph>
        <Link to="/">Go to landing page</Link>
      </div>
    </div>
  )
}
