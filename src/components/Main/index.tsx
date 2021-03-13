import { FC } from 'react'
import { container, title } from './styles'

export const Main: FC = () => {
  return (
    <main css={container}>
      <h1 css={title}>
        Welcome to <a href="https://nextjs.org">Next.js!</a>
      </h1>
    </main>
  )
}
