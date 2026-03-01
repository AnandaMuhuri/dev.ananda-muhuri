import type{ GitHubRepo } from '../types'

import axios from 'axios'

export async function fetchUserRepos(username: string, per_page = 6): Promise<GitHubRepo[]> {
  const url = `https://api.github.com/users/${username}/repos`
  const resp = await axios.get(url, {
    params: { sort: 'updated', per_page },
  })
  //eslint-disable-next-line @typescript-eslint/no-explicit-any
  const data = resp.data as any[]
  return data.map((r) => ({
    id: r.id,
    name: r.name,
    html_url: r.html_url,
    description: r.description,
    language: r.language,
  }))
}
