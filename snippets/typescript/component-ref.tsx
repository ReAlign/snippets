import { forwardRef, useImperativeHandle } from 'react'

export type T_CompHandle = {
  open: () => void
}

export type T_CompProps = {
  type: 1 | 2
}

const Comp = forwardRef<T_CompHandle, T_CompProps>(({ type }, ref) => {
  useImperativeHandle(ref, () => ({
    open: () => {
      //
    },
  }))

  return <div>component-ref type: {type}</div>
})

export default Comp
