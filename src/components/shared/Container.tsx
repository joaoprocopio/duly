import classNames from "classnames"
import { type ReactNode } from "react"

interface Props {
  children: ReactNode
  centered?: boolean
  maxWidth?: MaxWidthType
}

type MaxWidthType = "default"

enum MaxWidthEnum {
  default = "max-w-7xl"
}

export function Container({
  children,
  maxWidth = "default",
  centered = false
}: Props) {
  const classes = classNames(MaxWidthEnum[maxWidth], { "mx-auto": centered })

  return <div className={classes}>{children}</div>
}
