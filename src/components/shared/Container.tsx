import classNames from "classnames"
import { type ReactNode } from "react"

interface Props {
  children: ReactNode
  maxWidth?: MaxWidthType
  centered?: boolean
  horizontalPadding?: boolean
  verticalPadding?: boolean
}

type MaxWidthType = "default"

enum MaxWidthEnum {
  default = "max-w-7xl"
}

export function Container({
  children,
  maxWidth = "default",
  horizontalPadding = true,
  verticalPadding = true,
  centered = false
}: Props) {
  const classes = classNames(MaxWidthEnum[maxWidth], {
    "px-8": horizontalPadding,
    "py-8": verticalPadding,
    "mx-auto": centered
  })

  return <div className={classes}>{children}</div>
}
