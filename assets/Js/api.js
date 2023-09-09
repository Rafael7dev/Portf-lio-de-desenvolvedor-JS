

async function fetchProfileData() {
    const url ='https://raw.githubusercontent.com/Rafael7dev/Portfolio-de-Desenvolvedor-JS/hbo/data/profile.json';
    const fetching = await fetch(url)
    return await fetching.json()
}
