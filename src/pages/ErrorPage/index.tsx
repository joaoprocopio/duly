import { Link, useLocation } from "react-router-dom"

import { Typography } from "antd"
import { ExclamationCircleTwoTone } from "@ant-design/icons"

const { Title, Paragraph, Text } = Typography

export function ErrorPage() {
  const { pathname } = useLocation()

  return (
    <div className="mx-auto flex h-full w-full max-w-2xl flex-col items-center gap-16 p-8 sm:flex-row">
      <ExclamationCircleTwoTone className="text-8xl" />
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
