// Game state variables
let scoreTeam1 = 0;
let scoreTeam2 = 0;

// DOM elements mapping
const score1El = document.getElementById('score-team1');
const score2El = document.getElementById('score-team2');
const fullscreenBtn = document.getElementById('fullscreen-btn');


// --- Helper Function ---

function updateDisplay() {
    score1El.textContent = scoreTeam1;
    score2El.textContent = scoreTeam2;
    
    document.title = `PB Score: ${scoreTeam1} - ${scoreTeam2}`;
}

// --- NEW FUNCTION: Fullscreen Toggle ---

function toggleFullScreen() {
    if (!document.fullscreenElement) {
        // Go fullscreen
        document.documentElement.requestFullscreen().catch(err => {
            alert(`Error attempting to enable full-screen mode: ${err.message}`);
        });
    } else {
        // Exit fullscreen
        if (document.exitFullscreen) {
            document.exitFullscreen();
        }
    }
}

// Listen for fullscreen change events to update the button text
document.addEventListener('fullscreenchange', () => {
    if (document.fullscreenElement) {
        fullscreenBtn.textContent = 'ESC';
    } else {
        fullscreenBtn.textContent = 'Full';
    }
});


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
    if (confirm("Reset?")) { 
        scoreTeam1 = 0;
        scoreTeam2 = 0;
        updateDisplay();
    }
}

// Initialize the display when the app loads
updateDisplay();