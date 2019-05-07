export class move {
    constructor(poem) {
        this.app = document.getElementById("app");
        this.render(poem);
        this.show(poem);
    }
    render(poem) {
        poem.map(item => {
            this.app.innerHTML += `<li>${item}</li>`
        })
    }

    show(poem) {
        this.li = [...this.app.querySelectorAll("li")];
        let moves = this.li.map(item => {
            return {
                el: item,
                promise: new Promise((resolve) => {
                    item.addEventListener("webkitAnimationEnd", () => {
                        resolve();
                    })

                })
            }
        })
        this.move(moves);
    }
    async move(moves) {
        for (let val of moves) {
            val.el.classList.add("active")
            await val.promise
        }
    }
}