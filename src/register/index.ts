import { App } from 'vue'
import naive from './naiveui.register'

export default function (app: App): void {
  app.use(naive)
}
