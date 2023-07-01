import { Button } from 'antd'
import { HomeFilled } from '@ant-design/icons'

export function ErrorPage() {
  return (
    <Button type='primary' icon={<HomeFilled />}>
      Go to landing page
    </Button>
  )
}
