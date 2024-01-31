
export default async function FetchData(URI, options) {
    const reqHeader = options ? options : {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': process.env.AUTH_TOKEN
        }
    };
    const response = await fetch(URI, reqHeader);
    return response.json();
}