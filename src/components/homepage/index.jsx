import { useState } from 'react'
import { Input, Row, Col, Image } from 'antd'
import Title from 'antd/es/typography/Title'
import { getGifs } from '../../services'
import { useDebounce } from '../../utils/useDebounce'

export const Homepage = () => {
    const [searchValue, setSearchValue] = useState('')
    const [gifs, setGifs] = useState([])
    const [visible, setVisible] = useState(false)

    const handleUpdateSearchValue = async (value) => {
        setSearchValue(value)
        const gifs = await getGifs(value, 12)
        setGifs(gifs)
    }

    const [handleAutoSave] = useDebounce((event) => {
        handleUpdateSearchValue(event)
    }, 300)

    return (
        <>
            <Row style={{ display: 'flex' }}>
                <Col xs={{ span: 22, offset: 1 }} sm={{ span: 10, offset: 1 }} style={{
                    textAlign: 'center'
                }}>
                    <Title level={2}>
                        Giphy Searcher
                    </Title>
                </Col>
                <Col xs={{ span: 22, offset: 1 }} sm={{ span: 10, offset: 1 }} style={{
                    alignSelf: 'end'
                }}>
                    <Input
                        placeholder="Search GIFS"
                        value={searchValue}
                        onChange={(event) => handleAutoSave(event.target.value)}
                        style={{ marginBottom: '1rem' }}
                    />
                </Col>
            </Row>
            <Row gutter={[16, 32]}>
                {gifs.map((gif) =>
                    <Col
                        key={gif.id}
                        xs={{ span: 22, offset: 1 }}
                        sm={{ span: 10, offset: 1 }}
                        lg={{ span: 6, offset: 1 }}
                        style={{ alignSelf: 'center' }}
                    >
                        <Image
                            preview={{ visible: false }}
                            width='100%'
                            src={gif.images.preview_gif.url}
                            style={{ borderRadius: '5px', boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px' }}
                            onClick={() => setVisible(true)}
                        />
                    </Col>)
                }
                <div style={{ display: 'none' }}>
                    <Image.PreviewGroup preview={{ visible, onVisibleChange: (vis) => setVisible(vis) }}>
                        {gifs.map((gif) =>
                            <Image src={gif.images.original.url} />
                        )}
                    </Image.PreviewGroup>
                </div>
            </Row>
        </>
    )
}
