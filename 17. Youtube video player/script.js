// AIzaSyAchJEENqG7JE50qRBh8BmvhmHNAfPoPkg
const searchVideoInput = document.getElementById('searchVideoInput')
const searchVideoButton = document.getElementById('searchVideoBtn')
const mainVideoSection = document.getElementById('mainVideoSection')
const allVideosSection = document.getElementById('allVideosSection')
const mainVideoSkeleton = document.getElementById('mainVideoSkeleton')
const allVideosSkeleton = document.getElementById('allVideosSkeleton')

searchVideoButton.addEventListener('click', () => {
    fetchVideos()
})

async function fetchVideos() {
    try {
        mainVideoSection.innerHTML = ''
        allVideosSection.innerHTML = ''
        mainVideoSection.appendChild(mainVideoSkeleton)
        allVideosSection.appendChild(allVideosSkeleton)
        mainVideoSkeleton.classList.remove('hidden')
        allVideosSkeleton.classList.remove('hidden')

        const searchPhrase = searchVideoInput.value
        const response = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyB5nX8yZf5VQi0g7V7FWwpJ6YSrOTK8b10&q=${searchPhrase}&type=video`)
        const videos = await response.json()
        console.log(videos)

        if(videos?.items?.[0]) {
            const titleH1 = `<h1 class="main-video-title">${videos.items[0].snippet.title}</h1>`
            const iframe = `<iframe width="560" height="315" src="https://www.youtube.com/embed/${videos.items[0].id.videoId}" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>`
            mainVideoSection.innerHTML = titleH1 + iframe
        }

        if(videos?.items?.length > 0) {
            allVideosSection.innerHTML = ''
            videos.items.forEach(video => {
                const img = document.createElement('img')
                img.src = video.snippet.thumbnails.high.url
                img.classList.add('videoImg')
                
                img.addEventListener('click', () => {
                    const titleH1 = `<h1 class="main-video-title">${video.snippet.title}</h1>`
                    const iframe = `<iframe width="560" height="315" src="https://www.youtube.com/embed/${video.id.videoId}" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>`
                    mainVideoSection.innerHTML = titleH1 + iframe
                })

                allVideosSection.appendChild(img)
            })
        }
    }
    catch(err) {
        mainVideoSection.innerHTML = ''
        allVideosSection.innerHTML = ''
        alert('Error when searching video!')
    }
    finally {
        searchVideoInput.value = ''
    }
}