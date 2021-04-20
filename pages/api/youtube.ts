import puppeteer, { Page } from 'puppeteer'
import { NextApiRequest, NextApiResponse } from "next"


export default function (req: NextApiRequest, res: NextApiResponse) {
    try {
        let scrape = async () => {
            const browser = await puppeteer.launch(({
              args: [
                '--no-sandbox',
                '--disable-setuid-sandbox'
              ]
            }))
            const page = await browser.newPage()
            await page.goto('https://www.youtube.com/')
            const result = await page.evaluate(() => {
                const books = []
                document.querySelectorAll('a#thumbnail')
                    .forEach((book) => books.push(book.getAttribute('href')))
                return books
            })
            browser.close()
            return result
        }
        scrape().then((value) => {
            return res.status(200).send(value)
        })
    } catch (err) {
        return res.status(500).send('internal error server')
    }



}

