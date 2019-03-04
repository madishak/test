class Test {
    constructor(numberString) {
        this.arr = numberString.split("").map(element => Number(element));
        this.changeColumns = {};


    }

    drawArray() {

        let container = document.createElement('div');
        container.className = "line__inner";
        document.body.appendChild(container);
        for (let i = 0; i < this.arr.length; i++) {

            let newDiv = document.createElement('div');
            newDiv.innerHTML = this.arr[i];
            newDiv.id = this.arr[i];
            newDiv.className = "line";
            container.appendChild(newDiv);
            newDiv.style.height = 15 * this.arr[i]+'px';
            newDiv.style.display = 'block';
        }
        alert(this.arr);
        // let id1 = this.arr[0];
        // let id3 = this.arr[1];
        // alert(id1);
        // alert(id3);
        // let first = document.getElementById(id1).offsetWidth;
        // let second = document.getElementById(id3).offsetWidth;
        // alert(first);
        // alert(second);
        // let first1 = document.getElementById(id1);
        // let second2 = document.getElementById(id3);
        //
        // second2.style.right = first + 20 + 'px';
        // first1.style.right = -second - 20 + 'px';





        return this.arr;

    }


    increaseSort() {

        let pointer = 1;
        while (pointer) {
            pointer = 0;

            for (let i = 0; i < this.arr.length; i++) {

                if (this.arr[i] > this.arr[i + 1]) {
                    [this.arr[i], this.arr[i + 1]] = [this.arr[i + 1], this.arr[i]];

                    // let temp = arr[i];
                    // arr[i] = arr[i + 1];
                    // arr[i + 1] = temp;
                    // this.listOfIndexes = [i, i + 1, ...this.listOfIndexes];
                    this.changeColumns.first = this.arr[i];
                    this.changeColumns.second = this.arr[i+1];
                    alert(this.changeColumns.first);
                    alert(this.changeColumns.second);
                    pointer = 1;
                    return this.arr;
                    //
                    // alert(this.arr);
                    // alert(l);
                }
            }


        }

    }






    anim() {

        // let id1 = this.changeColumns.first;
        // let id3 = this.changeColumns.second;
        alert(this.changeColumns.first);
        alert(this.changeColumns.first);
        let first = document.getElementById(this.changeColumns.second).offsetWidth;
        let second = document.getElementById(this.changeColumns.first).offsetWidth;
        alert(first);
        alert(second);
        let first1 = document.getElementById(this.changeColumns.second);
        let second2 = document.getElementById(this.changeColumns.first);

        second2.style.right = first + 20 + 'px';
        first1.style.right = -second - 20 + 'px';
    }

    colour() {
        let first = document.getElementById('6');
        let second = document.getElementById('9');
        first.style.backgroundColor = 'red';
        second.style.backgroundColor = 'black';
    }


}



let inputValue = document.getElementById('input').value;

let t = new Test(inputValue);


let indexes = document.getElementById('indexes');
indexes.addEventListener('click', () => t.drawArray());

let inc = document.getElementById('inc');
inc.addEventListener('click', () => t.increaseSort());


let ob = document.getElementById('dec');
ob.addEventListener('click', () => t.anim());
