
import Header from './components/Header'
import { useEffect, useState } from 'react'
export default function Home() {

    const videos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 11, 212, 3, , 321, 3, 1, 2, 3, 1, 1, 2, 3, 1, 2]
    const [listVideos, SetListVideos] = useState<string[]>([])
    useEffect(() => {
        console.log('loading data')
        console.log(listVideos)
        fetch('http://localhost:3000/api/youtube').then(async (response) => {
            let data = await response.json()
            SetListVideos(data)
        }).catch(err => console.log(err))
    }, [listVideos])

    return (
        <div>
            <Header></Header>
            <div className="container-start">
                {listVideos.map(v =>
                    <div className="video-card">
                        <div className="video-thumb">
                            <a href={`https://www.youtube.com/${v}`}>
                                <div className="time-biding">20:00</div>
                                <img src="https://comofazer.site/wp-content/uploads/2021/02/COMO-JOGAR-LANE-PHASE-CONTRA-VOLIBEAR-Video-1024x576.jpg" alt="" className="image-thumb" />
                            </a>
                        </div>
                        <div className="video-detail">
                            <div><img src="https://yt3.ggpht.com/ytc/AAUvwnhw3VyX4fn24yWHirFxL9HnwBh4TP8uur1pFOEL=s88-c-k-c0x00ffffff-no-rj" alt="" className="profile-pic" /></div>
                            <div className="detail-text">
                                <h3>COMO JOGAR LANE PHASE CONTRA VOLIBEAR [Vídeo]</h3>
                                <h4 style={{ fontWeight: 'initial', fontSize: '14px' }}>Olkaida</h4>
                                <h4 style={{ fontWeight: 'initial', fontSize: '14px' }}>11 mi de visualizações  - há 1 ano</h4>
                            </div>
                        </div>
                    </div>

                )}


            </div>
        </div>
    )
}