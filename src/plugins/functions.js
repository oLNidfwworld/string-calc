import html2pdf from 'html2pdf.js'

export function useFilterTotal (arr) {
  return Object.keys(arr)
    .map(key => arr[key])
    .filter(item => item.total === true)
}
export function useFilterError (arr) {
  return Object.keys(arr)
    .map(key => arr[key])
    .filter(item => item.measure !== false && item.value.length !== 0 && (isNaN(item.value) || parseFloat(item.value) <= 0))
}
export async function useConvertToPDF (node) {
  /* Для узких экранов запоминаем разрешение и ставим его побольше чтобы корректно сгенерировался PDF */
  const curRes = window.innerWidth
  window.innerWidth = 1600
  await html2pdf(node, {
    margin: 0,
    filename: 'чертеж_пружины.pdf',
    image: { type: 'jpeg', quality: 2 },
    jsPDF: { units: 'pt', format: 'A4', orientation: 'p', putOnlyUsedFonts: true, floatPrecision: 20 }
  })
  window.innerWidth = curRes
}
export function useFormText (type) {
  return type === 'compression' || type === 'tension'
    ? 'Укажите номер телефона, мы получим Ваш чертеж и свяжемся с Вами'
    : 'Укажите номер телефона и опишите какую пружину вы бы хотели заказать, мы получим Ваше сообщение и свяжемся с Вами'
}
