// more info https://stackoverflow.com/a/30524915/14745811

const arr = (x: Array<any>) => Array.from(x)
const num = (x: number) => Number(x) || 0
const str = (x: any) => String(x)
const isEmpty = (xs: any) => xs.length === 0
const take = (n: any) => (xs: any) => xs.slice(0, n)
const drop = (n: any) => (xs: any) => xs.slice(n)
const reverse = (xs: any) => xs.slice(0).reverse()
const comp = (f: any) => (g: any) => (x: any) => f(g(x))
const not = (x: any) => !x
const chunk = (n: any) => (xs: any) => (isEmpty(xs) ? [] : [take(n)(xs), ...chunk(n)(drop(n)(xs))])

// numToWords :: (Number a, String a) => a -> String
export function NumInWords(number: number) {
  const input: any = String(Math.abs(number))
  const tmpArr = comp(chunk(3))(reverse)(arr(input))
  const makeGroup = ([ones, tens, huns]: any, index: any) => {
    let onePrefix = ''
    if (ones > 0 && ones < 10 && tens == 0) {
      onePrefix = 'linh '
    }

    let tmpOne = ''
    if (tens > 1) {
      if (ones == 1) tmpOne = 'mốt'
      if (ones == 5) tmpOne = 'lăm'
    } else {
      tmpOne = first[tens + ones] || first[ones]
    }

    let tmpTen = ''
    if (num(ones) === 0) {
      tmpTen = tensOf[tens]
    } else {
      tmpTen = (tensOf[tens] && tensOf[tens] + ' ') || ''
    }

    let tmpHun = ''
    if (num(huns) == 0) {
      if (index + 1 !== tmpArr.length) {
        if (tens != 0 && ones != 0) {
          tmpHun = 'không trăm '
        }
      }
    } else {
      if (ones == 0 && tens == 0) {
        tmpHun = first[huns] + ' trăm '
      } else {
        tmpHun = first[huns] + ' trăm '
      }
    }

    return [tmpHun, tmpTen, onePrefix + tmpOne].join('')
  }
  const thousand = (group: any, i: any) => (group === '' ? group : `${group} ${gr[i]}`)

  let output = '0 '

  if (input !== '0') {
    output = capitalizeFirstLetter(
      tmpArr.map(makeGroup).map(thousand).filter(comp(not)(isEmpty)).reverse().join('').trim()
    )
  }

  return `(${output} đồng)`
}

function capitalizeFirstLetter(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

const first = [
  '',
  'một',
  'hai',
  'ba',
  'bốn',
  'năm',
  'sáu',
  'bảy',
  'tám',
  'chín',
  'mười',
  'mười một',
  'mười hai',
  'mười ba',
  'mười bốn',
  'mười năm',
  'mười sáu',
  'mười bảy',
  'mười tám',
  'mười chín'
]
const tensOf = ['', '', 'hai mươi', 'ba mươi', 'bốn mươi', 'năm mươi', 'sáu mươi', 'bảy mươi', 'tám mươi', 'chín mươi']
const gr = [
  '',
  'nghìn',
  'triệu ',
  'tỷ',
  'nghìn tỷ',
  'triệu tỷ',
  'nghìn tỷ',
  'nghìn tỷ tỷ',
  'nghìn tỷ tỷ',
  'tỷ tỷ',
  'nghìn tỷ tỷ'
]
