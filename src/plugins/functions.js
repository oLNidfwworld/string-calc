import html2canvas from 'html2canvas'
import * as pdfMake from 'pdfmake'

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
export function useFormText (type) {
  return type === 'compression' || type === 'tension'
    ? 'Укажите номер телефона, мы получим Ваш чертеж и свяжемся с Вами'
    : 'Укажите номер телефона и опишите какую пружину вы бы хотели заказать, мы получим Ваше сообщение и свяжемся с Вами'
}
export function toDataURL (src, callback, outputFormat) {
  const image = new Image()
  image.crossOrigin = 'Anonymous'
  image.onload = function () {
    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d')
    canvas.height = this.naturalHeight
    canvas.width = this.naturalWidth
    ctx.drawImage(this, 0, 0)
    const dataURL = canvas.toDataURL(outputFormat)
    callback(dataURL)
  }
  image.src = src
  if (image.complete || image.complete === undefined) {
    image.src = 'data:image/gif;base64, R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw=='
    image.src = src
  }
}

/**
 * @param {object} scheme to print
 * @param {string} watermark image to print
 * @param {object} total array of table
 * @param {string} title title of scheme
 */
export function PreparePDFContent (scheme, watermark, total, title) {
  const TotalTable = []
  Object.values(total).map((key) => {
    const measure = key.measure === false ? '' : ' ' + key.measure
    return TotalTable.push([key.name, key.value + measure])
  })
  return {
    pageOrientation: 'A4',
    background: [
      {
        image: watermark,
        width: 600
      },
      {
        canvas: [
          {
            type: 'rect',
            x: 10,
            y: 10,
            w: 575,
            h: 820,
            r: 1,
            lineColor: 'black'
          }
        ]
      }
    ],
    content: [
      {
        svg: '<svg width="300" height="95" transform="scale(0.5) translate(-20,-50)" xmlns="http://www.w3.org/2000/svg">\n' +
          '      <g>\n' +
          '        <path fill="#231F20" d="M56.086,63.077H50.08l-6.784-22.372l-6.782,22.372h-6.007l-9.84-36.871h7.509l5.697,23.252l6.732-23.252    h5.387l6.729,23.252l5.749-23.252h7.51L56.086,63.077z"/>\n' +
          '        <path fill="#231F20" d="M97.563,59.349c-2.59,2.693-5.957,4.038-9.943,4.038c-3.989,0-7.407-1.397-9.995-4.038    c-3.884-3.989-3.624-10.1-3.624-14.189v-2.02c0-7.354,0.775-10.306,3.624-13.206c2.588-2.641,6.006-4.038,9.995-4.038    c3.934,0,7.353,1.397,9.943,4.038c2.588,2.642,3.676,6.164,3.676,12.118v2.59C101.24,49.923,101.5,55.257,97.563,59.349z     M92.23,34.284c-1.138-1.294-2.746-1.966-4.609-1.966c-1.865,0-3.523,0.672-4.661,1.966c-1.655,1.813-1.761,5.283-1.761,9.84    c0,4.505-0.208,8.906,1.761,10.875c1.243,1.242,2.796,1.966,4.661,1.966c1.863,0,3.471-0.672,4.609-1.966    c1.5-1.71,1.813-3.521,1.813-11.032C94.043,37.909,93.678,35.89,92.23,34.284z"/>\n' +
          '        <path fill="#231F20" d="M113.769,63.077V26.206h7.197v30.448h16.728v6.423H113.769z"/>\n' +
          '        <path fill="#231F20" d="M148.719,63.077V26.206h7.197v30.448h16.728v6.423H148.719z"/>\n' +
          '        <path fill="#231F20" d="M193.614,32.626v30.451h-7.197V32.626h-9.633v-6.42h26.463v6.42H193.614z"/>\n' +
          '        <path fill="#231F20" d="M214.275,63.077V26.206h24.287v6.42h-17.09v8.649h14.552v6.421h-14.552v8.958h17.09v6.423H214.275z"/>\n' +
          '        <path fill="#231F20" d="M270.354,63.077l-7.2-14.708h-5.176v14.708h-7.197V26.206h14.447c7.041,0,11.963,4.66,11.963,11.288    c0,3.004-1.038,5.489-3.108,7.458c-0.982,0.932-1.708,1.45-3.626,2.227l8.234,15.899H270.354z M264.763,42.362    c3.106,0,5.229-1.968,5.229-4.868c0-2.899-2.123-4.868-5.229-4.868h-6.784v9.736H264.763z"/>\n' +
          '      </g>\n' +
          '      <g>\n' +
          '        <path fill="#231F20" d="M212.193,93.946c1.191,0.454,2.532-0.143,2.987-1.336l6.685-17.48c0.458-1.194-0.14-2.533-1.336-2.991    c-1.197-0.457-2.535,0.141-2.988,1.337l-6.684,17.479C210.396,92.147,210.994,93.489,212.193,93.946z M218.254,74.149    c0-0.81,0.655-1.47,1.466-1.47c0.646,0,1.188,0.42,1.386,0.997c-0.299-0.282-0.701-0.457-1.141-0.457    c-0.818,0-1.495,0.583-1.643,1.354C218.279,74.438,218.254,74.299,218.254,74.149z"/>\n' +
          '        <path fill="#231F20" d="M206.168,93.946c1.198,0.454,2.536-0.143,2.991-1.336l6.685-17.48c0.459-1.194-0.14-2.533-1.336-2.991    c-1.195-0.457-2.533,0.141-2.988,1.337l-6.687,17.479C204.378,92.147,204.978,93.489,206.168,93.946z M212.23,74.149    c0-0.81,0.657-1.47,1.473-1.47c0.643,0,1.185,0.42,1.383,0.997c-0.301-0.282-0.7-0.457-1.143-0.457    c-0.815,0-1.493,0.583-1.642,1.354C212.26,74.438,212.23,74.299,212.23,74.149z"/>\n' +
          '        <path fill="#231F20" d="M200.148,93.946c1.196,0.454,2.533-0.143,2.988-1.336l6.686-17.48c0.457-1.194-0.141-2.533-1.333-2.991    c-1.196-0.457-2.533,0.141-2.991,1.337l-6.686,17.479C198.358,92.147,198.954,93.489,200.148,93.946z M206.211,74.149    c0-0.81,0.657-1.47,1.47-1.47c0.646,0,1.186,0.42,1.384,0.997c-0.298-0.282-0.698-0.457-1.142-0.457    c-0.816,0-1.492,0.583-1.643,1.354C206.238,74.438,206.211,74.299,206.211,74.149z"/>\n' +
          '        <path fill="#231F20" d="M194.13,93.946c1.195,0.454,2.532-0.143,2.988-1.336l6.684-17.48c0.458-1.194-0.14-2.533-1.332-2.991    c-1.195-0.457-2.536,0.141-2.991,1.337l-6.685,17.479C192.334,92.147,192.934,93.489,194.13,93.946z M200.191,74.149    c0-0.81,0.658-1.47,1.468-1.47c0.647,0,1.188,0.42,1.385,0.997c-0.299-0.282-0.701-0.457-1.143-0.457    c-0.812,0-1.492,0.583-1.643,1.354C200.219,74.438,200.191,74.299,200.191,74.149z"/>\n' +
          '        <path fill="#231F20" d="M188.11,93.946c1.19,0.454,2.53-0.143,2.986-1.336l6.688-17.48c0.456-1.194-0.145-2.533-1.337-2.991    c-1.196-0.457-2.536,0.141-2.991,1.337l-6.688,17.479C186.314,92.147,186.912,93.489,188.11,93.946z M194.169,74.149    c0-0.81,0.659-1.47,1.471-1.47c0.646,0,1.188,0.42,1.386,0.997c-0.303-0.282-0.7-0.457-1.146-0.457    c-0.815,0-1.49,0.583-1.64,1.354C194.2,74.438,194.169,74.299,194.169,74.149z"/>\n' +
          '        <path fill="#231F20" d="M182.086,93.946c1.195,0.454,2.533-0.143,2.994-1.336l6.684-17.48c0.456-1.194-0.143-2.533-1.338-2.991    c-1.195-0.457-2.533,0.141-2.991,1.337l-6.682,17.479C180.293,92.147,180.894,93.489,182.086,93.946z M188.147,74.149    c0-0.81,0.66-1.47,1.471-1.47c0.643,0,1.185,0.42,1.383,0.997c-0.295-0.282-0.698-0.457-1.143-0.457    c-0.815,0-1.49,0.583-1.638,1.354C188.178,74.438,188.147,74.299,188.147,74.149z"/>\n' +
          '        <path fill="#231F20" d="M176.064,93.946c1.195,0.454,2.536-0.143,2.99-1.336l6.688-17.48c0.458-1.194-0.14-2.533-1.336-2.991    c-1.194-0.457-2.535,0.141-2.991,1.337l-6.684,17.479C174.273,92.147,174.869,93.489,176.064,93.946z M182.129,74.149    c0-0.81,0.657-1.47,1.468-1.47c0.647,0,1.189,0.42,1.386,0.997c-0.299-0.282-0.701-0.457-1.144-0.457    c-0.812,0-1.49,0.583-1.643,1.354C182.158,74.438,182.129,74.299,182.129,74.149z"/>\n' +
          '        <path fill="#231F20" d="M170.045,93.946c1.195,0.454,2.534-0.143,2.993-1.336l6.683-17.48c0.459-1.194-0.14-2.533-1.336-2.991    c-1.195-0.457-2.533,0.141-2.991,1.337l-6.684,17.479C168.255,92.147,168.853,93.489,170.045,93.946z M176.106,74.149    c0-0.81,0.66-1.47,1.471-1.47c0.646,0,1.188,0.42,1.386,0.997c-0.301-0.282-0.7-0.457-1.143-0.457    c-0.815,0-1.493,0.583-1.646,1.354C176.137,74.438,176.106,74.299,176.106,74.149z"/>\n' +
          '        <path fill="#231F20" d="M164.025,93.946c1.193,0.454,2.53-0.143,2.991-1.336l6.685-17.48c0.455-1.194-0.141-2.533-1.335-2.991    c-1.198-0.457-2.536,0.141-2.994,1.337l-6.685,17.479C162.232,92.147,162.831,93.489,164.025,93.946z M170.088,74.149    c0-0.81,0.655-1.47,1.467-1.47c0.646,0,1.188,0.42,1.387,0.997c-0.298-0.282-0.701-0.457-1.144-0.457    c-0.815,0-1.493,0.583-1.643,1.354C170.115,74.438,170.088,74.299,170.088,74.149z"/>\n' +
          '        <path fill="#231F20" d="M158.004,93.946c1.198,0.454,2.535-0.143,2.991-1.336l6.684-17.48c0.461-1.194-0.14-2.533-1.337-2.991    c-1.193-0.457-2.534,0.141-2.988,1.337l-6.686,17.479C156.211,92.147,156.811,93.489,158.004,93.946z M164.066,74.149    c0-0.81,0.657-1.47,1.472-1.47c0.641,0,1.187,0.42,1.381,0.997c-0.298-0.282-0.697-0.457-1.141-0.457    c-0.814,0-1.495,0.583-1.643,1.354C164.096,74.438,164.066,74.299,164.066,74.149z"/>\n' +
          '        <path fill="#231F20" d="M151.985,93.946c1.192,0.454,2.533-0.143,2.989-1.336l6.687-17.48c0.458-1.194-0.143-2.533-1.338-2.991    c-1.193-0.457-2.531,0.141-2.988,1.337l-6.688,17.479C150.192,92.147,150.787,93.489,151.985,93.946z M158.044,74.149    c0-0.81,0.658-1.47,1.473-1.47c0.643,0,1.187,0.42,1.383,0.997c-0.3-0.282-0.697-0.457-1.143-0.457    c-0.814,0-1.493,0.583-1.641,1.354C158.074,74.438,158.044,74.299,158.044,74.149z"/>\n' +
          '        <path fill="#231F20" d="M145.875,93.946c1.193,0.454,2.533-0.143,2.988-1.336l6.684-17.48c0.458-1.194-0.14-2.533-1.335-2.991    c-1.193-0.457-2.533,0.141-2.988,1.337l-6.685,17.479C144.082,92.147,144.68,93.489,145.875,93.946z M151.937,74.149    c0-0.81,0.658-1.47,1.468-1.47c0.647,0,1.188,0.42,1.383,0.997c-0.298-0.282-0.697-0.457-1.141-0.457    c-0.815,0-1.493,0.583-1.643,1.354C151.964,74.438,151.937,74.299,151.937,74.149z"/>\n' +
          '        <path fill="#231F20" d="M139.854,93.946c1.195,0.454,2.533-0.143,2.991-1.336l6.684-17.48c0.458-1.194-0.138-2.533-1.335-2.991    c-1.195-0.457-2.533,0.141-2.991,1.337l-6.685,17.479C138.063,92.147,138.661,93.489,139.854,93.946z M145.916,74.149    c0-0.81,0.66-1.47,1.47-1.47c0.646,0,1.186,0.42,1.385,0.997c-0.302-0.282-0.7-0.457-1.145-0.457    c-0.813,0-1.491,0.583-1.643,1.354C145.943,74.438,145.916,74.299,145.916,74.149z"/>\n' +
          '        <path fill="#231F20" d="M133.834,93.946c1.193,0.454,2.531-0.143,2.989-1.336l6.687-17.48c0.455-1.194-0.143-2.533-1.338-2.991    c-1.195-0.457-2.533,0.141-2.991,1.337l-6.682,17.479C132.042,92.147,132.639,93.489,133.834,93.946z M139.894,74.149    c0-0.81,0.658-1.47,1.471-1.47c0.645,0,1.188,0.42,1.385,0.997c-0.3-0.282-0.7-0.457-1.143-0.457    c-0.815,0-1.493,0.583-1.644,1.354C139.924,74.438,139.894,74.299,139.894,74.149z"/>\n' +
          '        <path fill="#231F20" d="M127.812,93.946c1.195,0.454,2.533-0.143,2.991-1.336l6.685-17.48c0.455-1.194-0.14-2.533-1.338-2.991    c-1.193-0.457-2.533,0.141-2.988,1.337l-6.684,17.479C126.02,92.147,126.617,93.489,127.812,93.946z M133.875,74.149    c0-0.81,0.658-1.47,1.47-1.47c0.643,0,1.188,0.42,1.383,0.997c-0.298-0.282-0.701-0.457-1.141-0.457    c-0.815,0-1.496,0.583-1.643,1.354C133.904,74.438,133.875,74.299,133.875,74.149z"/>\n' +
          '        <path fill="#231F20" d="M121.791,93.946c1.195,0.454,2.533-0.143,2.99-1.336l6.688-17.48c0.455-1.194-0.143-2.533-1.338-2.991    c-1.195-0.457-2.533,0.141-2.991,1.337l-6.682,17.479C120,92.147,120.598,93.489,121.791,93.946z M127.853,74.149    c0-0.81,0.658-1.47,1.47-1.47c0.645,0,1.188,0.42,1.386,0.997c-0.3-0.282-0.7-0.457-1.143-0.457c-0.815,0-1.493,0.583-1.64,1.354    C127.883,74.438,127.853,74.299,127.853,74.149z"/>\n' +
          '        <path fill="#231F20" d="M115.771,93.946c1.195,0.454,2.536-0.143,2.991-1.336l6.685-17.48c0.458-1.194-0.14-2.533-1.337-2.991    c-1.193-0.457-2.531,0.141-2.986,1.337l-6.687,17.479C113.979,92.147,114.579,93.489,115.771,93.946z M121.833,74.149    c0-0.81,0.658-1.47,1.471-1.47c0.643,0,1.186,0.42,1.385,0.997c-0.3-0.282-0.7-0.457-1.143-0.457    c-0.817,0-1.493,0.583-1.643,1.354C121.861,74.438,121.833,74.299,121.833,74.149z"/>\n' +
          '        <path fill="#231F20" d="M109.752,93.946c1.193,0.454,2.533-0.143,2.988-1.336l6.687-17.48c0.458-1.194-0.143-2.533-1.338-2.991    c-1.193-0.457-2.533,0.141-2.988,1.337l-6.687,17.479C107.957,92.147,108.557,93.489,109.752,93.946z M115.814,74.149    c0-0.81,0.658-1.47,1.468-1.47c0.643,0,1.188,0.42,1.385,0.997c-0.3-0.282-0.701-0.457-1.143-0.457    c-0.815,0-1.493,0.583-1.641,1.354C115.839,74.438,115.814,74.299,115.814,74.149z"/>\n' +
          '        <path fill="#231F20" d="M103.73,93.946c1.195,0.454,2.533-0.143,2.991-1.336l6.685-17.48c0.458-1.194-0.143-2.533-1.336-2.991    c-1.195-0.457-2.535,0.141-2.991,1.337l-6.687,17.479C101.938,92.147,102.536,93.489,103.73,93.946z M109.792,74.149    c0-0.81,0.66-1.47,1.47-1.47c0.643,0,1.188,0.42,1.383,0.997c-0.3-0.282-0.698-0.457-1.143-0.457    c-0.813,0-1.491,0.583-1.641,1.354C109.82,74.438,109.792,74.299,109.792,74.149z"/>\n' +
          '        <path fill="#231F20" d="M97.711,93.946c1.193,0.454,2.531-0.143,2.989-1.336l6.687-17.48c0.455-1.194-0.143-2.533-1.338-2.991    c-1.195-0.457-2.534,0.141-2.991,1.337l-6.682,17.479C95.918,92.147,96.516,93.489,97.711,93.946z M103.771,74.149    c0-0.81,0.658-1.47,1.471-1.47c0.645,0,1.188,0.42,1.385,0.997c-0.3-0.282-0.7-0.457-1.143-0.457    c-0.815,0-1.491,0.583-1.644,1.354C103.801,74.438,103.771,74.299,103.771,74.149z"/>\n' +
          '        <path fill="#231F20" d="M91.689,93.946c1.195,0.454,2.534-0.143,2.991-1.336l6.685-17.48c0.455-1.194-0.14-2.533-1.335-2.991    c-1.195-0.457-2.536,0.141-2.991,1.337l-6.684,17.479C89.899,92.147,90.497,93.489,91.689,93.946z M97.751,74.149    c0-0.81,0.658-1.47,1.467-1.47c0.648,0,1.188,0.42,1.389,0.997c-0.3-0.282-0.703-0.457-1.144-0.457    c-0.815,0-1.492,0.583-1.645,1.354C97.781,74.438,97.751,74.299,97.751,74.149z"/>\n' +
          '        <path fill="#231F20" d="M85.67,93.946c1.193,0.454,2.533-0.143,2.991-1.336l6.685-17.48c0.458-1.194-0.14-2.533-1.338-2.991    c-1.195-0.457-2.536,0.141-2.991,1.337l-6.682,17.479C83.877,92.147,84.473,93.489,85.67,93.946z M91.729,74.149    c0-0.81,0.66-1.47,1.47-1.47c0.645,0,1.188,0.42,1.385,0.997c-0.302-0.282-0.7-0.457-1.143-0.457    c-0.815,0-1.493,0.583-1.643,1.354C91.759,74.438,91.729,74.299,91.729,74.149z"/>\n' +
          '        <path fill="#231F20" d="M217.462,90.104c1.925,2.131,4.711,3.468,7.812,3.468c5.814,0,10.525-4.715,10.525-10.528    c0-5.815-4.711-10.531-10.525-10.531c-0.375,0-0.742,0.02-1.107,0.06l-1.973,5.156c0.907-0.525,1.955-0.832,3.08-0.832    c3.391,0,6.146,2.753,6.146,6.147c0,3.394-2.756,6.146-6.146,6.146c-2.73,0-5.038-1.776-5.842-4.237L217.462,90.104z     M231.831,75.918c0,0-4.057-2.493-7.703-1.416l0.451-1.187C224.579,73.315,228.82,72.864,231.831,75.918z"/>\n' +
          '        <path fill="#231F20" d="M70.198,83.043c0,5.813,4.714,10.528,10.531,10.528c0.467,0,0.93-0.032,1.38-0.093    c0.042-0.337,0.123-0.673,0.248-1.004l1.616-4.218c-0.943,0.588-2.053,0.932-3.244,0.932c-3.399,0-6.15-2.752-6.15-6.146    c0-3.395,2.751-6.147,6.15-6.147c2.793,0,5.149,1.867,5.894,4.422l2.003-5.234c-1.928-2.188-4.751-3.571-7.897-3.571    C74.912,72.512,70.198,77.228,70.198,83.043z M80.454,73.354c4.281-0.242,7.127,2.937,7.127,2.937l-0.467,1.18    C85.132,74.227,80.454,73.354,80.454,73.354z"/>\n' +
          '      </g>\n' +
          '      <g>\n' +
          '        <path fill="#231F20" d="M79.956,77.813l3.331,9.756c2.208-1.193,3.301-3.834,2.46-6.288C84.91,78.829,82.429,77.408,79.956,77.813    z"/>\n' +
          '        <path fill="#231F20" d="M78.303,78.379c-2.206,1.194-3.296,3.836-2.458,6.288c0.84,2.451,3.319,3.873,5.792,3.467L78.303,78.379z"/>\n' +
          '      </g>\n' +
          '      <g>\n' +
          '        <path fill="#231F20" d="M224.384,77.928l3.333,9.755c2.205-1.194,3.299-3.835,2.461-6.288    C229.34,78.944,226.859,77.521,224.384,77.928z"/>\n' +
          '        <path fill="#231F20" d="M222.733,78.491c-2.206,1.194-3.299,3.834-2.459,6.286c0.838,2.454,3.316,3.874,5.79,3.469L222.733,78.491    z"/>\n' +
          '      </g>\n' +
          '      <g>\n' +
          '        <path fill="#231F20" d="M263.49,10.669v2.207h33.271v62.073h-53.961c0.445,0.548,1.088,1.402,1.503,2.207h54.664V10.669H263.49z"/>\n' +
          '        <path fill="#231F20" d="M8.305,12.875h34.202v-2.207H6.097v66.486h55.631c0.35-0.674,0.825-1.452,1.433-2.207H8.305V12.875z"/>\n' +
          '      </g>\n' +
          '      <g>\n' +
          '        <path fill="#231F20" d="M57.807,18.219V9.043h-4.917v9.176h-3.054V6.381h11.021v11.838H57.807z"/>\n' +
          '        <path fill="#231F20" d="M64.316,18.219V6.381h5.929c2.664,0,4.119,1.793,4.119,3.941c0,2.129-1.455,3.922-4.119,3.922H67.37v3.975    H64.316z M71.256,10.322c0-0.817-0.603-1.279-1.418-1.279H67.37v2.539h2.468C70.653,11.583,71.256,11.12,71.256,10.322z"/>\n' +
          '        <path fill="#231F20" d="M75.442,17.526l1.208-2.378c0.408,0.303,0.94,0.586,1.526,0.586c0.765,0,1.1-0.283,1.458-0.887    l-4.278-8.467h3.443l2.556,5.538l2.573-5.538h3.441l-4.806,9.513c-0.748,1.456-1.936,2.539-4.119,2.539    C77.305,18.433,76.17,18.113,75.442,17.526z"/>\n' +
          '        <path fill="#231F20" d="M88.344,18.219l4.844-6.3l-4.597-5.538h3.746l3.264,4.367V6.381h3.053v4.349l3.249-4.349h3.746    l-4.581,5.538l4.847,6.3h-3.744l-3.124-4.454l-0.393,0.497v3.957h-3.053v-3.922l-0.408-0.532l-3.124,4.454H88.344z"/>\n' +
          '        <path fill="#231F20" d="M108.129,18.219V6.381h3.051v6.976l4.794-6.976h3.158v11.838h-3.071v-7.312l-4.986,7.312H108.129z"/>\n' +
          '        <path fill="#231F20" d="M130.559,18.219v-4.756h-4.917v4.756h-3.053V6.381h3.053v4.42h4.917v-4.42h3.051v11.838H130.559z"/>\n' +
          '        <path fill="#231F20" d="M140.121,6.381v3.976h2.876c2.664,0,4.119,1.792,4.119,3.922c0,2.148-1.455,3.94-4.119,3.94h-5.927V6.381    H140.121z M140.121,13.02v2.538h2.468c0.815,0,1.418-0.461,1.418-1.278c0-0.798-0.603-1.26-1.418-1.26H140.121z M147.984,18.219    V6.381h3.053v11.838H147.984z"/>\n' +
          '        <path fill="#231F20" d="M168.335,18.219v-4.756h-4.915v4.756h-3.053V6.381h3.053v4.42h4.915v-4.42h3.056v11.838H168.335z"/>\n' +
          '        <path fill="#231F20" d="M182.886,18.219l-0.585-1.702h-4.666l-0.588,1.702h-3.458l4.453-11.838h3.834l4.474,11.838H182.886z     M179.958,9.4l-1.508,4.454h3.019L179.958,9.4z"/>\n' +
          '        <path fill="#231F20" d="M193.637,16.569l1.545-2.077c0.851,0.835,2.396,1.242,3.427,1.242c1.4,0,2.163-0.496,2.163-1.153    c0-0.674-0.586-0.994-2.288-0.994h-2.413v-2.68h2.413c1.261,0,2.094-0.302,2.094-0.922c0-0.746-0.938-1.083-2.164-1.083    c-1.085,0-2.308,0.391-3.144,1.136l-1.473-1.917c0.992-1.118,2.751-1.916,4.935-1.916c3.016,0,4.898,1.295,4.898,3.247    c0,1.384-1.188,2.432-2.591,2.662c1.258,0.124,2.786,1.101,2.786,2.804c0,2.076-2.148,3.515-5.111,3.515    C196.458,18.433,194.56,17.634,193.637,16.569z"/>\n' +
          '        <path fill="#231F20" d="M214.86,18.219l-0.585-1.702h-4.666l-0.588,1.702h-3.459l4.454-11.838h3.834l4.474,11.838H214.86z     M211.932,9.4l-1.505,4.454h3.017L211.932,9.4z"/>\n' +
          '        <path fill="#231F20" d="M227.478,18.219l-3.106-4.454l-0.798,0.993v3.461h-3.054V6.381h3.054v4.864l3.639-4.864h3.761    l-4.596,5.538l4.847,6.3H227.478z"/>\n' +
          '        <path fill="#231F20" d="M241.496,18.219l-0.586-1.702h-4.668l-0.586,1.702h-3.46l4.453-11.838h3.837l4.469,11.838H241.496z     M238.564,9.4l-1.508,4.454h3.02L238.564,9.4z"/>\n' +
          '        <path fill="#231F20" d="M246.302,16.569l1.547-2.077c0.85,0.835,2.396,1.242,3.425,1.242c1.4,0,2.163-0.496,2.163-1.153    c0-0.674-0.584-0.994-2.29-0.994h-2.413v-2.68h2.413c1.26,0,2.096-0.302,2.096-0.922c0-0.746-0.94-1.083-2.165-1.083    c-1.081,0-2.307,0.391-3.143,1.136l-1.472-1.917c0.995-1.118,2.751-1.916,4.931-1.916c3.019,0,4.899,1.295,4.899,3.247    c0,1.384-1.188,2.432-2.588,2.662c1.258,0.124,2.785,1.101,2.785,2.804c0,2.076-2.147,3.515-5.111,3.515    C249.126,18.433,247.228,17.634,246.302,16.569z"/>\n' +
          '      </g>\n' +
          '    </svg>'
      },
      {
        text: ['Прием заказов и отгрузка продукции осуществляются в \n',
          'центральном офисе по адресу:\n',
          'Адрес \n',
          'Тел/факс 8 (888) 88-88\n',
          'mail@mail.ru\n',
          'wollter.ru'],
        alignment: 'left',
        fontSize: 8,
        bold: true,
        margin: [300, -120, 0, 20]
      },
      {
        text: title,
        alignment: 'center',
        fontSize: 20,
        bold: true,
        margin: [0, -15, 0, 20]
      },
      {
        image: scheme,
        height: 380,
        width: 520,
        alignment: 'center'
      },
      {
        table: {
          headerRows: 0,
          widths: [250, 250],
          body: TotalTable
        }
      }
    ],
    defaultStyle: {
      fontSize: 12
    }
  }
}

/**
 * @param {Node} scheme to resize
 * @param {Node} schemeToPrint image to print
 * @param {string} watermark base64Url
 * @param {Object} total array of table
 * @param {String} title title of scheme
 */
export async function ConvertToPDF (scheme, schemeToPrint, watermark, total, title) {
  let schemaImg = null
  let result = []
  scheme.style.width = '768px'
  try {
    await html2canvas(schemeToPrint, { backgroundColor: null, windowWidth: 1023, scale: 2 }).then(canvas => {
      schemaImg = canvas.toDataURL()
      result = pdfMake.createPdf(PreparePDFContent(schemaImg, watermark, total, title))
      return result
    })
  } catch (error) {
    result = null
    return result
  }
  scheme.style.width = 'auto'
  return result
}
