const fetcher = async (url: string, body: object) => {
    const result = await fetch(`http://localhost:4000/api/posts${url}`, body);
    const resultJSON = await result.json();
    return resultJSON;
}

export default fetcher;
