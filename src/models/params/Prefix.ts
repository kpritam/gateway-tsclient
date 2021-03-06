import { Subsystem } from 'models/params/Subsystem'
import { requirement } from 'utils/Utils'

const SEPARATOR = '.'

export class Prefix {
  constructor(readonly subsystem: Subsystem, readonly componentName: string) {
    requirement(
      componentName === componentName.trim(),
      `component name ${componentName} has leading/trailing whitespace`
    )
    requirement(!componentName.includes('-'), `component name ${componentName} has '-'`)
  }

  toJSON = () => this.subsystem + SEPARATOR + this.componentName
}
