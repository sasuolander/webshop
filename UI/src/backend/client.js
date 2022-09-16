

export default async function httpGet(url) {
    function g(param) {
        return $.get(param);
    }
    return g(url)
}
