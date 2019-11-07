import Api from '../utils/request'
import table from '../utils/table'

export = async (username: string) => {
  const xo = new Api
  const dev = await xo.getUserProFile(username)
  let mesg: string[] = [
    `name: ${ dev.name }`,
    `bio: ${ dev.bio }`,
    `blog: ${ dev.blog }`
  ]
  table(mesg)
}