#!/usr/bin/env node
import store from './utils/store'
import help from './utils/help'

const controller: any = {
  orgs: require('./controller/orgs'),
  repos: require('./controller/repos'),
  store: require('./controller/store'),
  userinfo: require('./controller/userino')
}

const toSayStore = (): void => {
  console.log('未设置ID')
  console.log('xo store [userinfo]')
}

;(async ()=> {
  let args = process.argv
  let data = store.get()
  let [,, state, value] = args
  let cp = value
  value = value ? value : data
  if (!state || state == `help` || state == `--help`) {
    console.log(help)
    return
  }
  switch (state) {
    case 'userinfo':
      if (value) {
        controller.userinfo(value)
      } else toSayStore()
      break;
    case 'repos':
      if (value) {
        controller.repos(value)
      } else toSayStore()
      break;
    case 'orgs':
      if (value) {
        controller.orgs.userInOrgs(value)
      } else toSayStore()
      break;
    case 'store':
      if (cp) {
        store.set(value)
      } else {
        console.log(data)
      }
      break;
    default:
      console.log(help)
      break;
  }
})()