


export const getSynonyms = async (word: string | undefined) => {
    const url = new URL(`https://api.datamuse.com/words?rel_syn=${word}`)

    const res = await fetch(url)

    if (!res.ok) throw new Error('Api Error')

    const data = await res.json()

    return data 
}