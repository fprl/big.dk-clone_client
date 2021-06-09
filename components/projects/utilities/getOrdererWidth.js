// get ordered column width

function getOrdererWidth(projectsLength) {
  const iconWidth = 36
  const projectsInColumn = 13

  const columns = Math.ceil(projectsLength / projectsInColumn)
  const gapWidth = 8 * (columns - 1)

  const width = iconWidth * columns + gapWidth

  return { columns, width }
}

export default getOrdererWidth
