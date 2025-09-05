const loadLessons = () => {
    fetch('https://openapi.programming-hero.com/api/levels/all')
        .then(res => res.json())
        .then(lesson => displayLessons(lesson.data))
}
const loadLevelWord = (id) => {

    const url = `https://openapi.programming-hero.com/api/level/${id}`
    fetch(url)
        .then(res => res.json())
        .then(words => {
            const clickBtn = document.getElementById(`level-${id}`)
            removeClass()
            clickBtn.classList.add('active')
            displyLevelWord(words.data)
        })
}
const removeClass = () => {

    const btns = document.querySelectorAll('.lvl-btn')
    btns.forEach(btn => {
        btn.classList.remove('active')
    })
}
const displyLevelWord = (words) => {

    const wordContainer = document.getElementById('word-container')
    wordContainer.innerHTML = ''
    if (words.length === 0) {
        wordContainer.innerHTML = `<div class="text-center col-span-full ">
                <img class="mx-auto" src="assets/alert-error.png" alt="">
                <p class="text-gray-500">এই Lesson এ এখনো কোন Vocabulary যুক্ত করা হয়নি।</p>
                <h1 class="font-bangla text-3xl font-semibold mt-3">নেক্সট Lesson এ যান।</h1>
            </div>`
        return;
    }

    words.forEach(word => {

        const wordDiv = document.createElement('div')
        wordDiv.classList.add("bg-white", "p-5", "rounded-lg", "shadow-lg", "flex", "items-center", "flex-col")
        wordDiv.innerHTML = `
                <h1 class='text-2xl font-bold my-6'>${word.word ? word.word : 'No Word Found'}</h1>
                <p class =' text-lg mb-5'>Meaning /Pronounciation</p>
                <p class='text-2xl text-[#18181B] font-bangla font-semibold'>${word.meaning ? word.meaning : 'মানে পাওয়া যায় নি'}/${word.pronunciation ? word.pronunciation : 'উচ্চারণ পাওয়া যায় নি'}</p>
                <div class='flex justify-between mt-5 w-full'>
                <div onclick="my_modal_5.showModal()" class="bg-[#1a91ff1a] p-2 text-center rounded-lg cursor-pointer hover:bg-[#1a91ffcc]">
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
                            <button onclick="loadLevelWord('${value.level_no}')" id="level-${value.level_no}" class="btn btn-outline btn-primary lvl-btn">
                            <i class="fa-solid fa-book-open"></i>
                                Lesson -${value.level_no}
                            </button>
        `
        levelContainer.appendChild(btnDiv)
    })


}

loadLessons()