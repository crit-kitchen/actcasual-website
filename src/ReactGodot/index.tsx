import "./styles.css"

import { FunctionComponent, useEffect, useRef, useState } from "react"

import AsyncLoading from "./AsyncLoading"
import ReactCanvas from "./ReactCanvas"

const useScript = (url: string, onLoad: () => any) => {
  useEffect(() => {
    const script = document.createElement("script")

    script.src = url
    script.async = true
    script.onload = onLoad

    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [url])
}

export type ReactGodotProps = {
  script: string
  pck: string
  exec: string
  params?: any
}

const ReactGodot: FunctionComponent<ReactGodotProps> = (props) => {
  const { script, pck, exec, params } = props
  const outerRef = useRef<HTMLDivElement>(null)
  const [engine, setEngine] = useState<any>(null)

  useScript(script, () => {
    const scope = window as any
    setEngine(() => scope.Engine)
  })

  return (
    <div id="wrap" style={{width: "100%", height: "100%" }} ref={outerRef}>
      <AsyncLoading>
        {engine && <ReactCanvas pck={pck} exec={exec} engine={engine} params={params} width={outerRef.current ? outerRef.current.clientWidth : 0} height={outerRef.current ? outerRef.current.clientHeight : 0} />}
      </AsyncLoading>
    </div>
  )
}
//<ReactGodot script="ReactGodot.js" pck="ReactGodot.pck" exec="ReactGodot"/>
export default ReactGodot
