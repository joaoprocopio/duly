import { Typography, Button } from "antd"

const { Title } = Typography

export function LandingPage() {
  return (
    <div className="text-center">
      <Title className="mx-auto my-8 max-w-5xl text-7xl font-semibold">
        Supercharge your React development with Molecule.
      </Title>
      <Title
        level={2}
        className="mx-auto mb-12 mt-0 max-w-3xl text-xl font-medium">
        Molecule comes pre-loaded with a carefully crafted architecture,
        following industry best practices and standards. It provides a solid
        foundation for your React applications, allowing you to hit the ground
        running and concentrate on building features that truly matter.
      </Title>
      <div>
        <Button className="mr-4" type="primary" size="large">
          Why Molecule?
        </Button>
        <Button size="large">Core aspects</Button>
      </div>
    </div>
  )
}
