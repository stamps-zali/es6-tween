import { assign } from './shim'

const Store = {}
export default function (node, tween) {
  if (!node || !node.nodeType || !tween) return tween
  const ID = node.queueID || 'q_' + Date.now()
  if (!node.queueID) {
    node.queueID = ID
  }
  if (Store[ID]) {
    if (tween) {
      Store[ID] = assign(Store[ID], tween)
    }
    return Store[ID]
  }

  Store[ID] = tween
  return Store[ID]
}
