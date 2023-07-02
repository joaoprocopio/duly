import { Link, useLocation } from "react-router-dom"

import { Typography } from "antd"
import { CloseCircleFilled } from "@ant-design/icons"

const { Title, Paragraph, Text } = Typography

export function ErrorPage() {
  const { pathname } = useLocation()

  return (
    <div className="max-w-4xl mx-auto w-full h-full py-8">
      <div className="flex gap-16">
        <div className="m-auto">
          <CloseCircleFilled />
        </div>
        <div>
          <Title>Page not found</Title>
          <Paragraph>
            Sorry, the page <Text code>{pathname}</Text> that you have requested
            could not be found.
          </Paragraph>
          <Link to="/">Go to landing page</Link>
        </div>
      </div>
    </div>
  )
}
