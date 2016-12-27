import { Store } from 'redux'
import {GlobalState} from "types";

function hook(obj: any, name: string, action: () => void) {
  const orig = obj[name] || (() => 0)
  obj[name] = () => {
    orig.call(obj)
    action.call(obj)
  }
}

function limitByFramerate(f: () => void): (() => void) {
  let refreshScheduled = false

  return () => {
    // If we already have a refresh scheduled, we do not need a second one,
    // this will defeat the purpose.
    if (refreshScheduled)
      return

    refreshScheduled = true
    if (window.requestAnimationFrame) {
      window.requestAnimationFrame(() => {
        f()
        refreshScheduled = false
      })
    }
  }
}

export default function rerender(component: React.Component<{}, {}>, store: Store<GlobalState>) {
  let unsubscribe: Function

  // See Redux connect for much of similar logic
  // https://github.com/rackt/react-redux/blob/master/src/components/connect.js
  const handle = limitByFramerate(() => {
    // Without this condition, a React warns us that we sometimes
    // call forceUpdate on an unmounted component,
    // try account creation for an example.
    // It seems that the store schedules an update, then unmounting
    // happens and we are too late to unsubscribe.
    if (unsubscribe) {
      component.forceUpdate()
    }
  })

  hook(component, 'componentDidMount', () => {
    unsubscribe = store.subscribe(handle)
    handle()
  })

  hook(component, 'componentWillUnmount', () => {
    if (unsubscribe) {
      unsubscribe()
    }
    unsubscribe = null
  })
}
