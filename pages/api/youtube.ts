import puppeteer, { Page } from 'puppeteer'
import { NextApiRequest, NextApiResponse } from "next"


export default function (req: NextApiRequest, res: NextApiResponse) {
    try {
        let scrape = async () => {
            const browser = await puppeteer.launch(({
                headless: true,
                args: [
                    '--no-sandbox',
                ]
            }))
            const page = await browser.newPage()
            await page.goto('https://www.youtube.com/')
            const result = await page.evaluate(() => {
                const books = []
                document.querySelectorAll('div#dismissible.style-scope.ytd-rich-grid-media')
                    .forEach((book: Element) => {
                        console.log(book)
                        //let href = book.childNodes[0].childNodes[1].childNodes[0].childNodes[1].getAttribute('href')

                        let video = {
                            img: book.children[0].children[0].children[0].children[0].getAttribute('src'),
                            title: book.children[1].children[1].children[0].children[1].innerText,
                            href: book.children[0].children[0].getAttribute('href')
                        }
                        return books.push(video)
                    })
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

