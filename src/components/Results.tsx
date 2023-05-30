import '../Results.css'
import type {FC} from 'react'

type Props = {
    words: string[]
}


const Results: FC<Props> = ({words}) => {
    return (
        <div>
            <ul>
            {
                words.map((word)=> (
                    <li key={word}>{word}</li>
                ))
            }
            </ul>

        </div>

    )
}

export default Results