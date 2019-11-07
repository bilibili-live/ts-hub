import hub from '../utils/request'
import table from '../utils/table'
const Orgs = {
  orgsInfo: async (orgs: string) => {
    const Hub = new hub
    const data = await Hub.getOrgsProFile(orgs)
    let result: string[] = [
      `name: ${ data.name }`,
      `email: ${ data.email }`,
      `repos: ${ data.public_repos }`,
    ]
    table(result)
  },
  userInOrgs: async (username: string)=> {
    const Hub = new hub
    const data = await Hub.getUserInOrgs(username)
    let msgs: string[] = data.map((item: any)=> {
      return `loginID: ${ item.login }`
    })
    table(msgs)
  }
}
export = Orgs