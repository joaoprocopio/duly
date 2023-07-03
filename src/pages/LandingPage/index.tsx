import { Typography, Button } from "antd"

const { Title } = Typography

export function LandingPage() {
  return (
    <div className="text-center">
      <Title className="mx-auto my-8 max-w-3xl text-5xl">
        Supercharge your React development with Molecule.
      </Title>
      <Title
        level={2}
        className="mx-auto mb-8 mt-0 max-w-xl text-xl font-medium">
        A pre-loaded, industry-standard React architecture. Start building what
        matters without setup hassle.
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
