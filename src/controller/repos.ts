import Api from '../utils/request'
import table from '../utils/table'

export = async (username: string) => {
  const xo = new Api
  let data = await xo.getRepos(username)
  if (data.length >= 8) {
    data = data.slice(0, 8)
  }
  data = data.map((item: any)=> {
    return item.full_name
  })
  table((data as string[]))
}