const puppeteer = require('puppeteer-extra')
const StealthPlugin = require('puppeteer-extra-plugin-stealth')
puppeteer.use(StealthPlugin())
const AdblockerPlugin = require('puppeteer-extra-plugin-adblocker')
puppeteer.use(AdblockerPlugin({ blockTrackers: true }))
const RecaptchaPlugin = require('puppeteer-extra-plugin-recaptcha')
puppeteer.use(
  RecaptchaPlugin({
    provider: {
      id: '2captcha',
      token: 'XXXXXXX' // REPLACE THIS WITH YOUR OWN 2CAPTCHA API KEY ⚡
    },
    visualFeedback: true // colorize reCAPTCHAs (violet = detected, green = solved)
  })
)

const foja = '63132'
const numero = '91760'
const ano = "2023"

puppeteer.launch({ headless: false }).then(async browser => {
    const page = await browser.newPage()
    await page.setViewport({ width: 1920, height: 1080 })

    await page.goto('https://conservador.cl/portal/')
    await page.waitForSelector("#wrap > div:nth-child(3) > div:nth-child(1) > div > div")
    await page.click("#botonLogin")
    await page.waitForTimeout(1000)
    await page.type('#username', 'gigliscarletya@hotmail.com')
    await page.type('#password', 'lukitas21')
    await page.click("#entrar")

    await page.waitForTimeout(2000)
    await page.click("#util > a")
    await page.click("#indice_prop > a")
    await page.waitForSelector('#foja1')

    //foja
    await page.type("#foja1", foja)
    //numero
    await page.type("#numero1", numero)
    //año
    await page.type("#ano1", ano)
    
    //await browser.close()
})