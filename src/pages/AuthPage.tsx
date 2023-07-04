// import { useParams } from "react-router-dom"

import { Form, Input, Button } from "antd"

import { UserOutlined } from "@ant-design/icons"

// enum AuthSteps {
//   IDENTIFY = "identify",
//   SIGN_IN = "signIn",
//   SIGN_UP = "signUp"
// }

export function AuthPage() {
  // const { step } = useParams()

  const [form] = Form.useForm()

  return (
    <>
      <Form form={form} layout="vertical" requiredMark={false}>
        <Form.Item
          label="Username"
          rules={[
            {
              required: true,
              message: "Please input your username"
            }
          ]}>
          <Input
            prefix={<UserOutlined />}
            placeholder="Type here your username"
          />
        </Form.Item>

        <Form.Item className="mb-0">
          <Button
            onClick={async () => await form.validateFields()}
            block
            type="primary"
            htmlType="submit">
            Continue
          </Button>
        </Form.Item>
      </Form>
    </>
  )
}
