import request from './utils/request'

;import { stat } from 'fs';
(async ()=> {
  let args = process.argv
  const [,, state, value] = args
  console.log(state)
  console.log(value)
})()