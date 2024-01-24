
export default async function FetchData(URI, options) {
    const reqHeader = options ? options : {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    };
    const response = await fetch(URI, reqHeader);
    return response.json();
}