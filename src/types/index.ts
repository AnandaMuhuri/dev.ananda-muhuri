// Central place for shared TypeScript types

export type Maybe<T> = T | null | undefined

export type GitHubRepo = {
  id: number
  name: string
  html_url: string
  description?: string | null
  language?: string | null
}

export type Props = {
  name: string
  subtitle: string
}
