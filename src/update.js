import format from 'date-fns/format'
let span = document.querySelector('#time-now')

export default function update() {
  span.textContent = format(new Date(), 'yyyy-MM-dd h:mm:ss a')
  setTimeout(update, 1000)
}
