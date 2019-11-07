import conf from 'conf'
const App = new conf()
const nickname: string = 'xo_hub'
export = {
  get: (): string=> App.get(nickname),
  set: (nick: string): void=> App.set(nickname, nick)
}