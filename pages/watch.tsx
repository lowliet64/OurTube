import { useState, useEffect } from 'react'

import Header from './components/Header'

export default function Watch(props) {

    const [videoId, setVideoId] = useState<any>()
    const [recomendados, setRecomendados] = useState<any[]>([])
    let custom = [1, 2, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4]
    useEffect(() => {
        setVideoId(window.location.search.slice(3))
        fetch('https://ourtubejs.herokuapp.com/api/youtube').then(async (response) => {
            console.log(response)
            let data = await response.json()
            console.log(data)
            setRecomendados(data)
        }).catch(err => console.log(err))
    }, [])

    return (
        <div>
            <Header></Header>
            <div style={{ padding: '20px', display: "flex", flexWrap: 'wrap' }}>
                <object data={`https://www.youtube.com/embed/${videoId}`}
                    id="video-component" ></object>
                <div style={{ marginLeft: '40px' }}>
                    <div>
                        <h3>
                            Recomendacoes
                            </h3>
                    </div>
                    <div>
                        {recomendados?.map(r =>
                            <div style={{ marginTop: '4px', height: '200px', width: '500px', backgroundColor: 'blue' }}>
                                <div>
                                    <a href={`${r.href}`}>
                                        <img style={{ height: "200px", width: "250px" }} src={`${r.img}`} alt="" />

                                        <small>teste</small>
                                    </a>

                                </div>


                            </div>
                        )}
                    </div>



                </div>

            </div>
        </div>
    )
}