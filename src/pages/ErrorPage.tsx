import { Link, useLocation } from "react-router-dom"

import { Typography } from "antd"

const { Title, Paragraph, Text } = Typography

export function ErrorPage() {
  const { pathname } = useLocation()

  return (
    <div className="mx-auto h-full w-full max-w-4xl py-8">
      <div>
        <Title>Page not found</Title>
        <Paragraph>
          Sorry, the page <Text code>{pathname}</Text> that you have requested
          could not be found.
        </Paragraph>
        <Link to="/">Go to landing page</Link>
      </div>
    </div>
  )
}
