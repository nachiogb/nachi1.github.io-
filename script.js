/* =========================
   PIANO NOTES
========================= */

const notes = [
    "C",
    "C♯ / D♭",
    "D",
    "D♯ / E♭",
    "E",
    "F",
    "F♯ / G♭",
    "G",
    "G♯ / A♭",
    "A",
    "A♯ / B♭",
    "B"
];


/* =========================
   CREATE PIANO KEYBOARD
========================= */

const keyboard =
    document.getElementById(
        "keyboardUI"
    );


/*
    White keys in one octave
*/

const whiteNotes = [
    "C",
    "D",
    "E",
    "F",
    "G",
    "A",
    "B",
    "C"
];


whiteNotes.forEach(
    (note, index) => {

        const key =
            document.createElement(
                "button"
            );

        key.className =
            "key white-key";

        key.textContent =
            note;

        key.setAttribute(
            "aria-label",
            `Piano key ${note}`
        );

        key.addEventListener(
            "click",
            () => {

                showKeyInfo(note);

            }
        );

        keyboard.appendChild(key);
    }
);


/*
    Black keys
*/

const blackKeys = [

    {
        name: "C♯ / D♭",
        position: 0
    },

    {
        name: "D♯ / E♭",
        position: 1
    },

    {
        name: "F♯ / G♭",
        position: 3
    },

    {
        name: "G♯ / A♭",
        position: 4
    },

    {
        name: "A♯ / B♭",
        position: 5
    }

];


blackKeys.forEach(
    (item) => {

        const key =
            document.createElement(
                "button"
            );

        key.className =
            "key black-key";

        key.textContent =
            item.name;

        /*
            Position the black key
            between the white keys.
        */

        key.style.left =
            `${(item.position + 1) * 12.5 - 3.5}%`;

        key.addEventListener(
            "click",
            () => {

                showKeyInfo(
                    item.name
                );

            }
        );

        keyboard.appendChild(key);

    }
);


/* =========================
   KEY INFORMATION
========================= */

function showKeyInfo(note) {

    const keyInfo =
        document.getElementById(
            "keyInfo"
        );

    keyInfo.textContent =
        `You selected ${note}. This is a pitch name used to identify a piano key.`;
}


/* =========================
   DISPLAY THE 12 NOTES
========================= */

const notesUI =
    document.getElementById(
        "notesUI"
    );


notes.forEach(
    (note) => {

        const element =
            document.createElement(
                "div"
            );

        element.className =
            "note";

        element.textContent =
            note;

        notesUI.appendChild(
            element
        );

    }
);


/* =========================
   CHORD BUILDER
========================= */

const chromaticNotes = [

    "C",
    "C♯",
    "D",
    "D♯",
    "E",
    "F",
    "F♯",
    "G",
    "G♯",
    "A",
    "A♯",
    "B"

];


function buildChord() {

    const root =
        document.getElementById(
            "root"
        ).value;


    const quality =
        document.getElementById(
            "quality"
        ).value;


    const result =
        document.getElementById(
            "chordResult"
        );


    /*
        Find root note
    */

    const rootIndex =
        chromaticNotes.findIndex(
            note =>
                note === root
        );


    /*
        Major chord:
        Root + 4 semitones + 7 semitones

        Minor chord:
        Root + 3 semitones + 7 semitones
    */

    let intervals;


    if (quality === "major") {

        intervals = [
            0,
            4,
            7
        ];

    } else {

        intervals = [
            0,
            3,
            7
        ];

    }


    const chord =
        intervals.map(
            interval => {

                return chromaticNotes[
                    (rootIndex + interval)
                    % 12
                ];

            }
        );


    result.textContent =
        `${root} ${quality} chord: ${chord.join(" — ")}`;

}


/* =========================
   SMOOTH NAVIGATION
========================= */

document
    .querySelectorAll(
        'a[href^="#"]'
    )
    .forEach(
        link => {

            link.addEventListener(
                "click",
                function(event) {

                    const target =
                        document.querySelector(
                            this.getAttribute(
                                "href"
                            )
                        );

                    if (target) {

                        event.preventDefault();

                        target.scrollIntoView({
                            behavior: "smooth"
                        });

                    }

                }
            );

        }
    );
