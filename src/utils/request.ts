import got from 'got'

class HubPost {

  public username: string

  constructor (username: string = `d1y`) {
    this.username = username
  }

  // 获取用户组织
  public getUserInOrgs = async (username: string = this.username): Promise<any> => {
    return await this.fetch(`users/${ username }/orgs`)
  }

  // 获取组织信息
  public getOrgsProFile = async (orgs: string): Promise<any> => {
    return await this.fetch(`orgs/${ orgs }`)
  }

  // 获取用户信息
  public getUserProFile = async (username: string = this.username): Promise<any> => {
    return await this.fetch(`users/${ username }`)
  }

  // 获取用户 `repos`
  public getRepos = async (username: string = this.username): Promise<any> => {
    return await this.fetch(`users/${ username }/repos`)
  }

  private fetch = async (url: string): Promise<any> => {
    const githubApi: string = `https://api.github.com/${ url }`
    let data = await got(githubApi)
    data = JSON.parse(data.body)
    return data
  }

}

export = HubPost