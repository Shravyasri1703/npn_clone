const BASE_URL = 'https://registry.npmjs.org/'

export const searchPackages = async (query, size = 20) => {
    const response = await fetch(`https://registry.npmjs.org/-/v1/search?text=${query}&size=${size}`)
    const data = await response.json()
    return data.objects
}

export const getPackageDetail = async (packageName) => {
    const response = await fetch(`${BASE_URL}${packageName}`)
    const data = await response.json()
    return data
}

export const getPackageVersionDetail = async (packageName, version) => {
    const response = await fetch(`${BASE_URL}${packageName}/${version}`)
    const data = await response.json()
    return data 
}