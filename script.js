// Game state variables
let scoreTeam1 = 0;
let scoreTeam2 = 0;

// DOM elements mapping
const score1El = document.getElementById('score-team1');
const score2El = document.getElementById('score-team2');

// --- Helper Function ---

function updateDisplay() {
    score1El.textContent = scoreTeam1;
    score2El.textContent = scoreTeam2;
    
    document.title = `PB Score: ${scoreTeam1} - ${scoreTeam2}`;
}

/**
 * Adjusts the score of the specified team by a given value (+1 or -1).
 */
function adjustScore(team, value) {
    if (team === 1) {
        scoreTeam1 += value;
        if (scoreTeam1 < 0) {
            scoreTeam1 = 0;
        }
    } else if (team === 2) {
        scoreTeam2 += value;
        if (scoreTeam2 < 0) {
            scoreTeam2 = 0;
        }
    }
    
    updateDisplay();
}

/**
 * Resets both team scores to zero.
 */
function resetGame() {
    // Uses the simple prompt text
    if (confirm("Reset?")) { 
        scoreTeam1 = 0;
        scoreTeam2 = 0;
        updateDisplay();
    }
}

// Initialize the display when the app loads
updateDisplay();