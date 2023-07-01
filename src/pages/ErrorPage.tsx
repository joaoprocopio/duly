import { Link, useLocation } from "react-router-dom"

import { Button, Typography } from "antd"
import { HomeFilled } from "@ant-design/icons"

const { Title, Paragraph, Text } = Typography

export function ErrorPage() {
  const { pathname } = useLocation()

  return (
    <div className="max-w-4xl mx-auto">
      <div className="w-full h-full py-8">
        <Title>Page not found</Title>
        <Paragraph>
          Sorry, the page <Text code>{pathname}</Text> that you have requested
          could not be found.
        </Paragraph>
        <Link to="/">
          <Button icon={<HomeFilled />}>Go to landing page</Button>
        </Link>
      </div>
    </div>
  )
}
