document.addEventListener('keydown', (e) => {
    const vertical = e.key === 'ArrowUp' || e.key === 'ArrowDown';
    if (!vertical) {
        const direction = e.key === 'ArrowRight' ? 1 : e.key == 'ArrowLeft' ? -1 : undefined;
        if (direction === undefined) return;
        const list = document.querySelector('.selected').parentElement;
        let loop = false;
        const items = list.querySelectorAll('li');
        items.forEach((x, i) => {
            if (!loop) {
                if (x.classList.contains('selected')) {
                    if (i + direction > items.length - 1) {
                        const nextSelected = document.querySelectorAll('ul')[Number(list.id) + 1];
                        if (nextSelected) {
                            nextSelected.children[0].classList.add('selected');
                            x.classList.remove('selected');
                            loop = true;
                        }
                    } else  if(i + direction < 0) {
                        const nextSelected = document.querySelectorAll('ul')[Number(list.id) -1];
                        if (nextSelected) {
                            nextSelected.children[nextSelected.children.length -1].classList.add('selected');
                            x.classList.remove('selected');
                            loop = true;
                        }
                    } else {
                        const nextSelected = list.children[i + direction];
                        if (nextSelected) {
                            x.classList.remove('selected');
                            nextSelected.classList.add('selected');
                            loop = true;
                        }
                    }
                }
            }
        })
    } else {
        const list = document.querySelector('.selected').parentElement;
        let loop = false;
        if (!loop) {
            list.querySelectorAll('li').forEach((x, i) => {
                if (!loop) {
                    if (x.classList.contains('selected')) {
                        const direction = e.key == "ArrowDown" ? 1 : - 1;
                        const nextSelected = Number(list.id) + direction;
                        if (document.querySelectorAll('ul')[nextSelected]) {
                            x.classList.remove('selected');
                            document.querySelectorAll('ul')[nextSelected].children[i].classList.add('selected');
                        }
                        loop = true;
                    }
                }
            })

        }
    }
})