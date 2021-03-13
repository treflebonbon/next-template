import { FC } from 'react'
import { container, link, logo } from './styles'

export const Footer: FC = () => {
  return (
    <footer css={container}>
      <a
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
        css={link}
      >
        Powered by <img src="/vercel.svg" alt="Vercel Logo" css={logo} />
      </a>
    </footer>
  )
}
