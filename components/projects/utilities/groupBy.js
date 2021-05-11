const groupBy = (arr, key) => {
  let grouped

  if (key === 'year') {
    grouped = arr.reduce(
      (acc, item) => ((acc[item[key]] = [...(acc[item[key]] || []), item]), acc),
      {}
    )
  } else if (key === 'size') {
    // need to group by scale range
    return
  }


  let ordered = []
  for (const key in grouped) {
    ordered.push([grouped[key], key])
  }

  return ordered
}

export default groupBy
