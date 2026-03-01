export function formatDateIso(dateStr: string | number | Date) {
  const d = new Date(dateStr)
  return d.toISOString().split('T')[0]
}

export default { formatDateIso }
