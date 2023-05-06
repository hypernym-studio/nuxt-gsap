/**
 * Transforms any data type to a string.
 *
 * @since 2.2.0
 */
export function stringify(data: unknown): string {
  if (data === undefined || data === null)
    return data === undefined ? 'undefined' : 'null'

  if (typeof data === 'string') return `'${data}'`

  if (
    typeof data === 'number' ||
    typeof data === 'boolean' ||
    typeof data === 'function'
  )
    return data.toString()

  if (data instanceof Array) return `[${data.map(v => stringify(v)).join(',')}]`

  if (typeof data === 'object')
    return `{${Object.entries(data)
      .map(([key, val]) => `${key}: ${stringify(val)}`)
      .join(',')}}`

  return JSON.stringify(data)
}
