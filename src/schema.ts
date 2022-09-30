
export interface StandardResponse {
  message?: string
  error?: Error
  success: boolean
}

export class RequestError extends Error {
  status: number
  failReason: string | undefined
  constructor(status: number, failReason?: string, error?: Error) {
    super(failReason || (error ? error.message : "Unknown Error"))
    this.name = error ? error.name : "RequestError"
    this.status = status
    this.failReason = failReason
  }
}
