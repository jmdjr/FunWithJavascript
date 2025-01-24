var Fun = Fun || {}


Fun.RPSLS = {
    init: function () {

        this.Op.correctHandTags();
        this.FormatMatches();
        this.Score.UpdateScoreboard();
        this.Op.spinOpponentHand();
        var $this = this;

        $(".player-hands").on("click", function () {
            if ($this.runningAHand == null) {
                $this.Op.ThrowHand();
                var playerHand = $(this).data("hand");
                $this.PlacePlayerHand(this);
                var opponentHand = $this.Op.OpHand().data("hand");
                var condition = $this.RunHand(playerHand, opponentHand);
                $this.Score.ResolveMatch(condition);
            }
        });
    },

    runningAHand: null,

    PlacePlayerHand: function (context) {
        $(".player-hand").html(context.outerHTML);
    },

    RunHand: function (playerHand, opponentHand) {
        var $this = this;
        this.runningAHand = setTimeout(function () { 
            $this.runningAHand = null; 
            Fun.RPSLS.Op.spinOpponentHand(); Fun.RPSLS.Score.ResetMatchCondition(); 
        }, 3000);

        return this.ThrowHand(playerHand, opponentHand);
    },

    Score: {
        playerWins: 0,
        opponentWins: 0,
        totalGames: 0,

        player: function () { return $(".score-player .score-count"); },
        opponent: function () { return $(".score-opponent .score-count"); },
        total: function () { return $(".total-games .score-count"); },
        condition: function () { return $(".score-outcome"); },

        ResolveConditions: {
            WIN: 'Player wins',
            TIE: "Both tie",
            LOSE: "Opponent Wins",
        },

        UpdateScoreboard: function (condition) {
            this.player().html(this.playerWins);
            this.opponent().html(this.opponentWins);
            this.total().html(this.totalGames);
            this.condition().html(condition);
        },
        ResetMatchCondition: function () {
            this.condition().html("Throw!");
        },
        PlayerWin: function () {
            this.playerWins += 1;
            this.PlayerTie();
        },

        PlayerLose: function () {
            this.opponentWins += 1;
            this.PlayerTie();
        },

        PlayerTie: function () {
            this.totalGames += 1;
        },
        ResolveMatch: function (condition) {
            const resolved = this.ResolveConditions;
            if (condition == resolved.WIN) this.PlayerWin();
            if (condition == resolved.TIE) this.PlayerTie();
            if (condition == resolved.LOSE) this.PlayerLose();
            this.UpdateScoreboard(condition);
        }
    },

    Matches: [
        { name: "rock", value: 1, win: 12, lose: 18 },
        { name: "paper", value: 2, win: 17, lose: 12 },
        { name: "scissors", value: 4, win: 10, lose: 17 },
        { name: "lizard", value: 8, win: 18, lose: 5 },
        { name: "spock", value: 16, win: 5, lose: 10 },
    ],

    FormatMatches: function () {
        for (var i = 0; i < this.Matches.length; i += 1) {
            var obj = this.Matches[i];
            this.Matches[i] = obj.name;
            this.Matches[obj.name] = obj;
        }
    },

    ThrowHand: function (playerHand, opponentHand) {
        // relative to player.
        var player = this.Matches[playerHand];
        var opponent = this.Matches[opponentHand];
        var winCondition = (player.win & opponent.value) == opponent.value;
        var tieCondition = player.value == opponent.value;
        return winCondition ? this.Score.ResolveConditions.WIN 
            : tieCondition ? this.Score.ResolveConditions.TIE 
            : this.Score.ResolveConditions.LOSE;
    },

    Op: {
        OpHand: function () {
            return $(".opponent-hand i");
        },
        OpHandSpace: function () {
            return $(".opponent-hand");
        },
        Hands: [
            "<i class='far fa-hand-rock' data-hand='rock'></i>",
            "<i class='far fa-hand-paper' data-hand='paper'></i>",
            "<i class='far fa-hand-scissors' data-hand='scissors'></i>",
            "<i class='far fa-hand-lizard' data-hand='lizard'></i>",
            "<i class='far fa-hand-spock' data-hand='spock'></i>"
        ],
        idleHands: [
            "<i class='white fa fa-hands'></i>",
            "<i class='white fa fa-praying-hands'></i>"
        ],
        currentHand: -1,
        currentIdle: 0,
        opponentHandsHandle: null,

        correctHandTags: function () {
            var attributeTag = this.OpHandSpace()?.[0].attributes?.[0].name;

            if (!attributeTag) {
                return;
            }

            this.Hands.forEach((value, index, array) => {
                array[index] = $(value).attr(attributeTag, '')[0].outerHTML;
            })

            this.idleHands.forEach((value, index, array) => {
                array[index] = $(value).attr(attributeTag, '')[0].outerHTML;
            })
        },

        randomHand: function () {
            // so as to not get the same number in a row.
            var index = Math.floor(Math.random() * this.Hands.length);

            this.currentHand = index;
            return this.Hands[index];
        },

        playIdle: function () {
            var hands = this.currentIdle % this.idleHands.length;
            this.currentIdle += 1;

            return this.idleHands[hands];
        },

        spinOpponentHand: function () {
            var $this = this;
            if (this.opponentHandsHandle == null) {
                this.opponentHandsHandle = setInterval(function () {
                    $this.OpHandSpace().html($this.playIdle());
                }, 500);
            }
        },

        ThrowHand: function () {
            var $this = this;
            clearInterval(this.opponentHandsHandle);
            this.opponentHandsHandle = null;
            this.OpHandSpace().html($this.randomHand());
        }
    },
}

export default Fun;