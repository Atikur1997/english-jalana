const loadLessons = () => {
    fetch('https://openapi.programming-hero.com/api/levels/all')
        .then(res => res.json())
        .then(lesson => displayLessons(lesson.data))
}
const loadLevelWord = (id) => {

    const url = `https://openapi.programming-hero.com/api/level/${id}`
    fetch(url)
        .then(res => res.json())
        .then(words => displyLevelWord(words.data))
}

const displyLevelWord = (words) => {
    const wordContainer = document.getElementById('word-container')
    wordContainer.innerHTML = ''
    words.forEach(word => {
        const wordDiv = document.createElement('div')
        wordDiv.classList.add("bg-white", "p-5", "rounded-lg", "shadow-lg", "flex", "items-center", "flex-col")
        wordDiv.innerHTML = `
                <h1 class='text-2xl font-bold my-6'>${word.word}</h1>
                <p class =' text-lg mb-5'>Meaning /Pronounciation</p>
                <p class='text-2xl text-[#18181B] font-bangla font-semibold'>${word.meaning}/${word.pronunciation}</p>
                <div class='flex justify-between mt-5 w-full'>
                <div class="bg-[#1a91ff1a] p-2 text-center rounded-lg cursor-pointer hover:bg-[#1a91ffcc]">
                <i class="fa-solid fa-circle-info "></i>
                
                </div>
                <div class="bg-[#1a91ff1a] p-2 text-center rounded-lg cursor-pointer hover:bg-[#1a91ffcc]">
                
                <i class="fa-solid fa-volume-high "></i>
                </div>
                
                </div>
        `
        wordContainer.appendChild(wordDiv)
    })
}

const displayLessons = (lessons) => {
    // 1.getting the container and empty for new data 
    const levelContainer = document.getElementById('level-container')
    levelContainer.innerHTML = ''
    // 2.get every lessons and 
    lessons.forEach((value) => {

        let btnDiv = document.createElement('div')
        btnDiv.innerHTML = `
                            <button onclick="loadLevelWord('${value.level_no}')" class="btn btn-outline btn-primary">
                            <i class="fa-solid fa-book-open"></i>
                                Lesson -${value.level_no}
                            </button>
        `
        levelContainer.appendChild(btnDiv)
    })


}

loadLessons()