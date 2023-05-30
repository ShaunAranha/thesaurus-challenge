import Input from ".";

import {Dispatch, FC, SetStateAction, useState} from 'react';

type Props = {
    setWord: Dispatch<SetStateAction<string | undefined>>
}

const Word: FC<Props> = ({setWord}) => {
    
    
    return (
        
        <Input placeholder='Enter word' type='text' id='word' onChange={(event) => setWord(event.target.value)}> 

        </Input>
    )
}


export default Word
