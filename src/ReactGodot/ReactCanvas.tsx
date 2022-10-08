import { FunctionComponent, useEffect, useRef, useState } from "react"

import { useLoading } from "./AsyncLoading"

export type ReactEngineProps = {
  engine: any
  pck: string
  exec: string
  width: number
  height: number
  params?: any
  resize?: boolean
}

function toFailure(err: any) {
  const msg = err.message || err
  console.error(msg)
  return { msg, mode: "notice", initialized: true }
}

const ReactCanvas: FunctionComponent<ReactEngineProps> = ({ engine, pck, exec, width, height }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [instance, setInstance] = useState<any>()
  const [loadingState, changeLoadingState] = useLoading()

  useEffect(() => {
    if (engine.isWebGLAvailable()) {
      changeLoadingState({ mode: "hidden" })
      const GODOT_CONFIG = {"args":[],"canvasResizePolicy":2,"executable":exec,"experimentalVK":false,"focusCanvas":true,"gdnativeLibs":[]};
      setInstance(new engine(GODOT_CONFIG))
    } else {
      changeLoadingState(toFailure("WebGL not available"))
    }
  }, [engine])

  useEffect(() => {
    if (instance) {
      instance
        .startGame({mainPack: pck, 'onProgress': ((current: number, total: number) => {
          if (total > 0) {
            changeLoadingState({ mode: "hidden", percent: current / total })
          } else {
            changeLoadingState({ mode: "hidden" })
          }
        })})
        .then(() => {
          changeLoadingState({ mode: "hidden", initialized: true })
        })
        .catch((err: any) => changeLoadingState(toFailure(err)))

        
    }
  }, [instance, pck, changeLoadingState])

  useEffect(() => {
    if (instance) {
      instance.canvas = canvasRef.current
    }
  }, [instance, canvasRef.current])

  const canv = document.getElementById("canvas") as
    | HTMLCanvasElement
    | undefined
  if (canv) {
    ;(canv as HTMLCanvasElement).width =
      width * window.devicePixelRatio
    ;(canv as HTMLCanvasElement).height =
      height * window.devicePixelRatio
  }

  return (
    <canvas
      ref={canvasRef}
      id="canvas"
      style={{
        display: loadingState.initializing ? "hidden" : "block",
        width: "100%",
        height: "100%",
      }}
    >
      HTML5 canvas appears to be unsupported in the current browser.
      <br />
      Please try updating or use a different browser.
    </canvas>
  )
}

export default ReactCanvas
