/**
 * 驼峰转横线
 *
 * @param str 待转换的串
 */
export const toKebabCase = (str: string | undefined) => {
  if (str === undefined) {
    return ''
  }
  var temp = str.replace(/[A-Z]/g, function (match) {
    return '-' + match.toLowerCase()
  })
  if (temp.slice(0, 1) === '-') {
    //如果首字母是大写，执行replace时会多一个_，这里需要去掉
    temp = temp.slice(1)
  }
  return temp
}

export const snakeToPascalCase = (snakeStr: string) => {
  return snakeStr
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join('')
}

export const pascalToSnakeCase = (pascalStr: string) => {
  return pascalStr
    .replace(/([A-Z])/g, '-$1') // 在每个大写字母前加下划线
    .toLowerCase() // 全部转小写
    .replace(/^-/, '') // 移除开头的下划线（如果有）
}

export default { toKebabCase }
