import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export function LandingLayout({ children }: Props) {
  return (
    <>
      <header>header</header>
      <main>{children}</main>
      <footer>footer</footer>
    </>
  );
}
