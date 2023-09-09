

async function fetchProfileData() {
    const url ='https://github.com/Rafael7dev/Portfolio-de-Desenvolvedor-JS/blob/hbo/data/profile.json';
    const fetching = await fetch(url)
    return await fetching.json()
}
