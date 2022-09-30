import _ from "lodash/fp"
import type { QueryFunction } from "react-query"
import { RequestError } from "../schema"

// TODO use inline functions.
export const fetchWithBaseURL: QueryFunction = ({
  queryKey,
}): Promise<Response> => {
  // Create a new AbortController instance for this request
  const controller = new AbortController()
  // Get the abortController's signal
  const signal = controller.signal

  const path = _.isArray(queryKey) ? _.head(queryKey) : queryKey
  const fetchParams =
    _.isArray(queryKey) && queryKey.length >= 2 ? _.last(queryKey) : {}
  // Has to be cast to any to use promise.cancel - see: https://github.com/tannerlinsley/react-query/issues/1265
  const promise: any = fetch(
    `${process.env.SNOWPACK_PUBLIC_API_BASE_URL}/${path}`,
    { ...fetchParams, signal }
  )
    .then((res) => res.json())
    .then((res) => {
      if (_.has("failReason", res)) {
        console.log(`throwing error`)
        throw new RequestError(res.status, _.get("failReason", res))
      } else if (_.has("message", res)) {
        throw new RequestError(res.status, _.get("message", res))
      }
      if (_.has("success", res) && !_.get("success", res)) {
        throw new RequestError(res.status)
      }
      return res
    })
  // Cancel the request if React Query calls the `promise.cancel` method
  promise.cancel = () => {
    console.log(`Aborting request ${path}`)
    controller.abort()
  }
  return promise
}
