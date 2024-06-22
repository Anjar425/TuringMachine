var array1 = [];
var array2 = [];
var array3 = [];
var array4 = [];
var array5 = [];

var index = [2, 2, 2, 2, 2]; // Array untuk menyimpan indeks untuk array1 hingga array5

var state = 0;

var box = [];

var intervalLoop;

function updateBox() {
    box = [
        document.getElementById(`array1-charBox-${index[0]}`).textContent,
        document.getElementById(`array2-charBox-${index[1]}`).textContent,
        document.getElementById(`array3-charBox-${index[2]}`).textContent,
        document.getElementById(`array4-charBox-${index[3]}`).textContent,
        document.getElementById(`array5-charBox-${index[4]}`).textContent
    ];
}

function validateInput(input) {
    // Syarat 1: Hanya mengandung huruf "X", "0", dan "1"
    if (!/^[X01]+$/.test(input)) {
        return false;
    }

    // Syarat 2: Huruf X tepat ada 3 tidak kurang tidak lebih
    const countX = (input.match(/X/g) || []).length;
    if (countX !== 3) {
        return false;
    }

    // Syarat 3, 4, 5, 6: Validasi angka 1 dan 0
    for (let i = 0; i < input.length; i++) {
        if (input[i] === '1' && input[i + 1] !== '0') {
            return false
        } else if (input[i] === '1' && input[i - 1] === '0') {
            return false
        }
    }

    return true;
}


function processInput() {
    // Mengambil nilai dari input
    const inputText = document.getElementById('inputText').value;

    console.log(validateInput(inputText));

    // Membagi nilai input menjadi array karakter
    array1 = ['B', 'B', ...Array.from(inputText), 'B', 'B'];

    // Mengisi array2 hingga array5 dengan 'B' sesuai panjang array1
    const length = array1.length;
    array2 = Array(length).fill('B');
    array3 = Array(length).fill('B');
    array4 = Array(length).fill('B');
    array5 = Array(length).fill('B');

    state = 0;

    // Mengambil elemen div output untuk menampilkan hasil
    const outputDiv = document.getElementById('output');

    // Membersihkan konten sebelumnya di outputDiv
    outputDiv.innerHTML = '';

    // Fungsi untuk menampilkan array dalam kotak
    function displayArray(array, arrayLabel, title, arrayIndex) {
        // Membuat div pembungkus untuk array
        const arrayWrapper = document.createElement('div');
        arrayWrapper.classList.add('array-wrapper', 'flex', 'flex-col', 'justify-save-center', 'w-5/6');
        arrayWrapper.id = `${arrayLabel}-wrapper`; // Menambahkan id unik untuk pembungkus

        // Membuat label untuk array
        const label = document.createElement('div');
        label.classList.add('array-label', 'text-white', 'text-lg', 'font-semibold', 'self-start');
        label.textContent = title;
        arrayWrapper.appendChild(label); // Menambahkan label ke dalam pembungkus

        // Membuat div pembungkus untuk charBox
        const charBoxWrapper = document.createElement('div');
        charBoxWrapper.id = 'char-box-wrapper';
        charBoxWrapper.classList.add('char-box-wrapper', 'flex', 'flex-row', 'gap-4', 'overflow-x-scroll', 'overscroll-x-auto', 'self-center', 'w-full', 'h-24', 'items-center', 'justify-save-center', 'no-scrollbar');
        arrayWrapper.appendChild(charBoxWrapper); // Menambahkan charBoxWrapper ke arrayWrapper

        // Menampilkan kotak untuk setiap karakter dalam array
        array.forEach((char, idx) => {
            const charBox = document.createElement('div');
            charBox.classList.add('char-box', 'w-12', 'h-12', 'bg-gray-800/95', 'flex-shrink-0', 'border-gray-600/70', 'border-[1px]', 'rounded-md', 'text-center', 'text-white', 'flex', 'justify-save-center', 'items-center', 'transition', 'duration-500', 'ease-in-out');
            charBox.id = `${arrayLabel}-charBox-${idx}`; // Menambahkan id unik
            charBox.textContent = char;

            // Periksa apakah id saat ini sama dengan variabel index
            if (idx === index[arrayIndex]) {
                charBox.classList.add('scale-[1.4]'); // Menambahkan kelas scale-[1.4]
            }

            charBoxWrapper.appendChild(charBox); // Menambahkan charBox ke dalam charBoxWrapper
        });

        outputDiv.appendChild(arrayWrapper); // Menambahkan arrayWrapper ke outputDiv
    }

    // Menampilkan semua array
    displayArray(array1, 'array1', 'Input', 0);
    displayArray(array2, 'array2', 'Logarithms 1', 1);
    displayArray(array3, 'array3', 'Logarithms 2', 2);
    displayArray(array4, 'array4', 'Multiplication', 3);
    displayArray(array5, 'array5', 'Result', 4);

    // Membuat div utama dengan class 'flex flex-row gap-4'
    const divButton = document.createElement('div');
    divButton.classList.add('flex', 'flex-row', 'gap-4');

    // Membuat button Counter
    const buttonCounter = document.createElement('button');
    buttonCounter.classList.add('bg-green-600', 'rounded-md', 'w-24', 'py-2', 'text-white');
    buttonCounter.textContent = 'Counter';
    buttonCounter.addEventListener('click', startUp); // Menambahkan event listener untuk memanggil fungsi startUp()

    // Membuat button Loop
    const buttonLoop = document.createElement('button');
    buttonLoop.classList.add('bg-green-600', 'rounded-md', 'w-24', 'py-2', 'text-white');
    buttonLoop.textContent = 'Loop';
    buttonLoop.addEventListener('click', loopStartUp); // Menambahkan event listener untuk memanggil fungsi loopStartUp()

    // Menambahkan button Counter dan Loop ke dalam div utama
    divButton.appendChild(buttonCounter);
    divButton.appendChild(buttonLoop);

    outputDiv.appendChild(divButton);

    updateBox();
    horizontalMove();
}

function counter(change, direction, arrayIndex) {
    // Update current index character
    if (arrayIndex === 0) {
        array1[index[arrayIndex]] = change;
    } else if (arrayIndex === 1) {
        array2[index[arrayIndex]] = change;
    } else if (arrayIndex === 2) {
        array3[index[arrayIndex]] = change;
    } else if (arrayIndex === 3) {
        array4[index[arrayIndex]] = change;
    } else if (arrayIndex === 4) {
        array5[index[arrayIndex]] = change;
    }

    document.getElementById(`array${arrayIndex + 1}-charBox-${index[arrayIndex]}`).textContent = change;
    document.getElementById(`array${arrayIndex + 1}-charBox-${index[arrayIndex]}`).classList.remove('scale-[1.4]');

    // Move index
    index[arrayIndex] += direction;

    // Ensure index is within bounds
    if (index[arrayIndex] < 0) index[arrayIndex] = 0;
    if (index[arrayIndex] >= array1.length) index[arrayIndex] = array1.length - 1;

    // Highlight new index character
    document.getElementById(`array${arrayIndex + 1}-charBox-${index[arrayIndex]}`).classList.add('scale-[1.4]');
}


// Horizontal Move
function horizontalMove() {
    let mouseDown = false;
    let startX, scrollLeft;
    const slider = document.querySelectorAll(".char-box-wrapper");

    slider.forEach((item) => {
        const startDragging = (e) => {
            mouseDown = true;
            startX = e.pageX - item.offsetLeft;
            scrollLeft = item.scrollLeft;
        };

        const stopDragging = (e) => {
            mouseDown = false;
        };

        const move = (e) => {
            e.preventDefault();
            if (!mouseDown) {
                return;
            }
            const x = e.pageX - item.offsetLeft;
            const scroll = x - startX;
            item.scrollLeft = scrollLeft - scroll;
        };

        item.addEventListener("mousemove", move, false);
        item.addEventListener("mousedown", startDragging, false);
        item.addEventListener("mouseup", stopDragging, false);
        item.addEventListener("mouseleave", stopDragging, false);
    });
}

horizontalMove();

function startUp() {
    updateBox();
    horizontalMove();
    switch (state) {
        case 0:
            q0();
            break;
        case 1:
            q1();
            break;
        case 2:
            q2();
            break;
        case 3:
            q3();
            break;
        case 4:
            q4();
            break;
        case 5:
            q5();
            break;
        case 6:
            q6();
            break;
        case 7:
            q7();
            break;
        case 8:
            q8();
            break;
        case 9:
            q9();
            break;
        case 10:
            q10();
            break;
        case 11:
            q11();
            break;
        case 12:
            q12();
            break;
        case 13:
            q13();
            break;
        case 14:
            q14();
            break;
        case 15:
            q15();
            break;
        case 16:
            q16();
            break;
        case 17:
            q17();
            break;
        case 18:
            q18();
            break;
        case 19:
            q19();
            break;
        case 20:
            q20();
            break;
        case 21:
            q21();
            break;
        case 22:
            q22();
            break;
        case 23:
            q23();
            break;
        case 24:
            q24();
            break;
        case 25:
            q25();
            break;
        case 26:
            q26();
            break;
        case 27:
            q27();
            break;
        case 28:
            q28();
            break;
        case 29:
            q29();
            break;
        case 30:
            q30();
            break;
        case 31:
            q31();
            break;
        case 32:
            q32();
            break;
        case 33:
            q33();
            break;
        case 34:
            q34();
            break;
        case 35:
            q35();
            break;
        default:
            break;
    }
}

function loopStartUp() {
    intervalLoop = setInterval(startUp, 500);
    if (state == "finish") {
        clearInterval(intervalLoop)
    }
}

function q0() {
    if (box[0] == "0") {
        counter(0, 1, 0);
    } else if (box[0] == "1") {
        counter(1, 1, 0);
    } else {
        state = 1;
        counter("X", 1, 0);
    }
}

function q1() {
    if (box[0] == "0") {
        counter(0, 1, 0);
        state = 4;
    } else if (box[0] == "X") {
        counter("X", 1, 0);
        state = 2;
    } else if (box[0] == "1") {
        counter("1", 1, 0);
    }
}

function q2() { //finishing
    counter("X", 1, 4);
    state = 3
}

function q3() { //finishing
    counter("X", 1, 4);
    state = 33;
}

function q4() {
    if (box[0] == "0") {
        counter(0, 1, 0);
    } else if (box[0] == "X") {
        counter("X", 1, 0)
        state = 5;
    } else if (box[0] == "B") {
        counter("B", -1, 0)
        state = 7;
    }
}

function q5() {
    if (box[0] == "X") {
        counter("X", 1, 0);
        state = 2;
    } else if (box[0] == "0") {
        counter("0", 1, 0);
        state = 6;
    } else if (box[0] == "B") {
        counter("B", -1, 0);
        state = 2;
    } else if (box[0] == "1") {
        counter("1", 1, 0)
        state = 2;
    }
}

function q6() {
    if (box[0] == "X") {
        counter("X", 1, 0);
        state = 2;
    } else if (box[0] == "0") {
        counter("0", 1, 0);
        state = 4;
    }
}

function q7() {
    if (box[0] == "0") {
        counter("0", -1, 0);
    } else if (box[0] == "X") {
        counter("X", -1, 0);
        state = 8;
    }
}

function q8() {
    if (box[0] == "0") {
        counter("0", -1, 0);
    } else if (box[0] == "X") {
        counter("X", 1, 0);
        state = 9;
    }
}

function q9() {
    if (box[0] == "0") {
        counter("B", 1, 0);
        state = 10;
    } else if (box[0] == "X") {
        counter("X", -1, 0);
        counter("0", 1, 1);
        state = 16;
    }
}

function q10() {
    if (box[0] == "0") {
        counter("0", 1, 0);
    } else if (box[0] == "X") {
        counter("X", 1, 0);
        state = 11;
    }
}

function q11() {
    if (box[0] == "0") {
        counter("0", 1, 0);
        state = 12;
    } else if (box[0] == "B") {
        counter("B", -1, 0);
        state = 17;
    }
}

function q12() {
    if (box[0] == "0") {
        counter("0", 1, 0);
    } else if (box[0] == "B") {
        counter("B", -1, 0);
        state = 13; // Mengubah state dari 12 menjadi 13
    }
}

function q13() {
    if (box[0] == "0") {
        counter("B", -1, 0);
        state = 14; // Mengubah state dari 13 menjadi 14
    } else if (box[0] == "B") {
        counter("B", 1, 0);
    }
}

function q14() {
    if (box[0] == "0") {
        counter("0", -1, 0);
    } else if (box[0] == "X") {
        counter("X", -1, 0);
        state = 15; // Mengubah state dari 14 menjadi 15
    }
}

function q15() {
    if (box[0] == "0") {
        counter("0", -1, 0);
    } else if (box[0] == "B") {
        counter("B", 1, 0);
        state = 9;
    }
}

function q16() {
    if (box[0] == "B") {
        counter("0", -1, 0);
    } else if (box[0] == "X") {
        counter("X", 1, 0);
        state = 9;
    }
}

function q17() {
    if (box[0] == "X") {
        counter("X", -1, 0);
        counter("X", -1, 1);
        counter("0", 1, 2);
        state = 18; // Mengubah state dari 17 menjadi 18
    }
}

function q18() {
    if ((box[0] == "0" || box[0] == "B") && box[1] == "0") {
        counter("0", -1, 0);
        counter("0", -1, 1);
    } else if (box[0] == "B" && box[1] == "0") {
        counter("0", -1, 0);
    } else if (box[1] == "0") {
        counter("0", -1, 1);
    } else if (box[0] == "X" && box[1] == "B") {
        counter("X", 1, 0);
        counter("B", 1, 1);
        state = 19; // Mengubah state dari 18 menjadi 19
    }
}

function q19() {
    if (box[0] == "0" && box[1] == "0") {
        counter("B", 1, 0);
        counter("B", 1, 1);
    } else if (box[0] == "X" && box[1] == "0") {
        counter("0", 1, 1);
        state = 20;
    } else if (box[0] == "0" && box[1] == "X") {
        counter("X", 1, 1);
        state = 24;
    } else if (box[0] == "X" && box[1] == "X") {
        counter("X", 1, 1);
        state = 21;
    }
}

function q20() {
    if (box[0] == "X" && box[1] == "0") {
        counter("0", 1, 1);
    } else if (box[0] == "X" && box[1] == "X") {
        counter("X", 1, 1);
        state = 21;
    }
}

function q21() {
    if (box[0] == "X" && box[1] == "B") {
        counter("0", -1, 1);
        state = 22;
    } else if (box[0] == "X" && box[1] == "0") {
        counter("0", 1, 1);
    }
}

function q22() {
    if (box[0] == "X" && box[1] == "X") {
        counter("X", -1, 0);
        counter("X", -1, 1);
        state = 23;
    } else if (box[0] == "X" && box[1] == "0") {
        counter("0", -1, 1);
    }
    // else if (box[0] == "B" && box[1] == "0") {
    //     counter("0", -1, 0);
    //     counter("0", -1, 1);
    // } else if (box[0] == "X" && box[1] == "B") {
    //     counter("X", 1, 0);
    //     counter("B", 1, 1);
    //     state = 19;
    // } else if (box[0] == "B" && box[1] == "B") {
    //     counter("B", 1, 0);
    //     counter("B", 1, 1);
    //     state = 19;
    // }
}

function q23() {
    if (box[0] == "B") {
        counter("0", -1, 0);
    } else if (box[1] == "0") {
        counter("0", -1, 1);
    } else if (box[0] == "X" && box[1] == "B") {
        counter("X", 1, 0);
        counter("B", 1, 1);
        state = 19;
    }
}

function q24() {
    if (box[1] == "0") {
        counter("0", 1, 1);
        state = 25;
    } else if (box[2] == "B") {
        counter("B", -1, 2);
        counter("0", -1, 0);
        state = 27;
    }
}

function q25() {
    if (box[1] == "0") {
        counter("0", 1, 1);
    } else if (box[1] == "B") {
        counter("X", -1, 1);
        counter("0", 1, 2);
        state = 26;
    }
}

function q26() {
    if (box[0] == "0" && box[1] == "0") {
        counter("0", -1, 0);
        counter("0", -1, 1);
    } else if (box[0] == "B") {
        counter("0", -1, 0);
    } else if (box[1] == "0") {
        counter("0", -1, 1);
    } else if (box[0] == "X" && box[1] == "X") {
        counter("X", 1, 0);
        counter("X", 1, 1);
        state = 19;
    }
}

function q27() {
    if (box[0] == "B") {
        counter("0", -1, 0);
    } else if (box[2] == "0") {
        counter("0", -1, 2);
    } else if (box[0] == "X" && box[2] == "B") {
        counter("B", 1, 2);
        counter("X", -1, 0);
        state = 28;
    }
}

function q28() {
    if (box[0] == "0") {
        counter("0", -1, 0);
    } else if (box[0] == "1") {
        counter("1", -1, 0);
    } else if (box[0] == "X") {
        counter("X", -1, 0);
    } else if (box[0] == "B") {
        counter("B", 1, 0);
        state = 29;
    }
}

function q29() {
    if (box[0] == "1" && box[2] == "0") {
        counter("1", 1, 0);
        counter("1", 1, 3);
    } else if (box[0] == "0" && box[2] == "0") {
        counter("0", 1, 2);
        counter("0", 1, 3);
    } else if (box[0] == "0" && box[2] == "B") {
        counter("B", 0, 0);
        counter("B", -1, 2);
    } else if (box[0] == "B" && box[2] == "0") {
        counter("0", -1, 2);
    } else if (box[0] == "B" && box[2] == "B") {
        counter("B", 1, 0);
        counter("B", 1, 2);
    } else if (box[0] == "X" && box[2] == "0") {
        counter("B", -1, 3);
        state = 30;
    }
}

function q30() {
    if (box[3] == "0") {
        counter("0", -1, 3);
    } else if (box[0] == "1") {
        counter("1", -1, 0);
    } else if (box[3] == "1") {
        counter("1", -1, 3);
    } else if (box[0] == "X" && box[3] == "B") {
        counter("X", 1, 0);
        counter("B", 1, 3);
        state = 31;
    }
}

function q31() {
    if (box[0] == "1" && box[3] == "0") {
        counter("1", 1, 0);
        counter("1", 1, 4);
    } else if (box[0] == "0" && box[3] == "1") {
        counter("1", 1, 3);
        counter("1", 1, 4);
    } else if (box[0] == "1" && box[3] == "1") {
        counter("1", 1, 0);
        counter("1", 1, 3);
    } else if (box[0] == "0" && box[3] == "0") {
        counter("B", 1, 0);
        counter("B", 1, 3);
    } else if (box[0] == "X" && box[3] == "0") {
        counter("X", -1, 0);
        counter("0", 1, 4);
        state = 32;
    } else if (box[0] == "X" && box[3] == "B") {
        counter("0", 1, 4);
        state = 33;
    } else if ((box[0] == "0" || box[0] == "1") && box[3] == "B") {
        state = 33;
    }
}

function q32() {
    if (box[0] == "B" && box[3] == "0") {
        counter("0", -1, 0);
    } else if (box[0] == "1" && box[3] == "0") {
        counter("1", 1, 0);
        state = 31;
    } else if (box[0] == "X" && box[3] == "0") {
        counter("X", 1, 0);
        state = 31;
    }
}

function q33() {
    state = "finish"
}