const dfaDefinition = `
            digraph DFA {
                rankdir=LR;
                size="40"
                node [shape = doublecircle]; q33;
                node [shape = circle];
                Start -> q0
                q0 -> q0 [label = "0[0] / 0[0], R[0]\n [1[0]] / [1[0]], R[0]"];
                q0 -> q1 [label = "X[0] / X[0], R[0]"];
                q1 -> q1 [label = "1[0] / 1[0], R[0]"];
                q1 -> q2 [label = "X[0] / X[0], R[0]"];
                q1 -> q4 [label = "0[0] / 0[0], R[0]"];
                q2 -> q3 [label = "any[4] / X[4], R[4]"];
                q3 -> q33 [label = "any[4] / X[4], R[4]"];
                q4 -> q4 [label = "0[0] / 0[0], R[0]"];
                q4 -> q5 [label = "X[0] / X[0], R[0]"];
                q4 -> q7 [label = "B[0] / B[0], L[0]"];
                q5 -> q2 [label = "B[0] / B[0], L[0]\nX[0] / X[0], R[0]\n1[0] / 1[0], L[0]"];
                q5 -> q6 [label = "0[0] / 0[0], R[0]"];
                q6 -> q2 [label = "X[0] / X[0], R[0]"];
                q6 -> q4 [label = "0[0] / 0[0], R[0]"];
                q7 -> q7 [label = "0[0] / 0[0], L[0]"];
                q7 -> q8 [label = "X[0] / X[0], L[0]"];
                q8 -> q8 [label = "0[0] / 0[0], L[0]"];
                q8 -> q9 [label = "X[0] / X[0], R[0]"];
                q9 -> q10 [label = "0[0] / B[0], R[0]"];
                q9 -> q16 [label = "[X[0], any[1]] / [X[0],0[1]] / [L[0],R[0]]"];
                q10 -> q10 [label = "0[0] / 0[0], R[0]"];
                q10 -> q11 [label = "X[0] / X[0], R[0]"];
                q11 -> q12 [label = "0[0] / 0[0], R[0]"];
                q11 -> q17 [label = "B[0] / B[0], L[0]"];
                q12 -> q12 [label = "0[0] / 0[0], R[0]"];
                q12 -> q13 [label = "B[0] / B[0], L[0]"];
                q13 -> q13 [label = "B[0] / B[0], R[0]"];
                q13 -> q14 [label = "0[0] / B[0], L[0]"];
                q14 -> q14 [label = "0[0] / 0[0], L[0]"];
                q14 -> q15 [label = "X[0] / X[0], L[0]"];
                q15 -> q15 [label = "0[0] / 0[0], L[0]"];
                q15 -> q9 [label = "B[0] / B[0], R[0]"];
                q16 -> q9 [label = "X[0] / X[0], R[0]"];
                q16 -> q16 [label = "B[0] / 0[0], L[0]"];
                q17 -> q18 [label = "X[0] / [X[0], X[1], 0[2]], [L[0], L[1], R[2]]"];
                q18 -> q18 [label = "[0[0], 0[1]] / [0[0], 0[1]], [L[0], L[1]]\n [B[0], 0[1]] / [0[0], 0[1]], [L[0], L[0]]\n [B[0], 0[1]] / [0[0]],  [L[0]]\n 0[1] / 0[1], L[1]"];
                q18 -> q19 [label = "[X[0], B[1]] / [X[0], B[1]], [R[0], R[1]]"];
                q19 -> q19 [label = "[0[0], 0[1]] / [B[0], B[1]], [R[0], R[1]]"];
                q19 -> q20 [label = "[X[0], 0[1]] / [O[1]], R[1]]"];
                q19 -> q21 [label = "[X[0], X[1]] / [X[1]], R[1]]"];
                q19 -> q24 [label = "[0[0], X[1]] / [O[1]], R[1]]"];
                q20 -> q20 [label = "[X[0], 0[1]] / [O[1]], R[1]]"];
                q20 -> q21 [label = "[X[0], X[1]] / [X[1]], R[1]]"];
                q21 -> q21 [label = "[X[0], 0[1]] / [O[1]], R[1]]"];
                q21 -> q22 [label = "[X[0], B[1]] / [O[1]], L[1]]"];
                q22 -> q22 [label = "[X[0], 0[1]] / [O[1]], L[1]]"];
                q22 -> q23 [label = "[X[0], X[1]] / [X[0], X[1]], [L[0], L[1]]"];
                q23 -> q23 [label = "B[0] / 0[0], L[0]\n 0[1] / 0[1], L[1]]"];
                q23 -> q19 [label = "[X[0], B[1]] / [X[0], B[1]], [R[0], R[0]]"];
                q24 -> q25 [label = "0[1] / 0[1], R[1]]"];
                q24 -> q27 [label = "B[2] / [0[0], B[2]], [L[0], L[2]]"];
                q25 -> q25 [label = "0[0] / 0[0], R[0]]"];
                q25 -> q26 [label = "B[1] / [X[1], 0[2]], [L[1], R[2]]"];
                q26 -> q26 [label = "[0[0], 0[1]] / [0[0], 0[0]], [L[0], L[1]]\n B[0] / 0[0], L[0] \n 0[1] / 0[1], L[1]]"];
                q26 -> q19 [label = "[X[0], X[1]] / [X[0], X[1]], [R[0], R[1]]"];
                q27 -> q27 [label = "B[0] / 0[0], L[0]\n 0[2] / 0[2], L[2]]"];
                q27 -> q28 [label = "[X[0], B[2]] / [X[0], B[2]], [L[0], R[2]]"];
                q28 -> q28 [label = "0[0] / 0[0], L[0]\n 1[0] / 1[0], R[0] \n X[0] / X[0], L[0]]"];
                q28 -> q29 [label = "B[0] / B[0], R[0]]"];
                q29 -> q29 [label = "[1[0], 0[2]] / [1[0], 1[3]], [R[0], R[3]]\n [0[0], 0[2]] / [0[2], 0[3]], [R[2], R[3]] \n [0[0], B[2]] / [B[0], B[2]], [S[0], L[2]]\n [B[0], 0[2]] / 0[2], L[2] \n [B[0], B[2]] / [B[0], B[2]], [R[0], R[2]]]"];
                q29 -> q30 [label = "[X[0], 0[2]] / B[3], L[3]]"];
                q30 -> q30 [label = "0[3] / 0[3], L[3]\n 1[0] / 1[0], L[0]\n 1[3] / 1[3], L[3]"];
                q30 -> q31 [label = "[X[0], B[3]] / [X[0], B[3]], [R[0], R[3]]"];
                q31 -> q31 [label = "[1[0], 0[3]] / [1[0], 1[4]], [R[0], R[4]]\n [0[0], 1[3]] / [1[3], 1[4]], [R[3], R[4]]\n [1[0], 1[3]] / [1[0], 1[3]], [R[0], R[3]]\n [0[0], 0[3]] / [B[0], B[3]], [R[0], R[3]]\n\n\n"];
                q31 -> q32 [label = "[X[0], 0[3]] / [X[0], 0[4]], [L[0], R[4]]"];
                q31 -> q33 [label = "[X[0], B[3]] / 0[4], R[4]\n [0[0], B[3]] / [0[0], B[3]], [S[0], S[3]]\n [1[0], B[3]] / [1[0], B[3]], [S[0], S[3]]"];
                q32 -> q32 [label = "[B[0], 0[3]] / 0[0], L[0]"];
                q32 -> q31 [label = "[1[0], 0[3]] / 1[0], R[0]\n [X[0], 0[3]] / X[0], R[0]"];
}
`;
const viz = new Viz();

viz.renderSVGElement(dfaDefinition)
    .then(function (element) {
        document.getElementById('graph').appendChild(element);
    })
    .catch(error => {
        console.error(error);
    });

// provide the data in the vis format
data = vis.parseDOTNetwork(dfaDefinition);

var options = {
    autoResize: true,
    physics: {
        enabled: false,
        solver: 'barnesHut',
        stabilization: {
            enabled: false,
        }
    },
    edges: {
        smooth: {
            roundness: 0,
            type: 'continuous'
        },
        length: 200 // Adjust this value to increase the length of the edges
    },
    interaction: {
        dragNodes: true
    }
};

var container = document.getElementById('diagram');

// initialize your network!
var network = new vis.Network(container, data, options);

function openStatic() {
    document.getElementById('diagram').classList.add('hidden')
    document.getElementById('graph').classList.remove('hidden')
}

function openDynamic() {
    document.getElementById('graph').classList.add('hidden')
    document.getElementById('diagram').classList.remove('hidden')
}