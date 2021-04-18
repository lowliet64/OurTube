
import { useEffect } from 'react'
import Header from './components/Header'


export default function Search() {
    const results = [1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 7, 6, 5, , 1, 2, 3, 1, 2, 3]

    return (
        <div>
            <Header></Header>
            <section style={{ display: 'flex', flexDirection: "column" }}>
                {results.map(e =>
                    <div style={{ backgroundColor: "blue", height: "100px", width: "200px", margin: "2px" }}>
                        teste
                    </div>
                )}

            </section>
        </div>
    )

}