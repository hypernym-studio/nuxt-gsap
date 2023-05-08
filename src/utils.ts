/**
 * Serializes data.
 *
 * @since 2.2.0
 */
export function serialize(data: unknown): string {
  const type = (v: string) => typeof data === v

  if (data === null || data === undefined)
    return data === null ? 'null' : 'undefined'

  if (type('boolean') || type('number') || type('function'))
    return data.toString()

  if (Array.isArray(data)) return `[${data.map(v => serialize(v)).join(',')}]`

  if (type('object'))
    return `{${Object.entries(data)
      .map(([key, val]) => `${key}: ${serialize(val)}`)
      .join(',')}}`

  return `'${data}'`
}
