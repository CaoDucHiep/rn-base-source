export const today = {
  startDate: new Date(),
  endDate: new Date()
}

export const currentWeek = {
  startDate: new Date(new Date().setDate(new Date().getDate() - new Date().getDay() + 1)),

  endDate: new Date(new Date().setDate(new Date().getDate() - new Date().getDay() + 7))
}

export const nextWeek = {
  startDate: new Date(new Date().setDate(new Date().getDate() - new Date().getDay() + 8)),

  endDate: new Date(new Date().setDate(new Date().getDate() - new Date().getDay() + 14))
}

export const currentMonth = {
  startDate: new Date(new Date().getFullYear(), new Date().getMonth(), 1),

  endDate: new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0)
}

/* 
 month: truyền vào tháng bạn muốn
 moment: truyền vào thời điểm cuối hoặc đầu tháng 
  */
export const getMonth = (month: number, moment: 'start' | 'end') => {
  if (moment === 'start') {
    return new Date(new Date().getFullYear(), month - 1, 1)
  } else {
    return new Date(new Date().getFullYear(), month, 0)
  }
}

export const nextMonth = {
  startDate: new Date(new Date().getFullYear(), new Date().getMonth() + 1, 1),

  endDate: new Date(new Date().getFullYear(), new Date().getMonth() + 2, 0)
}

const startCurrentQuarter = new Date(new Date().getFullYear(), Math.floor(new Date().getMonth() / 3) * 3, 1)

export const currentQuarter = {
  startDate: new Date(startCurrentQuarter),
  endDate: new Date(startCurrentQuarter.getFullYear(), startCurrentQuarter.getMonth() + 3, 0)
}

export const getQuarter = (quarter: 1 | 2 | 3 | 4, moment: 'start' | 'end') => {
  if (moment === 'start') {
    return new Date(new Date().getFullYear(), Math.floor((3 * quarter - 1) / 3) * 3, 1)
  } else {
    return new Date(new Date().getFullYear(), Math.floor((3 * quarter) / 3) * 3, 0)
  }
}

export const currentYear = {
  startDate: new Date(new Date().getFullYear(), 0, 1),
  endDate: new Date(new Date().getFullYear(), 11, 31)
}

export const yesterday = {
  startDate: new Date(new Date().setDate(new Date().getDate() - 1)),
  endDate: new Date(new Date().setDate(new Date().getDate() - 1))
}

export const previousWeek = {
  startDate: new Date(new Date().setDate(new Date().getDate() - new Date().getDay() - 6)),

  endDate: new Date(new Date().setDate(new Date().getDate() - new Date().getDay()))
}

export const previousMonth = {
  startDate: new Date(
    new Date().getFullYear() - (new Date().getMonth() > 0 ? 0 : 1),
    (new Date().getMonth() - 1 + 12) % 12,
    1
  ),
  endDate: new Date(new Date().getFullYear(), new Date().getMonth(), 0)
}

const startPreviousQuarter = new Date(new Date().getFullYear(), Math.floor(new Date().getMonth() / 3) * 3 - 3, 1)

export const previousQuarter = {
  startDate: new Date(startPreviousQuarter),
  endDate: new Date(startPreviousQuarter.getFullYear(), startPreviousQuarter.getMonth() + 3, 0)
}

export const previousYear = {
  startDate: new Date(new Date().getFullYear() - 1, 0, 1),
  endDate: new Date(new Date().getFullYear() - 1, 11, 31)
}
