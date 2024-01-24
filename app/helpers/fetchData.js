
export default async function FetchData(URI, options) {
    const reqHeader = options ? options : {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            "Authorization": "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"
        }
    };
    const response = await fetch(URI, reqHeader);
    return response.json();
}